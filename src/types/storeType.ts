import {CartSlice} from "@/store/cartSlice";
import  {UserSlice} from "@/store/userSlice";

export type Store = CartSlice & UserSlice;
export type StoreSlices = CartSlice | UserSlice;