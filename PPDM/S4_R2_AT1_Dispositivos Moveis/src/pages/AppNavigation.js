import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import carousel from "./carousel"
import Home from "./Home"
import Login from "./Login"
import Logged from "./Logged"

import { useState, useEffect } from "react";

import { getItem } from "../components/AsyncStorage";

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
  const [showOnCarousel, setShowOnCarousel] = useState(null)

  useEffect(() => {
    checkIfAlreadyOnCarousel();
  }, [])

  const checkIfAlreadyOnCarousel = async () => {
    let onCarousel = await getItem('onCarousel')

    if (onCarousel == 1) {
      setShowOnCarousel(false)
    } else {
      setShowOnCarousel(true)
    }
  }

  if (showOnCarousel === null) {
    return null
  }

  if (!showOnCarousel) {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Logged">
          <Stack.Screen name="Carousel" component={carousel} options={{ headerShown: false }} />
          <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
          <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
          <Stack.Screen name="Logged" component={Logged} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
          <Stack.Screen name="Carousel" component={carousel} options={{ headerShown: false }} />
          <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
          <Stack.Screen name="Logged" component={Logged} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }

}
