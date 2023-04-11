function BubbleBackground() {
  const bubbleStyles =
    'absolute bottom-[-100px] w-[40px] h-[40px] bg-[#ffffff18] rounded-full';

  return (
    <div className="absolute w-full h-full overflow-hidden inset-0">
      <div
        className={`${bubbleStyles} w-[40px] h-[40px] left-[10%] animate-[rise_8s_infinite_ease-in_0s]`}
      />
      <div
        className={`${bubbleStyles} w-[20px] h-[20px] left-[20%] animate-[rise_5s_infinite_ease-in_1s]`}
      />
      <div
        className={`${bubbleStyles} w-[50px] h-[50px] left-[35%] animate-[rise_7s_infinite_ease-in_2s]`}
      />
      <div
        className={`${bubbleStyles} w-[80px] h-[80px] left-[50%] animate-[rise_11s_infinite_ease-in_0s]`}
      />
      <div
        className={`${bubbleStyles} w-[35px] h-[35px] left-[55%] animate-[rise_6s_infinite_ease-in_1s]`}
      />
      <div
        className={`${bubbleStyles} w-[45px] h-[45px] left-[65%] animate-[rise_8s_infinite_ease-in_3s]`}
      />
      <div
        className={`${bubbleStyles} w-[90px] h-[90px] left-[70%] animate-[rise_12s_infinite_ease-in_2s]`}
      />
      <div
        className={`${bubbleStyles} w-[25px] h-[25px] left-[90%] animate-[rise_6s_infinite_ease-in_2s]`}
      />
      <div
        className={`${bubbleStyles} w-[15px] h-[15px] left-[70%] animate-[rise_5s_infinite_ease-in_1s]`}
      />
      <div
        className={`${bubbleStyles} w-[90px] h-[90px] left-[25%] animate-[rise_10s_infinite_ease-in_4s]`}
      />
    </div>
  );
}

export default BubbleBackground;
