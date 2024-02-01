import { Link } from 'react-router-dom';
import { StyledHeader } from './Header.styled';

const Header = () => {
  return (
    <StyledHeader>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/catalog">Catalog</Link>
        <Link to="/favorites">Favorites</Link>
      </nav>
    </StyledHeader>
  );
};

export default Header;
