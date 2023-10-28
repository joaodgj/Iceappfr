import React, { useEffect, useState, useContext } from 'react'
import { View, Image } from 'react-native'
import { AuthContext } from "../../contexts/auth"
import { Header, NewPost, Posts } from '../../components'
import { getPostsByGroups } from '../../services'
import FeedStyle from './style'

const Feed = () => {
    const { feedWrapper, logoStyle, profilePictureStyle, contentWrapper } = FeedStyle
    const [profilePicture, setProfilePicture] = useState()
    const [userNickname, setUserNickname] = useState()
    const [userGroups,setUserGroups] = useState()
    const [currentGroup,setCurrentGroup] = useState()
    const [userId,setUserId] = useState()
    const [posts, setPosts] = useState()

    const { auth } = useContext(AuthContext);

    useEffect(() => {
        console.log(auth)
        setProfilePicture(auth.profile_image_url)
        setUserNickname(auth.nickname)
        setUserGroups(auth.arrayGroups)
        setCurrentGroup(auth.arrayGroups[0])
        setUserId(auth.userId)
    }, [])

    useEffect(() => {
        if (currentGroup)
            getPostsByGroups(currentGroup.groupId).then(response => {
                if (response.status === 200) {
                    setPosts(response.data)
                }
            })
    }, [currentGroup])
    

    return (
        <View style={feedWrapper}>
            <Header>
                <Image style={logoStyle} source={require("../../assets/logo.png")} />
                <Image style={profilePictureStyle} source={{ uri: profilePicture }} />
            </Header>
            <View style={contentWrapper}>
                <NewPost profilePicture={profilePicture} userNickname={userNickname} userGroupToSendMessage={currentGroup} userId={userId} />
                <Posts data={posts} />
            </View>
        </View>
    )
}

export default Feed