"use client";
import ServicesItem from "./ServicesItem";
import { services } from "../Data/data";
import Container from "./Container";
import { MotionH2 } from "./MotionDiv";

interface Service {
  id: number;
  title: string;
  text: string;
  url: string;
}

function Services() {
  return (
    <div id="services" className="py-44  flex flex-col space-y-44 ">
      <Container
        clas=" sm:px-8 md:px-[10%] lg:px-[7%] xl:px-[6%]
       2xl:px-[7%] 3xl:px-[227px] md:mx-0 "
      >
        <MotionH2
          initial={{ x: -30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.5, type: "spring" }}
          className="text-4xl xl:text-5xl md:text-start text-center
                  uppercase font-semibold"
        >
          Services
        </MotionH2>
      </Container>
      <Container
        clas=" grid 
                 grid-cols-1 md:grid-cols-2 lg:grid-cols-3
                 gap-12 md:max-lg:gap-16 2xl:gap-32 3xl:gap-x-44 3xl:gap-y-5
                 sm:px-8 md:px-12 3xl:px-20 "
      >
        {services.map((service: Service) => (
          <ServicesItem
            key={service.id}
            title={service.title}
            text={service.text}
            url={service.url}
          />
        ))}
      </Container>
    </div>
  );
}

export default Services;
