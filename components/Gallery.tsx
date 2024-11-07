"use client";

import Slider from "react-slick";
import GalleryItem from "./GalleryItem";
import { gallery } from "../Data/data";
import Images from "./ui/Images";
import Container from "./Container";
import { useRef } from "react";
import MotionDiv, { MotionH2 } from "./MotionDiv";
import SlideBar from "./ui/MovingSlide";

function SampleNextArrow(props: {
  className?: any;
  style?: any;
  onClick?: any;
}) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        background: "#040404",
        color: "#040404",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "30px",
        height: "30px",
        fontSize: "20px",
        borderRadius: "50%",
        marginRight: "-20px",
        right: "43%",
        top: "-1000000%",
      }}
      onClick={onClick}
    />
  );
}
function SamplePrevArrow(props: {
  className?: any;
  style?: any;
  onClick?: any;
}) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        background: "#040404",
        color: "#040404",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "30px",
        height: "30px",
        fontSize: "20px",
        borderRadius: "50%",
        marginLeft: "-20px",
        left: "43%",
        top: "-1000000%",
      }}
      onClick={onClick}
    />
  );
}

function Gallery() {
  let sliderRef = useRef<Slider | null>(null);
  const next = () => {
    sliderRef.current && sliderRef.current.slickNext();
  };
  const previous = () => {
    sliderRef.current && sliderRef.current.slickPrev();
  };

  const settings = {
    dots: true,
    infinite: true,
    centerMode: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    pauseOnHover: true,
    centerPadding: "60px",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      {/* Slide Section */}
      <div id="about" className=" flex flex-col space-y-44 bg-white py-56">
        <Container
          clas=" sm:px-8 md:px-[9%] lg:px-[6%] xl:px-[5%]
       2xl:px-[6%] 3xl:px-[150px] md:mx-0 "
        >
          <MotionH2
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.5, type: "spring" }}
            viewport={{ once: true }}
            className="text-4xl xl:text-5xl md:text-start text-center
             text-black  uppercase font-semibold"
          >
            PROJECT GALLERY
          </MotionH2>
        </Container>

        {/* sliding section */}
        <section className="my-24 mx-auto w-full">
          <Slider
            ref={(slider) => {
              if (slider) {
                (sliderRef.current as Slider | null) = slider;
              }
            }}
            {...settings}
          >
            {gallery.map((item) => (
              <MotionDiv
                whileHover={{
                  scale: 1.1,
                  marginTop: "5px",
                  zIndex: 10,
                }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                viewport={{ once: true }}
                key={item.id}
                className=" w-[350px] relative "
              >
                <div className=" mt-4">
                  <p className="text-lg text-black">{item.year}</p>
                  <h3 className="text-xl text-black ">{item.title}</h3>
                </div>
                <Images
                  url={item.url}
                  classs=" hover:z-10 hover:w-full  photo-2 "
                />
              </MotionDiv>
            ))}
          </Slider>
          <div
            className=" relative z-30 mx-24 flex items-center justify-center -mt-[25px] space-x-44"
            style={{ textAlign: "center" }}
          >
            <button
              className="text-4xl text-textColorSec p-5 "
              onClick={previous}
            >
              {" < "}
            </button>
            <button className=" text-4xl text-textColorSec p-5" onClick={next}>
              {" > "}
            </button>
          </div>
        </section>
      </div>

      {/* Companies */}
      <section className="py-20 border-t border-b border-textColorSec ">
        <Container>
          <SlideBar />
        </Container>
      </section>
    </>
  );
}

export default Gallery;
