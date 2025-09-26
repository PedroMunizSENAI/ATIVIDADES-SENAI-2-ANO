import { useState } from "react";
import { View, TextInput, Text } from "react-native";

export default function InputComponent() {
  const [value, setValue] = useState("");

  return (
    <View>
      <TextInput
        placeholder="Digite algo"
        value={value}
        onChangeText={setValue}
        testID="campo-input"
      />
      <Text>{value}</Text>
    </View>
  );
}
