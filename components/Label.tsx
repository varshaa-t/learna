
interface LabelProps{
    text: string;
}

export default function Label({text}: LabelProps){

    return(
        <label>{text} <span className="text-zinc-700 tracking-tighter text-sm">&nbsp; (required)</span></label>
    )
}