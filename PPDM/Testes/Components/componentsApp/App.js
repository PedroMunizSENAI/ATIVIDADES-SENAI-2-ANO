import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

import { useState } from "react";

import { styles } from "./src/styles/styles";
import { Switch } from "react-native-web";

export default function App() {
  const [favorites, setFavorites] = useState(false);
  const [completed, setCompleted] = useState(false);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Filtros</Text>

      <View style={styles.filter}>
        <Text style={styles.text}>Mostrar Favoritos</Text>
        <Switch
          value={favorites}
          onValueChange={() => setFavorites(!favorites)}
          thumbColor={completed ? "green" : "red"}
          trackColor={{ false: "red", true: "green" }}
        />
      </View>

      <View style={styles.filter}>
        <Text style={styles.text}>Mostrar Tarefas Completadas</Text>
        <Switch
          value={completed}
          onValueChange={() => setCompleted(!completed)}
          thumbColor={completed ? "green" : "red"}
          trackColor={{ false: "red", true: "green" }}
        />
      </View>

      <Text style={{ marginTop: 10 }}>Filtros Ativos</Text>
      {favorites && (
        <Text style={{ fontSize: 20, marginTop: 10, fontWeight: "bold" }}>
          Favoritos!
        </Text>
      )}
      {completed && (
        <Text style={{ fontSize: 20, marginTop: 10, fontWeight: "bold" }}>
          Tarefas Completadas!
        </Text>
      )}
      <StatusBar hidden />
    </View>
  );
}
