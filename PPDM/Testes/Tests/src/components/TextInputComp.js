import { TextInput, StyleSheet } from "react-native";

export default function TextInputComp({ textPlaceholder, password }) {
  return (
    <TextInput
      style={styles.textInput}
      placeholder={textPlaceholder}
      secureTextEntry={password}
    />
  )
}

const styles = StyleSheet.create({
  textInput: {
    width: 200,
    backgroundColor: "white",

    borderBottomWidth: 2,
    borderTopWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderColor: "#64a2d8",

    marginBottom: 15
  },
})
