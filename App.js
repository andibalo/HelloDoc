import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import "react-native-gesture-handler";
import Router from "./src/router";
import { NavigationContainer } from "@react-navigation/native";
import FlashMessage from "react-native-flash-message";

const App = () => {
  return (
    <>
      <SafeAreaProvider>
        <NavigationContainer>
          <Router />
        </NavigationContainer>
      </SafeAreaProvider>
      <FlashMessage position="top" />
    </>
  );
};

export default App;
