export interface Product {
  id: String;
  title: String;
  price: number;
}

export type CartProduct = Product & { qty: number };