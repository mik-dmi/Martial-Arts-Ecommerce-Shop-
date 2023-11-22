import { MouseEventHandler } from "react";

export interface MainButtonsProps{
    title: string;
    containerStyles?:string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    btnType?: "button" | "submit" 
}