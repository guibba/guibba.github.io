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
  isMenuOpened: boolean;
}

function Project({
  image,
  title,
  description,
  languages,
  linkCode,
  linkDemo,
  isMenuOpened,
  className = '',
  ...props
}: ProjectProps) {
  return (
    <div
      {...props}
      className={`relative flex flex-1 flex-col items-center justify-center overflow-hidden rounded-lg ${className}`}
    >
      <div className="absolute inset-0 -z-10 opacity-50">
        <div className="absolute inset-0 bg-default-dark opacity-50" />
        <div
          className={`absolute inset-0 blur-[0.5px] ${image} bg-cover bg-center mix-blend-multiply`}
        />
      </div>
      <div className="flex h-full w-full flex-col items-center justify-center gap-6 p-8">
        <h3 className="justify-self-start text-2xl font-bold text-primary">
          {title}
        </h3>
        <p className="text-center">{description}</p>
        <ul className="flex flex-row flex-wrap items-center justify-center gap-2">
          {languages.map((l, i) => {
            return (
              <li key={i} className="rounded-lg bg-secondary px-3 py-1">
                <strong className="text-default">{l}</strong>
              </li>
            );
          })}
        </ul>
        <ul className="flex flex-wrap items-center justify-center gap-4">
          <li>
            <a
              href={linkCode}
              tabIndex={-1}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                tabIndex={isMenuOpened ? -1 : 0}
                size="icon"
                variant="secondary"
                title="GitHub"
              >
                <IconGitHub className="h-8 w-8" />
              </Button>
            </a>
          </li>
          <li>
            <a
              href={linkDemo}
              tabIndex={-1}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                tabIndex={isMenuOpened ? -1 : 0}
                size="icon"
                variant="primary"
                title="Demo"
              >
                <IconExternal className="h-8 w-8" />
              </Button>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Project;
