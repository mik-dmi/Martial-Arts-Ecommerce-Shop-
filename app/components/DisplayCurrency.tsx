"use client"
import React from 'react'
import { formatCurrencyString, useShoppingCart } from "use-shopping-cart"

const DisplayCurrency = ({ totalAmount }: { totalAmount: number }) => {
  return (
    <div>{formatCurrencyString({ value: totalAmount, currency: "EUR" })}</div>
  );

}

export default DisplayCurrency