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
    paddingHorizontal: 30
  },
  filtersWrapperStyle: {
    marginTop: 110,
    display: 'flex',
    paddingHorizontal: 30,
    maxWidth: 400
  },
  dropDownContainerStyle: {
    position: 'static'
  },
  groupDropDownLabeStyle: {
    paddingLeft: 5,
    paddingBottom: 5
  }
});

export default FeedStyle;
