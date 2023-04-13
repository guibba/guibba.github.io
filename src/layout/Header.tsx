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

  return (
    <header className={className} {...props}>
      <Link to="/">
        <Button
          className="md:cursor-pointer animate-[slidebottom_1.5s_both_0.4s,float_2.5s_infinite_2.5s] z-20"
          onClick={() => isMenuOpened && setIsMenuOpened(!isMenuOpened)}
          variant={location.pathname === '/' ? 'primary' : 'secondary'}
          size="icon"
        >
          <IconWhale className="w-8 h-8" />
        </Button>
      </Link>
      <Button
        variant={isMenuOpened ? 'secondary' : 'primary'}
        size="icon"
        className="flex md:hidden animate-[slidebottom_1.5s_both_0.4s,float_2.5s_infinite_2.5s] z-20"
        onClick={(e) => {
          e.stopPropagation();
          setIsMenuOpened(!isMenuOpened);
        }}
      >
        <IconMenu
          className={`p-1 w-8 h-8 transition-transform ${
            isMenuOpened ? 'rotate-180' : 'rotate-0'
          }`}
        />
      </Button>
      <nav
        id="menu-wrapper"
        className={`flex md:block flex-col justify-center md:justify-right items-start md:opacity-100 opacity-0 pointer-events-none md:pointer-events-auto fixed md:static inset-0 md:bg-transparent z-10 ${
          isMenuOpened
            ? 'opacity-100 pointer-events-auto transition-opacity duration-300'
            : 'transition-opacity duration-300'
        }`}
      >
        <ul className="flex flex-col md:flex-row items-center gap-8 md:gap-4 w-full">
          <li className="animate-[slidebottom_1.5s_both_1s,float_2.5s_infinite_2.5s]">
            <Link to="/about">
              <Button
                onClick={() => isMenuOpened && setIsMenuOpened(!isMenuOpened)}
                variant={
                  location.pathname === '/about' ? 'primary' : 'secondary'
                }
                size="medium"
              >
                {data.about.sectionName}
              </Button>
            </Link>
          </li>
          <li className="animate-[slidebottom_1.5s_both_0.8s,float_2.5s_infinite_2.7s]">
            <Link to="/skills">
              <Button
                onClick={() => isMenuOpened && setIsMenuOpened(!isMenuOpened)}
                variant={
                  location.pathname === '/skills' ? 'primary' : 'secondary'
                }
                size="medium"
              >
                {data.skills.sectionName}
              </Button>
            </Link>
          </li>
          <li className="animate-[slidebottom_1.5s_both_0.6s,float_2.5s_infinite_2.9s]">
            <Link to="/projects">
              <Button
                onClick={() => isMenuOpened && setIsMenuOpened(!isMenuOpened)}
                variant={
                  location.pathname === '/projects' ? 'primary' : 'secondary'
                }
                size="medium"
              >
                {data.projects.sectionName}
              </Button>
            </Link>
          </li>
          <li className="animate-[slidebottom_1.5s_both_0.4s,float_2.5s_infinite_3.1s]">
            <Link to="/contact">
              <Button
                onClick={() => isMenuOpened && setIsMenuOpened(!isMenuOpened)}
                variant={
                  location.pathname === '/contact' ? 'primary' : 'secondary'
                }
                size="medium"
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
