import { StyleSheet } from "react-native";
import { colors } from '../../styles'

const PostStyle = StyleSheet.create({
  postWrapper: {
    flex: 1,
    paddingVertical: 25,
    alignItems: 'center'
  },
  profilePictureStyle: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  postText: {
    backgroundColor: colors.gray02,
    paddingHorizontal: 20,
    paddingVertical: 5,
    placeholderTextColor: colors.gray03,
    minWidth: 250,
    borderRadius: 20,
    marginLeft: 10
  },
  postButton: {
    backgroundColor: colors.main,
    width: 'min-content',
    marginTop: 10
  },
  createPostWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    width: 'min-content'
  },
  buttonsWrapper: {
    justifyContent: 'right',
    display: 'flex',
    alignItems: 'center'
  },
  userDataStyle: {
    display: 'flex',
    flexDirection: 'column'
  }
});

export default PostStyle;
