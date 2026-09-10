export const MapFrame = () => {
  return (
    <div className="absolute box-border caret-transparent table h-[343px] outline-[3px] w-screen z-[3] left-0 top-px">
      <div className="box-border caret-transparent table-cell outline-[3px] align-top w-full bg-center">
        <div className="items-center box-border caret-transparent flex h-full justify-center outline-[3px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.060117798216!2d-73.40328222397078!3d40.78269247138302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e82bdb8c8a016b%3A0x50d592c0865c6b6e!2sIslamic%20Center%20of%20Melville!5e0!3m2!1sen!2smu!4v1782314483584!5m2!1sen!2smu"
            className="box-border caret-transparent h-[335px] min-h-[auto] min-w-[auto] outline-[3px] align-baseline w-[335px] rounded-[15px]"
          ></iframe>
        </div>
      </div>
    </div>
  );
};
