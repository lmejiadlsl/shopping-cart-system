import React from "react";
import { createStackNavigator, StackNavigationProp } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../styles/HomeScreen";
import CartScreen from "../screens/CartScreen";
import CheckoutScreen from "../screens/CheckoutScreen";
import { RouteProp } from "@react-navigation/native";
import { Product } from "../types"; // Ensure Product type is imported

// Define RootStackParamList correctly
type RootStackParamList = {
  Home: undefined;
  Cart: { cartItems: Product[]; updateCart: (cart: Product[]) => void }; // Fixed
  Checkout: undefined;
};

// Create the Stack Navigator
const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="Cart"
          component={CartScreen}
          initialParams={{ cartItems: [], updateCart: () => {} }} // Fixed
        />
        <Stack.Screen name="Checkout" component={CheckoutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
export type NavigationProps = StackNavigationProp<RootStackParamList>;
export type RouteProps<T extends keyof RootStackParamList> = RouteProp<RootStackParamList, T>;
