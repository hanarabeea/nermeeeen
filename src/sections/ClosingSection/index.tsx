import { ClosingDecorations } from "@/sections/ClosingSection/components/ClosingDecorations";
import { ClosingMessage } from "@/sections/ClosingSection/components/ClosingMessage";

export const ClosingSection = () => {
  return (
    <div className="bg-stone-300 box-border caret-transparent outline-[3px]">
      <div className="box-border caret-transparent outline-[3px]">
        <div className="relative bg-orange-100 box-border caret-transparent h-[673px] outline-[3px] w-full overflow-hidden">
          <div className="absolute bg-no-repeat bg-cover box-border caret-transparent h-[673px] outline-[3px] w-full z-0 bg-center left-0 top-0"></div>
          <div className="absolute box-border caret-transparent h-[673px] outline-[3px] w-full z-[1] left-0 top-0"></div>
          <ClosingDecorations
            rootVariant="left-[-37.5px] w-[450px] top-0 md:left-[415px]"
            imageUrl="https://c.animaapp.com/BdBzBMFXYuOpLb1uxjMwxw/assets/pexels-vinicius-quar.jpg.webp"
            showImageWrapper={true}
            showDecorationWrapper={false}
          />
          <ClosingDecorations
            rootVariant="h-[237px] left-[-37.5px] w-[451px] top-0 md:left-[414px]"
            decorationVariant="bg-[linear-gradient(0deg,rgba(232,221,207,0)_0%,rgb(249,240,224)_100%)] bg-cover table-cell align-middle w-full md:bg-auto"
            showDecorationWrapper={true}
          />
          <ClosingMessage
            classNameVariant="left-[-92.5px] w-[560px] top-3 md:left-[360px]"
            messageClassNameVariant="text-[41px] font-light leading-[64px]"
            message="Hope to see you there!"
          />
          <ClosingDecorations
            rootVariant="left-[-80.5px] w-[537px] top-[173px] md:left-[372px]"
            decorationVariant="table w-[537px]"
            imageUrl="https://c.animaapp.com/BdBzBMFXYuOpLb1uxjMwxw/assets/623915249_2629494717.png-4.webp"
            showImageWrapper={true}
            showDecorationWrapper={true}
          />
          <ClosingMessage
            classNameVariant="w-[360px] left-[7.5px] top-[73px] md:left-[460px]"
            messageClassNameVariant="text-[28px] font-thin leading-[45px]"
            message="Zohan and Rose"
          />
        </div>
      </div>
    </div>
  );
};