import { Text, TouchableOpacity } from "react-native";

export default function TouchComponent({ funcClickBtn, text }) {
  return (
    <TouchableOpacity onPress={funcClickBtn}>
      <Text>{text}</Text>
    </TouchableOpacity>
  );
}
