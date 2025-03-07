import React, { useState } from "react";
import { View, Text, Button, FlatList, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { styles } from "../styles/styles";
import { Product, RootStackParamList } from "../types";

type NavigationProp = StackNavigationProp<RootStackParamList, "Home">;

const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp>();

  // Cart state
  const [cartItems, setCartItems] = useState<Product[]>([]);

  // Function to add items to the cart
  const addToCart = (product: Product) => {
    setCartItems((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

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
            <Image source={item.image} style={styles.productImage} />
            <Text style={styles.productName}>{item.name}</Text>
            <Text style={styles.productPrice}>${item.price}</Text>
            <Button title="Add to Cart" onPress={() => addToCart(item)} />
          </View>
        )}
      />
      <Button
        title={`Go to Cart (${cartItems.length})`}
        onPress={() => navigation.navigate("Cart", { cartItems })}
      />
    </View>
  );
};

export default HomeScreen;
