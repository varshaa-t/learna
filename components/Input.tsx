
interface InputProps{
    type: string;
    size: "sm" | "lg";
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const sizeClasses = {
    "sm": "w-[295px]",
    "lg": "w-full"
}

export default function Input({name, type, size, value, onChange}: InputProps){

    return (
        <input 
            name={name}
            value={value}
            onChange={onChange} 
            type={type} 
            className={`px-5 py-3 bg-tertiary-orange border-[1px] border-black outline-none focus:border-2 hover:border-2 ${sizeClasses[size]}`}/>
    )
}