import React from 'react';
import {Button} from "@/components/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {ShoppingBag, SquareX, Trash2} from "lucide-react";
import {useStore} from "@/store/store";
import {useShallow} from "zustand/react/shallow";
import {Cross2Icon} from "@radix-ui/react-icons";
import {Card, CardContent, CardFooter, CardHeader} from "@/components/ui/card";
import ChangeQtyButtons from "@/components/ChangeQtyButtons";

function Cart() {
  const {products, totalPrice, removeProduct, reset, address} = useStore(
    useShallow(
      state => ({
        products: state.products,
        totalPrice: state.totalPrice,
        removeProduct: state.removeProduct,
        reset: state.reset,
        address: state.address
      })
    )
  )

  return (
    <div>
      <Popover>
        <PopoverTrigger asChild className={"mb-3"}>
          <div className={"bg-accent p-1.5 rounded-md"}>
            <ShoppingBag size={25} strokeWidth={2.5}/>
          </div>
        </PopoverTrigger>

        <PopoverContent className="w-80 flex flex-col gap-4">
          <div className={"w-full  flex items-center"}>
            <h2 className={"whitespace-pre-wrap text-2xl"}>Cart: </h2>
            <Button variant={"destructive"} className={"p-1.5"}  onClick={reset}>
              <SquareX size={25}/>
            </Button>
          </div>

          <div className="space-y-2">
            {products.map((product) => (
              <Card key={product.id}>
                <div className={"w-full px-5 flex justify-between items-center"}>
                  <CardHeader>{product.title}</CardHeader>
                  <Button variant={"destructive"} className={"p-1.5"}>
                    <Trash2/>
                  </Button>
                </div>
                <CardContent>{product.price}$</CardContent>
                <CardFooter>
                  <ChangeQtyButtons id={product.id}/>

                </CardFooter>
              </Card>
            ))}
          </div>

          <div>{address}</div>
          <div>{totalPrice}$</div>
        </PopoverContent>
      </Popover>
    </div>
  );
}

export default Cart;