const bubbles = [
  'w-[40px] h-[40px] left-[10%] animate-[rise_8s_infinite_ease-in_0s]',
  'w-[20px] h-[20px] left-[20%] animate-[rise_5s_infinite_ease-in_1s]',
  'w-[50px] h-[50px] left-[35%] animate-[rise_7s_infinite_ease-in_2s]',
  'w-[80px] h-[80px] left-[50%] animate-[rise_11s_infinite_ease-in_0s]',
  'w-[35px] h-[35px] left-[55%] animate-[rise_6s_infinite_ease-in_1s]',
  'w-[45px] h-[45px] left-[65%] animate-[rise_8s_infinite_ease-in_3s]',
  'w-[90px] h-[90px] left-[70%] animate-[rise_12s_infinite_ease-in_2s]',
  'w-[25px] h-[25px] left-[90%] animate-[rise_6s_infinite_ease-in_2s]',
  'w-[15px] h-[15px] left-[70%] animate-[rise_5s_infinite_ease-in_1s]',
  'w-[90px] h-[90px] left-[25%] animate-[rise_10s_infinite_ease-in_4s]',
];

function Bubbles({
  className = '',
  children,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <div className={className} {...props}>
      {children}
      {bubbles.map((b, i) => {
        return (
          <div
            key={i}
            className={`absolute bottom-[-100px] rounded-full bg-secondary opacity-30 ${b}`}
          />
        );
      })}
    </div>
  );
}

export default Bubbles;
