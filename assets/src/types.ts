import { ImageSourcePropType } from "react-native";

export type Product = {
  id: string;
  name: string;
  price: number;
  image: ImageSourcePropType; 
  quantity: number;
};

export type RootStackParamList = {
  Home: undefined;
  Cart: undefined;
  Checkout: undefined;
};