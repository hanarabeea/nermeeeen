export type ScheduleTimelineProps = {
  containerVariant: string;
  contentVariant: string;
  text?: string;
  imageSrc?: string;
  imageAlt?: string;
  imageClassName?: string;
};

export const ScheduleTimeline = (props: ScheduleTimelineProps) => {
  return (
    <div
      className={`absolute box-border caret-transparent table outline-[3px] z-[3] ${props.containerVariant}`}
    >
      <div
        className={`box-border caret-transparent table-cell outline-[3px] align-middle w-full bg-center ${props.contentVariant}`}
      >
        {props.imageSrc ? (
          <img
            src={props.imageSrc}
            alt={props.imageAlt ?? ""}
            className={props.imageClassName}
          />
        ) : (
          props.text
        )}
      </div>
    </div>
  );
};
