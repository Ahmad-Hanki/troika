import Image from "next/image";
type GalleryItemProps = {
  url: string;
  addClass?: string;
};

function GalleryItem({ url, addClass }: GalleryItemProps) {
  return (
    <div
      className={` ${addClass} " aspect-square relative overflow-hidden  "`}
    >
      <Image
        fill
        alt={url}
        src={url}
        className=" object-contain object-center "
      />
    </div>
  );
}

export default GalleryItem;
