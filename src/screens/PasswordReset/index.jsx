import { useContext, useState } from "react";
import { View, Image, Text } from "react-native"
import { useNavigation } from "@react-navigation/native"
import PasswordResetStyle from "./style"
import { Button, TextInput } from "../../components"
import { getProfilePicture, passwordReset } from "../../services";
import { AuthContext } from "../../contexts/auth"
import apiClient from "../../services/api";
import jwt_decode from "jwt-decode";

const PasswordReset = () => {
  const [token, onChangetoken] = useState('')
  const [newPW, onChangenewPW] = useState('')
  const [newPWConfirmed, onChangenewPWConfirmed] = useState('')
  const navigation = useNavigation();
  const { setAuth } = useContext(AuthContext);

  const { loginWrapper, viewScreen, logoStyle, brandName, title, text } = PasswordResetStyle

  const handlePW = async () => {
    passwordReset(userName).then(response => {
      setAuth({ token: response.data.token, ...jwt_decode(response.data.token), profilePicture: getProfilePicture() })
      if (response.status === 200) {
        apiClient.defaults.headers.Authorization = `Baerer ${response.data.token}`;
        navigation.navigate("Login");
      }
    });
  };

  return (
    <View style={viewScreen}>
      <Image style={logoStyle} source={require("../../assets/logo.png")} />
      <Text style={brandName}>ClassOn</Text>
      <View style={loginWrapper}>
      <Text style={title}>Redefinição de senha</Text>
      <Text style={text}>Um token foi enviado para o e-mail cadastrado. Forneça-o abaixo para redefinir sua senha:</Text>
        <TextInput
          onChangeText={onChangetoken}
          value={token}
          placeholder="Token fornecido"
        />
        <TextInput
          onChangeText={onChangenewPW}
          value={newPW}
          placeholder="Nova senha"
        />
        <TextInput
          onChangeText={onChangenewPWConfirmed}
          value={newPWConfirmed}
          placeholder="Confirme a nova senha"
        />
        <Button
        title="Redefinir"
        onPress={handlePW}
        />  
      </View>
    </View>
  );
};

export default PasswordReset;
