import { CountdownUnit } from "@/sections/CountdownSection/components/CountdownUnit";

export const CountdownTimer = () => {
  return (
    <div className="absolute box-border caret-transparent table h-[170px] left-[-47.5px] outline-[3px] w-[470px] z-[3] top-6 md:w-[531px] md:left-[375px] md:top-[23px]">
      <div className="box-border caret-transparent table-cell outline-[3px] align-top w-full bg-center">
        <title className="box-border caret-transparent hidden outline-[3px]">
          Countdown Timer
        </title>
        <div className="items-center box-border caret-transparent gap-x-1.5 flex justify-center outline-[3px] gap-y-1.5 mx-5 my-20">
          <CountdownUnit value="109" label="Days" valueClassName="" />
          <div className="text-[#c98f95] text-[52px] box-border caret-transparent leading-[52px] min-h-[auto] min-w-[auto] opacity-90 outline-[3px] -mt-10 font-ovo">
            :
          </div>
          <CountdownUnit value="18" label="Hours" valueClassName="" />
          <div className="text-[#c98f95] text-[52px] box-border caret-transparent leading-[52px] min-h-[auto] min-w-[auto] opacity-90 outline-[3px] -mt-10 font-ovo">
            :
          </div>
          <CountdownUnit value="27" label="Minutes" valueClassName="" />
          <div className="text-[#c98f95] text-[52px] box-border caret-transparent leading-[52px] min-h-[auto] min-w-[auto] opacity-90 outline-[3px] -mt-10 font-ovo">
            :
          </div>
          <CountdownUnit
            value="36"
            label="Seconds"
            valueClassName="opacity-0 translate-y-[-60.0%]"
          />
        </div>
      </div>
    </div>
  );
};