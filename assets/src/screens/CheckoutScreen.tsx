import React from "react";
import { View, Text, Button } from "react-native";
import { useCart } from "../context/CartContext";

const CheckoutScreen = () => {
  const { cart, clearCart } = useCart();

  // Calculate total sum
  const totalSum = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <View>
      <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 10 }}>
        Checkout
      </Text>
      <Text>Total: ${totalSum.toFixed(2)}</Text>
      <Button title="Complete Purchase" onPress={clearCart} />
    </View>
  );
};

export default CheckoutScreen;
