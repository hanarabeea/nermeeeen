import { RsvpContent } from "@/sections/RsvpSection/components/RsvpContent";
import { RsvpButton } from "@/sections/RsvpSection/components/RsvpButton";

export const RsvpSection = () => {
  return (
    <div className="bg-orange-50 box-border caret-transparent outline-[3px]">
      <div className="box-border caret-transparent outline-[3px]">
        <div className="relative bg-orange-100 box-border caret-transparent h-[438px] outline-[3px] w-full overflow-hidden">
          <div className="absolute bg-no-repeat bg-cover box-border caret-transparent h-[438px] outline-[3px] w-full z-0 bg-center left-0 top-0"></div>
          <div className="absolute box-border caret-transparent h-[438px] outline-[3px] w-full z-[1] left-0 top-0"></div>
          <RsvpContent
            containerVariant="text-stone-600 w-[372px] left-[1.5px] top-[135px] md:left-[454px]"
            textVariant="text-[21px] font-thin leading-[26px]"
            text="To help us prepare for a joyful celebration, kindly confirm your attendance. "
          />
          <RsvpContent
            containerVariant="text-yellow-700 left-[-92.5px] w-[560px] top-[51px] md:left-[360px]"
            textVariant="text-[41px] font-light leading-[64px]"
            text="Confirm Your Attendance"
          />
          <RsvpButton
            variant="seal"
            outerVariantClass="w-[190px] left-[92.5px] top-[210px] md:left-[545px]"
            middleVariantClass=""
            innerVariantClass=""
            href="#popup:myform"
            imageSrc="https://c.animaapp.com/BdBzBMFXYuOpLb1uxjMwxw/assets/wax_seal_1.png.webp"
            imageAlt=""
            label=""
          />
          <RsvpButton
            variant="icon"
            outerVariantClass="w-[25px] left-[174.5px] top-[368px] md:left-[627px]"
            middleVariantClass="w-[25px]"
            innerVariantClass="-scale-100"
            href=""
            imageSrc="https://c.animaapp.com/BdBzBMFXYuOpLb1uxjMwxw/assets/icon-5.svg"
            imageAlt="Icon"
            label=""
          />
          <RsvpButton
            variant="text"
            outerVariantClass="text-yellow-700 text-center w-56 left-[75.5px] top-[387px] md:left-[528px]"
            middleVariantClass="w-56"
            innerVariantClass="text-[32px] font-light bg-cover leading-[50px] font-newfonts md:bg-auto"
            href=""
            imageSrc=""
            imageAlt=""
            label="Click to open"
          />
        </div>
      </div>
    </div>
  );
};
