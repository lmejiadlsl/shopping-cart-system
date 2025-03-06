import React from "react";
import { View, Text, FlatList, Button, Alert, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useCart } from "../context/CartContext";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../types"; // Import the RootStackParamList type

const CheckoutScreen = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList, "Checkout">>();
  const { cart, clearCart } = useCart();
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleCheckout = () => {
    Alert.alert("Checkout successful", "", [
      { text: "OK", onPress: () => {
          clearCart();
          navigation.navigate("Home");
        }
      }
    ]);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={cart}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Text>{item.name} - ${item.price} x {item.quantity}</Text>
        )}
      />
      <Text>Total: ${total}</Text>
      <Button title="Checkout" onPress={handleCheckout} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
});

export default CheckoutScreen;
