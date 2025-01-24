import EmailTemplate from '@/components/EmailTemplate';
import { type NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {

    const { firstName, lastName, email, companyName, findAboutUs } = await request.json();

    if(!firstName || !lastName || !email || !companyName || !findAboutUs){
        return NextResponse.json(
            { message: "Missing required fields" },
            { status: 500 }
        );
    }

    try {
        const { data, error } = await resend.emails.send({
            from: "onboarding@resend.dev",
            to: "varshaa.testcc@gmail.com",
            subject: "Contact Form",
            react: EmailTemplate({ firstName, lastName, companyName, email, findAboutUs})
        })
    
        if(error){
            
            return NextResponse.json(
                { message: "Email sending failed", error },
                { status:  400 }
            )
        }
    
        return NextResponse.json(
            { message: "Email sent successfully", data },
            { status: 200 }
        ); 
    } catch (error) {
        console.error("Error sending email:", error);
        return NextResponse.json(
            { message: "Failed to send email", error },
            { status: 500 }
        );
    }
}