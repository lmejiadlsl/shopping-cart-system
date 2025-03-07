import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { useNavigation, RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { styles } from "../styles/styles";
import { Product, RootStackParamList } from "../types";

// Define navigation and route types
type NavigationProp = StackNavigationProp<RootStackParamList, "Cart">;
type RoutePropType = RouteProp<RootStackParamList, "Cart">;

// Explicitly define props type
interface CartScreenProps {
  route: RoutePropType;
}

const CartScreen: React.FC<CartScreenProps> = ({ route }) => {
  const navigation = useNavigation<NavigationProp>();

  // Extract cartItems and updateCart from route.params with proper typing
  const { cartItems, updateCart } = route.params;

  const increaseQuantity = (id: string) => {
    const updatedCart = cartItems.map((item: Product) =>
      item.id === id ? { ...item, quantity: (item.quantity ?? 1) + 1 } : item
    );
    updateCart(updatedCart);
  };

  const decreaseQuantity = (id: string) => {
    const updatedCart = cartItems
      .map((item: Product) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
      .filter((item) => item.quantity > 0);
    updateCart(updatedCart);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cart</Text>
      {cartItems.length === 0 ? (
        <Text style={styles.emptyCartText}>Your cart is empty.</Text>
      ) : (
        <FlatList
          data={cartItems}
          keyExtractor={(item) => item.id}
          renderItem={({ item }: { item: Product }) => (
            <View style={styles.cartItem}>
              <Text style={styles.productText}>
                {item.name} - ${item.price * (item.quantity ?? 1)}
              </Text>
              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  onPress={() => decreaseQuantity(item.id)}
                  style={styles.button}
                >
                  <Text style={styles.buttonText}>-</Text>
                </TouchableOpacity>
                <Text style={styles.productText}>{item.quantity ?? 1}</Text>
                <TouchableOpacity
                  onPress={() => increaseQuantity(item.id)}
                  style={styles.button}
                >
                  <Text style={styles.buttonText}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        />
      )}
    </View>
  );
};

export default CartScreen;
