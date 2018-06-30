import { StyleSheet, Platform } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    color: "white"
  },
  loginbox: {
    flex: 1,
    height: 550,
    margin: 30,
    borderRadius: 7,
    elevation: 2,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,

    elevation: 4,
    backgroundColor: "rgb(255,255,255)"
  },
  loginTitle: {
    ...Platform.select({
      ios: {
        fontFamily: "IRANSansMobile",
        fontWeight: "bold"
      },
      android: {
        fontFamily: "IRANSansMobile_Bold"
      }
    }),
    margin: 2,
    textAlign: "center",
    fontSize: 18,
    paddingTop: 10,
    paddingBottom: 10
  },
  inputGroups: {
    margin: 5,
    marginRight: 20,
    marginLeft: 20
  },
  labelText: {
    textAlign: "right",
    marginBottom: 10,
    color: "#5256c9",
    ...Platform.select({
      ios: {
        fontFamily: "IRANSansMobile",
        fontWeight: "500"
      },
      android: {
        fontFamily: "IRANSansMobile_Medium"
      }
    })
  },
  inputText: {
    fontFamily: "IRANSansMobile",
    textAlign: "right",
    borderColor: "rgba(0,0,0,.1)",
    borderWidth: 1,
    padding: 10,
    borderRadius: 2,
    height: 40,
    fontSize: 12
  },
  loginButton: {
    fontFamily: "IRANSansMobile",
    marginRight: 25,
    marginLeft: 25,
    backgroundColor: "#426bd7",
    textAlign: "center",
    padding: 10,
    borderRadius: 20,
    color: "white",
    marginTop: 15,
    elevation: 2,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    overflow: "hidden"
  },
  forgetPassword: {
    fontFamily: "IRANSansMobile",
    textAlign: "center",
    marginTop: 15
  },
  linearGradient: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row"
  },
  buttonText: {
    fontSize: 18,
    fontFamily: "Gill Sans",
    margin: 10,
    color: "#ffffff",
    backgroundColor: "transparent"
  },
  ButtonH: {
    marginRight: 25,
    marginLeft: 25,
    backgroundColor: "#426bd7",
    padding: 10,
    borderRadius: 20,

    marginTop: 15,
    elevation: 2,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    overflow: "hidden"
  },
  ButtonHtext: {
    fontSize: 14,
    fontFamily: "IRANSansMobile",
    textAlign: 'center'
  },
  countText: {
    color: "#FF00FF"
  },
  countContainer: {
    alignItems: "center",
    padding: 10
  }
});

export default styles;
