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

import { stylesSignUp } from "../styles/styles";

import { useState } from "react";

import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

import { useNavigation } from "@react-navigation/native";
import ButtonComp from "../components/desafio";

export default function SignUp() {
  const navigation = useNavigation();

  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  // function verificarLogin() {
  //   email === "pedro@gmail.com" && password === "12345"
  //     ? navigation.navigate("Home")
  //     : console.log("ERRO!");
  // }

  return (
    <View style={stylesSignUp.container}>
      <View style={stylesSignUp.logoContainer}>
        <FontAwesome5 name="cloudflare" size={180} style={stylesSignUp.logo} />
      </View>

      <View style={stylesSignUp.view}>
        <Text style={stylesSignUp.h1}>Sign Up :D </Text>
        <TextInput
          style={stylesSignUp.inputName}
          placeholder="Name"
          placeholderTextColor="black"
        />
        <TextInput
          style={stylesSignUp.inputEmail}
          placeholder="Email"
          placeholderTextColor="black"
        />
        <TextInput
          style={stylesSignUp.inputPassword}
          placeholder="Password"
          placeholderTextColor="black"
        />
        <TextInput
          style={stylesSignUp.inputConfirmPassword}
          placeholder="Confirm Password"
          placeholderTextColor="black"
        />

        <ButtonComp
          text="Sign In!"
          funcao={() => navigation.navigate("SignIn")}
        />

        <View style={stylesSignUp.signUp}>
          <Text style={stylesSignUp.text}>Already have an account?</Text>
          <TouchableOpacity>
            <Text
              style={stylesSignUp.signUpText}
              onPress={() => navigation.navigate("SignIn")}
            >
              {" "}
              Sign In!
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
