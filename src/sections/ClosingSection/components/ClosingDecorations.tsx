export type ClosingDecorationsProps = {
  rootVariant: string;
  decorationVariant?: string;
  imageUrl?: string;
  showImageWrapper?: boolean;
  showDecorationWrapper?: boolean;
};

export const ClosingDecorations = (props: ClosingDecorationsProps) => {
  return (
    <div
      className={`absolute box-border caret-transparent table outline-[3px] z-[3] ${props.rootVariant}`}
    >
      {props.showDecorationWrapper ? (
        <div
          className={`box-border caret-transparent outline-[3px] ${props.decorationVariant ?? ""}`}
        >
          {props.showImageWrapper && props.imageUrl ? (
            <div className="box-border caret-transparent table-cell outline-[3px] align-middle w-full bg-center">
              <img
                src={props.imageUrl}
                alt=""
                className="box-border caret-transparent outline-[3px] align-baseline w-full"
              />
            </div>
          ) : null}
        </div>
      ) : props.showImageWrapper && props.imageUrl ? (
        <div className="box-border caret-transparent table-cell outline-[3px] align-middle w-full bg-center">
          <img
            src={props.imageUrl}
            alt=""
            className="box-border caret-transparent outline-[3px] align-baseline w-full"
          />
        </div>
      ) : null}
    </div>
  );
};
