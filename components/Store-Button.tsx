
interface StoreButtonProps{
    icon: React.ReactElement;
    textOne: string;
    textTwo: string;
}

const defaultClasses = "flex items-center bg-tertiary-orange border-[3px] rounded-full border-black px-4 py-1 sm:border-4 sm:px-10 sm:py-1 md:border-2 md:w-28 md:rounded-3xl md:px-6 md:py-0 lg:w-auto lg:border-[3px] lg:rounded-full lg:px-6 lg:py-2"

export default function StoreButton({icon, textOne, textTwo}: StoreButtonProps){

    return (
        <button className={defaultClasses}>
            <div>{icon}</div>
            <div className="flex flex-col items-start md:-space-y-4 lg:space-y-0">
                <div className="tracking-tighter text-[8px] xs:text-sm xs:w-28 xs:-ml-5 md:ml-0 md:w-auto md:text-[5px] lg:text-[8px] xl:text-[9px] 2xl:text-[10px]">{textOne}</div>
                <div className="font-semibold text-sm xs:text-lg xs:w-32 xs:-ml-3 md:ml-0 md:w-auto md:text-[8px] lg:text-xs xl:text-sm 2xl:text-base">{textTwo}</div>
            </div>
        </button>
    )
}