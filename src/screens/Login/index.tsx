import React from 'react';
import {View, Text, Button} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LoginStyle from './style';

const Login = () => {
    const navigation = useNavigation();

    return (
        <View>
            <Text style={LoginStyle}>Login:</Text>
            <Button
                title='Load'
                onPress={ () => navigation.navigate('Loading' as never) }
            />
        </View>
    )
}

export default Login;