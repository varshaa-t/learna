
interface OptionProps{
    text: string;
    value: string;
}

export default function Option({text, value}: OptionProps){

    return(
        <option className="bg-white text-gray-400 font-semibold" value={value}>{text}</option>
    )
}