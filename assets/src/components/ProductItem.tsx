import { View, Text, Image, Button } from "react-native";
import { Product } from "../types";
import { styles } from "../styles/styles";
import { useCart } from "../context/CartContext";

type Props = {
  product: Product;
};

const ProductItem = ({ product }: Props) => {
  const { addToCart } = useCart();

  return (
    <View style={styles.productContainer}>
      <Image
        source={typeof product.image === "string" ? { uri: product.image } : product.image}
        style={styles.image}
      />
      <Text style={styles.productText}>
        {product.name} - ${product.price}
      </Text>
      <Button title="Add to Cart" onPress={() => addToCart(product)} />
    </View>
  );
};

export default ProductItem;