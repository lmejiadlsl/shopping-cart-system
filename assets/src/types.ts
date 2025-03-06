export type Product = {
    id: string;
    name: string;
    price: number;
  };
  
  // ✅ Add this to define your navigation routes
  export type RootStackParamList = {
    Home: undefined;
    Cart: undefined;
    Checkout: undefined;
  };
  