import React from "react";
import { Text, View, Button, ImageBackground } from "react-native";

import { stylesHome } from "../styles/styles";

import { useNavigation } from "@react-navigation/native";

export default function Home() {
  const navigation = useNavigation();
  return (
    <ImageBackground
      style={stylesHome.container}
      source={require("../assets/images/Wallpaper(2).jpg")}
      resizeMode="cover"
    >
      <View style={stylesHome.view}>
        <Text style={stylesHome.h1}>Welcome!</Text>

        <Text style={stylesHome.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non
          orci lacus. Ut tincidunt neque erat, vitae consequat felis porta vel.
          Nulla gravida non nisi ac porttitor. Curabitur faucibus, lectus vitae
          pellentesque porttitor, elit lorem faucibus turpis, ut pharetra magna
          sapien eget tellus. Nullam ac velit ex. Nam efficitur eu lectus ut
          rutrum. Maecenas condimentum nulla id pretium ultricies. Sed interdum
          diam et sapien cursus tincidunt. Mauris quis dui dui.
        </Text>
      </View>
    </ImageBackground>
  );
}
