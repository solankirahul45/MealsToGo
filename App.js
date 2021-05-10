import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { Text } from "react-native";
import { ThemeProvider } from 'styled-components/native';

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import { useFonts as useOswald, Oswald_400Regular } from '@expo-google-fonts/oswald';
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato';

import { theme } from './src/infrastructure/theme';
import { RestaurantsScreen } from './src/features/restaurants/screens/restaurants.screens';
import { SafeArea } from "./src/components/utility/safe-area.component";

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Restaurants : "md-restaurant",
  Map : "md-map",
  Settings: "md-settings",
};

const Setting = () => (
  <SafeArea>
    <Text>Setting</Text>
  </SafeArea>
);

const Map = () => (
  <SafeArea>
    <Text>Map</Text>
  </SafeArea>
);

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    )
  }
}

export default function App() {
  let [OswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  let [LatoLoaded] = useLato({
    Lato_400Regular,
  });

  if(!OswaldLoaded || !LatoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={createScreenOptions}            
            tabBarOptions={{
              activeTintColor: "tomato",
              inactiveTintColor: "gray",
            }}
          >
            <Tab.Screen name="Restaurants" component={RestaurantsScreen} />
            <Tab.Screen name="Map" component={Map} />
            <Tab.Screen name="Settings" component={Setting} />
          </Tab.Navigator>
        </NavigationContainer>
      </ThemeProvider>      
      <ExpoStatusBar style="auto" />
    </>
  );
}