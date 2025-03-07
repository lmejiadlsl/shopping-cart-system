import React from "react";
import { CartProvider } from "./assets/src/context/CartContext";
import AppNavigator from "./assets/src/navigation/AppNavigator";

const App = () => {
  return (
    <CartProvider>
      <AppNavigator />
    </CartProvider>
  );
};

export default App;