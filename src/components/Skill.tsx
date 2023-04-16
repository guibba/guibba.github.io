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
    <div className={`bubble shine w-[100px] p-5 ${className}`} {...props}>
      <img className="opacity-80" src={icon} alt={`${title} Logo.`} />
    </div>
  );
}

export default Skill;
