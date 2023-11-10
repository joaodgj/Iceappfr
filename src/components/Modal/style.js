import { StyleSheet } from "react-native";
import { colors } from "../../styles";

const ButtonStyle = StyleSheet.create({
  buttonsWrapper: {
    padding: 10,
    display: 'flex',
    justifyContent: 'flex-end',
    flexDirection: 'row',
    width: '100%'
  },
  closeButtonIconStyle: {
    width: 15,
    height: 15
  },
  modalViewStyle: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitleStyle: {
    marginTop: -25,
    fontSize: '1.2rem',
    marginBottom: 10
  }
});

export default ButtonStyle;
