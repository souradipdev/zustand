import {createStore} from "zustand";

import {CartProduct} from "@/types/cartProduct";
import {Product} from "@/types/product";

interface CartState {
  products: Array<CartProduct>;
  total: number;
}

interface CartActions {
  addProduct: (product: Product) => void;
  removeProduct: (productId: String) => void;
  incrementQty: (productId: String) => void;
  decrementQty: (productId: String) => void;
  getProductById: (ProductId: String) => CartProduct | undefined;
  reset: () => void;
}

export type CartSlice = CartState & CartActions;
