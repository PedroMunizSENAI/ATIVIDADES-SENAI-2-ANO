import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";

import { stylesLogin } from "../styles/styles";

import { useState } from "react";

import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome from "@expo/vector-icons/FontAwesome";

import { useNavigation } from "@react-navigation/native";

export default function Login() {
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function verificarLogin() {
    email === "pedro@gmail.com" && password === "12345"
      ? navigation.navigate("Home")
      : console.log("ERRO!");
  }

  return (
    <ImageBackground
      style={stylesLogin.container}
      source={require("../assets/images/Wallpaper(1).jpg")}
      resizeMode="cover"
    >
      <View style={stylesLogin.view}>
        <AntDesign name="user" size={45} color="#743014" />

        {/* <Text style={styles.titleText}>Faça login no nosso site :D</Text> */}
        <TextInput
          style={stylesLogin.input}
          placeholder="Digite seu Email"
          placeholderTextColor="#743014"
          onChangeText={(value) => setEmail(value)}
          value={email}
        />
        <TextInput
          style={stylesLogin.input}
          placeholder="Digite sua Senha"
          placeholderTextColor="#743014"
          onChangeText={(value) => setPassword(value)}
          value={password}
        />
        <TouchableOpacity style={stylesLogin.btn} onPress={verificarLogin}>
          <Text style={stylesLogin.text}>fazer login</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}
