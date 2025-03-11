import React from 'react'
import * as Icon from "@phosphor-icons/react/dist/ssr";
import Image from 'next/image';

const AboutFive = () => {
    return (
        <div className="about-five lg:mt-[100px] sm:mt-16 mt-10">
            <div className="container">
                <div className="main flex max-lg:flex-col-reverse items-center justify-between max-lg:justify-center gap-8">
                    <div className="w-full lg:w-1/2">
                        <div className="text-about">
                            <div className="text-sub-heading2 text-white py-4 px-8 bg-blue rounded-lg inline-block">About</div>
                            <div className="heading3 mt-6">Calcutex Global</div>
                            <div className="body3 text-secondary mt-5">Calcutex Global is a powerhouse team of professional accountants, financial consultants, and tech experts dedicated to providing top-class services to clients worldwide. With a wealth of experience under our belt – at Calcutex Global we are devoted to delivering excellence while maintaining highest standards of data security and data privacy. Our global reach and unwavering commitment to client satisfaction makes us a trusted partner in navigating the complexities of modern accounting, finance and business in general.</div>
                            {/* <div className="list mt-10">
                                <div className="grid sm:grid-cols-2 gap-y-3 gap-7">
                                    <div className="w-full left">
                                        <div className="item flex items-center gap-3">
                                            <Icon.Square weight='fill' className="text-blue" />
                                            <div className="heading7">Blockchain Stratery</div>
                                        </div>
                                        <div className="item flex items-center gap-3 mt-3">
                                            <Icon.Square weight='fill' className="text-blue" />
                                            <div className="heading7">ICO Progress</div>
                                        </div>
                                        <div className="item flex items-center gap-3 mt-3">
                                            <Icon.Square weight='fill' className="text-blue" />
                                            <div className="heading7">Crypto Trading</div>
                                        </div>
                                    </div>
                                    <div className="w-full right">
                                        <div className="item flex items-center gap-3">
                                            <Icon.Square weight='fill' className="text-blue" />
                                            <div className="heading7">Financial assessment</div>
                                        </div>
                                        <div className="item flex items-center gap-3 mt-3">
                                            <Icon.Square weight='fill' className="text-blue" />
                                            <div className="heading7">Blockchain Stratery </div>
                                        </div>
                                        <div className="item flex items-center gap-3 mt-3">
                                            <Icon.Square weight='fill' className="text-blue" />
                                            <div className="heading7">ICO Progress</div>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                    <div className="w-full lg:w-5/12 sm:w-2/3">
                        <div className="bg-img w-full">
                            <Image width={5000} height={5000} className="w-full" src="/images/component/aboutimg.png" alt="" />
                        </div>
                        <div className="sub-img">
                            <Image width={5000} height={5000} src="/images/component/sub-about5-left.png" alt="" />
                            <Image width={5000} height={5000} style={{right: '-30px', bottom: '-50px'}} src="/images/component/sub-about5.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutFive