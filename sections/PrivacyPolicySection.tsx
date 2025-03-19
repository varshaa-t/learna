import { dmSansFont, manropeFont } from "@/fonts/fonts";

export default function PrivacyPolicySection(){

    return (
        <div className={`flex flex-col items-center overflow-x-hidden bg-tertiary-orange h-full font-semibold space-y-32 pt-20 pb-16 xs:pb-40 md:pb-20 md:pt-16 md:space-y-14 lg:space-y-16 ${dmSansFont.className}`}>
            <div className={`${manropeFont.className} text-[7.5vw] xs:text-[40px] sm:text-4xl md:text-[4.5vw] lg:text-[4.3vw] font-normal text-center w-[730px]`}>Privacy Policy</div>
            <div className={`w-[90vw] text-sm md:w-[50vw] md:text-[15px] lg:text-base flex flex-col space-y-12`}>
                <div className={`flex flex-col space-y-4`}>
                    <div>Learna is committed to providing quality services to you and this policy outlines our ongoing obligations to you in respect of how we manage your Personal Information. We have adopted the Australian Privacy Principles (APPs) contained in the Privacy Act 1988 (Cth) (the Privacy Act). The NPPs govern the way in which we collect, use, disclose, store, secure and dispose of your Personal Information.</div>
                    <div>A copy of the Australian Privacy Principles may be obtained from the website of The Office of the Australian Information Commissioner at www.aoic.gov.au</div>
                    <div>What is Personal Information and why do we collect it?</div>
                    <div>Personal Information is information or an opinion that identifies an individual. Examples of Personal Information we collect include: names, addresses, email addresses, phone and facsimile numbers.</div>
                    <div>This Personal Information is obtained in many ways including correspondence, by telephone and email, via our website www.learna-app.com, from your website, from media and publications, from other publicly available sources and from third parties. We don’t guarantee website links or policy of authorised third parties.</div>
                    <div>We collect your Personal Information for the primary purpose of providing our services to you, providing information to our clients and marketing. We may also use your Personal Information for secondary purposes closely related to the primary purpose, in circumstances where you would reasonably expect such use or disclosure. You may unsubscribe from our mailing/marketing lists at any time by contacting us in writing.</div>
                    <div>When we collect Personal Information we will, where appropriate and where possible, explain to you why we are collecting the information and how we plan to use it.</div>
                    <div>Sensitive Information</div>
                    <div>Sensitive information is defined in the Privacy Act to include information or opinion about such things as an individual&#39;s racial or ethnic origin, political opinions, membership of a political association, religious or philosophical beliefs, membership of a trade union or other professional body, criminal record or health information.</div>
                    <div className="font-bold">Sensitive information will be used by us only:</div>
                    <div>• For the primary purpose for which it was obtained</div>
                    <div>Privacy Policy Template</div>
                    <div>• For a secondary purpose that is directly related to the primary purpose</div>
                    <div>• With your consent; or where required or authorised by law.</div>
                    <div className="font-bold">Third Parties</div>
                    <div>Where reasonable and practicable to do so, we will collect your Personal Information only from you. However, in some circumstances we may be provided with information by third parties. In such a case we will take reasonable steps to ensure that you are made aware of the information provided to us by the third party.</div>
                    <div>Disclosure of Personal Information</div>
                    <div>Your Personal Information may be disclosed in a number of circumstances including the following:</div>
                    <div>• Third parties where you consent to the use or disclosure; and</div>
                    <div>• Where required or authorised by law.</div>
                </div>
                <div className={`flex flex-col space-y-4`}>
                    <div>Security of Personal Information</div>
                    <div>Your Personal Information is stored in a manner that reasonably protects it from misuse and loss and from unauthorized access, modification or disclosure. When your Personal Information is no longer needed for the purpose for which it was obtained, we will take reasonable steps to destroy or permanently de-identify your Personal Information.</div>
                    <div>However, most of the Personal Information is or will be stored in client files which will be kept by us for a minimum of 7 years.</div>
                    <div>Access to your Personal Information</div>
                    <div>You may access the Personal Information we hold about you and to update and/or correct it, subject to certain exceptions. If you wish to access your Personal Information, please contact us in writing.</div>
                    <div>Learna will not charge any fee for your access request, but may charge an administrative fee for providing a copy of your Personal Information.</div>
                    <div>In order to protect your Personal Information we may require identification from you before releasing the requested information.</div>
                    <div>Maintaining the Quality of your Personal Information</div>
                    <div>It is important to us that your Personal Information is up to date. We will take reasonable steps to make sure that your Personal Information is accurate, complete and up-to-date. If you find that the information we have is not up to date or is inaccurate, please advise us as soon as practicable so we can update our records and ensure we can continue to provide quality services to you.</div>
                </div>
                <div className={`flex flex-col space-y-4`}>
                    <div className="font-bold">Policy Updates</div>
                    <div>This Policy may change from time to time and is available on request.</div>
                    <div className="font-bold">Privacy Policy Complaints and Enquiries</div>
                    <div>If you have any queries or complaints about our Privacy Policy please contact us at:</div>
                    <div className="underline underline-offset-4">hello@learna-app.com</div>
                </div>  
           </div>
        </div>
    )
}