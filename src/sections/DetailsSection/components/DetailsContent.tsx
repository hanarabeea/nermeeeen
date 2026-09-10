export type DetailsContentProps = {
  containerVariant: string;
  contentVariant: string;
  text: string;
};

export const DetailsContent = (props: DetailsContentProps) => {
  return (
    <div
      className={`absolute box-border caret-transparent table outline-[3px] text-center z-[3] ${props.containerVariant}`}
    >
      <div
        className={`bg-cover box-border caret-transparent table-cell outline-[3px] align-middle w-full bg-center font-newfonts md:bg-auto ${props.contentVariant}`}
      >
        {props.text}
      </div>
    </div>
  );
};
