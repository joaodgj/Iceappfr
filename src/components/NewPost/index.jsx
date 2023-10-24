import { useContext, useState, useEffect } from "react";
import { View, Image, TextInput } from "react-native"
import { AuthContext } from "../../contexts/auth"
import NewPostStyle from "./style"

import { Button } from "../"

const NewPost = (props) => {
    const { profilePicture } = props
    const { newPostWrapper, profilePictureStyle, newPostTextInput, newPostButton, createNewPostWrapper, buttonsWrapper } = NewPostStyle
    const [newPostFocused, setNewPostFocused] = useState(false)

    return (
        <View style={newPostWrapper}>
            <View style={createNewPostWrapper}>
                <Image style={profilePictureStyle} source={{ uri: profilePicture }} />
                <TextInput
                    style={newPostTextInput}
                    editable
                    placeholder="Quais são as novidades, Nina?"
                    onFocus={() => setNewPostFocused(true)}
                    onBlur={() => setNewPostFocused(false)}
                />
            </View>
            <View style={buttonsWrapper}>
                { newPostFocused ? <Button buttonStyle={newPostButton} title="Send" accessibilityLabel="Create new post" /> : null }
            </View>
        </View>
    )
};

export default NewPost;
