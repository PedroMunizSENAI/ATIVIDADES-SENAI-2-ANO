import React from "react";
import { Text, View, Button } from "react-native";

import { styles } from "../styles/styles";

import { useNavigation } from "@react-navigation/native";

export default function Home() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text>Página Home</Text>

      <Button title="sobre" onPress={() => navigation.navigate("Sobre")} />
    </View>
  );
}
