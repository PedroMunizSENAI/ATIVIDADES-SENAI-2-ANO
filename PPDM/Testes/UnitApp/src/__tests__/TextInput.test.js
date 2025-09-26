// fireEvent -> Função para simular interações de usuários com os componentes
import { render, fireEvent } from "@testing-library/react-native";

// Importa o componente a ser testado !
import InputComponent from "../components/Input";

test("Atualiza o texto value ao digitar no TextInput", () => {
  const { getByTestId, getByText } = render(<InputComponent />);

  const input = getByTestId("campo-input");

  fireEvent.changeText(input, "Olá Mundo!");

  expect(getByText("Olá Mundo!")).toBeTruthy();
});
