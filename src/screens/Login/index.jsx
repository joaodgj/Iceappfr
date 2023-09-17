import { useState } from "react";
import { View, Image, Text } from "react-native"
import { useNavigation } from "@react-navigation/native"
import LoginStyle from "./style"
import { Button, TextInput } from "../../components"
import { login } from "../../services";

const Login = () => {
  const [username, onChangeUsername] = useState('')
  const [password, onChangePassword] = useState('')
  const navigation = useNavigation();

  const { loginWrapper, viewScreen, logoStyle, brandName } = LoginStyle

  const handleLogin = async () => {
    try {

      const loginData = await login(username, password);

      console.log('Dados de login:', loginData);

      navigation.navigate("Feed");
    } catch (error) {
      console.error('Erro ao fazer login:', error);

    }
  };

  return (
    <View style={viewScreen}>
      <Image style={logoStyle} source={require("../../assets/logo.png")} />
      <Text style={brandName}>ClassOn</Text>
      <View style={loginWrapper}>
        <TextInput
          onChangeText={onChangeUsername}
          value={username}
          placeholder="Nome de usuário"
        />
        <TextInput
          onChangeText={onChangePassword}
          value={password}
          placeholder="Senha"
          secureTextEntry={true}
        />
        <Button
          title="Entrar"
          onPress={handleLogin}
        />
      </View>
    </View>
  );
};

export default Login;
