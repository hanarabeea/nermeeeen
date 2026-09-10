export type HeroIntroProps = {
  containerVariant: string;
  contentVariant: string;
  children: React.ReactNode;
};

export const HeroIntro = (props: HeroIntroProps) => {
  return (
    <div
      className={`absolute box-border caret-transparent table outline-[3px] text-center z-[3] ${props.containerVariant}`}
    >
      <div
        className={`bg-cover box-border caret-transparent table-cell outline-[3px] align-middle w-full bg-center font-newfonts md:bg-auto ${props.contentVariant}`}
      >
        {props.children}
      </div>
    </div>
  );
};
