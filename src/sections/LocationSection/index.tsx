import { LocationDecorations } from "@/sections/LocationSection/components/LocationDecorations";
import { LocationDetails } from "@/sections/LocationSection/components/LocationDetails";

export const LocationSection = () => {
  return (
    <div className="bg-orange-100 box-border caret-transparent outline-[3px] pt-[30px]">
      <div className="box-border caret-transparent outline-[3px]">
        <div className="relative bg-orange-100 box-border caret-transparent h-[427px] outline-[3px] w-full">
          <div className="absolute bg-no-repeat bg-cover box-border caret-transparent h-[427px] outline-[3px] w-full z-0 bg-center left-0 top-0"></div>
          <div className="absolute box-border caret-transparent h-[427px] outline-[3px] w-full z-[1] left-0 top-0"></div>
          <LocationDecorations
            rootVariantClass="w-24 left-[137.5px] top-[81px] md:left-[590px]"
            imageSrc="https://c.animaapp.com/BdBzBMFXYuOpLb1uxjMwxw/assets/acomm-decor.png.webp"
            imageWrapperClass="box-border caret-transparent table-cell outline-[3px] align-middle w-full bg-center"
          />
          <LocationDecorations
            rootVariantClass="left-[-2.5px] w-[380px] top-[174px] md:left-[450px]"
            imageSrc="https://c.animaapp.com/BdBzBMFXYuOpLb1uxjMwxw/assets/ChatGPT_Image_May_25.png.webp"
            imageWrapperClass="box-border caret-transparent table-cell outline-[3px] align-middle w-full bg-center"
          />
          <LocationDecorations
            rootVariantClass="w-[41px] left-[322.5px] top-5 md:left-[775px]"
            imageSrc="https://c.animaapp.com/BdBzBMFXYuOpLb1uxjMwxw/assets/noroot.png-5.webp"
            middleWrapperClass="box-border caret-transparent table opacity-0 outline-[3px] translate-x-[77px] translate-y-[381px] rotate-[1.999999842926156deg] w-[41px]"
            imageWrapperClass="box-border caret-transparent table-cell outline-[3px] align-middle w-full bg-center"
          />
          <LocationDecorations
            rootVariantClass="w-[43px] left-[64.5px] top-[11px] md:left-[509px]"
            imageSrc="https://c.animaapp.com/BdBzBMFXYuOpLb1uxjMwxw/assets/noroot.png-6.webp"
            middleWrapperClass="box-border caret-transparent table opacity-0 outline-[3px] translate-x-[-77px] translate-y-[381px] rotate-[1.999999842926156deg] w-[43px]"
            imageWrapperClass="box-border caret-transparent table-cell outline-[3px] rotate-[-143.00001795368004deg] align-middle w-full bg-center"
          />
          <LocationDecorations
            rootVariantClass="left-[-6.5px] w-[42px] top-[127px] md:left-[442px] md:top-[117px]"
            imageSrc="https://c.animaapp.com/BdBzBMFXYuOpLb1uxjMwxw/assets/noroot.png-7.webp"
            middleWrapperClass="box-border caret-transparent table opacity-0 outline-[3px] translate-x-[67px] translate-y-56 rotate-[-5.999972975483472deg] w-[42px]"
            imageWrapperClass="box-border caret-transparent table-cell outline-[3px] align-middle w-full bg-center"
          />
          <LocationDecorations
            rootVariantClass="w-[38px] left-[354.5px] top-36 md:left-[807px]"
            imageSrc="https://c.animaapp.com/BdBzBMFXYuOpLb1uxjMwxw/assets/noroot.png-8.webp"
            middleWrapperClass="box-border caret-transparent table opacity-0 outline-[3px] translate-x-[-99px] translate-y-[251px] rotate-[1.999999842926156deg] w-[38px]"
            imageWrapperClass="box-border caret-transparent table-cell outline-[3px] align-middle w-full bg-center"
          />
          <LocationDecorations
            rootVariantClass="w-[38px] left-[12.5px] top-[260px] md:left-[465px]"
            imageSrc="https://c.animaapp.com/BdBzBMFXYuOpLb1uxjMwxw/assets/noroot.png-9.webp"
            middleWrapperClass="box-border caret-transparent table opacity-0 outline-[3px] translate-x-[39px] translate-y-[83px] rotate-[-12.000012571476546deg] w-[38px]"
            imageWrapperClass="box-border caret-transparent table-cell outline-[3px] align-middle w-full bg-center"
          />
         <LocationDecorations
            rootVariantClass="w-[42px] left-[277.5px] top-[284px] md:left-[730px]"
            imageSrc="https://c.animaapp.com/BdBzBMFXYuOpLb1uxjMwxw/assets/noroot.png-10.webp"
            middleWrapperClass="box-border caret-transparent table opacity-0 outline-[3px] translate-x-[-39px] translate-y-[73px] rotate-[-5.999972975483472deg] w-[42px]"
            imageWrapperClass="box-border caret-transparent table-cell outline-[3px] align-middle w-full bg-center"
          />
          <LocationDetails
            containerVariant="text-stone-600 w-[232px] left-[71.5px] top-[111px] md:left-[524px]"
            textVariant="text-xl font-thin leading-[31px]"
            text="Islamic Center of Melville"
          />
          <LocationDetails
            containerVariant="text-stone-600 w-[308px] left-[33.5px] top-[149px] md:left-[486px]"
            textVariant="text-[17px] font-thin leading-[21px]"
            text="Address: 118 Old East Neck Road Melville, NY 11747"
          />
          <LocationDetails
            containerVariant="text-yellow-700 left-[-92.5px] w-[560px] top-7 md:left-[360px]"
            textVariant="text-[41px] font-light leading-[64px]"
            text="Location"
          />
        </div>
      </div>
    </div>
  );
};