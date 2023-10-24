import { useState } from "react";
import { View, Image, TextInput, Alert, Platform } from "react-native"
import NewPostStyle from "./style"

import { Button } from "../"
import { sendNewPost } from "../../services";

const NewPost = (props) => {
    const { profilePicture, userNickname } = props
    const { newPostWrapper, profilePictureStyle, newPostTextInput, newPostButton, createNewPostWrapper, buttonsWrapper } = NewPostStyle
    const [newPostFocused, setNewPostFocused] = useState(false)

    const createBasicAlert = (title, message) =>
        Alert.alert(title, message, [{ text: 'OK', onPress: () => console.log('OK Pressed') }]);

    const sendPostHandler = async () => {
        sendNewPost().then(response => {
            if (response.status === 200) {
                if (Platform.OS === 'web') {
                    alert('Sua postagem foi realizada com sucesso!!!')
                } else {
                    createBasicAlert('Postagem Realizada', 'Sua postagem foi realizada com sucesso!!!')
                }
            }
        })
    };

    return (
        <View style={newPostWrapper}>
            <View style={createNewPostWrapper}>
                <Image style={profilePictureStyle} source={{ uri: profilePicture }} />
                <TextInput
                    style={newPostTextInput}
                    editable
                    placeholder={`Quais são as novidades, ${userNickname}?`}
                    onFocus={() => setNewPostFocused(true)}
                    onBlur={() => setNewPostFocused(false)}
                />
            </View>
            <View style={buttonsWrapper}>
                <Button buttonStyle={newPostButton} title="Send" accessibilityLabel="Create new post" onPress={sendPostHandler} />
            </View>
        </View>
    )
};

export default NewPost;
