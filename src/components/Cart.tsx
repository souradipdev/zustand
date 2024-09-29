import React from 'react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {ShoppingBag} from "lucide-react";

function Cart() {
  return (
    <div>
      <ShoppingBag size={28} strokeWidth={2.5} />
    </div>
  );
}

export default Cart;