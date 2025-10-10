import { Text } from "react-native";

export const SecondComponent = () => {
  return <Text>Meu segundo componente</Text>;
};

const ComponentTesting = () => {
  return <Text>Componente Exportado</Text>;
};

export default {
  ComponentTesting,
};
