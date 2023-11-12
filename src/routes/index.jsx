import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Loading from '../screens/Loading';
import Login from '../screens/Login';
import Feed from '../screens/Feed';
import ForgotPassword from '../screens/ForgotPassword';
import ForgotUserName from '../screens/ForgotUserName';
import PasswordReset from '../screens/PasswordReset';
import UserProfile from '../screens/UserProfile';

const Stack = createNativeStackNavigator();

const Route = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Loading' >

        <Stack.Screen name="Loading" component={Loading} options={{title: 'Loading'}} />

        <Stack.Screen name="Login" component={Login}  options={{title: 'Login'}} />

        <Stack.Screen name="Feed" component={Feed}  options={{title: 'Feed'}} />

        <Stack.Screen name="ForgotUserName" component={ForgotUserName}  options={{title: 'ForgotUserName'}} />

        <Stack.Screen name="ForgotPassword" component={ForgotPassword}  options={{title: 'ForgotPassword'}} />

        <Stack.Screen name="PasswordReset" component={PasswordReset}  options={{title: 'PasswordReset'}} />

        <Stack.Screen name="UserProfile" component={UserProfile} options={{title: 'UserProfile'}} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Route;