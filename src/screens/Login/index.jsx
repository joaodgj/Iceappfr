import { useContext, useState } from "react";
import { View, Image, Text } from "react-native"
import { useNavigation } from "@react-navigation/native"
import LoginStyle from "./style"
import { Button, TextInput } from "../../components"
import { login } from "../../services";
import { AuthContext } from "../../contexts/auth"

const Login = () => {
  const [username, onChangeUsername] = useState('')
  const [password, onChangePassword] = useState('')
  const navigation = useNavigation();
  const { auth, setAuth} = useContext(AuthContext);

  const { loginWrapper, viewScreen, logoStyle, brandName } = LoginStyle

  const handleLogin = () => {
    console.log('Dados do context: \n', auth);
    login(username, password).then(response => {
      setAuth({response: response, testing: 'this'})
      console.log('Dados de tentativa de login: \n', response);
      if (response.status === '200') {
        navigation.navigate("Feed");
      }
    });
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
