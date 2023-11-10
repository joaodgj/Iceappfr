import { StyleSheet } from "react-native";
import { colors } from '../../styles'

const CommentStyle = StyleSheet.create({
  commentWrapper: {
    marginTop: 20,
    paddingVertical: 25,
    width: '100%',
    paddingLeft: 10,
    paddingRight: 10,
    boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)'
  },
  profilePictureStyle: {
    width: 70,
    height: 70,
    borderRadius: 20,
    marginRight: 10
  },
  commentText: {
    backgroundColor: colors.gray02,
    paddingHorizontal: 20,
    paddingVertical: 5,
    placeholderTextColor: colors.gray03,
    minWidth: 250,
    borderRadius: 20,
    marginLeft: 10
  },
  headerCommentWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20
  },
  userDataStyle: {
    display: 'flex',
    flexDirection: 'column',
    paddingTop: 10
  },
  datetimeStyle: {
    marginTop: 5,
    fontSize: 12
  },
  userNameStyle: {
    maxWidth: 220
  },
  descriptionStyle: {
    marginBottom: 10
  }
});

export default CommentStyle;
