import Container from "./Container";
import Images from "./ui/Images";
import VisionItem from "./VisionItem";

function Vision() {
  return (
    <>
      {/* section-1 */}
      <section id="portfolio" className=" py-20 lg:py-32 border-t-2 border-textColorSec bg-white">
        <Container clas=" sm:px-8 md:px-12 lg:px-20 3xl:px-32 ">
          <div className="flex flex-col max-lg:space-y-24 lg:flex-row items-center justify-center justify-bewtween">
            <div className="flex flex-col space-y-12 lg:space-y-32 2xl:space-y-48 3xl:space-y-80 max-lg:justify-center max-lg:items-center max-lg:text-center">
              <h3 className="text-black text-4xl md:text-5xl xl:text-6xl 3xl:text-7xl">VISION</h3>
              <p className="text-textColor xs:text-lg md:text-xl xl:text-2xl 3xl:text-3xl
              lg:max-w-[80%]
              3xl:max-w-[60%]">
                Our priority is to ensure that our work aligns with your
                objectives, creating unforgettable events that leave a lasting
                impact while effectively delivering your message.
              </p>
            </div>
            <Images url="/vision.JPG" classs=" w-[100%]
             xs:w-[90%]
             sm:w-[80%]\
             md:w-[70%]
             lg:w-[800px]
             xl:w-[900px] 
             2xl:w-[1000px]
             3xl:h-[600px]
             " />
          </div>
        </Container>
      </section>
      {/* section-2 */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 h-[110vh] sm:h-[120vh] lg:h-[80vh] 3xl:h-[90vh]">
        <VisionItem addClass=" object-center  " title="PLANING" url="/planing.JPG"/>
        <VisionItem addClass=" object-top photo-2 " title="EXECUTION" url="/execution.png" />
        <VisionItem addClassGrid=" md:max-lg:col-span-full   " addClass="  xs:object-left lg:object-center xl:object-left "  title="FINISHING" url="/fishing.jpg" />
      </section>
      {/* section-3 */}
    </>
  );
}

export default Vision;
