import React from 'react'
import { View, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Logo from "../../assets/logo.svg"
import LoadingStyle from './style'

const Loading = () => {
    const navigation = useNavigation()

    const { loadingWrapper, logoStyle } = LoadingStyle

    return (
        <View style={loadingWrapper}>
            <View>
                <Logo style={logoStyle} />
                <Button
                    title='Login'
                    onPress={() => navigation.navigate('Login')}
                />
            </View>
        </View>
    )
}

export default Loading