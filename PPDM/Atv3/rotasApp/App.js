import React from "react";

import Home from "./src/pages/Home";
import Sobre from "./src/pages/Sobre";

import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { styles } from "./src/styles/styles";

import FontAwesome from "@expo/vector-icons/FontAwesome";
import Feather from "@expo/vector-icons/Feather";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          tabBarActiveBackgroundColor: "purple",
          tabBarActiveTintColor: "black",
          tabBarStyle: {
            backgroundColor: "#FFF",
            height: "50",
            position: "absolute",
            bottom: 50,
            borderTopEndRadius: 15,
            borderTopColor: "transparent",
            padding: 10,
            shadowColor: "purple",
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.3,
            shadowRadius: 4.65,
            elevation: 8,
            width: "80%",
            left: "10%",
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ color, size }) => {
              return <FontAwesome name="home" size={size} color={color} />;
            },
            headerShown: false,
            title: "",
          }}
        />
        <Tab.Screen
          name="Sobre"
          component={Sobre}
          options={{
            tabBarIcon: ({ color, size }) => {
              return (
                <Feather name="message-circle" size={size} color={color} />
              );
            },
            headerShown: false,
            title: "",
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
