import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, Modal } from "react-native";
import { useState } from "react";
import { Button } from "react-native-web";

export default function App() {
  const [altura, setAltura] = useState("");
  const [peso, setPeso] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  function IMC() {
    const IMC = peso / (altura * altura);
    return IMC;
  }
  function resultado(IMC) {
    if (IMC() <= 18.5) {
      return <Text> BAIXO PESO </Text>;
    } else if (IMC() > 18.6 && IMC() <= 24.9) {
      return <Text> PESO NORMAL </Text>;
    } else if (IMC() > 24.9 && IMC() <= 29.9) {
      return <Text> EXCESSO DE PESO </Text>;
    } else if (IMC() > 30 && IMC() <= 34.9) {
      return <Text> OBESIDADE </Text>;
    } else if (IMC() > 35) {
      return <Text> OBESIDADE EXTREMA </Text>;
    }
  }

  console.log(resultado);
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Digite seu Peso"
        value={peso}
        onChangeText={(value) => setPeso(value)}
        style={{ width: "80%", borderBottomWidth: 1, borderColor: "#000" }}
      />

      <TextInput
        placeholder="Digite seu Altura"
        value={altura}
        onChangeText={(value) => setAltura(value)}
        style={{ width: "80%", borderBottomWidth: 1, borderColor: "#000" }}
      />

      <Button
        title="Calcular IMC"
        onPress={() => setModalVisible(!modalVisible)}
      />

      <Modal transparent={true} visible={modalVisible} animationType="slide">
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <Text style={{ color: "#fff" }}>{IMC()}</Text>
            <Text style={{ color: "#fff" }}>{resultado(IMC)}</Text>
            <Button
              title="Fechar Modal"
              onPress={() => setModalVisible(!modalVisible)}
            />
          </View>
        </View>
      </Modal>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  modalBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },

  modalContainer: {
    width: 300,
    padding: 20,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
});
