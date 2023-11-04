import React, { useEffect, useState, useContext, useCallback } from 'react';
import { View, Image, Button, ScrollView } from 'react-native';
import { AuthContext } from "../../contexts/auth";
import { Header, NewPost, Posts } from '../../components';
import { getPostsByGroups } from '../../services';
import FeedStyle from './style';

const Feed = () => {
    const { feedWrapper, logoStyle, profilePictureStyle, contentWrapper } = FeedStyle;
    const [profilePicture, setProfilePicture] = useState();
    const [userNickname, setUserNickname] = useState();
    const [userGroups, setUserGroups] = useState();
    const [currentGroup, setCurrentGroup] = useState();
    const [userId, setUserId] = useState();
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(0);
    const [hasMore, setHasMore] = useState(true);

    const { auth } = useContext(AuthContext);

    useEffect(() => {
        setProfilePicture(auth.profile_image_url);
        setUserNickname(auth.nickname);
        setUserGroups(auth.arrayGroups);
        setCurrentGroup(auth.arrayGroups[0]);
        setUserId(auth.userId);
        renewFeedHandler(auth.arrayGroups[0], 0);
    }, [auth]);

    const renewFeedHandler = useCallback((currentGroup, page) => {
        if (currentGroup && hasMore) {
            getPostsByGroups(currentGroup.groupId, page).then(response => {
                if (response.status === 200) {
                    const newPosts = response.data.posts;
                    if (page === 0) {
                        setPosts(newPosts);
                    } else {
                        setPosts(prevPosts => [...prevPosts, ...newPosts]);
                    }
                    setHasMore(newPosts.length === 10);
                }
            }).catch(err => {
                console.error('Erro ao renovar o feed:', err);
            });
        }
    }, [hasMore]);

    useEffect(() => {
        renewFeedHandler(currentGroup, page);
    }, [page, currentGroup, renewFeedHandler]);

    const handleLoadMore = () => {
        setPage(prevPage => prevPage + 1);
    };

    return (
        <View style={feedWrapper}>
            <Header>
                <Image style={logoStyle} source={require("../../assets/logo.png")} />
                <Image style={profilePictureStyle} source={{ uri: profilePicture }} />
            </Header>
            <ScrollView contentContainerStyle={contentWrapper}>
                <NewPost
                    profilePicture={profilePicture}
                    userNickname={userNickname}
                    userGroupToSendMessage={currentGroup}
                    userId={userId}
                    renewFeed={() => renewFeedHandler(currentGroup, 0)}
                />
                <Posts data={posts} />
                {hasMore && (
                    <Button
                        title="Carregar mais"
                        onPress={handleLoadMore}
                    />
                )}
            </ScrollView>
        </View>
    );
};

export default Feed;
