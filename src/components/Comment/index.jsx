import { View, Image, Text } from "react-native"
import CommentStyle from "./style"
import { timestampToString } from '../../utils'

const Comment = (props) => {
    const { description, timestamp, usercomment } = props.data
    const {
        commentWrapper,
        profilePictureStyle,
        headerCommentWrapper,
        userDataStyle,
        datetimeStyle,
        descriptionStyle,
        userNameStyle
    } = CommentStyle

    return (
        <View style={commentWrapper}>
            <View style={headerCommentWrapper}>
                <Image style={profilePictureStyle} source={{ uri: usercomment.profileImageUrl }} />
                <View style={userDataStyle}>
                    <Text style={userNameStyle}>{usercomment.name}</Text>
                    <Text style={datetimeStyle}>{timestampToString(timestamp)}</Text>
                </View>
            </View>
            <Text style={descriptionStyle}>{description}</Text>
        </View>
    )
};

export default Comment;
