import React from "react";
import { Text, View, Button } from "react-native";

import { styles } from "../styles/styles";

import { useNavigation } from "@react-navigation/native";

export default function Sobre() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text>Página Sobre</Text>

      <Button title="home" onPress={() => navigation.goBack()} />
    </View>
  );
}
