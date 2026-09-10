export type ClosingMessageProps = {
  classNameVariant: string;
  messageClassNameVariant: string;
  message: string;
};

export const ClosingMessage = (props: ClosingMessageProps) => {
  return (
    <div
      className={`absolute text-yellow-700 box-border caret-transparent table outline-[3px] text-center z-[3] ${props.classNameVariant}`}
    >
      <div
        className={`bg-cover box-border caret-transparent table-cell outline-[3px] align-middle w-full bg-center font-newfonts md:bg-auto ${props.messageClassNameVariant}`}
      >
        {props.message}
      </div>
    </div>
  );
};