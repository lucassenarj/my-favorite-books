import "react-native-gesture-handler";
import React from "react";
import { StatusBar } from "react-native";
import Routes from "./routes";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#f5f5f5" barStyle="dark-content" />
      <Routes />
    </NavigationContainer>
  );
};
