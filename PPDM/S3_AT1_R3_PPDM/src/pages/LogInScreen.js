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

import { setItem } from "../components/AsyncStorage";
import { stylesSignIn } from "../styles/styles";

import { useState } from "react";

import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

import { useNavigation } from "@react-navigation/native";

export default function SignIn() {
  const navigation = useNavigation();

  const loggedIn = async () => {
    await setItem("logged", "1");
    navigation.navigate("Home");
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function verifyLogin() {
    email === "pedro@gmail.com" && password === "12345"
      ? loggedIn()
      : console.log("ERRO!");
  }

  return (
    <View style={stylesSignIn.container}>
      <View style={stylesSignIn.view}>
        <View style={stylesSignIn.logo}>
          <MaterialCommunityIcons
            name="movie-open"
            size={120}
            color="red"
            style={{
              alignItems: "center",
            }}
          />
        </View>

        <View style={stylesSignIn.main}>
          <Text style={stylesSignIn.h1}>Filmes e Movies </Text>
          <TextInput
            style={stylesSignIn.inputEmail}
            placeholder="Email"
            placeholderTextColor="white"
            onChangeText={(value) => setEmail(value)}
            value={email}
          />
          <TextInput
            style={stylesSignIn.inputPassword}
            placeholder="Password"
            placeholderTextColor="white"
            onChangeText={(value) => setPassword(value)}
            value={password}
          />
          <TouchableOpacity style={stylesSignIn.button} onPress={verifyLogin}>
            <Text style={stylesSignIn.h2}>Login!</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
