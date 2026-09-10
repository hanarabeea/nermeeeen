import { ScheduleDecorations } from "@/sections/ScheduleSection/components/ScheduleDecorations";
import { ScheduleTimeline } from "@/sections/ScheduleSection/components/ScheduleTimeline";

export const ScheduleSection = () => {
  return (
    <div className="bg-orange-100 box-border caret-transparent outline-[3px]">
      <div className="box-border caret-transparent outline-[3px]">
        <div className="relative bg-orange-100 box-border caret-transparent h-[570px] outline-[3px] w-full">
          <div className="absolute bg-no-repeat bg-cover box-border caret-transparent h-[570px] outline-[3px] w-full z-0 bg-center left-0 top-0"></div>
          <div className="absolute box-border caret-transparent h-[570px] outline-[3px] w-full z-[1] left-0 top-0"></div>
          <ScheduleDecorations
            outerVariantClass="h-[346px] left-[-184.5px] w-[744px] -top-5 md:left-[268px]"
            innerVariantClass="h-full align-middle w-full bg-center"
            imageSrc="https://c.animaapp.com/BdBzBMFXYuOpLb1uxjMwxw/assets/noroot.png-3.webp"
            imageClassName="box-border caret-transparent h-full outline-[3px] align-baseline w-full"
            hasImageWrapper={false}
          />
          <ScheduleDecorations
            outerVariantClass="h-[259px] left-[-184.5px] w-[744px] top-[321px] md:left-[268px]"
            innerVariantClass="h-full align-middle w-full bg-center"
            imageSrc="https://c.animaapp.com/BdBzBMFXYuOpLb1uxjMwxw/assets/noroot.png-4.webp"
            imageClassName="box-border caret-transparent h-full outline-[3px] align-baseline w-full"
            hasImageWrapper={false}
          />
          <div className="absolute text-yellow-600 box-border caret-transparent table left-[-92.5px] outline-[3px] text-center w-[560px] z-[3] top-[45px] md:text-yellow-700 md:left-[360px]">
            <div className="text-yellow-600 text-[41px] font-light bg-cover box-border caret-transparent table-cell leading-[64px] outline-[3px] align-middle w-full bg-center font-newfonts md:text-yellow-700 md:bg-auto">
              Schedule of Events
            </div>
          </div>
          <ScheduleTimeline
            containerVariant="text-stone-600 text-center w-[94px] left-[232.5px] top-[143px] md:left-[683px]"
            contentVariant="text-xl font-thin bg-cover leading-[22px] font-newfonts md:bg-auto"
            text="Guest Arrival"
          />
          <ScheduleTimeline
            containerVariant="text-stone-500 text-center w-[129px] left-[31.5px] top-[141px] md:w-[75px] md:left-[515px]"
            contentVariant="text-3xl font-semibold bg-cover leading-[47px] font-newfonts md:bg-auto"
            text="4 PM"
          />
          <ScheduleTimeline
            containerVariant="text-stone-600 text-center w-[91px] left-[233.5px] top-[215px] md:left-[690px]"
            contentVariant="text-xl font-thin bg-cover leading-[22px] font-newfonts md:bg-auto"
            text="Nikkah Ceremony"
          />
          <ScheduleTimeline
            containerVariant="text-stone-600 text-center w-[91px] left-[233.5px] top-[302px] md:left-[690px]"
            contentVariant="text-xl font-thin bg-cover leading-[22px] font-newfonts md:bg-auto"
            text="Mocktail Hour"
          />
          <ScheduleTimeline
            containerVariant="text-stone-500 text-center w-[129px] left-[31.5px] top-56 md:w-[117px] md:left-[494px]"
            contentVariant="text-3xl font-semibold bg-cover tracking-[-1px] leading-[47px] font-newfonts md:bg-auto"
            text="5 PM"
          />
          <ScheduleTimeline
            containerVariant="text-stone-500 text-center w-[129px] left-[31.5px] top-[300px] md:w-[117px] md:left-[494px]"
            contentVariant="text-3xl font-semibold bg-cover tracking-[-1px] leading-[47px] font-newfonts md:bg-auto"
            text="6 PM"
          />
          <ScheduleTimeline
            containerVariant="text-stone-600 text-center w-[61px] left-[248.5px] top-[468px] md:left-[699px]"
            contentVariant="text-xl font-thin bg-cover leading-[22px] font-newfonts md:bg-auto"
            text="Dance"
          />
          <ScheduleTimeline
            containerVariant="text-stone-500 text-center w-[136px] left-[28.5px] top-[455px] md:w-[79px] md:left-[513px]"
            contentVariant="text-3xl font-semibold bg-cover leading-[47px] font-newfonts md:bg-auto"
            text="8 PM"
          />
          <ScheduleTimeline
            containerVariant="text-stone-600 text-center w-[61px] left-[248.5px] top-[390px] md:left-[699px] md:top-[392px]"
            contentVariant="text-xl font-thin bg-cover leading-[22px] font-newfonts md:bg-auto"
            text="Dinner"
          />
          <ScheduleTimeline
            containerVariant="text-stone-500 text-center w-[136px] left-[28.5px] top-[377px] md:w-[79px] md:left-[513px] md:top-[378px]"
            contentVariant="text-3xl font-semibold bg-cover leading-[47px] font-newfonts md:bg-auto"
            text="7 PM"
          />
          <ScheduleTimeline
            containerVariant="w-0.5 left-[185.5px] top-40 md:left-[639px]"
            contentVariant="opacity-70"
            imageSrc="https://c.animaapp.com/BdBzBMFXYuOpLb1uxjMwxw/assets/icon-4.svg"
            imageAlt="Icon"
            imageClassName="box-border caret-transparent outline-[3px] align-baseline"
          />
          <ScheduleTimeline
            containerVariant="h-2 w-2 left-[182.5px] top-[161px] md:left-[636px]"
            contentVariant="bg-stone-500 rotate-45"
          />
          <ScheduleTimeline
            containerVariant="h-2 w-2 left-[182.5px] top-[243px] md:left-[636px]"
            contentVariant="bg-stone-500 rotate-45"
          />
          <ScheduleTimeline
            containerVariant="h-2 w-2 left-[182.5px] top-80 md:left-[636px]"
            contentVariant="bg-stone-500 rotate-45"
          />
          <ScheduleTimeline
            containerVariant="h-2 w-2 left-[182.5px] top-[475px] md:left-[636px]"
            contentVariant="bg-stone-500 rotate-45"
          />
          <ScheduleTimeline
            containerVariant="h-2 w-2 left-[182.5px] top-[397px] md:left-[636px] md:top-[399px]"
            contentVariant="bg-stone-500 rotate-45"
          />
          <ScheduleDecorations
            outerVariantClass="table w-[55px] left-[159.5px] top-[140px] md:left-[613px]"
            innerVariantClass="table w-[55px]"
            imageSrc="https://c.animaapp.com/BdBzBMFXYuOpLb1uxjMwxw/assets/rose_-_Copy.png.webp"
            imageClassName="box-border caret-transparent outline-[3px] align-baseline w-full"
            hasImageWrapper={true}
          />
          <ScheduleDecorations
            outerVariantClass="table w-[78px] left-[304.5px] top-14 md:left-[765px]"
            innerVariantClass="table-cell align-middle w-full bg-center"
            imageSrc="https://c.animaapp.com/BdBzBMFXYuOpLb1uxjMwxw/assets/right-element_1.png.webp"
            imageClassName="box-border caret-transparent outline-[3px] align-baseline w-full"
            hasImageWrapper={false}
          />
          <ScheduleDecorations
            outerVariantClass="table left-[-6.5px] w-[79px] top-14 md:left-[436px]"
            innerVariantClass="table-cell align-middle w-full bg-center"
            imageSrc="https://c.animaapp.com/BdBzBMFXYuOpLb1uxjMwxw/assets/left-element_1.png.webp"
            imageClassName="box-border caret-transparent outline-[3px] align-baseline w-full"
            hasImageWrapper={false}
          />
        </div>
      </div>
    </div>
  );
};
