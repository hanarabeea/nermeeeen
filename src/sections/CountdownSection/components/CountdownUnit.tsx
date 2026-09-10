export type CountdownUnitProps = {
  value: string;
  label: string;
  valueClassName: string;
};

export const CountdownUnit = (props: CountdownUnitProps) => {
  return (
    <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] text-center">
      <div className="items-center box-border caret-transparent flex h-14 justify-center outline-[3px] overflow-hidden">
        <div
          className={`text-[45px] bg-clip-text bg-[linear-gradient(105deg,rgb(180,140,61)_0%,rgb(180,140,61)_25%,rgb(205,169,90)_46%,rgb(216,186,114)_52%,rgb(205,169,90)_58%,rgb(180,140,61)_75%,rgb(180,140,61)_100%)] bg-size-[300%_100%] box-border caret-transparent leading-[54px] min-h-[auto] min-w-[auto] outline-[3px] text-nowrap font-ovo ${props.valueClassName}`}
        >
          {props.value}
        </div>
      </div>
      <div className="text-[#c98f95] text-[19px] box-border caret-transparent opacity-85 outline-[3px] mt-2 font-ovo">
        {props.label}
      </div>
    </div>
  );
};
