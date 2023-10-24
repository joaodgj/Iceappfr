import React, { useEffect, useState, useContext } from 'react'
import { View, Image } from 'react-native'
import { AuthContext } from "../../contexts/auth"
import { Header, NewPost } from '../../components'
import FeedStyle from './style'

const Feed = () => {
    const { feedWrapper, logoStyle, profilePictureStyle, contentWrapper } = FeedStyle
    const [profilePicture, setProfilePicture] = useState()
    const [userNickname, setUserNickname] = useState()
    const[userDefaultGroup,setUserDefaultGroup] = useState()
    const[userId,setUserId] = useState()

    const { auth } = useContext(AuthContext);

    useEffect(() => {
        console.log(auth)
        setProfilePicture(auth.profile_image_url)
        setUserNickname(auth.nickname)
        setUserDefaultGroup(auth.userGroupsIds[0])
        setUserId(auth.userId)
    }, [])

    return (
        <View style={feedWrapper}>
            <Header>
                <Image style={logoStyle} source={require("../../assets/logo.png")} />
                <Image style={profilePictureStyle} source={{ uri: profilePicture }} />
            </Header>
            <View style={contentWrapper}>
                <NewPost profilePicture={profilePicture} userNickname={userNickname} userDefaultGroup={userDefaultGroup} userId={userId} />
            </View>
        </View>
    )
}

export default Feed