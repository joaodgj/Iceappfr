import { useState } from "react";
import { View, Image, TextInput, Alert, Platform } from "react-native"
import NewPostStyle from "./style"

import { Button } from "../"
import { sendNewPost } from "../../services";

const NewPost = (props) => {
    const { profilePicture, userNickname, userGroupToSendMessage, userId, renewFeed } = props
    const { newPostWrapper, profilePictureStyle, newPostTextInput, newPostButton, createNewPostWrapper, buttonsWrapper } = NewPostStyle
    const [newPostDescription, setNewPostDescription] = useState('');

    const createBasicAlert = (title, message) =>
        Alert.alert(title, message, [{ text: 'OK', onPress: () => console.log('OK Pressed') }]);

    const sendPostHandler = async () => {
        if (newPostDescription === '') return
        sendNewPost(userId, userGroupToSendMessage.groupId, newPostDescription).then(response => {
            if (response.status === 201) {
                if (Platform.OS === 'web') {
                    alert('Sua postagem foi realizada com sucesso!!!')
                } else {
                    createBasicAlert('Postagem Realizada', 'Sua postagem foi realizada com sucesso!!!')
                }
                setNewPostDescription('')
                renewFeed(userGroupToSendMessage)
            }
        })
    };

    return (
        <View style={newPostWrapper}>
            <View style={createNewPostWrapper}>
                <Image style={profilePictureStyle} source={{ uri: profilePicture }} />
                <TextInput
                    style={newPostTextInput}
                    value={newPostDescription}
                    onChangeText={setNewPostDescription}
                    editable
                    placeholder={`Quais são as novidades, ${userNickname}?`}
                />
            </View>
            <View style={buttonsWrapper}>
                <Button buttonStyle={newPostButton} title="Postar" accessibilityLabel="Create new post" onPress={sendPostHandler} />
            </View>
        </View>
    )
};

export default NewPost;
