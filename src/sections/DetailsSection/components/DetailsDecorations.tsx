export type DetailsDecorationsProps = {
  rootVariant: string;
  innerVariant: string;
  imageUrl: string;
  imageClassName: string;
  wrapperVariant?: string;
};

export const DetailsDecorations = (props: DetailsDecorationsProps) => {
  return (
    <div
      className={`absolute box-border caret-transparent outline-[3px] z-[3] ${props.rootVariant}`}
    >
      <div
        className={`box-border caret-transparent outline-[3px] ${props.innerVariant}`}
      >
        {props.wrapperVariant ? (
          <div
            className={`box-border caret-transparent table-cell outline-[3px] align-middle w-full bg-center ${props.wrapperVariant}`}
          >
            <img src={props.imageUrl} alt="" className={props.imageClassName} />
          </div>
        ) : (
          <img src={props.imageUrl} alt="" className={props.imageClassName} />
        )}
      </div>
    </div>
  );
};
