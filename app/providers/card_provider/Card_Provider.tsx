"use client"

import { CartProvider } from "use-shopping-cart"
import {QueryClientProvider, QueryClient} from "@tanstack/react-query"


interface Props {
  children: React.ReactNode
}

export function Providers({ children }: Props) {
  const queryClient = new QueryClient()
  return <QueryClientProvider client={queryClient}>
  
    <CartProvider 
    currency="EUR"
    shouldPersist
    cartMode="checkout-session"
    stripe={process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY!}
    >{children}
    
    </CartProvider>
  </QueryClientProvider>
}