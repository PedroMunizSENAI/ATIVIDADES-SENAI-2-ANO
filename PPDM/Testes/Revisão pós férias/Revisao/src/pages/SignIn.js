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

import { stylesSignIn } from "../styles/styles";

import { useState } from "react";

import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

import { useNavigation } from "@react-navigation/native";

export default function SignIn() {
  const navigation = useNavigation();

  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  // function verificarLogin() {
  //   email === "pedro@gmail.com" && password === "12345"
  //     ? navigation.navigate("Home")
  //     : console.log("ERRO!");
  // }

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
        />
        <TextInput
          style={stylesSignIn.inputPassword}
          placeholder="Password"
          placeholderTextColor="black"
        />
        <TouchableOpacity
          style={stylesSignIn.button}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={stylesSignIn.h2}>Login!</Text>
        </TouchableOpacity>
        <View style={stylesSignIn.signUp}>
          <Text style={stylesSignIn.text}>Don't have an account?</Text>
          <TouchableOpacity>
            <Text
              style={stylesSignIn.signUpText}
              onPress={() => navigation.navigate("SignUp")}
            >
              {" "}
              Sign Up!
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
