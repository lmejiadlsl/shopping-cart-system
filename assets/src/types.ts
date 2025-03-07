export type Product = {
    id: string;
    name: string;
    price: number;
    image: string | number; 
    quantity: number; 
  };
  

  export type RootStackParamList = {
    Home: undefined;
    Cart: {
      cartItems: Product[];
      updateCart: (cart: Product[]) => void;
    };
    Checkout: undefined;
  };
  
  