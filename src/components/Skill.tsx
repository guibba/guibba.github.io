import '../globals.postcss';

interface Props extends React.HTMLAttributes<HTMLElement> {
  icon?: string;
  title?: string;
}

function Skill({
  icon = '/assets/placeholder.svg',
  title = 'Placeholder',
  className = '',
  ...props
}: Props) {
  return (
    <div className={`bubble w-36 h-36 p-4 shine ${className}`} {...props}>
      <img className="max-w-[90px] opacity-80" src={icon} alt={title} />
    </div>
  );
}

export default Skill;
