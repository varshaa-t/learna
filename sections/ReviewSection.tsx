import BulletPoint from "@/components/BulletPoint";
import Line from "@/components/Line";
import ReviewBox from "@/components/ReviewBox";
import TopSection from "@/components/TopSection";
import Image from "next/image";

export default function ReviewSection(){

    return (
        <div className="bg-light-peach h-full flex flex-col pt-20 pb-20">
            <div className="flex justify-evenly items-center pb-52">
                <div className="relative rounded-t-full overflow-hidden">
                    <Image
                        src={"https://images.squarespace-cdn.com/content/v1/63560ba563f3f90767df932c/affc3dd5-cab6-4c9b-bf00-e78e5e69208e/Frame+3-1.jpg?format=2500w"}
                        alt="review-1"
                        width={430}
                        height={400}
                    />
                    <div className="absolute bottom-8 left-[15%]">
                        <ReviewBox
                            review={`“Learna empowers the team to learn on their terms.”`}
                            reviewer="— Cecellia Telkes – Learning Projects Consultant, CPM"
                        />
                    </div>
                </div>
                <div>
                    <TopSection
                        title="For modern workplace learners"
                        text="With Learna, taking charge of your career and chasing those goals is easy. Get the outcomes you want (and deserve!) with learning recommendations tailored to your needs, and a schedule that suits you."
                        variant="left"
                    />
                    <Line/>
                    <BulletPoint
                        text="Learn new skills, habits and ways of working from leading experts on creativity, psychology, productivity and more"
                    />
                    <Line/>
                    <BulletPoint
                        text="Track your progress to have more confident, productive career chats with your manager"
                    />
                    <Line/>
                    <BulletPoint
                        text="Learn on your terms — when, where and how much you want to"
                    />
                </div>
            </div>
            <div className="flex justify-evenly items-center">
                <div>
                    <TopSection
                        title="And innovative people leaders"
                        text="Understand what’s influencing your workplace culture and help people fall in love with learning again with actionable advice they can put into practise every day."
                        variant="left"
                    />
                    <Line/>
                    <BulletPoint
                        text="Have more informed and productive discussions with Learna’s insightful analytics"
                    />
                    <Line/>
                    <BulletPoint
                        text="Support people with a personalised platform that inspires self-driven learning and development"
                    />
                    <Line/>
                    <BulletPoint
                        text="Improve engagement with bite-sized content designed to fit in with everyday habits"
                    />
                </div>
                <div className="relative rounded-t-full overflow-hidden">
                    <Image
                        src={"https://images.squarespace-cdn.com/content/v1/63560ba563f3f90767df932c/61db9366-82f1-43a7-b3bc-072cb70253f3/Frame+3.jpg?format=2500w"}
                        alt="review-2"
                        width={430}
                        height={400}
                    />
                    <div className="absolute bottom-8 left-[15%]">
                        <ReviewBox
                            review={`“It’s been a game-changer for us, we’ve really put learning into action”`}
                            reviewer="— Shai Roitman – Managing Director, Data Sauce and Sticki"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}