import { StyleSheet } from "react-native";
import { colors } from '../../styles'

const PostStyle = StyleSheet.create({
  postWrapper: {
    display: 'flex',
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
  headerPostWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    width: 'min-content',
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
  commentIconStyle: {
    width: 30,
    height: 25,
    marginRight: 10
  },
  likeIconStyle: {
    width: 26,
    height: 25,
    marginRight: 10
  },
  indicatorsWrapper: {
    width: 'inherit',
    marginTop: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  descriptionStyle: {
    marginBottom: 10
  },
  postMediaStyle: {
    overflow: 'auto',
    height: 150,
    width: 'inherit'
  },
  mediaImageStyle: {
    resizeMode: 'contain',
    height: '100%'
  },
  commentsWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  likesWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  }
});

export default PostStyle;
