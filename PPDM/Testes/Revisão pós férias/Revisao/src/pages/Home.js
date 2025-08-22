import React from "react";
import {
  Text,
  View,
  Button,
  ImageBackground,
  TouchableOpacity,
} from "react-native";

import { stylesHome } from "../styles/styles";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

import { useNavigation } from "@react-navigation/native";

export default function Home() {
  const navigation = useNavigation();
  return (
    <View style={stylesHome.container}>
      <View style={stylesHome.logoContainer}>
        <FontAwesome5 name="cloudflare" size={250} style={stylesHome.logo} />
      </View>

      <View style={stylesHome.view}>
        <Text style={stylesHome.h1}>Welcome!</Text>
        <TouchableOpacity
          style={stylesHome.button}
          onPress={() => navigation.navigate("SignIn")}
        >
          <Text style={stylesHome.h2}>Login With Email!</Text>
        </TouchableOpacity>
        <View style={stylesHome.signUp}>
          <Text style={stylesHome.text}>Don't have an account?</Text>
          <TouchableOpacity>
            <Text
              style={stylesHome.signUpText}
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
