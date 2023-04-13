interface SkillProps extends React.HTMLAttributes<HTMLElement> {
  icon?: string;
  title?: string;
}

function Skill({
  icon = '/assets/placeholder.svg',
  title = 'Placeholder',
  className = '',
  ...props
}: SkillProps) {
  return (
    <div className={`bubble p-5 w-[100px] shine ${className}`} {...props}>
      <img className="opacity-80" src={icon} alt={title} />
    </div>
  );
}

export default Skill;
