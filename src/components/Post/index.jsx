import { View, Image, Text } from "react-native"
import PostStyle from "./style"
import { timestampToString } from '../../utils'

import { Button } from "../"

const Post = (props) => {
    const { description, user, createdAt, commentsCount } = props.data
    const {
        postWrapper,
        profilePictureStyle,
        likeButtomStyle,
        headerPostWrapper,
        buttonsWrapper,
        userDataStyle,
        datetimeStyle,
        commentIconStyle,
        commentsWrapper,
        descriptionStyle,
        buttomsIconStyle,
        commentButtomStyle,
        likeButtonTextStyle,
        commentButtonTextStyle
    } = PostStyle

    const likeButtomIcon = <Image style={buttomsIconStyle} source={require("../../assets/icons/like.png")} />

    const commentButtomIcon = <Image style={buttomsIconStyle} source={require("../../assets/icons/whiteComment.png")} />

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
            <View style={commentsWrapper}>
                <Image style={commentIconStyle} source={require("../../assets/icons/comment.png")} />
                <Text>{commentsCount}</Text>
            </View>
            <View style={buttonsWrapper}>
                <Button buttonIcon={likeButtomIcon} buttonStyle={likeButtomStyle} textStyle={likeButtonTextStyle} title="Curtir" accessibilityLabel="Curtir postagem" />
                <Button buttonIcon={commentButtomIcon} buttonStyle={commentButtomStyle} textStyle={commentButtonTextStyle} title="Comentar" accessibilityLabel="Comentar na postagem" />
            </View>
        </View>
    )
};

export default Post;
