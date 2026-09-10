export type LocationDecorationsProps = {
  rootVariantClass: string;
  imageSrc: string;
  middleWrapperClass?: string;
  imageWrapperClass: string;
};

export const LocationDecorations = (props: LocationDecorationsProps) => {
  const imageElement = (
    <div className={props.imageWrapperClass}>
      <img
        src={props.imageSrc}
        alt=""
        className="box-border caret-transparent outline-[3px] align-baseline w-full"
      />
    </div>
  );

  return (
    <div
      className={`absolute box-border caret-transparent table outline-[3px] z-[3] ${props.rootVariantClass}`}
    >
      {props.middleWrapperClass ? (
        <div className={props.middleWrapperClass}>{imageElement}</div>
      ) : (
        imageElement
      )}
    </div>
  );
};
