import Images from "./ui/Images";

type LandingItemProps = {
    url: string;
    title: string;
    addClass?: string;
};
function LandingItem({ url, title,addClass }: LandingItemProps) {
  return (
    <div className="flex flex-col max-lg:items-center max-lg:justify-center">
        <Images url={url} classs={` ${addClass} "  w-[85px] lg:-ml-3 "`} />
        <p className="text-textColorSec max-lg:text-center text-xl sm:text-2xl  xl:text-3xl
        max-w-[60%] sm:max-w-[40%] lg:max-w-[70%] 3xl:max-w-[50%]">{title}</p>
    </div>
  )
}

export default LandingItem
