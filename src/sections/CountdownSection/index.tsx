import { CountdownTimer } from "@/sections/CountdownSection/components/CountdownTimer";

export const CountdownSection = () => {
  return (
    <div className="bg-orange-100 box-border caret-transparent outline-[3px] py-[15px]">
      <div className="box-border caret-transparent outline-[3px]">
        <div className="relative bg-orange-100 box-border caret-transparent h-[247px] outline-[3px] w-full overflow-hidden md:h-[257px]">
          <div className="absolute bg-no-repeat bg-cover box-border caret-transparent h-[247px] outline-[3px] w-full z-0 bg-center left-0 top-0 md:h-[257px]"></div>
          <div className="absolute box-border caret-transparent h-[247px] outline-[3px] w-full z-[1] left-0 top-0 md:h-[257px]"></div>
          <CountdownTimer />
          <div className="absolute text-yellow-700 box-border caret-transparent table left-[-92.5px] outline-[3px] text-center w-[560px] z-[3] top-[29px] md:left-[360px] md:top-7">
            <div className="text-[41px] font-light bg-cover box-border caret-transparent table-cell leading-[64px] outline-[3px] align-middle w-full bg-center font-newfonts md:bg-auto">
              The Celebration Begins In
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
