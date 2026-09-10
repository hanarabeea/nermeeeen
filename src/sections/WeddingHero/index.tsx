import { HeroVideo } from "@/sections/WeddingHero/components/HeroVideo";
import { HeroCoupleArt } from "@/sections/WeddingHero/components/HeroCoupleArt";
import { HeroTitle } from "@/sections/WeddingHero/components/HeroTitle";
import { HeroIntro } from "@/sections/WeddingHero/components/HeroIntro";

export const WeddingHero = () => {
  return (
    <div className="box-border caret-transparent outline-[3px]">
      <div className="box-border caret-transparent outline-[3px]">
        <div className="relative bg-orange-100 box-border caret-transparent h-[1240px] outline-[3px] w-full overflow-hidden">
          <div className="absolute bg-no-repeat bg-cover box-border caret-transparent h-[1240px] outline-[3px] w-full z-0 bg-center left-0 top-0"></div>
          <div className="absolute box-border caret-transparent h-[1240px] outline-[3px] w-full z-[1] left-0 top-0"></div>
          <HeroVideo />
          <div className="absolute box-border caret-transparent table h-[676px] left-[-37.5px] outline-[3px] w-[450px] z-[3] top-0 md:left-[415px]">
            <div className="bg-[radial-gradient(circle,rgb(255,249,235)_0%,rgba(255,231,192,0)_85%)] box-border caret-transparent table-cell opacity-50 outline-[3px] align-middle w-full"></div>
          </div>
          <HeroCoupleArt
            rootVariant="h-[477px] left-[-184.5px] w-[744px] top-[763px] md:h-[487px] md:left-[268px] md:top-[753px]"
            wrapperVariant="h-full align-middle w-full bg-center"
            imageUrl="https://c.animaapp.com/BdBzBMFXYuOpLb1uxjMwxw/assets/623915249_2629494717.png.webp"
            imageClassName="box-border caret-transparent h-full outline-[3px] align-baseline w-full"
            hasWrapper={true}
            hasImageContainer={false}
          />
          <HeroTitle
            containerVariant="left-[-92.5px] w-[560px] top-[294px] md:left-[360px]"
            titleVariant="text-[80px] font-extrabold leading-[56px] font-webgency"
          >
            Zohan <br className="box-border caret-transparent outline-[3px]" />
            <br className="box-border caret-transparent outline-[3px]" />
            Rose
          </HeroTitle>
          <HeroTitle
            containerVariant="h-[37px] left-[-92.5px] w-[560px] top-[154px] md:left-[360px]"
            titleVariant="text-[40px] font-light leading-5 font-newfonts"
          >
            Wedding Day
          </HeroTitle>
          <HeroTitle
            containerVariant="h-[37px] left-[-92.5px] w-[560px] top-[196px] md:left-[360px]"
            titleVariant="text-[25px] font-semibold leading-[13px] font-newfonts"
          >
            27.09.26
          </HeroTitle>
          <HeroTitle
            containerVariant="w-[55px] left-[165.5px] top-[356px] md:left-[618px]"
            titleVariant="text-[40px] font-light leading-[44px] font-newfonts"
          >
            &amp;
          </HeroTitle>
          <HeroCoupleArt
            rootVariant="table left-[-49.5px] w-[218px] top-[568px] md:w-56 md:left-[399px] md:top-[566px]"
            wrapperVariant="table w-[218px] md:w-56"
            imageUrl="https://c.animaapp.com/BdBzBMFXYuOpLb1uxjMwxw/assets/noroot.png.webp"
            imageClassName="box-border caret-transparent outline-[3px] align-baseline w-full"
            hasWrapper={true}
            hasImageContainer={true}
          />
          <HeroCoupleArt
            rootVariant="table w-[210px] left-[225.5px] top-[586px] md:w-[236px] md:left-[645px] md:top-[547px]"
            wrapperVariant="table w-[210px] md:w-[236px]"
            imageUrl="https://c.animaapp.com/BdBzBMFXYuOpLb1uxjMwxw/assets/noroot.png-1.webp"
            imageClassName="box-border caret-transparent outline-[3px] align-baseline w-full"
            hasWrapper={true}
            hasImageContainer={true}
          />
          <HeroCoupleArt
            rootVariant="table top-[-785px] w-[735px] left-[307.5px] md:left-80"
            imageUrl="https://c.animaapp.com/BdBzBMFXYuOpLb1uxjMwxw/assets/623915249_2629494717.png-1.webp"
            imageClassName="box-border caret-transparent outline-[3px] align-baseline w-full"
            hasWrapper={false}
            hasImageContainer={true}
          />
          <HeroIntro
            containerVariant="text-yellow-700 left-[-92.5px] w-[560px] top-[899px] md:left-[360px]"
            contentVariant="text-[41px] font-light leading-[43px]"
          >
            Two Souls{" "}
            <br className="box-border caret-transparent outline-[3px]" />
            One destiny{" "}
            <br className="box-border caret-transparent outline-[3px]" />A
            Lifetime written by Allah
          </HeroIntro>
          <HeroIntro
            containerVariant="text-stone-600 w-[307px] left-[34.5px] top-[1050px] md:left-[487px]"
            contentVariant="text-[21px] font-thin leading-[26px]"
          >
            Dear Friends and Family{" "}
            <br className="box-border caret-transparent outline-[3px]" />
            Join us for an evening of love, laughter, duas, and unforgettable
            memories as we begin our forever.
          </HeroIntro>
          <div className="absolute box-border caret-transparent table outline-[3px] w-[25px] z-[3] left-[175.5px] top-[558px] md:left-[628px]">
            <div className="box-border caret-transparent table outline-[3px] w-[25px]">
              <div className="box-border caret-transparent table-cell outline-[3px] align-middle w-full bg-center">
                <img
                  src="https://c.animaapp.com/BdBzBMFXYuOpLb1uxjMwxw/assets/icon-3.svg"
                  alt="Icon"
                  className="box-border caret-transparent outline-[3px] align-baseline"
                />
              </div>
            </div>
          </div>
          <HeroIntro
            containerVariant="text-yellow-700 w-[316px] left-[29.5px] top-[518px] md:left-[482px]"
            contentVariant="text-[32px] font-light leading-[35px]"
          >
            Scroll down
          </HeroIntro>
          <HeroCoupleArt
            rootVariant="table w-[283px] left-[46.5px] top-[813px] md:left-[499px]"
            imageUrl="https://c.animaapp.com/BdBzBMFXYuOpLb1uxjMwxw/assets/noroot.png-2.webp"
            imageClassName="box-border caret-transparent outline-[3px] align-baseline w-full"
            hasWrapper={false}
            hasImageContainer={true}
          />
        </div>
      </div>
    </div>
  );
};
