import { StyleSheet } from "react-native";

export const stylesLogin = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  view: {
    width: 350,
    height: 300,
    backgroundColor: "rgba(217, 212, 199, 0.7)",

    borderRadius: 20,
    gap: 20,

    alignItems: "center",
    justifyContent: "center",
  },

  input: {
    width: 250,
    padding: 10,

    color: "#e5d1a4",
    backgroundColor: "#bfb18f",

    borderBottomWidth: 1,
    borderBlockColor: "#f0d9bd",
  },
  btn: {
    width: 125,
    padding: 20,

    backgroundColor: "transparent",
    color: "#743014",
    alignItems: "center",

    marginTop: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#743014",
  },
  text: {
    color: "#743014",
  },

  titleText: {
    fontSize: 25,
    color: "#743014",
  },
});

export const stylesHome = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  view: {
    width: "85%",
    height: "95%",
    backgroundColor: "rgba(217, 212, 199, 0.8)",

    borderRadius: 20,
    gap: 20,

    alignItems: "center",
  },
  h1: {
    padding: 20,
    fontSize: 40,
    fontWeight: "bold",
  },
  text: {
    margin: 20,
    fontSize: 20,
  },
});
