import React, { useState } from 'react';
import { Text, View, Button, StyleSheet, ImageBackground, TouchableOpacity, Image, TextInput, } from 'react-native';

// Quando importamos e useNavigation ele nos retorna uma instância de navegação
// Isso nos permite acessar todos os métodos referente a vanegação (navigate, goBack)
import { useNavigation } from '@react-navigation/native';

import { setItem } from '../components/AsyncStorage';

export default function Login() {
  const [visivel, setVisivel] = useState(false);

  const navigation = useNavigation();


  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  function VerificacaoLogin() {
    let EmailConfirm = "pedro@gmail.com";
    let SenhaConfirm = "123"

    if (EmailConfirm == email && SenhaConfirm == senha) {
      navigation.navigate("Logged")
      setItem('onCarousel', '1')
    } else {
      setVisivel(true)
    };
  }


  return (
    <ImageBackground style={styles.background} source={require("../assets/images/Fundo_login.jpg")} >

      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
        <Image style={styles.back} source={require("../assets/images/backButton.webp")} ></Image>
      </TouchableOpacity>


      <View style={styles.iconView}>
        <Image style={styles.icon} source={require("../assets/images/login.jpg")}></Image>
      </View>
      <Text style={styles.text}>Login</Text>
      <TextInput style={styles.textInput} placeholder='Email' value={email} onChangeText={(email) => setEmail(email)}></TextInput>
      <TextInput style={styles.textInput} placeholder='Senha' value={senha} onChangeText={(senha) => setSenha(senha)}></TextInput>

      {visivel && <Text style={{ color: "red" }}>Email ou senha inválidos</Text>}

      <TouchableOpacity style={styles.ButtonCadastro} onPress={VerificacaoLogin} >
        <Image style={styles.iconCadastro} source={require("../assets/images/confirm_button_xp.png")}></Image>
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

  back: {
    width: 50,
    height: 50,

    marginRight: 300,
    marginBottom: 100,
  },

  iconView: {
    width: 200,
    height: 200,

    borderBottomWidth: 2,
    borderTopWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderColor: "#64a2d8",

    borderRadius: 5,
  },

  icon: {
    width: 194,
    height: 194,

    borderRadius: 5,
  },

  text: {
    alignItems: "center",
    justifyContent: "center",

    fontSize: 45,
    color: "#eed842",

    marginTop: 10,
    marginBottom: 30,
  },

  textInput: {
    width: 200,
    backgroundColor: "white",

    borderBottomWidth: 2,
    borderTopWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderColor: "#64a2d8",

    marginBottom: 15
  },

  ButtonCadastro: {
    justifyContent: "center",
    alignItems: "center",

  },

  iconCadastro: {
    width: 270,
    height: 60,
  }
})
