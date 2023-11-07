import { useState } from "react";
import { View, Image, TextInput } from "react-native"
import NewPostStyle from "./style"

import { Button } from "../"
import { sendNewPost } from "../../services"
import { useToast } from "react-native-toast-notifications";


const NewPost = (props) => {
    const { profilePicture, userNickname, userGroupToSendMessage, userId, renewFeed } = props
    const { newPostWrapper, profilePictureStyle, newPostTextInput, newPostButton, createNewPostWrapper, buttonsWrapper } = NewPostStyle
    const [newPostDescription, setNewPostDescription] = useState('');

    const toast = useToast()
    
    const sendPostHandler = async () => {
        if (newPostDescription === '') return
        sendNewPost(userId, userGroupToSendMessage.groupId, newPostDescription).then(response => {
            if (response.status === 201) {
                setNewPostDescription('')
                toast.show("Postagem Publicada!", {type: "success"});
                renewFeed(userGroupToSendMessage, 0)
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
