
interface BulletPointProps{
    text: string;
}

export default function BulletPoint({text}: BulletPointProps){

    return (
        <div className="w-[400px] flex space-x-2">
            <div>•</div> 
            <div>{text}</div>
        </div>
    )
}