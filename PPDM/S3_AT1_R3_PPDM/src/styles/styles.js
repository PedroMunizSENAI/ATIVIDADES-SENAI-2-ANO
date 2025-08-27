import { StyleSheet, TouchableOpacity } from "react-native";

export const stylesSignIn = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(3, 32, 9)",
  },

  view: {
    flex: 1,
    gap: 30,

    alignItems: "center",
  },

  logo: {
    position: "absolute",
    top: 70,
  },

  main: {
    position: "absolute",
    top: 200,
    alignItems: "center",
  },

  h1: {
    fontSize: 40,
    color: "white",
    fontWeight: "bold",

    position: "absolute",
    top: 30,
  },

  inputEmail: {
    width: 250,
    padding: 10,

    color: "white",
    backgroundColor: "transparent",

    borderBottomWidth: 1,
    borderColor: "white",

    position: "absolute",
    top: 120,
  },

  inputPassword: {
    width: 250,
    padding: 10,

    color: "white",
    backgroundColor: "transparent",

    borderBottomWidth: 1,
    borderColor: "white",

    position: "absolute",
    top: 220,
  },

  button: {
    position: "absolute",
    top: 400,

    width: 200,
    height: 60,
    backgroundColor: "red",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  h2: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
  },
});

export const stylesHome = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(3, 32, 9)",
  },

  view: {
    flex: 1,
    gap: 30,

    alignItems: "center",
  },

  logo: {
    position: "absolute",
    top: 70,
  },

  main: {
    position: "absolute",
    top: 200,
    alignItems: "center",
  },

  h1: {
    fontSize: 40,
    color: "white",
    fontWeight: "bold",

    position: "absolute",
    top: 30,
  },

  inputEmail: {
    width: 250,
    padding: 10,

    color: "white",
    backgroundColor: "transparent",

    borderBottomWidth: 1,
    borderColor: "white",

    position: "absolute",
    top: 120,
  },

  inputPassword: {
    width: 250,
    padding: 10,

    color: "white",
    backgroundColor: "transparent",

    borderBottomWidth: 1,
    borderColor: "white",

    position: "absolute",
    top: 220,
  },

  exitButton: {
    position: "absolute",
    top: 400,

    width: 200,
    height: 60,
    backgroundColor: "red",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  movieButton: {
    position: "absolute",
    top: 200,

    width: 250,
    height: 60,
    backgroundColor: "red",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  h2: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
  },
});
