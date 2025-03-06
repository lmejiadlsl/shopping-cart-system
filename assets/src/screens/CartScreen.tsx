import React from "react";
import { View, Text, FlatList, Button, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useCart } from "../context/CartContext";
import { NavigationProps } from "../navigation/AppNavigator";

const CartScreen = () => {
  const navigation = useNavigation<NavigationProps>();
  const { cart, updateQuantity } = useCart();

  return (
    <View style={styles.container}>
      {cart.length === 0 ? (
        <Text>Your cart is empty.</Text>
      ) : (
        <FlatList
          data={cart}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text>
                {item.name} - ${item.price} x {item.quantity}
              </Text>
              <View style={styles.buttons}>
                <Button title="+" onPress={() => updateQuantity(item.id, "increase")} />
                <Button title="-" onPress={() => updateQuantity(item.id, "decrease")} />
              </View>
            </View>
          )}
        />
      )}
      <Button title="Checkout" onPress={() => navigation.navigate("Checkout")} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
  item: { flexDirection: "row", justifyContent: "space-between", marginBottom: 10 },
  buttons: { flexDirection: "row", gap: 10 },
});

export default CartScreen;
