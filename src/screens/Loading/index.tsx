import React from 'react';
import {View, Text, Button} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Loading = () => {
    const navigation = useNavigation();

    return (
        <View>
            <Text style={{textAlign: "center" }}>Loading...</Text>
            <Button
                title='Login'
                onPress={ () => navigation.navigate('Login') }
            />
        </View>
    )
}

export default Loading;