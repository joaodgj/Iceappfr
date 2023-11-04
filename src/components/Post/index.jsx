import { useState, useEffect } from 'react'
import { View, Image, Text, Pressable } from "react-native"
import PostStyle from "./style"
import { timestampToString } from '../../utils'
import { getCommentsByPost, likePost, unlikePost } from '../../services'

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
        likesWrapper
    } = PostStyle
    const [postComments, setPostComments] = useState('posts')
    const [showPostComments, setShowPostComments] = useState()
    const [postLiked, setPostLiked] = useState(userHasLiked)
    const [likes, setLikes] = useState(likesCount)

    const commentsHandler = () => {
        setShowPostComments(!showPostComments)

        getCommentsByPost(id).then(response => {
            if (response.status === 200) {
                setPostComments(response.data)
            }
        })
    }

    const likeUnlikePostHandler = () => {
        if (postLiked)
            unlikePost(id).then(response => {
                if (response.status === 200) {
                    setPostLiked(false)
                    setLikes(likesCount - 1)
                }
            })
        else
            likePost(id).then(response => {
                if (response.status === 200) {
                    setPostLiked(true)
                    setLikes(likesCount + 1)
                }
            })
    }    

    return (
        <View style={postWrapper}>
            <View style={headerPostWrapper}>
                <Image style={profilePictureStyle} source={{ uri: user.profileImageUrl }} />
                <View style={userDataStyle}>
                    <Text>{user.name}</Text>
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
            : null }
            <View style={indicatorsWrapper}>
                <Pressable style={commentsWrapper} onPress={commentsHandler} >
                    <Image style={commentIconStyle} source={require("../../assets/icons/comment.png")} />
                    <Text>{commentsCount}</Text>
                </Pressable>
                <Pressable style={likesWrapper} onPress={likeUnlikePostHandler} >
                    { postLiked ? <Image style={likeIconStyle} source={require('../../assets/icons/mainLike.png')} />
                    : <Image style={likeIconStyle} source={require('../../assets/icons/like.png')} /> }
                    <Text style={postLiked ? {color: colors.main} : {}}>{likes}</Text>
                </Pressable>
            </View>
            {showPostComments
                ? <View>
                    <Text>
                        {postComments}
                    </Text>
                </View> 
                : null}
        </View>
    )
};

export default Post;
