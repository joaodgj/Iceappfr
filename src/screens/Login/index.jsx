import { useContext, useState } from "react";
import { View, Image, Text } from "react-native"
import { useNavigation } from "@react-navigation/native"
import LoginStyle from "./style"
import { Button, TextInput } from "../../components"
import { apiLogin } from "../../services";
import { AuthContext } from "../../contexts/auth"
import apiClient from "../../services/api";
import jwt_decode from "jwt-decode";
import { useToast } from "react-native-toast-notifications";

const Login = () => {
  const [username, onChangeUsername] = useState('')
  const [password, onChangePassword] = useState('')
  const navigation = useNavigation();
  const { setAuth } = useContext(AuthContext);

  const {
    loginWrapper,
    viewScreen,
    logoStyle,
    brandName,
    loginButtonStyle,
    forgotPassword,
    forgotUserName
  } = LoginStyle

  const toast = useToast()

  const handleLogin = async () => {
    apiLogin(username, password).then(response => {
      if (response && response.status === 200) {
        setAuth({ token: response.data.token, ...jwt_decode(response.data.token) })
        apiClient.defaults.headers.Authorization = `Baerer ${response.data.token}`;
        navigation.navigate("Feed");
      } else toast.show("Não foi possível realizar o login", {type: "danger"});
    });
  };

  const forgotPW = async () => {
    navigation.navigate("ForgotPassword");
  };

  const forgotUN = async () => {
    navigation.navigate("ForgotUserName");
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
          buttonStyle={loginButtonStyle}
        />
        <Text style={forgotUserName} onPress={forgotUN}>Esqueci o nome de usuário</Text>
        <Text style={forgotPassword} onPress={forgotPW}>Esqueci a senha</Text>
      </View>
    </View>
  );
};

export default Login;
