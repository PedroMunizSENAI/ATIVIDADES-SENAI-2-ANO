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

import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

import { useNavigation } from "@react-navigation/native";

export default function SignIn() {
  const navigation = useNavigation();

  const loggedIn = async () => {
    await setItem("logged", "1");
    navigation.navigate("Gallery");
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
      <View style={stylesSignIn.logoContainer}>
        <FontAwesome5 name="cloudflare" size={180} style={stylesSignIn.logo} />
      </View>

      <View style={stylesSignIn.view}>
        <Text style={stylesSignIn.h1}>Sign In :D </Text>
        <TextInput
          style={stylesSignIn.inputEmail}
          placeholder="Email"
          placeholderTextColor="black"
          onChangeText={(value) => setEmail(value)}
          value={email}
        />
        <TextInput
          style={stylesSignIn.inputPassword}
          placeholder="Password"
          placeholderTextColor="black"
          onChangeText={(value) => setPassword(value)}
          value={password}
        />
        <TouchableOpacity style={stylesSignIn.button} onPress={verifyLogin}>
          <Text style={stylesSignIn.h2}>Login!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
