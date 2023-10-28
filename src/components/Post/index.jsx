import { View, Image, Text } from "react-native"
import PostStyle from "./style"
import { timestampToString } from '../../utils'

import { Button } from "../"

const Post = (props) => {
    const { description, user, createdAt } = props.data
    const { postWrapper, profilePictureStyle, postButton, createPostWrapper, buttonsWrapper, userDataStyle } = PostStyle

    return (
        <View style={postWrapper}>
            <View style={createPostWrapper}>
                <Image style={profilePictureStyle} source={{ uri: user.profileImageUrl }} />
                <View style={userDataStyle}>
                    <Text>{user.name}</Text>
                    <Text>{timestampToString(createdAt)}</Text>
                </View>
            </View>
            <Text>{description}</Text>
            <View style={buttonsWrapper}>
                <Button buttonStyle={postButton} title="Send" accessibilityLabel="Create new post" />
            </View>
        </View>
    )
};

export default Post;
