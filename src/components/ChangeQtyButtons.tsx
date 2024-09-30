import React, {useEffect} from 'react';
import {useStore} from "@/store/store";
import {useShallow} from "zustand/react/shallow";
import {Button} from "@/components/ui/button";
import {Minus, Plus} from "lucide-react";

function ChangeQtyButtons({id}: { id: string }) {
  const {incrementQty, decrementQty, products, getProductById, setTotal} = useStore(
    useShallow((state) => (
      {
        incrementQty: state.incrementQty,
        decrementQty: state.decrementQty,
        products: state.products,
        getProductById: state.getProductById,
        setTotal: state.setTotal
      }
    ))
  )
  const product = getProductById(id);

  useEffect(() => {
    const unsubscribe = useStore.subscribe(
      (state) => (state.products),
      (products) => {
        setTotal(
          products.reduce((acc, product) => acc + product.price * product.qty, 0)
        )
      },
      {
        fireImmediately: true
      }
    )

    return () => unsubscribe();
  }, [setTotal]);

  return (
    <div className={"flex justify-between gap-2"}>
      {product && (
        <>
          <Button className={"p-2"} onClick={() => decrementQty(product.id)}>
            <Minus/>
          </Button>
          <span>{product.qty}</span>
          <Button className={"p-2"} onClick={() => incrementQty(product.id)}>
            <Plus/>
          </Button>
        </>
      )}

    </div>
  );
}

export default ChangeQtyButtons;