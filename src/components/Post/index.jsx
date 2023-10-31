import { useState } from 'react'
import { View, Image, Text, Pressable } from "react-native"
import PostStyle from "./style"
import { timestampToString } from '../../utils'
import { getCommentsByPost } from '../../services'

import { colors } from '../../styles'

const Post = (props) => {
    const { id, description, user, createdAt, commentsCount, media, likesCount } = props.data
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
    const [postComments, setPostComments] = useState()
    const [showPostComments, setShowPostComments] = useState()

    const commentsHandler = () => {
        setShowPostComments(!showPostComments)

        getCommentsByPost(id).then(response => {
            if (response.status === 200) {
                setPostComments(response.data)
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
                <Pressable style={likesWrapper}>
                    <Image style={likeIconStyle} source={require(`../../assets/icons/${false ? 'mainLike' : 'like'}.png`)} />
                    <Text style={false ? {color: colors.main} : {}}>{likesCount}</Text>
                </Pressable>
            </View>
            {showPostComments
                ? <View>
                    <Text>
                        {"testando"}
                    </Text>
                </View> 
                : null}
        </View>
    )
};

export default Post;
