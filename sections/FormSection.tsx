import Button from "@/components/Button";
import Input from "@/components/Input";
import Label from "@/components/Label";
import Option from "@/components/Option";
import { dmSansFont, manropeFont } from "@/fonts/fonts";
import DownArrowIcon from "@/icons/DownArrowIcon";
import Image from "next/image";

export default function FormSection(){

    return (
        <div className={`bg-tertiary-orange flex justify-between pt-52 pb-36 px-1 font-semibold ${dmSansFont.className}`}>
            <div>
                <Image
                    src={"https://images.squarespace-cdn.com/content/v1/63560ba563f3f90767df932c/59f62cad-e52f-4e77-9a1f-03a833bee70b/CTA_Left.png?format=2500w"}
                    alt="left-img"
                    width={360}
                    height={670}
                />
            </div>
            <div className={`flex flex-col items-center -mt-28`}>
                <div className="flex flex-col text-center w-[600px] space-y-3 pb-28">
                    <div className={`${manropeFont.className} font-light text-[65px]`}>Get a Demo</div>
                    <div className={`${dmSansFont.className} text-xl tracking-wide font-semibold`}>See for yourself how Learna can create better workplaces by changing the way people learn.</div>
                </div>
                <div className="flex flex-col space-y-4 pb-5">
                    <div className="flex flex-col space-y-2">
                        <Label text="Name"/>
                        <div className="flex space-x-3 justify-between">
                            <div className="flex flex-col space-y-1">
                                <label className="text-sm">First Name</label>
                                <Input 
                                    type="text"
                                    size="sm"
                                />
                            </div>
                            <div className="flex flex-col space-y-1">
                                <label className="text-sm">Last Name</label>
                                <Input 
                                    type="text"
                                    size="sm"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col space-y-1">
                        <Label text="Email"/>
                        <Input
                            type="text"
                            size="lg"
                        />
                    </div>
                    <div className="flex flex-col space-y-1">
                        <Label text="Company Name"/>
                        <Input
                            type="text"
                            size="lg"
                        />
                    </div>
                    <div className="flex flex-col space-y-1 relative">
                        <Label text="How did you find out about us? "/>
                        <select name="info" id="info" className="px-5 py-3 bg-tertiary-orange border-[1px] text-gray-500 font-semibold border-black outline-none focus:border-2 hover:border-2 appearance-none">
                            <option className={`bg-white font-semibold text-gray-400 ${dmSansFont.className}`} value="Select an option" disabled>Select an option</option>
                            <Option text="Instagram" value="Instagram"/>
                            <Option text="LinkedIn" value="LinkedIn"/>
                            <Option text="Facebook" value="Facebook"/>
                            <Option text="Google Search" value="Google Search"/>
                            <Option text="Word of Mouth" value="Word of Mouth"/>
                            <Option text="Referral" value="Referral"/>
                        </select>
                        <DownArrowIcon styles="absolute right-4 top-2/3 transform -translate-y-1/2 pointer-events-none"/>
                    </div>
                </div>
                <div>
                    <Button
                        text="Submit"
                        size="lg"
                        variant="primary"
                    />
                </div>
            </div>
            <div>
                <Image
                    src={"https://images.squarespace-cdn.com/content/v1/63560ba563f3f90767df932c/baadd734-cd66-4c4e-920f-766f0fa6aafd/CTA_Right.png?format=2500w"}
                    alt="right-img"
                    width={360}
                    height={670}
                />
            </div>
        </div>
    )
}