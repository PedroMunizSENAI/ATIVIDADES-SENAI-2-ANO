import { TouchableOpacity, Text, TextInput } from "react-native";
import { stylesSignUp } from "../styles/styles";

export default function ButtonComp({ text, funcao }) {
  return (
    <TouchableOpacity style={stylesSignUp.button} onPress={funcao}>
      <Text style={stylesSignUp.h2}>{text}</Text>
    </TouchableOpacity>
  );
}

export default function InputComp({ text, funcao }) {
    return (
      <TextInput 
      style={stylesSignUp.inputName}
        placeholder="Name"
          placeholderTextColor="black"
      />
    );
  }
