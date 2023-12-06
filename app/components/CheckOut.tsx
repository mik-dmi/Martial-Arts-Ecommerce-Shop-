import React from 'react'
import { Button } from "@/components/ui/button";
import Link from "next/link";

const CheckOut = () => {
  return (
    <Link href="/cart">
      <Button variant={"secondary"}>
          Checkout now
      </Button>
    </Link>
  )
}

export default CheckOut