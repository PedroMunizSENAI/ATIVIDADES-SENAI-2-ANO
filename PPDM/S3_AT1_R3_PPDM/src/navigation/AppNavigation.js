import { useState, useEffect } from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// import OnboardingScreen from "../pages/OnboardingScreen";
import HomeScreen from "../pages/HomeScreen";
import GalleryScreen from "../pages/GalleryScreen";

import { getItem } from "../components/AsyncStorage";

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
  const [showLogged, setShowLogged] = useState(null);

  useEffect(() => {
    checkIfAlreadyLogged();
  }, []);

  const checkIfAlreadyLogged = async () => {
    let logged = await getItem("logged");

    console.log(logged);

    console.log(typeof logged);

    if (logged === "1") {
      setShowLogged(false);
    } else {
      setShowLogged(true);
    }
  };

  if (showLogged === null) {
    return null;
  }

  if (showLogged) {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Gallery"
            component={GalleryScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Gallery">
          <Stack.Screen
            name="Gallery"
            component={GalleryScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
