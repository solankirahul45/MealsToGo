import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { ThemeProvider } from 'styled-components/native';
import { useFonts as useOswald, Oswald_400Regular } from '@expo-google-fonts/oswald';
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato';

import { theme } from './src/infrastructure/theme';
import { RestaurantsScreen } from './src/features/restaurants/screens/restaurants.screens';

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
        <RestaurantsScreen />
      </ThemeProvider>      
      <ExpoStatusBar style="auto" />
    </>
  );
}