import { render, fireEvent } from "@testing-library/react-native";

import { TouchableOpacity } from "react-native";
import TouchComponent from "../components/Touch";

test("Chamar a função ao pressionar o Touchable Opacity", () => {
  const mockFn = jest.fn();

  const { getByText } = render(<TouchComponent onPress={mockFn} />);

  fireEvent.press(getByText("Pressione"));

  // toHaveBeenCalled() -> Verifica se uma função foi executada
  expect(mockFn).toHaveBeenCalled();
});
