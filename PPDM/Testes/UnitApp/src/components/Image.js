import { Image } from "react-native";

export default function ImageComponent() {
  return (
    <Image
      source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
      accessibilityLabel="React Native Logo"
      style={{ width: 50, heigth: 50 }}
      testID="image-logo"
    />
  );
}
