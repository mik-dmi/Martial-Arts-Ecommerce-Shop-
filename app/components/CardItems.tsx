"use client"

import Image from "next/image"
import Link from "next/link"
import { urlFor } from "../lib/sanity";
import { Clock, X } from "lucide-react"
import { formatCurrencyString, useShoppingCart } from "use-shopping-cart"
import { Product } from "use-shopping-cart/core"

import { shimmer, toBase64 } from "../lib/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CartItemsEmpty } from "./CartItemsEmpty"

export function CartItems() {
  const {cartDetails, setItemQuantity, removeItem} = useShoppingCart()
  const cartItems = Object.entries(cartDetails!).map(([_, product])=>product)
  console.log('Cart items:', cartItems);
  function removeCartItem(product : Product) {
    removeItem(product.id)
  }
  if (cartItems.length === 0) return <CartItemsEmpty/>
  return (
    <ul
      role="list"
      className="divide-y divide-gray-200 border-y border-gray-200 dark:divide-gray-500 dark:border-gray-500"
    >
      {cartItems.map((product, productIdx) => (
        <li key={product.id} className="flex py-6 sm:py-10">
          <div className="shrink-0">
            <Image
              placeholder='blur'
              blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(200,200))}`}
              src={urlFor(product.images[0]).url()}
              alt={"product.name"}
              width={200}
              height={200}
              className="h-24 w-24 rounded-md border-2 border-gray-200 object-cover object-center dark:border-gray-800 sm:h-48 sm:w-48"
            />
          </div>

          <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
            <div className="relative justify-between pr-9 sm:flex sm:gap-x-6 sm:pr-0">
              <div>
                <div className="flex justify-between">
                  <h3 className="text-sm">
                    <Link href={`/product/${product.slug}`} className="font-medium">
                      {product.name}
                    </Link>
                  </h3>
                </div>
                <p className="mt-1 text-sm font-medium">{formatCurrencyString({value: product.price , currency : product.currency})}</p>
              </div>

              <div className="mt-4 sm:mt-0 sm:pr-9">
                <label htmlFor={`quantity-${productIdx}`} className="sr-only">
                  Quantity, {product.name}
                </label>
                <Input
                  id={`quantity-${productIdx}`}
                  name={`quantity-${productIdx}`}
                  type="number"
                  className="w-16"
                  min={1}
                  max={8}
                  value={product.quantity}
                  onChange={e => setItemQuantity(product.id , Number(e.target.value))}
                />
                <div className="absolute right-0 top-0">
                  <Button
                    variant="ghost"
                    type="button"
                    className="-mr-2 inline-flex p-2"
                    onClick={()=> removeCartItem(product)}
                  >
                    <span className="sr-only">Remove</span>
                    <X className="h-5 w-5" aria-hidden="true" />
                  </Button>
                </div>
              </div>

            </div>


            <div>
              <p className="mt-2 tex-sm text-gray-500 line-clamp-4">
                {product.description}
              </p>
            </div>
            <p className="mt-4 flex space-x-2 text-sm">
              <Clock className="h-5 w-5 shrink-0" aria-hidden="true" />
              <span>Ships in 1 week</span>
            </p>
          </div>
        </li>
      ))}
    </ul>
  )
}
