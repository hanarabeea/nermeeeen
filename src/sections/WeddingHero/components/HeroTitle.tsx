export type HeroTitleProps = {
  containerVariant: string;
  titleVariant: string;
  children: React.ReactNode;
};

export const HeroTitle = (props: HeroTitleProps) => {
  return (
    <div
      className={`absolute text-yellow-700 box-border caret-transparent table outline-[3px] text-center z-[3] ${props.containerVariant}`}
    >
      <div
        className={`bg-cover box-border caret-transparent table-cell outline-[3px] align-middle w-full bg-center md:bg-auto ${props.titleVariant}`}
      >
        {props.children}
      </div>
    </div>
  );
};
