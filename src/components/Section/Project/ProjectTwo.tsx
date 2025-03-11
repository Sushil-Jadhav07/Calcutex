'use client'

import Image from "next/image"
import Link from "next/link"
import * as Icon from "@phosphor-icons/react/dist/ssr";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css/bundle';

const ProjectTwo = () => {
    return (
        <div className="our-project-block lg:mt-[100px] sm:mt-16 mt-10">
            <div className="container">
                <div className="heading3 text-center">Our Code of Conduct</div>
                <div className="body2 text-secondary mt-3 text-center">Find your favourite jobs and get the benefits of yourself</div>
            </div>
            <div className="list-project md:mt-10 mt-7">
                <Swiper
                    spaceBetween={0}
                    slidesPerView={1}
                    loop={true}
                    pagination={{ clickable: true }}
                    speed={400}
                    modules={[Pagination, Autoplay]}
                    className='h-full relative'
                    autoplay={{
                        delay: 4000,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 10,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 10,
                        },
                        1280: {
                            slidesPerView: 4,
                            spaceBetween: 10,
                        }
                    }}
                >
                    <SwiperSlide>
                        <div className="item">
                            <div className="bg-img overflow-hidden">
                                <Image width={5000} height={5000} className="w-full h-full" src="/images/component/472x354.png" alt="" />
                            </div>
                            <Link className="text" href="/case-studies/case-studies-one">
                                <div className="heading5 text-white">Equality
                                </div>
                                <div className="body3 text-white mt-1">
                                To be fair and impartial towards individuals regardless of their gender, sexual orientation, religion, or disability. And create an environment where diversity is valued and respected</div>
                            </Link>
                            <Link className="arrow w-[52px] h-[52px] flex items-center justify-center bg-white rounded-full hover:text-white" href="/case-studies/case-studies-one">
                                <Icon.ArrowRight className="text-3xl" />
                            </Link>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="item">
                            <div className="bg-img overflow-hidden">
                                <Image width={5000} height={5000} className="w-full h-full" src="/images/component/472x354.png" alt="" />
                            </div>
                            <Link className="text" href="/case-studies/case-studies-one">
                                <div className="heading5 text-white">Integrity
                                </div>
                                <div className="body3 text-white mt-1">To uphold honest, ethical, and consistent behavior in all our business dealings. And to be transparent and truthful with our clients</div>
                            </Link>
                            <Link className="arrow w-[52px] h-[52px] flex items-center justify-center bg-white rounded-full hover:text-white" href="/case-studies/case-studies-one">
                                <Icon.ArrowRight className="text-3xl" />
                            </Link>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="item">
                            <div className="bg-img overflow-hidden">
                                <Image width={5000} height={5000} className="w-full h-full" src="/images/component/472x354.png" alt="" />
                            </div>
                            <Link className="text" href="/case-studies/case-studies-one">
                                <div className="heading5 text-white">Excellence
                                </div>
                                <div className="body3 text-white mt-1">To constantly strive for higher standards of performance and achievement. And to create a outlook that drives excellence in every aspect of business operations and interactions.</div>
                            </Link>
                            <Link className="arrow w-[52px] h-[52px] flex items-center justify-center bg-white rounded-full hover:text-white" href="/case-studies/case-studies-one">
                                <Icon.ArrowRight className="text-3xl" />
                            </Link>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="item">
                            <div className="bg-img overflow-hidden">
                                <Image width={5000} height={5000} className="w-full h-full" src="/images/component/472x354.png" alt="" />
                            </div>
                            <Link className="text" href="/case-studies/case-studies-one">
                                <div className="heading5 text-white">Accountability
                                </div>
                                <div className="body3 text-white mt-1">Business Planning</div>
                            </Link>
                            <Link className="arrow w-[52px] h-[52px] flex items-center justify-center bg-white rounded-full hover:text-white" href="/case-studies/case-studies-one">
                                <Icon.ArrowRight className="text-3xl" />
                            </Link>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="item">
                            <div className="bg-img overflow-hidden">
                                <Image width={5000} height={5000} className="w-full h-full" src="/images/component/472x354.png" alt="" />
                            </div>
                            <Link className="text" href="/case-studies/case-studies-one">
                                <div className="heading5 text-white">Collaboration
                                </div>
                                <div className="body3 text-white mt-1">Manage Account Infor</div>
                            </Link>
                            <Link className="arrow w-[52px] h-[52px] flex items-center justify-center bg-white rounded-full hover:text-white" href="/case-studies/case-studies-one">
                                <Icon.ArrowRight className="text-3xl" />
                            </Link>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="item">
                            <div className="bg-img overflow-hidden">
                                <Image width={5000} height={5000} className="w-full h-full" src="/images/component/472x354.png" alt="" />
                            </div>
                            <Link className="text" href="/case-studies/case-studies-one">
                                <div className="heading5 text-white">Learning

                                </div>
                                <div className="body3 text-white mt-1">Manage Account Infor</div>
                            </Link>
                            <Link className="arrow w-[52px] h-[52px] flex items-center justify-center bg-white rounded-full hover:text-white" href="/case-studies/case-studies-one">
                                <Icon.ArrowRight className="text-3xl" />
                            </Link>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}
export default ProjectTwo