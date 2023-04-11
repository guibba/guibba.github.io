import { Link, useLocation } from 'react-router-dom';
import Menu from '../components/Menu';
import Button from '../components/Button';
import IconWhale from '../components/icons/IconWhale';

function Header() {
  const location = useLocation();

  return (
    <header className="flex justify-between items-center absolute p-6 w-full z-[100]">
      <Link to="/">
        <Button
          className="md:ml-8 md:cursor-pointer animate-[slidebottom_1.5s_both_0.4s,float_2.5s_infinite_2.5s] z-[300]"
          variant={location.pathname === '/' ? 'primary' : 'secondary'}
          size="icon"
        >
          <IconWhale className="w-9 h-9" />
        </Button>
      </Link>
      <Menu />
    </header>
  );
}

export default Header;
