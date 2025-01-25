import { GrClose } from "react-icons/gr";

interface CloseIconProps{
    size: number;
}

export default function CloseIcon({size}: CloseIconProps){

    return (
        <GrClose size={size}/>
    )
}