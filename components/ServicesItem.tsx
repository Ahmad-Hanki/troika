import Images from "./ui/Images";
type ServicesItemProps = {
    url: string;
    title: string;
    text:string;
    addClass?: string;
};
function ServicesItem({ url, title,text,addClass }: ServicesItemProps) {
  return (
    <div className="flex flex-col relative hover:bg-primary
     space-y-8 p-3 md:p-5   max-md:text-center max-md:justify-center max-md:items-center card
      w-[90%] xs:w-[300px] sm:w-[320px] lg:w-[95%]  2xl:w-[400px] 2xl:p-12 ">
        <i className={` ${url} " text-textColor text-[60px] "`}></i>
        <h3 className="text-white
        text-xl
        sm:text-2xl
        xl:text-3xl
        sm:max-w-[70%] lg:max-w-[90%] 3xl:max-w-[65%]">{title}</h3>
        <p className="text-textColorSec
        text-lg
        xl:text-xl
        ">{text}</p>
    </div>
  )
}

export default ServicesItem
