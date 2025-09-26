import React from "react";
import { TouchableOpacity, Text } from "react-native";

export default function TouchComponent({ onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text>Pressione</Text>
    </TouchableOpacity>
  );
}
