export type RsvpContentProps = {
  containerVariant: string;
  textVariant: string;
  text: string;
};

export const RsvpContent = (props: RsvpContentProps) => {
  return (
    <div
      className={`absolute box-border caret-transparent table outline-[3px] text-center z-[3] ${props.containerVariant}`}
    >
      <div
        className={`bg-cover box-border caret-transparent table-cell outline-[3px] align-middle w-full bg-center font-newfonts md:bg-auto ${props.textVariant}`}
      >
        {props.text}
      </div>
    </div>
  );
};
