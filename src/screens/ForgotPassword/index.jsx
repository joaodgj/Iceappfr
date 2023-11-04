import { useState } from "react";
import { View, Image, Text } from "react-native"
import { useNavigation } from "@react-navigation/native"
import ForgotPasswordStyle from "./style"
import { Button, TextInput } from "../../components"
import { forgotPassword } from "../../services"

const ForgotPassword = () => {
  const [userName, onChangeuserName] = useState('')
  const navigation = useNavigation();

  const { loginWrapper, viewScreen, viewButton, logoStyle, brandName, title, text } = ForgotPasswordStyle

  const handlePW = async () => {
    forgotPassword(userName).then(response => {
      if (response.status === 200) {
        navigation.navigate("PasswordReset");
      }
    });
  };

  const handleBack = async () => {
        navigation.navigate("Login");
  };

  return (
    <View style={viewScreen}>
      <Image style={logoStyle} source={require("../../assets/logo.png")} />
      <Text style={brandName}>ClassOn</Text>
      <View style={loginWrapper}>
      <Text style={title}>Esqueceu sua senha?</Text>
      <Text style={text}>Enviaremos um e-mail com um código para você redefinir a senha:</Text>
        <TextInput
          onChangeText={onChangeuserName}
          value={userName}
          placeholder="Nome de usuário"
        />
        <View style={viewButton}>
        <Button
          title="Enviar"
          onPress={handlePW}
        /> 
        <Button
        title="Voltar"
        onPress={handleBack}
        />
        </View>    
      </View>
    </View>
  );
};

export default ForgotPassword;
