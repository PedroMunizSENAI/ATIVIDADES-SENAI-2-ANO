// Importa a função para fazermos a simulação do nosso componente em ambiente de teste
import { render } from "@testing-library/react-native";

// Importa o componente a ser testado !
import TextComponent from "../components/Text";

//test() -> define um teste unitário
// "descrição" -> um texto que explica oque vamos testar
test("Renderiza o texto corretamente", () => {
  // render -> Renderize o componente em memória (ambiente de teste), não no app real
  // e retorna métodos para buscar elementos
  const { getByText } = render(<TextComponent />);

  expect(getByText("Meu primeiro teste!")).toBeTruthy();
});
