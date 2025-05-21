import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

//IMPORTAR O STYLES
import { styles } from "./src/styles/styles";
import { SecondComponent } from "./src/components/SecondComponent";
import ExportedComponents from "./src/components/SecondComponent";
import { Button } from "react-native-web";
import TouchComponent from "./src/components/TouchComponent";

export default function App() {
  const saveBtn = () => {
    alert("Salvar!");
  };

  return (
    <View style={styles.container}>
      <FirstComponent />
      <SecondComponent />
      <ExportedComponents.ComponentTesting />

      <FatherComponent>
        <Text>Componente Filho</Text>
        <Button title="Botão Filho" />
      </FatherComponent>

      <TouchComponent funcClickBtn={saveBtn} text="Salvar!" />
      <StatusBar style="auto" />
    </View>
  );
}

const FirstComponent = () => {
  return (
    <View>
      <Text>Meu primeiro componente</Text>
    </View>
  );
};

function FatherComponent({ children }) {
  return (
    <View>
      <Text>Meu componente filho</Text>
      {children}
    </View>
  );
}
