"use client";

import { Button } from "@/components/ui/button";
import { fullProduct } from "@/app/interface";
import { useShoppingCart } from "use-shopping-cart"



  
export default function AddToCart({ data }: { data: fullProduct }) {
    const {addItem, incrementItem , cartDetails} = useShoppingCart()
    const isInCard = !!cartDetails?.[data._id];
  
  
    function addToBag(product : fullProduct){
      const item = {
        ...product,
      };
  
      isInCard ? incrementItem(item._id): addItem(item)
     
    }
    


    return (
      <Button onClick={() => addToBag(data)}>
        Add To Cart
      </Button>
    );
  }
  
