import TopNavOne from "@/components/Header/TopNav/TopNavOne";
import MenuOne from "@/components/Header/Menu/MenuOne";
import SliderOne from "@/components/Slider/SliderOne";
import ServiceOne from "@/components/Section/Service/ServiceOne";
import serviceData from '@/data/service.json'
import PaymentGatewayOneFirst from "@/components/Section/PaymentGateway/PaymentGatewayOneFirst";
import CaseStudyOne from "@/components/Section/CaseStudy/CaseStudyOne";
import PaymentGatewayOneSecond from "@/components/Section/PaymentGateway/PaymentGatewayOneSecond";
import FaqsOne from "@/components/Section/FAQs/FaqsOne";
import FormRequestOne from "@/components/Section/FormRequest/FormRequestOne";
import blogData from '@/data/blog.json'
import BlogOne from "@/components/Section/Blog/BlogOne";
import PartnerOne from "@/components/Section/Partner/PartnerOne";
import Footer from "@/components/Footer/Footer";
import SliderTwo from "@/components/Slider/SliderTwo";
import SliderFive from "@/components/Slider/SliderFive";
import AboutFive from "@/components/Section/About/AboutFive";
import ServiceSix from "@/components/Section/Service/ServiceSix";
import ServiceSixSecond from "@/components/Section/Service/ServiceSixSecond";
import AboutTwo from "@/components/Section/About/AboutTwo";
import CounterTwo from "@/components/Section/Counter/CounterTwo";
import ProjectTwo from "@/components/Section/Project/ProjectTwo";
import ServiceTwo from "@/components/Section/Service/ServiceTwo";

export default function Home() {
  return (
    <>
      <div className="overflow-x-hidden">
        <header id="header">
          <TopNavOne />
          <MenuOne />
        </header>
        <main className="content">
          <SliderFive />
          <AboutTwo/>
          <CounterTwo classname='lg:py-10 py-7 border-t border-line' />
          <ServiceTwo data={serviceData} />

          <ProjectTwo />


          {/* <ServiceOne data={serviceData} /> */}
          {/* <PaymentGatewayOneSecond /> */}
          {/* <ServiceSix data={serviceData}  /> */}
          <ServiceTwo data={serviceData} />
          
          {/* <PaymentGatewayOneFirst /> */}
          {/* <CaseStudyOne /> */}
          {/* <FaqsOne /> */}
          {/* <FormRequestOne /> */}
          {/* <BlogOne data={blogData} /> */}
          <PartnerOne classname='bg-blue lg:mt-[100px] sm:mt-16 mt-10' />
        </main>
        <footer id="footer">
          <Footer />
        </footer>
      </div>
    </>
  );
}
