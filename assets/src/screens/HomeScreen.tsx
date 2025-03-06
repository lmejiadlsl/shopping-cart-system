import { View, Text, Button, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "../styles/styles";
import ProductItem from "../components/ProductItem";
import { Product } from "../types";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../types"; // Use types.ts instead of AppNavigator.tsx

const products: Product[] = [
  { id: "1", name: "Product A", price: 100 },
  { id: "2", name: "Product B", price: 200 },
  { id: "3", name: "Product C", price: 300 },
];

const HomeScreen = () => {
  // ✅ Correctly define navigation type
  const navigation = useNavigation<StackNavigationProp<RootStackParamList, "Home">>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Products</Text>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ProductItem product={item} onAddToCart={() => {}} />
        )}
      />
      <Button title="Go to Cart" onPress={() => navigation.navigate("Cart")} />
    </View>
  );
};

export default HomeScreen;
