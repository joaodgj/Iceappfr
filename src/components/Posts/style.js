import { StyleSheet } from "react-native";
import { colors } from '../../styles'

const PostsStyle = StyleSheet.create({
  postsWrapper: {
    flex: 1,
    alignItems: 'center'
  },
  postsButton: {
    backgroundColor: colors.main,
    width: 'min-content',
    marginTop: 10
  },
  createPostsWrapper: {
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

export default PostsStyle;
