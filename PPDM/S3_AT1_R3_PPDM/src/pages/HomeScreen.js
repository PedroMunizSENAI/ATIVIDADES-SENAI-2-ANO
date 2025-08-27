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

import { removeItem } from "../components/AsyncStorage";

import { setItem } from "../components/AsyncStorage";

import { stylesHome } from "../styles/styles";

import { useState } from "react";

import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

import { useNavigation } from "@react-navigation/native";

export default function SignIn() {
  const navigation = useNavigation();

  const logout = async () => {
    try {
      await removeItem("logged");
      navigation.navigate("LogIn");
    } catch (error) {
      console.log(error);
    }
  };

  function moviePage() {
    navigation.navigate("Gallery");
  }

  return (
    <View style={stylesHome.container}>
      <View style={stylesHome.view}>
        <View style={stylesHome.logo}>
          <MaterialCommunityIcons
            name="movie-open"
            size={120}
            color="red"
            style={{
              alignItems: "center",
            }}
          />
        </View>

        <View style={stylesHome.main}>
          <Text style={stylesHome.h1}>Filmes e Movies </Text>

          <TouchableOpacity style={stylesHome.movieButton} onPress={moviePage}>
            <Text style={stylesHome.h2}>Página de Filmes</Text>
          </TouchableOpacity>

          <TouchableOpacity style={stylesHome.exitButton} onPress={logout}>
            <Text style={stylesHome.h2}>Sair!</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
