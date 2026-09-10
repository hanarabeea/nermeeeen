export type ScheduleDecorationsProps = {
  outerVariantClass: string;
  innerVariantClass: string;
  imageSrc: string;
  imageClassName: string;
  hasImageWrapper: boolean;
};

export const ScheduleDecorations = (props: ScheduleDecorationsProps) => {
  return (
    <div
      className={`absolute box-border caret-transparent outline-[3px] z-[3] ${props.outerVariantClass}`}
    >
      <div
        className={`box-border caret-transparent outline-[3px] ${props.innerVariantClass}`}
      >
        {props.hasImageWrapper ? (
          <div className="box-border caret-transparent table-cell outline-[3px] rotate-[-34.9999809758059deg] align-middle w-full bg-center">
            <img src={props.imageSrc} alt="" className={props.imageClassName} />
          </div>
        ) : (
          <img src={props.imageSrc} alt="" className={props.imageClassName} />
        )}
      </div>
    </div>
  );
};
