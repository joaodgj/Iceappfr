import { StyleSheet } from "react-native"
import { colors } from '../../styles'

const FeedStyle = StyleSheet.create({
  feedWrapper: {
    flex: 1,
  },
  logoStyle: {
    width: 59,
    height: 47,
  },
  profilePictureStyle: {
    width: 50,
    height: 50,
    borderRadius: 10,
  },
  contentWrapper: {
    marginTop: 100,
    display: 'flex',
    flexDirection: 'row',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: colors.gray005
  }
});

export default FeedStyle;
