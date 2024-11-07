"use client";
import Container from "./Container";
import { useForm, type FieldValues } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { MotionForm, MotionH2 } from "./MotionDiv";

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    getValues,
  } = useForm();

  const onSubmit = async (data: FieldValues) => {
    // TODO: submit to server
    // ...
    await new Promise((resolve) => setTimeout(resolve, 1000));

    reset();
  };

  return (
    <section id="contact" className="pt-64 pb-44 bg-white">
      <Container
        clas=" flex flex-col lg:flex-row max-lg:space-y-12
        sm:px-8 md:px-12 3xl:px-20 justify-center
         items-center
          lg:space-x-[102px] xl:space-x-[123px] 2xl:space-x-[170px] 3xl:space-x-64 text-center "
      >
        <MotionH2
          initial={{ x: -30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}

          transition={{ duration: 1.5, type: "spring" }}
          className="text-4xl text-black  
         order-first  xl:w-fit text-nowrap  lg:self-start xl:text-5xl 
         md:text-start text-center uppercase"
        >
          Contact us
        </MotionH2>
        <MotionForm
          initial={{ y: -30, opacity: 0 }}
          viewport={{ once: true }}

          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5, type: "spring", delay: 0.3 }}
          onSubmit={handleSubmit(onSubmit)}
          className=" relative
          w-[80%] xs:w-[75%] sm:w-[65%] md:max-lg:w-[60%] lg:max-w-[50%]
          flex flex-col xl:max-w-[650px] grow order-last
           items-center justify-center space-y-5 lg:space-y-8 2xl:sapce-y-12"
        >
          <input
            {...register("name", {
              required: "Name is required",
            })}
            type="text"
            placeholder="Name"
            className="w-[100%] py-2 rounded-none text-textColorSec focus:text-white placeholder:text-textColorSec  bg-transparent outline-none border-b-2 border-textColorSec"
          />
          {errors.name && (
            <p className="text-red-500 self-start ">{`${errors.name.message}`}</p>
          )}
          <input
            {...register("phone", {
              required: "Phone is required",
            })}
            type="text"
            placeholder="Phone"
            className="w-[100%] py-2 rounded-none text-textColorSec focus:text-white placeholder:text-textColorSec  bg-transparent outline-none border-b-2 border-textColorSec"
          />
          {errors.phone && (
            <p className="text-red-500 self-start ">{`${errors.phone.message}`}</p>
          )}
          <input
            {...register("email", {
              required: "Email is required",
            })}
            type="email"
            placeholder="Email"
            className="w-[100%] py-2 rounded-none text-textColorSec focus:text-white placeholder:text-textColorSec  bg-transparent outline-none border-b-2 border-textColorSec"
          />
          {errors.email && (
            <p className="text-red-500 self-start ">{`${errors.email.message}`}</p>
          )}
          <textarea
            {...register("message", {
              required: "Message is required",
              minLength: {
                value: 10,
                message: "Message must be at least 10 characters",
              },
            })}
            placeholder="Message"
            rows={4}
            className="w-[100%] py-2 rounded-none text-textColorSec focus:text-white placeholder:text-textColorSec  bg-transparent outline-none border-b-2 border-textColorSec"
          />
          {errors.message && (
            <p className="text-red-500 self-start ">{`${errors.message.message}`}</p>
          )}

          <Button
            disabled={isSubmitting}
            type="submit"
            className=" bg-black text-white absolute -bottom-28 px-12 self-start
           disabled:bg-gray-500 text-lg py-4 rounded-none "
          >
            Submit
          </Button>
        </MotionForm>
      </Container>
    </section>
  );
}

export default Contact;
