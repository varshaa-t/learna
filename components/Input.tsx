
interface InputProps{
    type: string;
    size: "sm" | "lg";
}

const sizeClasses = {
    "sm": "w-[295px]",
    "lg": "w-full"
}

export default function Input({type, size}: InputProps){

    return (
        <input type={type} className={`px-5 py-3 bg-tertiary-orange border-[1px] border-black outline-none focus:border-2 hover:border-2 ${sizeClasses[size]}`}/>
    )
}