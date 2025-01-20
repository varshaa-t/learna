
interface StoreButtonProps{
    icon: React.ReactElement;
    textOne: string;
    textTwo: string;
}

const defaultClasses = "flex items-center space-x-1 border-[3px] border-black rounded-full px-6 py-2"

export default function StoreButton({icon, textOne, textTwo}: StoreButtonProps){

    return (
        <button className={defaultClasses}>
            <div>{icon}</div>
            <div className="flex flex-col items-start">
                <div className="text-[10px]">{textOne}</div>
                <div className="font-semibold">{textTwo}</div>
            </div>
        </button>
    )
}