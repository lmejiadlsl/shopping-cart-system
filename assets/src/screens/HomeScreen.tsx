import React from "react";
import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { styles } from "../styles/styles";
import { Product } from "../types";
import { RootStackParamList } from "../navigation/AppNavigator";
import { useCart } from "../context/CartContext";

type NavigationProp = StackNavigationProp<RootStackParamList, "Home">;

const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp>();
  const { addToCart, cart } = useCart();

  // Products list
  const products: Product[] = [
    { id: "1", name: "iPhone 15 Pro", price: 750, image: require("../images/15pro.png"), quantity: 1 },
    { id: "2", name: "iPhone 16 Pro", price: 999, image: require("../images/16pro.png"), quantity: 1 },
    { id: "3", name: "iPhone 16 Pro Max", price: 1200, image: require("../images/16prom.png"), quantity: 1 },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Products</Text>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.productContainer}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.productName}>{item.name}</Text>
            <Text style={styles.productPrice}>${item.price}</Text>

            <TouchableOpacity 
              style={styles.addToCartButton} 
              onPress={() => addToCart(item)}
            >
              <Text style={styles.addToCartButtonText}>Add to Cart</Text>
            </TouchableOpacity>
          </View>
        )}
      />

      <TouchableOpacity 
        style={styles.cartButton} 
        onPress={() => navigation.navigate("Cart")}
      >
        <Text style={styles.cartButtonText}>Go to Cart ({cart.length})</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
