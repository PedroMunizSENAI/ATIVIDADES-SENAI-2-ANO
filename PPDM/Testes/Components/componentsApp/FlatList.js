import { StatusBar } from "expo-status-bar";
import { Text, View, FlatList } from "react-native";

import { styles } from "./src/styles/styles";

export default function App() {
  const dados = [
    { id: 1, nome: "Matheus", color: "red" },
    { id: 2, nome: "Marcio", color: "green" },
    { id: 3, nome: "Carla", color: "blue" },
    { id: 4, nome: "RIcardo", color: "black" },
  ];
  return (
    <View style={styles.container}>
      <FlatList
        data={dados}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={[styles.box, { backgroundColor: item.color }]}>
            <Text>{item.nome}</Text>
          </View>
        )}
      />
      <StatusBar hidden />
    </View>
  );
}
