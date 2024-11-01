import LandingItem from "./LandingItem";
import Container from "./Container";

function Landing() {
  return (
    <>
      <section className="w-full h-[87vh] ">
        <div
          className="bg-cover bg-center  2xl:bg-top w-full h-full"
          style={{ backgroundImage: `url("/landing.png")` }}
        >
          <Container
            clas=" sm:px-8 
          md:px-12
          lg:px-20
          3xl:px-32 "
          >
            <div
              className="
          pt-20 3xl:pt-28 "
            >
              <h1
                className="
          text-textColor
          text-5xl leading-[65px] 
          sm:text-6xl sm:leading-[75px]
          md:leading-[80px]
          lg:w-[74%]
          xl:w-[60%]
          2xl:max-w-[50%]
          lg:text-7xl lg:leading-[90px]
           3xl:text-8xl 3xl:max-w-[60%] 3xl:leading-[110px]"
              >
                FROM PLANNING TO EXECUTION,
              </h1>
              <p
                className="
          
          text-white
          text-5xl leading-[65px]
          sm:text-6xl sm:leading-[75px]
          md:leading-[80px]
          lg:text-7xl lg:leading-[90px]
          3xl:text-8xl 3xl:leading-[110px]"
              >
                ONE STREAM{" "}
              </p>
            </div>
          </Container>
        </div>
      </section>
      <div
        className="w-full h-[75vh] bg-cover bg-center flex justify-center items-center"
        style={{ backgroundImage: `url("/landing-2.jpg")` }}
      >
        <Container
          clas="sm:px-8 
          md:px-12
          3xl:px-20 "
        >
          <div
            className="flex flex-col justify-center items-center text-center px-2 text-black
          space-y-16
          3xl:space-y-32"
          >
            <h3
              className="font-semibold
            text-3xl
            sm:text-4xl
            lg:text-5xl
            3xl:text-6xl"
            >
              OUR PHILOSOPHY
            </h3>
            <p
              className="
            text-xl
            md:max-w-[90%]
            lg:max-w-[100%]
            lg:text-2xl
            3xl:text-4xl 3xl:max-w-[100%]"
            >
              is to ensure that our work aligns with your objectives, creating
              unforgettable events that leave a lasting impact while effectively
              delivering your message.
            </p>
          </div>
        </Container>
      </div>
      <div className="bg-white  py-7">
        <Container
          clas=" sm:px-8 
          md:px-12
          lg:px-20
          3xl:px-32 "
        >
          <div
            className="flex flex-col max-lg:space-y-12  lg:flex-row
              justify-between"
          >
            <LandingItem title="TRUSTWORTHY PRODUCTION" url="/trust.webp" />
            <LandingItem title="COMMITMENT TO QUALITY" url="/quality.webp" />
            <LandingItem
              addClass=" -mt-1 "
              title="ADHERE TO TIME"
              url="/time.webp"
            />
          </div>
        </Container>
      </div>
    </>
  );
}

export default Landing;
