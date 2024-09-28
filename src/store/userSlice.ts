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

