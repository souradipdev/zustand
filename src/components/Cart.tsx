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
      <Popover>
        <PopoverTrigger asChild className={"mb-3"}>
          <div className={"bg-accent p-1.5 rounded-md"}>
            <ShoppingBag size={25} strokeWidth={2.5}/>
          </div>
        </PopoverTrigger>

        <PopoverContent className="w-80 flex flex-col gap-4">
          <div className={"w-full justify-between flex gap-8"}>

          </div>

        </PopoverContent>
      </Popover>
    </div>
  );
}

export default Cart;