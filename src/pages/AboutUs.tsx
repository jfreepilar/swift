import { useEffect } from "react";
import { sectionMargin } from "./Home";
import { useSlideUpEffect } from "../utils/slideUpEffect";
import groupOfPeople  from "../assets/images/about-us/group-of-people.png";
import digitalBank  from "../assets/images/about-us/digital-bank.png";
import pieChart  from "../assets/images/about-us/pie-chart.png";
import boardOfDirectors from "../assets/images/about-us/board-of-directors.png";

export const AboutUs = () => {
    const { sectionsRef, slideUpClass } = useSlideUpEffect();

    useEffect(() => {
        document.title = "About Us | Swift";
    }, []);

    const aboutUsParagraphs: string[] = [
        "We are transforming the way you bank by bringing secure, seamless, and convenient financial services to your fingertips. As a fully digital bank, we eliminate the need for physical branches, allowing you to manage your money anytime, anywhere.",
        "Our platform is designed with cutting-edge technology to ensure fast transactions, top-tier security, and an intuitive user experience. Whether you're making payments, saving for the future, or handling everyday banking needs, we provide the tools to help you stay in control of your finances effortlessly.",
        "With a commitment to innovation and customer satisfaction, we are here to redefine banking—making it smarter, simpler, and more accessible for everyone."
    ];

    interface MissionVisionParagraphs {
        title: string;
        paragraph: string;
        backgroundColor: string;
        textColor: string;
    }
    const missionVisionParagraphs: MissionVisionParagraphs[] = [
        {
            title: "Our Mission",
            paragraph: "At Swift, our mission is to revolutionize banking by providing seamless, secure, and innovative digital financial solutions. We strive to empower individuals and businesses with convenient, technology-driven services that simplify money management, enhance financial accessibility, and promote long-term financial well-being. Through continuous innovation, top-tier security, and exceptional customer service, we aim to make banking effortless, transparent, and tailored to the evolving needs of our users.",
            backgroundColor: "bg-prim",
            textColor: "text-dusty-violet"
        },
        {
            title: "Our Vision",
            paragraph: "Our vision is to be the leading digital bank that transforms the financial landscape through innovation, accessibility, and customer-centric solutions. We aspire to create a world where banking is not only fast and efficient but also inclusive and empowering. By leveraging advanced technology, data-driven insights, and a commitment to financial literacy, we aim to bridge the gap between traditional banking and the digital future—ensuring that everyone, regardless of location or background, has the tools to achieve financial success.",
            backgroundColor: "bg-dusty-violet",
            textColor: "text-prim"
        }
    ];

 return (
    <div className="flex flex-col items-center">
        <section  className={`${sectionMargin} rounded-2xl bg-lavander flex flex-col lg:flex-row h-fit`}>
            <div className="ms-10 mt-20">
                <h2 className="leading-12">The Power of Meaningful Digital Banking</h2>
                <p className="text-2xl mt-6">We prioritize you to provide a banking experience that truly matters</p>
            </div>

            <div>
                <img src={groupOfPeople} className="w-[1600px] h-[600px]"/>
            </div>
        </section>

        <section ref={(el) => {sectionsRef.current[0] = el;}} className={`${sectionMargin} ${slideUpClass(0)}`}>
            <div className="flex">
                <div>
                    <img src={digitalBank} className="hidden md:block w-[700px]"/>
                </div>
                <div className="w-full md:w-1/2 flex flex-col items-center ">
                    <div className="text-center">
                        <p className="text-2xl">Who we are</p>
                        <h1 className="font-machina-neue! text-8xl!">swift</h1>
                        <h3 className="mt-[-25px]"><em>All-in-1 Bank</em></h3>
                    </div>

                    <div className="flex flex-col gap-8 mt-8">
                        {aboutUsParagraphs.map((item, index) => (
                            <p key={index} className="text-2xl">{item}</p>
                        ))}
                    </div>

                </div>
            </div>
        </section>

        <section ref={(el) => {sectionsRef.current[1] =el;}} className={`${sectionMargin} flex flex-col items-center ${slideUpClass(1)}`}>
            <h2>Mission and Vision</h2>
            <div className="flex gap-4">
                {missionVisionParagraphs.map((item, index) => (
                    <div key={index} className={`${item.backgroundColor} flex flex-col items-center mt-8 p-6 rounded-4xl`}>
                        <h3 className={`${item.textColor} text-2xl`}><em>{item.title}</em></h3>
                        <p className={`${item.textColor} text-xl text-center leading-10`}>{item.paragraph}</p>
                    </div>
                ))
                }
            </div>
        </section>

        <section ref={(el) => {sectionsRef.current[2] =el;}} className={`${sectionMargin} ${slideUpClass(2)} flex `}>
            <div className="flex flex-col lg:flex-row justify-center gap-10">
                <div className="p-4 flex justify-center">
                    <img src={pieChart}
                         className="w-[450px] rounded-xl shadow-[var(--custom-shadow)]"/>
                </div>

                <div className="px-10 w-full lg:w-1/2 ">
                    <h2 className="text-center">Who Owns Swift</h2>
                    <p className="text-xl text-center lg:text-start">
                        The founding team and executive leadership often retain the largest stake, holding 50% ownership. This ensures they maintain significant influence and strategic control over the company's direction. <br/> <br/> Public shareholders—a mix of retail investors and institutional entities—hold 25%, having acquired their shares through the stock market. The remaining 25% is held by venture capitalists and early institutional investors, who provided the initial funding and support during the company’s formative stages. This ownership structure reflects a balance between strong leadership, strategic investment, and public market participation, fostering both stability and long-term innovation.
                    </p>
                </div>
            </div>

        </section>

        <section ref={(el) => {sectionsRef.current[3] =el;}} className={`${sectionMargin} ${slideUpClass(3)}`}>
            <h2 className="text-center">Board of Directors</h2>
            <div>
                <img src={boardOfDirectors} alt="" />
            </div>

        </section>
    </div>
 )
}