import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  ImageBackground,
  Button,
  TouchableOpacity,
} from "react-native";

export default function App() {
  const changeText = () => {
    console.log("Palmeirassssss");
  };
  return (
    <ImageBackground
      style={styles.container}
      source={require("./src/assets/images/CristianoWallpaper.jpg")}
      resizeMode="cover"
    >
      <TextInput
        style={styles.input}
        placeholder="Digite, Pedro Henrique!"
        secureTextEntry={true}
        placeholderTextColor="#00ff00"
        inputMode={"numeric"}
        autoCapitalize="characters"
        onChangeText={changeText}
      />

      {/* <Button
        title="Click em eu!"
        color="#00ff00"
        onPress={() => alert("Ui")}
      /> */}

      <TouchableOpacity
        style={styles.btn}
        onPress={() => alert("Ai que delicia")}
      >
        <Text>Me aperta!</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",

    // flexDirection: "row",
  },
  text: {
    color: "green",
    fontSize: 30,
    fontWeight: "bold",
  },
  card: {
    width: 150,
    height: 200,
    // backgroundColor: "pink",
  },
  input: {
    borderWidth: 1,
    borderBottomWidth: 1,
    padding: 10,
    width: 250,
  },
  image: {
    width: 300,
    height: 300,
  },
  btn: {
    width: 100,
    padding: 10,
    backgroundColor: "#00ff00",
    color: "#000",
    alignItems: "center",
    marginTop: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "00ff00",
  },
});
