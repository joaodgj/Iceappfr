import { useState, useContext, useEffect } from "react";
import { View, Image, TextInput } from "react-native"
import NewCommentStyle from "./style"

import { Button } from "../"
import { sendNewComment } from "../../services"
import { AuthContext } from "../../contexts/auth";
import { useToast } from "react-native-toast-notifications";


const NewComment = (props) => {
    const { postToSendComment, renewComments } = props
    const { newCommentWrapper, profilePictureStyle, newCommentTextInput, newCommentButton, createNewCommentWrapper, buttonsWrapper } = NewCommentStyle
    const [newCommentDescription, setNewCommentDescription] = useState('');
    const [profilePicture, setProfilePicture] = useState('');
    const [userNickname, setUserNickname] = useState('');
    const [userId, setUserId] = useState('');

    const toast = useToast()
    const { auth } = useContext(AuthContext);

    useEffect(() => {
        setProfilePicture(auth.profile_image_url);
        setUserNickname(auth.nickname);
        setUserId(auth.userId);
    }, [auth]);
    
    const sendCommentHandler = async () => {
        if (newCommentDescription === '') return
        sendNewComment(postToSendComment, newCommentDescription).then(response => {
            if (response.status === 201) {
                setNewCommentDescription('')
                toast.show("Comentário criado!", {type: "success"});
                renewComments()
            }
        })
    };

    return (
        <View style={newCommentWrapper}>
            <View style={createNewCommentWrapper}>
                <Image style={profilePictureStyle} source={{ uri: profilePicture }} />
                <TextInput
                    style={newCommentTextInput}
                    value={newCommentDescription}
                    onChangeText={setNewCommentDescription}
                    editable
                    placeholder={`Você pode adicionar um comentário aqui, ${userNickname}`}
                />
            </View>
            <View style={buttonsWrapper}>
                <Button buttonStyle={newCommentButton} title="Comentar" accessibilityLabel="Criar novo comentário" onPress={sendCommentHandler} />
            </View>
        </View>
    )
};

export default NewComment;
