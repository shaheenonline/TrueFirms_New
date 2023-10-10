import React from "react";
import './App.css';
// import BenefitIcon1 from "./public/icons/Bicon1.png";

function Benefits () {
    return (
        <section id="benefits" className='pt-8 pb-5'>
            <div className="container-fluid mx-auto px-4 md:container md:mx-auto">
                <div className="row">

                    {/* title */}
                    <div className="text-center" id="title">
                        <div className='sub-titl inline-block py-1 px-2 my-3'>
                            <p className='text-xl md:text-4xl font-bold'>
                            Benefits of IT Staff augmentation
                            </p>
                        </div>
                    </div>

                    {/* sub-title */}
                    <div className="text-center pb-12" id="sub-title">
                        <div className='sub-title bg-subTitleBgColor inline-block py-1 px-2'>
                            <p className='text-subTitleTextColor text-xs md:text-sm font-bold'>
                            Some Benefits of Staff Augmentation
                            </p>
                        </div>
                    </div>    

                    {/* benefits */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-8">

                        <div className="flex">
                            <div className="float-left justify-center items-center ">
                                <div className="relative rounded-full w-[40px] h-[40px] md:w-[60px] md:h-[60px] bg-redColor overflow-hidden">
                                    <img src="././icons/Bicon1.png" alt=" " className="absolute w-[18px] h-[18px] md:w-[26px] md:h-[26px] inset-0 object-cover mx-auto my-auto" />
                                </div>
                            </div>
                            <div className="float-right pl-5">
                                <div>
                                    <h5 className="font-bold text-sm md:text-base">Easily Scale-up and Scale-down</h5>
                                </div>
                                <div>
                                    <p className="text-xs md:text-base">With staff augmentation, you can add resources to your account for a specific duration to speed up your workflow and then scale down as per the demand.</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex">
                            <div className="float-left justify-center items-center ">
                                <div className="relative rounded-full w-[40px] h-[40px] md:w-[60px] md:h-[60px] bg-yellowColor overflow-hidden">
                                    <img src="././icons/Bicon2.png" alt=" " className="absolute w-[18px] h-[18px] md:w-[26px] md:h-[26px] inset-0 object-cover mx-auto my-auto" />
                                </div>
                            </div>
                            <div className="float-right pl-5">
                                <div>
                                    <h5 className="font-bold text-sm md:text-base">No Recruitment Hassles</h5>
                                </div>
                                <div>
                                    <p className="text-xs md:text-base">Our IT Augmentation Services Save Your Company The Hassle Of Searching For And Recruiting Vetted Development Talent. We Take Over The Screening Process And Send You Approved CVs.</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex">
                            <div className="float-left justify-center items-center ">
                                <div className="relative rounded-full w-[40px] h-[40px] md:w-[60px] md:h-[60px] bg-purpleColor overflow-hidden">
                                    <img src="././icons/Bicon3.png" alt=" " className="absolute w-[18px] h-[18px] md:w-[26px] md:h-[26px] inset-0 object-cover mx-auto my-auto" />
                                </div>
                            </div>
                            <div className="float-right pl-5">
                                <div>
                                    <h5 className="font-bold text-sm md:text-base">Access To Vetted And Certified Talent</h5>
                                </div>
                                <div>
                                    <p className="text-xs md:text-base">TrueFirms offers you immediate access to a vast talent pool at affordable costs. Amplify your team with certified software specialists.</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex">
                            <div className="float-left justify-center items-center ">
                                <div className="relative rounded-full w-[40px] h-[40px] md:w-[60px] md:h-[60px] bg-purpleColor overflow-hidden">
                                    <img src="././icons/Bicon4.png" alt=" " className="absolute w-[18px] h-[18px] md:w-[26px] md:h-[26px] inset-0 object-cover mx-auto my-auto" />
                                </div>
                            </div>
                            <div className="float-right pl-5">
                                <div>
                                    <h5 className="font-bold text-sm md:text-base">Lower Operational Costs</h5>
                                </div>
                                <div>
                                    <p className="text-xs md:text-base">Reduce your company's spending by eliminating the costs associated with office space, equipment, taxes, and overhead. Pay for what drives your company's most valuable results.</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex">
                            <div className="float-left justify-center items-center ">
                                <div className="relative rounded-full w-[40px] h-[40px] md:w-[60px] md:h-[60px] bg-greenColor overflow-hidden">
                                    <img src="././icons/Bicon5.png" alt=" " className="absolute w-[18px] h-[18px] md:w-[26px] md:h-[26px] inset-0 object-cover mx-auto my-auto" />
                                </div>
                            </div>
                            <div className="float-right pl-5">
                                <div>
                                    <h5 className="font-bold text-sm md:text-base">Legal Headache Gone</h5>
                                </div>
                                <div>
                                    <p className="text-xs md:text-base">Within our IT augmentation services, we remain the original employers of your hires. We take care of all legal responsibilities and documentation.</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex">
                            <div className="float-left justify-center items-center ">
                                <div className="relative rounded-full w-[40px] h-[40px] md:w-[60px] md:h-[60px] bg-redColor overflow-hidden">
                                    <img src="././icons/Bicon6.png" alt=" " className="absolute w-[18px] h-[18px] md:w-[26px] md:h-[26px] inset-0 object-cover mx-auto my-auto" />
                                </div>
                            </div>
                            <div className="float-right pl-5">
                                <div>
                                    <h5 className="font-bold text-sm md:text-base">Cost Effective</h5>
                                </div>
                                <div>
                                    <p className="text-xs md:text-base">Staff augmentation helps companies save money by hiring temporary employees instead of full-time staff. They do not have to invest in recruitment, employee benefits, tax and more. Training new employees take much less time compared to training existing ones.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
export default Benefits;