export type HeroCoupleArtProps = {
  rootVariant: string;
  wrapperVariant?: string;
  imageUrl: string;
  imageClassName: string;
  hasWrapper: boolean;
  hasImageContainer: boolean;
};

export const HeroCoupleArt = (props: HeroCoupleArtProps) => {
  const imageElement = (
    <img src={props.imageUrl} alt="" className={props.imageClassName} />
  );

  const contentElement = props.hasImageContainer ? (
    <div className="box-border caret-transparent table-cell outline-[3px] align-middle w-full bg-center">
      {imageElement}
    </div>
  ) : (
    imageElement
  );

  return (
    <div
      className={`absolute box-border caret-transparent outline-[3px] z-[3] ${props.rootVariant}`}
    >
      {props.hasWrapper ? (
        <div
          className={`box-border caret-transparent outline-[3px] ${props.wrapperVariant ?? ""}`}
        >
          {contentElement}
        </div>
      ) : (
        contentElement
      )}
    </div>
  );
};
