import {StateCreator, create} from "zustand";
import {CartProduct} from "@/types/cartProduct";
import {Product} from "@/types/cartProduct";

export interface CartState {
  products: Array<CartProduct>;
  totalPrice: number;
}

interface CartActions {
  addProduct: (product: Product) => void;
  removeProduct: (productId: string) => void;
  incrementQty: (productId: string) => void;
  decrementQty: (productId: string) => void;
  setTotal: (total: number) => void;
  getProductById: (productId: string) => CartProduct | undefined;
  reset: () => void;
}

export type CartSlice = CartState & CartActions;

const initialState: CartState = {
  products: [],
  totalPrice: 0,
};

export const createCartSlice: StateCreator<
  CartState,
  [
    ["zustand/immer", never],
    ["zustand/devtools", never],
    ["zustand/devtools", unknown],
    ["zustand/persist", unknown]
  ],
  [],
  CartSlice
> = (set, get) => ({
  ...initialState,

  incrementQty: (productId) => {
    set((state) => {
      const findProduct = state.products.find(product => product.id === productId);
      if (findProduct) {
        findProduct.qty += 1;
      }
    });
  },

  decrementQty: (productId) => {
    set((state) => {
      const findProduct = state.products.find(product => product.id === productId);
      if (findProduct && findProduct.qty > 1) {
        findProduct.qty -= 1;
      }
    });
  },

  addProduct: (product) => {
    set((state) => {
      state.products.push({...product, qty: 1});
    });
  },

  removeProduct: (productId) => {
    set((state) => {
      state.products = state.products.filter(product => product.id !== productId);
    });
  },

  getProductById: (productId) => {
    return get().products.find(product => product.id === productId);
  },

  setTotal: (total) => {
    set((state) => {
      state.totalPrice = total;
    });
  },

  reset: () => {
    set(() => initialState);
  },
});
