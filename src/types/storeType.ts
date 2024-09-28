import {CartSlice} from "@/store/cartSlice";
import  {UserSlice} from "@/store/userSlice";

export type store = CartSlice & UserSlice;