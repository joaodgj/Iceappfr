import { StyleSheet } from "react-native";
import { colors } from '../../styles'

const NewPostStyle = StyleSheet.create({
  newPostWrapper: {
    flex: 1,
    paddingVertical: 25,
    alignItems: 'center'
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
