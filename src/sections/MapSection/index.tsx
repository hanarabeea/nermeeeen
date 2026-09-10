import { MapDecorations } from "@/sections/MapSection/components/MapDecorations";
import { MapFrame } from "@/sections/MapSection/components/MapFrame";

export const MapSection = () => {
  return (
    <div className="bg-orange-100 box-border caret-transparent outline-[3px] pt-[30px] pb-[60px]">
      <div className="box-border caret-transparent outline-[3px]">
        <div className="relative bg-orange-100 box-border caret-transparent h-[343px] outline-[3px] w-full">
          <div className="absolute bg-no-repeat bg-cover box-border caret-transparent h-[343px] outline-[3px] w-full z-0 bg-center left-0 top-0"></div>
          <div className="absolute box-border caret-transparent h-[343px] outline-[3px] w-full z-[1] left-0 top-0"></div>
          <MapDecorations
            containerVariant="w-[341px] left-[17.5px] top-0.5 md:left-[470px]"
            innerVariant="opacity-80 -scale-100"
            imageSrc="https://c.animaapp.com/BdBzBMFXYuOpLb1uxjMwxw/assets/Rectangle_270.svg"
          />
          <MapFrame />
          <MapDecorations
            containerVariant="top-[-26px] w-[190px] left-[92.5px] md:left-[545px]"
            innerVariant=""
            imageSrc="https://c.animaapp.com/BdBzBMFXYuOpLb1uxjMwxw/assets/noroot.png-11.webp"
          />
          <MapDecorations
            containerVariant="w-[190px] left-[92.5px] top-[328px] md:left-[545px]"
            innerVariant=""
            imageSrc="https://c.animaapp.com/BdBzBMFXYuOpLb1uxjMwxw/assets/noroot.png-12.webp"
          />
        </div>
      </div>
    </div>
  );
};
