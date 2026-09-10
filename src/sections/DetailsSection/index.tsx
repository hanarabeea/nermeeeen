import { DetailsDecorations } from "@/sections/DetailsSection/components/DetailsDecorations";
import { DetailsContent } from "@/sections/DetailsSection/components/DetailsContent";

export const DetailsSection = () => {
  return (
    <div className="bg-orange-50 box-border caret-transparent outline-[3px]">
      <div className="box-border caret-transparent outline-[3px]">
        <div className="relative bg-orange-100 box-border caret-transparent h-[491px] outline-[3px] w-full overflow-hidden">
          <div className="absolute bg-no-repeat bg-cover box-border caret-transparent h-[491px] outline-[3px] w-full z-0 bg-center left-0 top-0"></div>
          <div className="absolute box-border caret-transparent h-[491px] outline-[3px] w-full z-[1] left-0 top-0"></div>
          <DetailsDecorations
            rootVariant="h-[452px] left-[-184.5px] w-[744px] top-5 md:h-[453px] md:left-[268px]"
            innerVariant="h-full align-middle w-full bg-center"
            imageUrl="https://c.animaapp.com/BdBzBMFXYuOpLb1uxjMwxw/assets/623915249_2629494717.png-2.webp"
            imageClassName="box-border caret-transparent h-full outline-[3px] align-baseline w-full"
          />
          <DetailsContent
            containerVariant="text-stone-600 w-[310px] left-[32.5px] top-[361px] md:left-[485px]"
            contentVariant="text-[21px] font-thin leading-[26px]"
            text="Kindly, no boxed gifts please."
          />
          <DetailsContent
            containerVariant="text-yellow-700 left-[-92.5px] w-[560px] top-[284px] md:left-[360px]"
            contentVariant="text-[41px] font-light leading-[64px]"
            text="Gift Preference"
          />
          <DetailsContent
            containerVariant="text-stone-600 w-[300px] left-[37.5px] top-[163px] md:w-[310px] md:left-[485px]"
            contentVariant="text-[21px] font-thin leading-[26px]"
            text="We kindly ask guests to avoid deep red and maroon attire for the celebration."
          />
          <DetailsContent
            containerVariant="text-yellow-700 left-[-92.5px] w-[560px] top-[86px] md:left-[360px]"
            contentVariant="text-[41px] font-light leading-[64px]"
            text="Dress Code"
          />
          <DetailsDecorations
            rootVariant="table top-[-614px] w-[587px] left-[344.5px] md:left-[357px]"
            innerVariant="table-cell align-middle w-full bg-center"
            imageUrl="https://c.animaapp.com/BdBzBMFXYuOpLb1uxjMwxw/assets/623915249_2629494717.png-3.webp"
            imageClassName="box-border caret-transparent outline-[3px] align-baseline w-full"
          />
          <DetailsDecorations
            rootVariant="table w-[276px] left-[182.5px] -top-px md:w-[305px] md:left-[698px] md:top-[9px]"
            innerVariant="table w-[276px] md:w-[305px]"
            imageUrl="https://c.animaapp.com/BdBzBMFXYuOpLb1uxjMwxw/assets/noroot.png-13.webp"
            imageClassName="box-border caret-transparent outline-[3px] align-baseline w-full"
            wrapperVariant="bg-cover rotate-[0.9999993263990709deg] md:bg-auto md:transform-none"
          />
          <DetailsDecorations
            rootVariant="table left-[-52.5px] w-[251px] top-[264px] md:left-[345px]"
            innerVariant="table w-[251px]"
            imageUrl="https://c.animaapp.com/BdBzBMFXYuOpLb1uxjMwxw/assets/noroot.png-14.webp"
            imageClassName="box-border caret-transparent outline-[3px] align-baseline w-full"
            wrapperVariant="rotate-[-85.9999982984376deg]"
          />
        </div>
      </div>
    </div>
  );
};
