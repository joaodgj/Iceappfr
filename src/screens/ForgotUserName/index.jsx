import { useState } from "react"
import { View, Image, Text } from "react-native"
import { useNavigation } from "@react-navigation/native"
import ForgotUserNameStyle from "./style"
import { Button, TextInput } from "../../components"
import { forgotUserName } from "../../services"
import { useToast } from "react-native-toast-notifications"

const ForgotUserName = () => {
  const [email, onChangeEmail] = useState('')
  const navigation = useNavigation();

  const toast = useToast()

  const { loginWrapper, viewScreen, viewButton, logoStyle, brandName, title, text } = ForgotUserNameStyle

  const handleSendButton = async () => {
    forgotUserName(email).then(response => {
      if (response.status === 200) {
        toast.show("Email com usuários enviado!", {type: "success"});
        navigation.navigate("Login");
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
      <Text style={title}>Esqueceu seu nome de usuário?</Text>
      <Text style={text}>Digite o e-mail cadastrado para receber o(s) nome(s) de usuário(s):</Text>
        <TextInput
          onChangeText={onChangeEmail}
          value={email}
          placeholder="E-mail"
        />
        <View style={viewButton}>
        <Button
          title="Enviar"
          onPress={handleSendButton}
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

export default ForgotUserName;
