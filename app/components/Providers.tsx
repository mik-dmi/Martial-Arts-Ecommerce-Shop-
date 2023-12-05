"use client"

import { CartProvider } from "use-shopping-cart"



interface Props {
  children: React.ReactNode
}

export function Providers({ children }: Props) {
  return <CartProvider 
  currency="EUR"
  shouldPersist
  cartMode="checkout-session"
  stripe={process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY!}
  >{children}
  
  </CartProvider>
}