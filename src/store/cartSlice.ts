import {StateCreator} from "zustand";

import {CartProduct} from "@/types/cartProduct";
import {Product} from "@/types/product";
import {findSourceMap} from "node:module";
import {state} from "sucrase/dist/types/parser/traverser/base";

interface CartState {
  products: Array<CartProduct>;
  total: number;
}

interface CartActions {
  addProduct: (product: Product) => void;
  removeProduct: (productId: String) => void;
  incrementQty: (productId: String) => void;
  decrementQty: (productId: String) => void;
  setTotal: (total: number) => void
  getProductById: (productId: String) => CartProduct | undefined;
  reset: () => void;
}

export type CartSlice = CartState & CartActions;

const initialState: CartState = {
  products: [],
  total: 0
}

export const createCartSlice: StateCreator<
  CartSlice,
  [['zustand/immer', never]],
  [],
  CartSlice
> = (setState, getState) => ({
  ...initialState,
  incrementQty: (productId) => {
    setState((state) => {
      const findProduct = state.products.filter(product => product.id === productId)

      if (findProduct) {
        findProduct.qty += 1;
      }
    })
  },

  decrementQty: (productId) => {
    setState((state) => {
      const findProduct = state.products.filter(product => product.id === productId);

      if (findProduct) {
        findProduct.qty -= 1;
      }
    })
  },

  addProduct: (product) => {
    setState((state) => {
      state.products.push({product, qty: 1});
    })
  },

  removeProduct: (productId) => {
    setState((state) => {
      state.products.filter(product => product.id !== productId)
    })
  },

  getProductById: (productId) => {
    return getState().products.filter(product => product.id === productId)
  },

  setTotal: (total) => {
    setState((state) => {
      state.total = total;
    })
  },

  reset: () => {
    setState(() => initialState);
  }
})


