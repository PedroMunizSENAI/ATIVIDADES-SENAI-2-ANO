import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { useState } from "react";

import axios from "axios";

export default function Cadastro() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [loading, setLoading] = useState("");

  const handleRegister = async () => {
    if (!nome || !email || !senha) {
      alert("Preencha todos os campos!");
      return;
    }

    setLoading(true);

    try {
      const res = await axios.post("http://localhost:3001/auth/register", {
        nome,
        email,
        senha,
      });

      alert("Sucesso!", res.data.message);
      setNome("");
      setEmail("");
      setSenha("");
    } catch (error) {
      console.log("Erro", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro do usuário</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
      />

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
      />

      <TouchableOpacity
        onPress={handleRegister}
        style={styles.btn}
        disabled={loading}
      >
        <Text>{loading ? "Cadastrando..." : "Cadastrar"}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
    justifyContent: "center",
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 30,
    textAlign: "center",
  },

  input: {
    height: 50,
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    borderRadius: 8,
    backgroundColor: "#fff",
  },

  btn: {
    width: "100%",
    padding: 10,
    backgroundColor: "#00ff00",
    alignItems: "center",
  },
});
