import { useContext, useState, useEffect } from "react";
import { View, Image } from "react-native"
import { AuthContext } from "../../contexts/auth"
import NewPostStyle from "./style"

const NewPost = () => {
    const { newPostWrapper, profilePictureStyle } = NewPostStyle
    const [profilePicture, setProfilePicture] = useState()

    const { auth } = useContext(AuthContext);

    useEffect(() => {
        setProfilePicture(auth.profilePicture)
    }, [])

    return (
        <View style={newPostWrapper}>
            <Image style={profilePictureStyle} source={{ uri: `data:image/jpg;base64,${profilePicture}` }} />
            Quais são as novidades, Nina?
        </View>
    )
};

export default NewPost;
