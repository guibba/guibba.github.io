function BubbleBackground(props: React.HTMLAttributes<HTMLElement>) {
  const classes = [
    'absolute',
    'bottom-[-100px]',
    'w-[40px]',
    'h-[40px]',
    'bg-bubble',
    'shadow-bubble',
    'rounded-full',
    'opacity-30',
    'after:shadow-inner-[0_20px_30px_rgba(255,255,255,0.3)]',
  ].join(' ');

  return (
    <div
      {...props}
      className={`absolute w-full h-full overflow-hidden inset-0 ${
        props.className || ''
      }`}
    >
      <div
        className={`${classes} w-[40px] h-[40px] left-[10%] animate-[rise_8s_infinite_ease-in_0s]`}
      />
      <div
        className={`${classes} w-[20px] h-[20px] left-[20%] animate-[rise_5s_infinite_ease-in_1s]`}
      />
      <div
        className={`${classes} w-[50px] h-[50px] left-[35%] animate-[rise_7s_infinite_ease-in_2s]`}
      />
      <div
        className={`${classes} w-[80px] h-[80px] left-[50%] animate-[rise_11s_infinite_ease-in_0s]`}
      />
      <div
        className={`${classes} w-[35px] h-[35px] left-[55%] animate-[rise_6s_infinite_ease-in_1s]`}
      />
      <div
        className={`${classes} w-[45px] h-[45px] left-[65%] animate-[rise_8s_infinite_ease-in_3s]`}
      />
      <div
        className={`${classes} w-[90px] h-[90px] left-[70%] animate-[rise_12s_infinite_ease-in_2s]`}
      />
      <div
        className={`${classes} w-[25px] h-[25px] left-[90%] animate-[rise_6s_infinite_ease-in_2s]`}
      />
      <div
        className={`${classes} w-[15px] h-[15px] left-[70%] animate-[rise_5s_infinite_ease-in_1s]`}
      />
      <div
        className={`${classes} w-[90px] h-[90px] left-[25%] animate-[rise_10s_infinite_ease-in_4s]`}
      />
    </div>
  );
}

export default BubbleBackground;
