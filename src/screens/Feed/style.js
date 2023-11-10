import { StyleSheet } from "react-native"

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
    paddingHorizontal: 30
  },
  filtersWrapperStyle: {
    marginTop: 110,
    display: 'flex'
  },
  dropDownContainerStyle: {
    position: 'static'
  }
});

export default FeedStyle;
