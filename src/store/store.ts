import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { devtools, persist, subscribeWithSelector } from "zustand/middleware";
import { createCartSlice } from "@/store/cartSlice";
import { createUserSlice } from "@/store/userSlice";
import { Store } from "@/types/storeType";

export const useStore = create<Store>()(
  devtools(
    persist(
      subscribeWithSelector(
        immer((...a) => ({
          ...createUserSlice(...a),
          ...createCartSlice(...a),
        }))
      ),
      {
        name: 'local-storage',
      }
    )
  )
);
