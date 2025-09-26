import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { useState, useEffect } from "react";

import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Deletar() {
  const [loading, setLoading] = useState("");

  const handleDelete = async () => {
    setLoading(true);

    try {
      const token = await AsyncStorage.getItem("@token");

      if (!token) {
        alert("Erro, você não está logado!");
        setLoading(false);
        return;
      }

      const res = await axios.delete("http://localhost:3001/auth/delete", {
        headers: { Authorization: `Bearer ${token}` },
      });

      alert("Sucesso", res.data.message);
    } catch (error) {
      console.log("Erro", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Deletar Meu Perfil</Text>

      <TouchableOpacity style={styles.btn} onPress={handleDelete}>
        <Text>Deletar Usuário</Text>
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
