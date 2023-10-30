import { StyleSheet } from "react-native";
import { colors } from '../../styles'

const PostStyle = StyleSheet.create({
  postWrapper: {
    flex: 1,
    paddingVertical: 25,
    alignItems: 'center',
    width: 300
  },
  profilePictureStyle: {
    width: 70,
    height: 70,
    borderRadius: 20,
    marginRight: 10
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
  likeButtomStyle: {
    backgroundColor: colors.true,
    width: 'min-content',
    marginTop: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  commentButtomStyle: {
    backgroundColor: colors.true,
    width: 'min-content',
    marginTop: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  headerPostWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    width: 'min-content',
    marginBottom: 20
  },
  buttonsWrapper: {
    justifyContent: 'right',
    display: 'flex',
    flexDirection: 'row',
    width: 'inherit',
    alignItems: 'center',
    justifyContent: 'space-between'
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
  commentIconStyle: {
    width: 35,
    height: 30,
    marginRight: 10
  },
  commentsWrapper: {
    width: 'inherit',
    marginTop: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  descriptionStyle: {
    marginBottom: 10
  },
  likeButtonTextStyle: {
    fontSize: 14
  },
  commentButtonTextStyle: {
    fontSize: 14
  },
  buttomsIconStyle: {
    marginRight: 10,
    height: 27,
    width: 29
  },
});

export default PostStyle;
