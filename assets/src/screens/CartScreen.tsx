import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { styles } from "../styles/styles";
import { RootStackParamList } from "../navigation/AppNavigator";
import { useCart } from "../context/CartContext";

type NavigationProp = StackNavigationProp<RootStackParamList, "Cart">;

const CartScreen = () => {
  const navigation = useNavigation<NavigationProp>();
  const { cart, updateQuantity, getTotalPrice } = useCart();

  const increaseQuantity = (id: string, currentQuantity: number) => {
    updateQuantity(id, currentQuantity + 1);
  };

  const decreaseQuantity = (id: string, currentQuantity: number) => {
    updateQuantity(id, currentQuantity - 1);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cart</Text>
      {cart.length === 0 ? (
        <Text style={styles.emptyCartText}>Your cart is empty.</Text>
      ) : (
        <>
          <FlatList
            data={cart}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.cartItem}>
                <Text style={styles.productText}>
                  {item.name} - ${(item.price * item.quantity).toFixed(2)}
                </Text>
                <View style={styles.buttonContainer}>
                  <TouchableOpacity
                    onPress={() => decreaseQuantity(item.id, item.quantity)}
                    style={styles.button}
                  >
                    <Text style={styles.buttonText}>-</Text>
                  </TouchableOpacity>
                  <Text style={styles.productText}>{item.quantity}</Text>
                  <TouchableOpacity
                    onPress={() => increaseQuantity(item.id, item.quantity)}
                    style={styles.button}
                  >
                    <Text style={styles.buttonText}>+</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          />
          <View style={styles.cartTotalContainer}>
            <Text style={styles.cartTotalText}>
              Total: ${getTotalPrice().toFixed(2)}
            </Text>

            <TouchableOpacity
              style={styles.checkoutButton}
              onPress={() => navigation.navigate("Checkout")}
            >
              <Text style={styles.checkoutButtonText}>Proceed to Checkout</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </View>
  );
};

export default CartScreen;
