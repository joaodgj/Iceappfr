import { StyleSheet } from "react-native"

const UserProfileStyle = StyleSheet.create({
  userProfileWrapper: {
    flex: 1,
  },
  logoStyle: {
    width: 59,
    height: 47,
  },
  contentWrapper: {
    paddingHorizontal: 30
  },
  userDataWrapperStyle: {
    margin: 20,
    marginTop: 130,
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: { width: 4, height: 4 },
    shadowRadius: 3,
    borderRadius: 5,
    padding: 20,
    display: 'flex',
    flexDirection: 'row'
  },
  userProfileImageStyle: {
    width: 140,
    height: 140,
    borderRadius: 20
  },
  userTextDataWrapperStyle: {
    marginLeft: 20,
    marginTop: 5,
    width: '52%'
  },
  userNameStyle: {
    fontSize: '2rem',
    marginBottom: 5
  },
  postsTitleStyle: {
    fontSize: 20
  }
});

export default UserProfileStyle;
