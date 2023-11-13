import React, { useEffect, useState, useContext, useCallback } from 'react';
import { View, Image, Pressable, Text, FlatList } from 'react-native';
import { AuthContext } from "../../contexts/auth";
import { Post, Header } from '../../components';
import { getMyPosts, getPostsByUser } from '../../services';
import UserProfileStyle from './style';

const UserProfile = ({route, navigation}) => {
    const { userProfileWrapper, logoStyle, contentWrapper, userDataWrapperStyle, userProfileImageStyle, userTextDataWrapperStyle, userNameStyle, postsTitleStyle } = UserProfileStyle;
    const [posts, setPosts] = useState();
    const [page, setPage] = useState(0);
    const [hasMore, setHasMore] = useState(true);
    const [userData, setUserData] = useState();

    const { userId } = route.params;

    const { auth } = useContext(AuthContext);

    useEffect(() => {
        if (auth.userId === userId) setUserData(auth)
    }, [auth, route]);

    const renewUserProfileHandler = useCallback((page) => {
        if (hasMore || page === 0) {
            if (auth.userId !== userId)
                getPostsByUser(userId, page).then(response => {
                    if (response.status === 200) {
                        const newPosts = response.data.posts;
                        const { name, profile_image_url, UserType  } = response.data.friendInfo
                        setUserData({
                            userName: name,
                            profile_image_url,
                            userTypeDescription: UserType.description
                        })
                        if (page === 0) {
                            setPosts(newPosts);
                        } else {
                            setPosts(prevPosts => [...prevPosts, ...newPosts]);
                        }
                        setHasMore(newPosts.length === 10);
                    }
                })
            else
                getMyPosts(page).then(response => {
                    if (response.status === 200) {
                        const newPosts = response.data.posts;
                        if (page === 0) {
                            setPosts(newPosts);
                        } else {
                            setPosts(prevPosts => [...prevPosts, ...newPosts]);
                        }
                        setHasMore(newPosts.length === 10);
                    }
                })
        }
    }, [hasMore, page]);

    useEffect(() => {
        renewUserProfileHandler(page);
    }, [page, renewUserProfileHandler]);

    const handleLoadMore = () => {
        if (hasMore) setPage(prevPage => prevPage + 1);
    };

    return (
        <View style={userProfileWrapper}>
            <Header>
                <Pressable onPress={() => navigation.goBack()}>
                    <Image style={logoStyle} source={require("../../assets/icons/black_arrow.png")} />
                </Pressable>
                <Image style={logoStyle} source={require("../../assets/logo.png")} />
            </Header>
            { userData
            ? <View style={userDataWrapperStyle}>
                <Image style={userProfileImageStyle} source={{ uri: userData.profile_image_url }} />
                <View style={userTextDataWrapperStyle}>
                    <Text style={userNameStyle}>{userData.userName}</Text>
                    <Text>{userData.userTypeDescription}</Text>
                </View>
            </View>
            : <Text>
                {"Usuário não encontrado"}
            </Text>}
            { posts
                ? <FlatList
                    ListHeaderComponent={<Text style={postsTitleStyle}>{"Publicações"}</Text>}
                    contentContainerStyle={contentWrapper}
                    onEndReached={handleLoadMore}
                    onEndReachedThreshold={0.3}
                    data={posts}
                    renderItem={(post) => <Post data={post.item} />}
                />
                : null }
        </View>
    );
};

export default UserProfile;
