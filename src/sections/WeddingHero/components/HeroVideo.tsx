export const HeroVideo = () => {
  return (
    <div className="absolute box-border caret-transparent table h-[492px] left-[-37.5px] outline-[3px] w-[450px] z-[3] top-0 md:h-[762px] md:left-[415px]">
      <div className="box-border caret-transparent table-cell outline-[3px] align-top w-full bg-center relative">
        <div className="relative w-full h-full">
          <img
            src="/hero-wallpaper.jpg"
            alt="Wedding Hero Wallpaper"
            className="box-border caret-transparent object-contain outline-[3px] align-top w-full h-auto max-h-full block mx-auto drop-shadow-sm"
          />
          <div className="absolute inset-0 bg-black/5 pointer-events-none" />
        </div>
      </div>
    </div>
  );
};
