import LandingItem from "./LandingItem";
import Container from "./Container";

function Landing() {
  return (
    <>
    {/* section-1 */}
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
              </h1>
              <p
                className="
          
          text-white
          text-[43px] leading-[65px]
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
      {/* section-2 */}
      <div
        className="w-full h-[75vh] bg-cover
         bg-center flex justify-center items-center"
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
            <h3
              className="font-semibold
            text-3xl
            sm:text-4xl
            lg:text-5xl
            xl:text-6xl
            3xl:text-7xl"
            >
              OUR PHILOSOPHY
            </h3>
            <p
              className="
            text-xl
            md:max-w-[90%]
            lg:max-w-[100%]
            lg:text-3xl
            xl:text-4xl
            font-light
            3xl:text-5xl "
            >
              is to ensure that our work aligns with your objectives, creating
              unforgettable events that leave a lasting impact while effectively
              delivering your message.
            </p>
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
          <div
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
          </div>
        </Container>
      </div>
    </>
  );
}

export default Landing;
