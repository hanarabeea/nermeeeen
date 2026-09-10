export type RsvpButtonProps = {
  variant: string;
  outerVariantClass: string;
  middleVariantClass: string;
  innerVariantClass: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
  label: string;
};

export const RsvpButton = (props: RsvpButtonProps) => {
  if (props.variant === "seal") {
    return (
      <div
        className={`absolute box-border caret-transparent table outline-[3px] z-[3] ${props.outerVariantClass}`}
      >
        <a
          href={props.href}
          role="button"
          className="text-red-400 box-border caret-transparent table-cell outline-[3px] align-middle w-full bg-center"
        >
          <img
            src={props.imageSrc}
            alt={props.imageAlt}
            className="box-border caret-transparent outline-[3px] align-baseline w-full"
          />
        </a>
      </div>
    );
  }

  return (
    <div
      className={`absolute box-border caret-transparent table outline-[3px] z-[3] ${props.outerVariantClass}`}
    >
      <div
        className={`box-border caret-transparent table outline-[3px] ${props.middleVariantClass}`}
      >
        <div
          className={`box-border caret-transparent table-cell outline-[3px] align-middle w-full bg-center ${props.innerVariantClass}`}
        >
          {props.variant === "icon" ? (
            <img
              src={props.imageSrc}
              alt={props.imageAlt}
              className="box-border caret-transparent outline-[3px] align-baseline"
            />
          ) : (
            props.label
          )}
        </div>
      </div>
    </div>
  );
};
