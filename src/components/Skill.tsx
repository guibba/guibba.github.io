interface Props extends React.HTMLAttributes<HTMLElement> {
  icon: string;
  title: string;
}

function Skill(props: Props) {
  const classes = [
    'flex',
    'flex-col',
    'justify-center',
    'items-center',
    'w-36',
    'h-36',
    'p-4',
    'overflow-hidden',
    'bg-bubble',
    'shadow-bubble',
    'rounded-full',
    'blur-[0.5px]',
    "before:content-['']",
    'before:absolute',
    'before:top-0',
    'before:left-[-200%]',
    'before:w-[200%]',
    'before:h-full',
    'before:bg-shine',
    'hover:before:animate-shine',
  ].join(' ');

  return (
    <div {...props} className={`${classes} ${props.className || ''}`}>
      <img
        className="max-w-[90px] opacity-80"
        src={props.icon}
        alt={props.title}
      />
    </div>
  );
}

export default Skill;
