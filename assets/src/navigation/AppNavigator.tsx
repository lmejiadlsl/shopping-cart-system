import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../screens/HomeScreen"; // Fixed import path
import CartScreen from "../screens/CartScreen";
import CheckoutScreen from "../screens/CheckoutScreen";

// Define RootStackParamList correctly
export type RootStackParamList = {
  Home: undefined;
  Cart: undefined; // No need to pass cart items as parameters
  Checkout: undefined;
};

// Create the Stack Navigator
const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Cart" component={CartScreen} />
        <Stack.Screen name="Checkout" component={CheckoutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;

// types.ts
export type Product = {
  id: string;
  name: string;
  price: number;
  image: string | number;
  quantity: number;
};