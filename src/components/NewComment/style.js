import { StyleSheet } from "react-native";
import { colors } from '../../styles'

const NewCommentStyle = StyleSheet.create({
  newCommentWrapper: {
    width: '100%',
    marginVertical: 50,
    display: 'flex',
    padding: 25,
    alignItems: 'center',
    boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)'
  },
  profilePictureStyle: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  newCommentTextInput: {
    backgroundColor: colors.gray02,
    paddingHorizontal: 20,
    paddingVertical: 5,
    placeholderTextColor: colors.gray03,
    minWidth: 250,
    width: '100%',
    borderRadius: 20,
    marginLeft: 10
  },
  newCommentButton: {
    backgroundColor: colors.main,
    width: 'min-content',
    marginTop: 10
  },
  createNewCommentWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%'
  },
  buttonsWrapper: {
    justifyContent: 'right',
    display: 'flex',
    alignItems: 'center'
  }
});

export default NewCommentStyle;
