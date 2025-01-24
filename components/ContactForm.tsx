"use client";

import DownArrowIcon from "@/icons/DownArrowIcon";
import Button from "./Button";
import Option from "./Option";
import Label from "./Label";
import Input from "./Input";
import { dmSansFont } from "@/fonts/fonts";
import { ChangeEvent, FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export interface FormData{
    firstName: string;
    lastName: string;
    email: string;
    companyName: string;
    findAboutUs: string;
}

export default function ContactForm(){

    const [formData, setFormData] = useState<FormData>({
        firstName: "",
        lastName: "",
        email: "",
        companyName: "",
        findAboutUs: ""
    })

    const router = useRouter();

    function handleChange(e: ChangeEvent<HTMLInputElement | HTMLSelectElement>){
        const { name, value } = e.target;
        setFormData((prev: FormData) => ({ ...prev, [name]: value }));
    }

    async function handleSubmit(e: FormEvent<HTMLFormElement>){
        e.preventDefault();

        if(!formData.firstName || !formData.lastName || !formData.companyName || !formData.email || !formData.findAboutUs){
            toast.error("All fields are required");
            return;
        }

        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/email`, {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  firstName: formData.firstName,
                  lastName: formData.lastName,
                  email: formData.email,
                  companyName: formData.companyName,
                  findAboutUs: formData.findAboutUs,
                }),
              });

              if (response.ok) {
                toast.success("Form submitted successfully!");
                setFormData({
                    firstName:  "",
                    lastName: "",
                    email: "",
                    companyName: "",
                    findAboutUs: ""
                })
                router.push('/');
              } else {
                toast.error("Problem submitting the form. Pls try again!");
              }
        } catch (error) {
            toast.error("Problem submitting the form!");
            console.log("Error sending email:", error);
            console.error("There was a problem sending email. Pls try again!");
        }
    }

    return(
        <form 
            className="flex flex-col items-center"
            onSubmit={handleSubmit}
        >
            <div className="flex flex-col space-y-4 pb-5">
                <div className="flex flex-col space-y-2">
                    <Label text="Name"/>
                    <div className="flex space-x-3 justify-between">
                        <div className="flex flex-col space-y-1">
                            <label className="text-sm">First Name</label>
                            <Input 
                                name="firstName"
                                type="text"
                                size="sm"
                                value={formData.firstName}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="flex flex-col space-y-1">
                            <label className="text-sm">Last Name</label>
                            <Input 
                                name="lastName"
                                type="text"
                                size="sm"
                                value={formData.lastName}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col space-y-1">
                    <Label text="Email"/>
                    <Input
                        name="email"
                        type="text"
                        size="lg"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>
                <div className="flex flex-col space-y-1">
                    <Label text="Company Name"/>
                    <Input
                        name="companyName"
                        type="text"
                        size="lg"
                        value={formData.companyName}
                        onChange={handleChange}
                    />
                </div>
                <div className="flex flex-col space-y-1 relative">
                    <Label text="How did you find out about us? "/>
                    <select 
                        id="info" 
                        name="findAboutUs"
                        value={formData.findAboutUs}
                        onChange={handleChange}
                        className="px-5 py-3 bg-tertiary-orange border-[1px] text-gray-500 font-semibold border-black outline-none focus:border-2 hover:border-2 appearance-none"
                    >
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
                <div className="mx-auto">
                    <Button
                        text="Submit"
                        size="lg"
                        variant="primary"
                        type="submit"
                    />
            </div>
            </div>
        </form>
    )
}