import { useState, useEffect } from 'react';

import { Link, useLocation } from 'react-router-dom';
import Button from './Button';
import Background from './BubbleBackground';
import IconMenu from './icons/IconMenu';

function Menu() {
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const menu = document.querySelector('#menu-wrapper');

    function handleClickOutside(e: MouseEvent): void {
      if (isMenuOpened && menu !== e.target) {
        setIsMenuOpened(!isMenuOpened);
      }
    }

    document.body.addEventListener('click', handleClickOutside);

    return () => {
      document.body.removeEventListener('click', handleClickOutside);
    };
  }, [isMenuOpened]);

  return (
    <>
      <Button
        variant={isMenuOpened ? 'secondary' : 'primary'}
        size="icon"
        className="flex md:hidden animate-[slidebottom_1.5s_both_0.4s,float_2.5s_infinite_2.5s] z-[300]"
        onClick={(e) => {
          e.stopPropagation();
          setIsMenuOpened(!isMenuOpened);
        }}
      >
        <IconMenu
          className={`p-0.5 w-9 h-9 transition-transform ${
            isMenuOpened ? 'rotate-180' : 'rotate-0'
          }`}
        />
      </Button>
      <nav
        id="menu-wrapper"
        className={`flex md:block flex-col justify-center md:justify-right items-start md:opacity-100 opacity-0 pointer-events-none md:pointer-events-auto fixed md:static inset-0 py-0 px-8 md:bg-transparent z-[200] ${
          isMenuOpened
            ? 'bg-gradient-to-t from-[#02084a] to-[#03d0d0] opacity-100 pointer-events-auto transition-opacity duration-300'
            : 'transition-opacity duration-300'
        }`}
      >
        {isMenuOpened && <Background />}
        <ul className="flex flex-col md:flex-row gap-8 md:gap-4 w-full">
          <li className="animate-[slidebottom_1.5s_both_1s,float_2.5s_infinite_2.5s]">
            <Link to="/about">
              <Button
                variant={
                  location.pathname === '/about' ? 'primary' : 'secondary'
                }
                size="medium"
              >
                SOBRE
              </Button>
            </Link>
          </li>
          <li className="animate-[slidebottom_1.5s_both_0.8s,float_2.5s_infinite_2.7s]">
            <Link to="/skills">
              <Button
                variant={
                  location.pathname === '/skills' ? 'primary' : 'secondary'
                }
                size="medium"
              >
                TECNOLOGIAS
              </Button>
            </Link>
          </li>
          <li className="animate-[slidebottom_1.5s_both_0.6s,float_2.5s_infinite_2.9s]">
            <Link to="/projects">
              <Button
                variant={
                  location.pathname === '/projects' ? 'primary' : 'secondary'
                }
                size="medium"
              >
                PROJETOS
              </Button>
            </Link>
          </li>
          <li className="animate-[slidebottom_1.5s_both_0.4s,float_2.5s_infinite_3.1s]">
            <Link to="/contact">
              <Button
                variant={
                  location.pathname === '/contact' ? 'primary' : 'secondary'
                }
                size="medium"
              >
                CONTATO
              </Button>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Menu;
