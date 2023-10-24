import { useContext, useState, useEffect } from "react";
import { View, Image, TextInput } from "react-native"
import { AuthContext } from "../../contexts/auth"
import NewPostStyle from "./style"

import { Button } from "../"

const NewPost = () => {
    const { newPostWrapper, profilePictureStyle, newPostTextInput, newPostButton, createNewPostWrapper, buttonsWrapper } = NewPostStyle
    const [profilePicture, setProfilePicture] = useState()
    const [newPostFocused, setNewPostFocused] = useState(false)

    const { auth } = useContext(AuthContext);

    useEffect(() => {
        setProfilePicture(auth.profilePicture)
    }, [])

    return (
        <View style={newPostWrapper}>
            <View style={createNewPostWrapper}>
                <Image style={profilePictureStyle} source={{ uri: `data:image/jpg;base64,${profilePicture}` }} />
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
