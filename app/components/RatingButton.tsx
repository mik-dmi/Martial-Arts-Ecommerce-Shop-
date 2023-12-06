import React from 'react'
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

const RatingButton = () => {
  return (
    <Button className="rounded-full gap-x-2">
        <span className="text-sm ">4.2</span>
        <Star className="h-5 w-5" />
    </Button>
  )
}

export default RatingButton