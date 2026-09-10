export type MapDecorationsProps = {
  containerVariant: string;
  innerVariant: string;
  imageSrc: string;
};

export const MapDecorations = (props: MapDecorationsProps) => {
  return (
    <div
      className={`absolute box-border caret-transparent table outline-[3px] z-[3] ${props.containerVariant}`}
    >
      <div
        className={`box-border caret-transparent table-cell outline-[3px] align-middle w-full bg-center ${props.innerVariant}`}
      >
        <img
          src={props.imageSrc}
          alt=""
          className="box-border caret-transparent outline-[3px] align-baseline w-full"
        />
      </div>
    </div>
  );
};
