import { StyleSheet, TouchableOpacity } from "react-native";

export const stylesSignIn = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(217, 212, 199)",
  },
  logoContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1a76c7",
    borderRadius: 15,
  },

  logo: {
    color: "whitesmoke",
  },

  view: {
    flex: 2,
    gap: 30,

    alignItems: "center",
    justifyContent: "center",
  },

  h1: {
    fontSize: 40,
    color: "black",
    fontWeight: "bold",

    position: "absolute",
    top: 30,
  },

  inputEmail: {
    width: 250,
    padding: 10,

    color: "black",
    backgroundColor: "transparent",

    borderBottomWidth: 1,

    position: "absolute",
    top: 120,
  },

  inputPassword: {
    width: 250,
    padding: 10,

    color: "black",
    backgroundColor: "transparent",

    borderBottomWidth: 1,

    position: "absolute",
    top: 220,
  },

  button: {
    position: "absolute",
    top: 300,

    width: 200,
    height: 60,
    backgroundColor: "#1a76c7",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  h2: {
    fontSize: 30,
    fontWeight: "bold",
    color: "whitesmoke",
  },

  signUp: {
    flexDirection: "row",
    position: "absolute",
    top: 500,
  },

  signUpText: {
    fontSize: 20,
    color: "black",
    fontWeight: "500",
  },

  text: {
    fontSize: 20,
    color: "#1a76c7",
    fontWeight: "400",
  },
});
