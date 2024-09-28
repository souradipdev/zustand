import {StateCreator} from "zustand";

interface UserState {
  userName: string;
  fullName: string;
  age: number;
  address: string;
}

interface UserAction {
  setAddress: (address: string) => void;
  fetchUser: () => Promise<void>;
}

export type UserSlice = UserState & UserAction;

const initialAddress: UserState = {
  userName: '',
  fullName: '',
  age: 0,
  address: ''
}

export const createUserSlice: StateCreator<
  UserSlice,
  [
    ["zustand/immer", never],
    ["zustand/devtools", never],
    ["zustand/persist", 'local-storage']
  ],
  [],
  UserSlice
> = (set) => ({
  ...initialAddress,

  setAddress: (address) => {
    set((state) => {
      state.address = address;
    })
  },

  fetchUser: async () => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    set({
      address: '',
      userName: 'souradip2k4',
      fullName: 'Souradip Saha',
      age: 20,
    });
  }
})