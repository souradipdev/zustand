"use client"
import Image from "next/image";
import {useStore} from "@/store/store";
import {useShallow} from "zustand/react/shallow";
import User from "@/components/User";
import Cart from "@/components/Cart";
import {ProductData} from "@/lib/TestData";
import {Card, CardContent, CardFooter, CardHeader} from "@/components/ui/card";

export default function Home() {

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


              </CardFooter>
            </Card>
          ))}
        </div>


      </main>
    </div>
  )
    ;
}
