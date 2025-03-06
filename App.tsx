import React from "react";
import { CartProvider } from "./assets/src/context/CartContext";  
import AppNavigator from "./assets/src/navigation/AppNavigator";

export default function App() {
  return (
    <CartProvider>
      <AppNavigator />
    </CartProvider>
  );
}
