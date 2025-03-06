import { View, Text, Button } from "react-native";
import { Product } from "../types"; // We'll create this type

type Props = {
  product: Product;
  onAddToCart: () => void;
};

const ProductItem = ({ product, onAddToCart }: Props) => {
  return (
    <View style={{ padding: 10, borderBottomWidth: 1 }}>
      <Text style={{ fontSize: 18 }}>{product.name} - ${product.price}</Text>
      <Button title="Add to Cart" onPress={onAddToCart} />
    </View>
  );
};

export default ProductItem;
