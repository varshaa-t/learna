import { AiOutlineDown } from "react-icons/ai";

interface DownArrowIconProps{
    styles: string;
}

export default function DownArrowIcon({styles}: DownArrowIconProps){

    return(
        <AiOutlineDown className={`text-xl ${styles}`}/>
    )
}