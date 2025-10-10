import React from 'react';
import { Text, View, Button, StyleSheet, ImageBackground, TouchableOpacity, Image } from 'react-native';

// Quando importamos e useNavigation ele nos retorna uma instância de navegação
// Isso nos permite acessar todos os métodos referente a vanegação (navigate, goBack)
import { useNavigation } from '@react-navigation/native';
import { removeItem } from '../components/AsyncStorage';


export default function Logged() {

  const killLogin = async () => {
    await removeItem("onCarousel")
    navigation.navigate("Home")
  }

  const navigation = useNavigation();
  return (


    <ImageBackground style={styles.background} source={require("../assets/images/windows_page.jpg")} >

      <Text style={styles.welcome}>Oi, como está?</Text>
      <Text style={styles.subWelcome}> Aproveite </Text>

      <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate("Carousel")}>
        <Image style={styles.filmes} source={require("../assets/images/image-Photoroom.png")} ></Image>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botao} onPress={killLogin}>
        <Image style={styles.voltar} source={require("../assets/images/exit_windows.jpg")} ></Image>
      </TouchableOpacity>

    </ImageBackground >
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {

  },
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

  voltar: {
    width: 230,
    height: 100,
  },

  filmes: {
    width: 145,
    height: 145,
  }
})

