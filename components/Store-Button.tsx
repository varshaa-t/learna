
interface StoreButtonProps{
    icon: React.ReactElement;
    textOne: string;
    textTwo: string;
}

const defaultClasses = "flex items-center border-[3px] sm:border-4 md:border-2 lg:border-[3px] border-black rounded-full px-6 py-2 sm:px-14 sm:py-2 md:px-6 md:py-2"

export default function StoreButton({icon, textOne, textTwo}: StoreButtonProps){

    return (
        <button className={defaultClasses}>
            <div>{icon}</div>
            <div className="flex flex-col items-start">
                <div className="tracking-tighter text-[8px] sm:text-sm md:text-[8px] xl:text-[9px] 2xl:text-[10px]">{textOne}</div>
                <div className="font-semibold text-sm sm:text-lg md:text-xs xl:text-sm 2xl:text-base">{textTwo}</div>
            </div>
        </button>
    )
}