import React from "react";
import { View, Text, Alert, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { styles } from "../styles/styles";
import { RootStackParamList } from "../navigation/AppNavigator";
import { useCart } from "../context/CartContext";

type NavigationProp = StackNavigationProp<RootStackParamList, "Checkout">;

const CheckoutScreen = () => {
  const navigation = useNavigation<NavigationProp>();
  const { cart, clearCart, getTotalPrice } = useCart();

  const handleCheckout = () => {
    Alert.alert("Checkout Successful", "Thank you for your purchase!", [
      {
        text: "OK",
        onPress: () => {
          clearCart();
          navigation.navigate("Home");
        },
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Checkout</Text>

      {cart.map((item) => (
        <View key={item.id} style={styles.itemContainer}>
          <Text style={styles.itemText}>
            {item.name} (x{item.quantity})
          </Text>
          <Text style={styles.priceText}>
            ${(item.price * item.quantity).toFixed(2)}
          </Text>
        </View>
      ))}

      <View style={styles.cartTotalContainer}>
        <Text style={styles.cartTotalText}>
          Total: ${getTotalPrice().toFixed(2)}
        </Text>
      </View>

      <TouchableOpacity style={styles.checkoutButton} onPress={handleCheckout}>
        <Text style={styles.checkoutButtonText}>Checkout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CheckoutScreen;
