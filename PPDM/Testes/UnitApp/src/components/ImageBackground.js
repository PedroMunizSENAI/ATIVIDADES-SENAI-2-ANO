import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, ImageBackground } from "react-native";

export default function ImageBackgroundExample() {
  return (
    <ImageBackground
      style={styles.container}
      source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
      accessibilityLabel="Imagem de Fundo React Native"
    >
      <Text style={styles.text}>Texto sobre a imagem!</Text>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  text: {
    color: "#fff",
    fontWeight: "bold",
  },
});
