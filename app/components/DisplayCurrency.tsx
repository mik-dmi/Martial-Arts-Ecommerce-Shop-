"use client"
import React from 'react';
import { formatCurrencyString } from 'use-shopping-cart';

interface DisplayCurrencyProps {
  totalAmount: number;
  currency?: string; // Make currency optional
}

const DisplayCurrency: React.FC<DisplayCurrencyProps> = ({ totalAmount, currency = 'EUR' }) => {
  return (
    <div>{formatCurrencyString({ value: totalAmount, currency })}</div>
  );
};

export default DisplayCurrency;
