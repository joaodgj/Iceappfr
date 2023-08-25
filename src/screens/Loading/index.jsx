import React from 'react'
import { View, Text, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import LoadingStyle from './style'

const Loading = () => {
    const navigation = useNavigation()

    const { loadingWrapper } = LoadingStyle

    return (
        <View style={loadingWrapper}>
            <View>
                <Text>Loading...</Text>
                <Button
                    title='Login'
                    onPress={() => navigation.navigate('Login')}
                />
            </View>
        </View>
    )
}

export default Loading