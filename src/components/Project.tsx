import Button from './Button';
import IconGitHub from './icons/IconGitHub';
import IconExternal from './icons/IconExternal';

interface ProjectProps extends React.HTMLAttributes<HTMLDivElement> {
  image: string;
  title: string;
  description: string;
  languages: string[];
  linkCode: string;
  linkDemo: string;
}

function Project({
  image,
  title,
  description,
  languages,
  linkCode,
  linkDemo,
  className = '',
  ...props
}: ProjectProps) {
  return (
    <div
      {...props}
      className={`relative flex flex-1 flex-col justify-center items-center rounded-lg overflow-hidden ${className}`}
    >
      <div className="absolute inset-0 opacity-50 -z-10">
        <div className="absolute inset-0 bg-black opacity-50" />
        <div
          className={`absolute inset-0 blur-[0.5px] ${image} bg-center bg-cover mix-blend-multiply`}
        />
      </div>
      <div className="w-full h-full flex flex-col justify-center items-center gap-6 p-8">
        <h3 className="text-2xl font-bold justify-self-start text-primary">
          {title}
        </h3>
        <p className="text-center">{description}</p>
        <ul className="flex flex-row flex-wrap justify-center items-center gap-2">
          {languages.map((l, i) => {
            return (
              <li key={i} className="py-1 px-3 rounded-lg bg-secondary">
                <strong className="text-white">{l}</strong>
              </li>
            );
          })}
        </ul>
        <ul className="flex flex-wrap justify-center items-center gap-4">
          <li>
            <a href={linkCode}>
              <Button size="icon" variant="secondary">
                <IconGitHub className="w-8 h-8" />
              </Button>
            </a>
          </li>
          <li>
            <a href={linkDemo}>
              <Button size="icon" variant="primary">
                <IconExternal className="w-8 h-8" />
              </Button>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Project;
