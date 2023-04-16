import { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { DataContext } from '../data/DataContext';

import Button from '../components/Button';
import IconWhale from '../components/icons/IconWhale';
import IconMenu from '../components/icons/IconMenu';

interface HeaderProps extends React.HTMLAttributes<HTMLElement> {
  isMenuOpened: boolean;
  setIsMenuOpened: React.Dispatch<React.SetStateAction<boolean>>;
}

function Header({
  isMenuOpened,
  setIsMenuOpened,
  className = '',
  ...props
}: HeaderProps) {
  const data = useContext(DataContext);
  const location = useLocation();

  const isMobile = window.innerWidth < 768;

  return (
    <header className={className} {...props}>
      <Link to="/" tabIndex={-1}>
        <Button
          className="z-20 animate-[slide-in-bottom_1.5s_both_1.2s,float_2.5s_infinite_2.7s] md:cursor-pointer"
          onClick={() => isMenuOpened && setIsMenuOpened(!isMenuOpened)}
          variant={location.pathname === '/' ? 'primary' : 'secondary'}
          size="icon"
          tabIndex={location.pathname === '/' && !isMenuOpened ? -1 : 0}
          title="Home"
        >
          <IconWhale className="h-8 w-8" />
        </Button>
      </Link>
      <Button
        variant={isMenuOpened ? 'secondary' : 'primary'}
        size="icon"
        className="z-20 flex animate-[slide-in-bottom_1.5s_both_1.2s,float_2.5s_infinite_2.7s] md:hidden"
        onClick={(e) => {
          e.stopPropagation();
          setIsMenuOpened(!isMenuOpened);
        }}
        title="Menu"
      >
        <IconMenu
          className={`h-8 w-8 p-1 transition-transform ${
            isMenuOpened ? 'rotate-180' : 'rotate-0'
          }`}
        />
      </Button>
      <nav
        id="menu-wrapper"
        className={`md:justify-right pointer-events-none fixed inset-0 z-10 flex flex-col items-start justify-center opacity-0 md:pointer-events-auto md:static md:block md:bg-transparent md:opacity-100 ${
          isMenuOpened
            ? 'pointer-events-auto opacity-100 transition-opacity duration-300'
            : 'transition-opacity duration-300'
        }`}
      >
        <ul className="flex w-full flex-col items-center gap-8 md:flex-row md:gap-4">
          <li className="animate-[slide-in-bottom_1.5s_both_1s,float_2.5s_infinite_2.5s]">
            <Link to="/about" tabIndex={-1}>
              <Button
                onClick={() => isMenuOpened && setIsMenuOpened(!isMenuOpened)}
                variant={
                  location.pathname === '/about' ? 'primary' : 'secondary'
                }
                size="medium"
                tabIndex={
                  location.pathname === '/about' || (!isMenuOpened && isMobile)
                    ? -1
                    : 0
                }
                title={
                  data.about.sectionName.charAt(0) +
                  data.about.sectionName.toLowerCase().slice(1)
                }
              >
                {data.about.sectionName}
              </Button>
            </Link>
          </li>
          <li className="animate-[slide-in-bottom_1.5s_both_0.8s,float_2.5s_infinite_2.3s]">
            <Link to="/skills" tabIndex={-1}>
              <Button
                onClick={() => isMenuOpened && setIsMenuOpened(!isMenuOpened)}
                variant={
                  location.pathname === '/skills' ? 'primary' : 'secondary'
                }
                size="medium"
                tabIndex={
                  location.pathname === '/skills' || (!isMenuOpened && isMobile)
                    ? -1
                    : 0
                }
                title={
                  data.skills.sectionName.charAt(0) +
                  data.skills.sectionName.toLowerCase().slice(1)
                }
              >
                {data.skills.sectionName}
              </Button>
            </Link>
          </li>
          <li className="animate-[slide-in-bottom_1.5s_both_0.6s,float_2.5s_infinite_2.1s]">
            <Link to="/projects" tabIndex={-1}>
              <Button
                onClick={() => isMenuOpened && setIsMenuOpened(!isMenuOpened)}
                variant={
                  location.pathname === '/projects' ? 'primary' : 'secondary'
                }
                size="medium"
                tabIndex={
                  location.pathname === '/projects' ||
                  (!isMenuOpened && isMobile)
                    ? -1
                    : 0
                }
                title={
                  data.projects.sectionName.charAt(0) +
                  data.projects.sectionName.toLowerCase().slice(1)
                }
              >
                {data.projects.sectionName}
              </Button>
            </Link>
          </li>
          <li className="animate-[slide-in-bottom_1.5s_both_0.4s,float_2.5s_infinite_1.9s]">
            <Link to="/contact" tabIndex={-1}>
              <Button
                onClick={() => isMenuOpened && setIsMenuOpened(!isMenuOpened)}
                variant={
                  location.pathname === '/contact' ? 'primary' : 'secondary'
                }
                size="medium"
                tabIndex={
                  location.pathname === '/contact' ||
                  (!isMenuOpened && isMobile)
                    ? -1
                    : 0
                }
                title={
                  data.contact.sectionName.charAt(0) +
                  data.contact.sectionName.toLowerCase().slice(1)
                }
              >
                {data.contact.sectionName}
              </Button>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
