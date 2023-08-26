import { colors } from "../../styles"
import { StyleSheet } from "react-native"

const LoginStyle = StyleSheet.create({
        viewScreen: {
                backgroundColor: colors.main,
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
        },
        loginWrapper: {
                borderRadius: 10,
                padding: 20,
                backgroundColor: colors.gray00,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
        }
      });

export default LoginStyle