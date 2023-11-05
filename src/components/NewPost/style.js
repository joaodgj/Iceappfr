import { StyleSheet } from "react-native";
import { colors } from '../../styles'

const NewPostStyle = StyleSheet.create({
  newPostWrapper: {
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
  newPostTextInput: {
    backgroundColor: colors.gray02,
    paddingHorizontal: 20,
    paddingVertical: 5,
    placeholderTextColor: colors.gray03,
    minWidth: 250,
    borderRadius: 20,
    marginLeft: 10
  },
  newPostButton: {
    backgroundColor: colors.main,
    width: 'min-content',
    marginTop: 10
  },
  createNewPostWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    width: 'min-content'
  },
  buttonsWrapper: {
    justifyContent: 'right',
    display: 'flex',
    alignItems: 'center'
  }
});

export default NewPostStyle;
