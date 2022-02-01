type IDividerProps = {
  bgColor: string;
};

const Divider = (props: IDividerProps) => {
  return (
    <div className="relative w-screen">
      <div
        className={`${props.bgColor} w-full h-52 absolute -top-24`}
        style={{
          clipPath: 'polygon(0 0%, 100% 30%, 100% 100%, 0% 70%)',
        }}
      />
    </div>
  );
};

export { Divider };
