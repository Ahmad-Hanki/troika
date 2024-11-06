import LandingItem from "./LandingItem";
import Container from "./Container";
import MotionDiv, { MotionH1, MotionH2, Motionp } from "./MotionDiv";
import { AuroraBackground } from "./ui/aurora-background";
import NavBar from "./NavBar";
import { TextGenerateEffect } from "./ui/text-generate-effect";

function Landing() {
  return (
    <>
      {/* section-1 */}

      <AuroraBackground className=" ">
        <NavBar />
        <section className="w-full h-[87vh] ">
          <div
            className="bg-cover bg-center  2xl:bg-top w-full h-full"
            style={{ backgroundImage: `url("/landing.png")` }}
          >
            <Container
              clas="
            px-9
            xs:px-10
            sm:px-12
          md:px-16
          lg:px-20
          3xl:px-32 "
            >
              <div
                className="
          pt-20 3xl:pt-28 "
              >
                <MotionH1
                  initial={{ y: -30, opacity: 0 }}
                  viewport={{ once: true }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1.5, type: "spring", delay: 0.2 }}
                  className="
          text-textColor
          text-[43px] leading-[65px] 
          sm:text-6xl sm:leading-[75px]
          md:leading-[80px]
          lg:w-[74%]
          xl:w-[60%]
          2xl:max-w-[50%]
          lg:text-7xl lg:leading-[90px]
           3xl:text-8xl 3xl:max-w-[60%] 3xl:leading-[110px]"
                >
                  FROM PLANNING TO EXECUTION,
                </MotionH1>
                <MotionH2
                  viewport={{ once: true }}
                  initial={{ y: -30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1.5, type: "spring", delay: 1 }}
                  className="  
          text-white
          text-[43px] leading-[65px]
          sm:text-6xl sm:leading-[75px]
          md:leading-[80px]
          lg:text-7xl lg:leading-[90px]
          3xl:text-8xl 3xl:leading-[110px]"
                >
                  ONE STREAM{" "}
                </MotionH2>
              </div>
            </Container>
          </div>
        </section>
      </AuroraBackground>

      {/* section-2 */}
      <div
        className="w-full  py-56
         bg-left-bottom  flex justify-center items-center"
        style={{ backgroundImage: `url("/landing-2.jpg")` }}
      >
        <Container
          clas="sm:px-8 
          md:px-12
          3xl:px-20 "
        >
          <div
            className="flex
             flex-col justify-center items-center text-center text-black
          space-y-16
          3xl:space-y-32"
          >
            <MotionH2
              initial={{ y: -30, opacity: 0 }}
              viewport={{ once: true }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.5, type: "spring" }}
              className="font-semibold
            text-3xl
            sm:text-4xl
            lg:text-5xl
            xl:text-6xl
            3xl:text-7xl"
            >
              OUR PHILOSOPHY
            </MotionH2>
            <MotionDiv
              initial={{ y: -30, opacity: 0 }}
              viewport={{ once: true }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.5, type: "spring", delay: 0.5 }}
              className="
            text-xl
            md:max-w-[90%]
            lg:max-w-[100%]
            lg:text-3xl
            xl:text-4xl
            font-light
            3xl:text-5xl "
            >
              <TextGenerateEffect
                className="   text-xl
            md:max-w-[90%]
            lg:max-w-[100%]
            lg:text-3xl
            xl:text-4xl
            font-light
            3xl:text-5xl text-black"
                words=" is to ensure that our work aligns with your objectives, creating
              unforgettable events that leave a lasting impact while effectively
              delivering your message."
                filter
                duration={2}
              />
            </MotionDiv>
          </div>
        </Container>
      </div>
      {/* section-3 */}
      <div className="bg-white  py-10  3xl:px-28">
        <Container
          clas=" sm:px-8 
          md:px-12
          lg:px-20
          xl:px-24
          2xl:px-16
          3xl:px-32 "
        >
          <MotionDiv
            initial={{ y: -30, opacity: 0 }}
            viewport={{ once: true }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.5, type: "spring", delay: 0.6 }}
            className="flex flex-col max-lg:space-y-12  lg:flex-row
              justify-between"
          >
            <LandingItem title="TRUSTWORTHY PRODUCTION" url="/trust.webp" />
            <LandingItem title="COMMITMENT TO QUALITY" url="/quality.webp" />
            <LandingItem
              addClass="  w-[80px] "
              title="ADHERE TO TIME"
              url="/time.webp"
            />
          </MotionDiv>
        </Container>
      </div>
    </>
  );
}

export default Landing;
