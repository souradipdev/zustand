import {create} from "zustand";
import {immer} from "zustand/middleware/immer";
import {devtools, persist, subscribeWithSelector} from "zustand/middleware";
import {createCartSlice, CartSlice, CartState,} from "@/store/cartSlice";
import {createUserSlice, UserSlice, UserState} from "@/store/userSlice";
import {Store} from "@/types/storeType";

export const useStore = create<CartSlice & UserSlice>()(
  devtools(
    persist(
      subscribeWithSelector(
        immer((...a) => ({
          ...createCartSlice(...a),
          ...createUserSlice(...a),
        }))
      ), {name: 'local-storage'}
    )
  )
);
