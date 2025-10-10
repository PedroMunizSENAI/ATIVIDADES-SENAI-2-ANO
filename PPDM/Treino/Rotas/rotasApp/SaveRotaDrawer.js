import React from "react";

import Home from "./src/pages/Home";
import Sobre from "./src/pages/Sobre";

import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { styles } from "./src/styles/styles";

import FontAwesome from "@expo/vector-icons/FontAwesome";
import Feather from "@expo/vector-icons/Feather";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        screenOptions={{
          drawerStyle: { backgroundColor: "#FFF" },
          drawerActiveBackgroundColor: "#000",
          drawerActiveTintColor: "#FFF",
          drawerInactiveBackgroundColor: "#FFF",
          drawerInactiveTintColor: "#000",
        }}
      >
        <Drawer.Screen
          name="Home"
          component={Home}
          options={{
            drawerIcon: ({ color, size }) => {
              return <FontAwesome name="home" size={size} color={color} />;
            },
          }}
        />
        <Drawer.Screen
          name="Sobre"
          component={Sobre}
          options={{
            drawerIcon: ({ color, size }) => {
              return (
                <Feather name="message-circle" size={size} color={color} />
              );
            },
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
