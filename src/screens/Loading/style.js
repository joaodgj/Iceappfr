import { StyleSheet } from "react-native";
import colors from "../../styles/colors";

const LoadingStyle = StyleSheet.create({
  loadingWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.main
  },
  logoStyle: {
    width: 247,
    height: 193
  },
  brandName: {
    textShadowColor: 'rgba(0, 0, 0, 0.25)',
    textShadowOffset: {width: 0, height: 4},
    textShadowRadius: 4,
    color: colors.gray05,
    fontSize: 60,
    textAlign: 'center'
  }
});

export default LoadingStyle;
