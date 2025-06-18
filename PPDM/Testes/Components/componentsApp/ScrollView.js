import { StatusBar } from "expo-status-bar";
import { Text, View, ScrollView } from "react-native";

import { styles } from "./src/styles/styles";

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={true}>
        <View style={[styles.box, { backgroundColor: "red" }]}>
          <Text>Primeira Caixa</Text>
        </View>
        <View style={[styles.box, { backgroundColor: "blue" }]}>
          <Text>Segunda Caixa</Text>
        </View>
        <View style={[styles.box, { backgroundColor: "green" }]}>
          <Text>Terceira Caixa</Text>
        </View>
        <View style={[styles.box, { backgroundColor: "black" }]}>
          <Text>Quarta Caixa</Text>
        </View>
        <View style={[styles.box, { backgroundColor: "gold" }]}>
          <Text>Quinta Caixa</Text>
        </View>
      </ScrollView>
      <StatusBar hidden />
    </View>
  );
}
