export const TapPrompt = ({ label = "Tap to open" }: { label?: string }) => {
  return (
    <div className="absolute items-center box-border caret-transparent gap-x-[7px] flex flex-col outline-[3px] gap-y-[7px] translate-x-[-50.0%] left-2/4 bottom-[30%]">
      <div className="border-r-yellow-800/60 border-t-yellow-800/60 box-border caret-transparent h-2.5 min-h-[auto] min-w-[auto] outline-[3px] -rotate-45 w-2.5 border-r border-t"></div>
      <div className="text-yellow-800/80 text-[11px] box-border caret-transparent tracking-[2.86px] min-h-[auto] min-w-[auto] outline-[3px] uppercase text-nowrap font-cinzel">
        {label}
      </div>
    </div>
  );
};
