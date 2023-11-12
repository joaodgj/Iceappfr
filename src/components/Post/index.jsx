import { useState } from 'react'
import { View, Image, Text, Pressable, ScrollView } from "react-native"
import { useNavigation } from "@react-navigation/native"
import PostStyle from "./style"
import { timestampToString } from '../../utils'
import { getCommentsByPost, likePost, unlikePost } from '../../services'
import { Comment, Modal, NewComment } from '../'

import { colors } from '../../styles'

const Post = (props) => {
    const { id, description, user, createdAt, commentsCount, media, likesCount, userHasLiked } = props.data
    const {
        postWrapper,
        profilePictureStyle,
        headerPostWrapper,
        userDataStyle,
        datetimeStyle,
        commentIconStyle,
        indicatorsWrapper,
        descriptionStyle,
        likeIconStyle,
        postMediaStyle,
        mediaImageStyle,
        commentsWrapper,
        likesWrapper,
        userNameStyle,
        scrollViewWrapper
    } = PostStyle
    const [postComments, setPostComments] = useState([])
    const [showPostComments, setShowPostComments] = useState(false)
    const [postLiked, setPostLiked] = useState(userHasLiked)
    const [likes, setLikes] = useState(likesCount)

    const navigation = useNavigation();

    const commentsHandler = (update) => {
        if (!showPostComments || update) {
            getCommentsByPost(id).then(response => {
                if (response.status === 200) {
                    setPostComments(response.data)
                }
            })
        }
        setShowPostComments(!showPostComments || !!update)
    }

    const likeUnlikePostHandler = () => {
        if (postLiked)
            unlikePost(id).then(response => {
                if (response.status === 200) {
                    setPostLiked(false)
                    setLikes(likes - 1)
                }
            })
        else
            likePost(id).then(response => {
                if (response.status === 201) {
                    setPostLiked(true)
                    setLikes(likes + 1)
                }
            })
    }

    const enterProfileHandler = (id) => {
        navigation.navigate("UserProfile", {
            userId: id,
          });
    };

    return (
        <View style={postWrapper}>
            <View style={headerPostWrapper}>
                <Pressable onPress={() => enterProfileHandler(user.id)}>
                    <Image style={profilePictureStyle} source={{ uri: user.profileImageUrl }} />
                </Pressable>
                <View style={userDataStyle}>
                    <Text style={userNameStyle}>{user.name}</Text>
                    <Text style={datetimeStyle}>{timestampToString(createdAt)}</Text>
                </View>
            </View>
            <Text style={descriptionStyle}>{description}</Text>
            {media.length > 0 ?
                <View style={postMediaStyle}>
                    {
                        media.map((media, index) => <Image style={mediaImageStyle} key={index} source={{ uri: media.url }} />)
                    }
                </View>
                : null}
            <View style={indicatorsWrapper}>
                <Pressable style={commentsWrapper} onPress={commentsHandler} >
                    <Image style={commentIconStyle} source={require("../../assets/icons/comment.png")} />
                    <Text>{commentsCount}</Text>
                </Pressable>
                <Pressable style={likesWrapper} onPress={likeUnlikePostHandler} >
                    {postLiked ? <Image style={likeIconStyle} source={require('../../assets/icons/mainLike.png')} />
                        : <Image style={likeIconStyle} source={require('../../assets/icons/like.png')} />}
                    <Text style={postLiked ? { color: colors.main } : {}}>{likes}</Text>
                </Pressable>
            </View>
            <Modal closeModal={() => commentsHandler()} visible={showPostComments} title={"Comentários"} >
                <View style={scrollViewWrapper}>
                    <ScrollView>
                        {postComments.length > 0
                            ? postComments.toReversed().map((post, index) =>
                                <Comment data={post} key={index} />)
                            : <Text>{"Essa postagem não tem comentários"}</Text>
                        }
                        <NewComment
                            postToSendComment={id}
                            renewComments={() => commentsHandler(true)}
                        />
                    </ScrollView>
                </View>
            </Modal>
        </View>
    )
};

export default Post;
