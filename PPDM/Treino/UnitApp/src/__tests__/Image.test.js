import { render } from "@testing-library/react-native";
import ImageComponent from "../components/Image";

test("Verificar componente Image e suas Propriedades", () => {
  const { getByTestId } = render(<ImageComponent />);
  const image = getByTestId("image-logo");

  expect(image.props.source.uri).toBe(
    "https://reactnative.dev/img/tiny_logo.png"
  );
  expect(image.props.accessibilityLabel).toBe("React Native Logo");
});
