import { render } from "@testing-library/react-native";

import ImageBackgroundExample from "../components/ImageBackground";

test("Renderiza o texto corretamente", () => {
  const { getByText } = render(<ImageBackgroundExample />);

  expect(getByText("Texto sobre a imagem!")).toBeTruthy();
});
