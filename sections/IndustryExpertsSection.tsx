import Profile from "@/components/Profile";
import TopSection from "@/components/TopSection";

export default function IndustryExpertsSection(){

    return (
        <div className="bg-primary-green flex flex-col pt-16 pb-12 space-y-12">
            <div>
                <TopSection
                    title="Learn from the best in the business"
                    text="From a globally recognised futurist to the person who literally wrote the book on productivity, Learna gives you access to trusted content from more than 30 industry experts and people with lived experience."
                    variant="center"
                />
            </div>
            <div className="flex justify-between pl-4 pr-14">
                <Profile
                    img="https://images.squarespace-cdn.com/content/v1/63560ba563f3f90767df932c/24a31939-1981-41e2-afee-7b8ba1e79ceb/Ben+Hamer.jpg?format=1000w"
                    name="Dr. Ben Hamer"
                    title="Futurist"
                />
                <Profile
                    img="https://images.squarespace-cdn.com/content/v1/63560ba563f3f90767df932c/d7bccc25-881c-4b00-a837-403c9fbeeedd/Sean+Hall.jpg?format=1000w"
                    name="Sean Hall"
                    title="Performance Coach"
                />
                <Profile
                    img="https://images.squarespace-cdn.com/content/v1/63560ba563f3f90767df932c/26354297-3661-4d42-82c0-7f92129081df/Amantha.jpg?format=1000w"
                    name="Amantha Imber"
                    title="Organisational Psychologist"
                />
                <Profile
                    img="https://images.squarespace-cdn.com/content/v1/63560ba563f3f90767df932c/9da6ea77-1eb8-4a22-9a6d-6f844f0b9574/Wade+Kingsley.jpg?format=1000w"
                    name="Wade Kingsley"
                    title="Creative Coach"
                />
                <Profile
                    img="https://images.squarespace-cdn.com/content/v1/63560ba563f3f90767df932c/25d2cabe-4765-4650-981c-fe25044beb71/Steph+Clarke.jpg?format=1000w"
                    name="Steph Clarke"
                    title="Futurist"
                />
                <Profile
                    img="https://images.squarespace-cdn.com/content/v1/63560ba563f3f90767df932c/f1738e5e-3bdc-4d60-a0c3-26d4e2bea344/Lillian.jpg?format=1000w"
                    name="Dr. Lillian Nejad"
                    title="Clinical Psychologist"
                />
            </div>
        </div>
    )
}