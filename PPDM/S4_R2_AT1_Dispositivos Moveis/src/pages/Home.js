import React from "react";
import {
  Text,
  View,
  Button,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Image,
} from "react-native";

// Quando importamos e useNavigation ele nos retorna uma instância de navegação
// Isso nos permite acessar todos os métodos referente a vanegação (navigate, goBack)
import { useNavigation } from "@react-navigation/native";

export default function Home() {
  const navigation = useNavigation();
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/images/windows_page.jpg")}
    >
      <Image
        style={styles.icon}
        source={require("../assets/images/icon.png")}
      ></Image>

      <Text style={styles.welcome}>BEM-VINDO</Text>
      <Text style={styles.subWelcome}> Seja a janela</Text>

      <TouchableOpacity
        style={styles.botao}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.welcome}>Login</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {},
  welcome: {
    fontSize: 35,
    color: "#eed842",
  },
  subWelcome: {
    marginTop: 5,
    marginBottom: 25,
    fontsize: 25,
    color: "#7dc343",
  },

  botao: {
    alignContent: "center",
    alignItems: "center",
    //   width: 300,
    //   height: 70,
    //   backgroundColor: "transparent",
    marginTop: 60,
    //   borderRadius: 15,

    //   borderBottomWidth: 2,
    //   borderTopWidth: 2,
    //   borderLeftWidth: 2,
    //   borderRightWidth: 2,
    //   borderColor: "#F5F2D0",
  },

  imageButton: {
    width: 290,
    height: 120,
  },

  loginView: {
    flexDirection: "row",
  },

  confirm: {
    marginTop: 25,
    color: "#ec722e",
  },

  loginBotao: {
    marginTop: 25,
    color: "#000000",
    marginBottom: 200,

    fontWeight: "bold",
  },
});
