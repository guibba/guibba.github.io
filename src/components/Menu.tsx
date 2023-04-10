import { useState, useEffect } from 'react';

import { Link, useLocation } from 'react-router-dom';
import Button from './Button';
import Background from './BubbleBackground';

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
        variant={isMenuOpened ? 'selectedBubble' : 'bubble'}
        size="icon"
        className="flex md:hidden animate-[slidebottom_1.5s_both_0.4s,float_2.5s_infinite_2.5s] z-[300]"
        onClick={(e) => {
          e.stopPropagation();
          setIsMenuOpened(!isMenuOpened);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 12 24"
          className={`p-1 w-9 h-9 stroke-white fill-white transition-transform origin-center ${
            isMenuOpened ? 'rotate-90' : '-rotate-90'
          }`}
        >
          <path d="M9.125 21.1L.7 12.7q-.15-.15-.213-.325T.425 12q0-.2.063-.375T.7 11.3l8.425-8.425q.35-.35.875-.35t.9.375q.375.375.375.875t-.375.875L3.55 12l7.35 7.35q.35.35.35.863t-.375.887q-.375.375-.875.375t-.875-.375Z" />
        </svg>
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
                  location.pathname === '/about' ? 'selectedBubble' : 'bubble'
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
                  location.pathname === '/skills' ? 'selectedBubble' : 'bubble'
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
                  location.pathname === '/projects'
                    ? 'selectedBubble'
                    : 'bubble'
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
                  location.pathname === '/contact' ? 'selectedBubble' : 'bubble'
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
