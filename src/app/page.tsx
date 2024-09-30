"use client"
import {useStore} from "@/store/store";
import {useShallow} from "zustand/react/shallow";
import User from "@/components/User";
import Cart from "@/components/Cart";
import {ProductData} from "@/lib/TestData";
import {Card, CardContent, CardFooter, CardHeader} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import ChangeQtyButtons from "@/components/ChangeQtyButtons";

export default function Home() {
  const {addProduct, cartProducts} = useStore(
    useShallow((state) => ({
      addProduct: state.addProduct,
      cartProducts: state.products
    }))
  )

  return (
    <div className="w-full min-h-screen flex justify-center">
      <main className="h-fit bg-background w-1/2 p-5">
        <div className="flex justify-between ">
          <User/>
          <Cart/>
        </div>

        <h1 className="text-2xl">Products:</h1>
        <div className="space-y-2">
          {ProductData.map((product) => (
            <Card key={product.id}>
              <CardHeader>{product.title}</CardHeader>
              <CardContent>{product.price}$</CardContent>
              <CardFooter>
                {cartProducts.find(item => product.id === item.id) ?
                  (<div>
                    <ChangeQtyButtons id={product.id}/>
                  </div>) : (
                    <Button onClick={() => addProduct(product)}>Add product</Button>
                  )}

              </CardFooter>
            </Card>
          ))}
        </div>


      </main>
    </div>
  )
    ;
}
