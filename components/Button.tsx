
interface ButtonProps{
    text: string;
    size: "sm" | "md" | "lg";
    variant: "primary" | "secondary" | "tertiary";
}

const sizeClasses = {
    "sm": "w-20 p-2",
    "md": "w-40 px-4 py-6",
    "lg": "w-56 py-8 text-xl"
}

const variantClasses = {
    "primary": "bg-primary-orange",
    "secondary": "bg-secondary-orange",
    "tertiary": "bg-tertiary-orange"
}

const defaultClasses = "rounded-full font-semibold";

export default function Button({text, size, variant}: ButtonProps){

    return (
        <button className={`${sizeClasses[size]} ${variantClasses[variant]} ${defaultClasses}`}>
            {text}
        </button>
    )
}