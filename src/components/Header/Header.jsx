// import { Link } from 'react-router-dom';
import { StyledHeader } from './Header.styled';
import { StyledLink } from './Header.styled';

const Header = () => {
  return (
    <StyledHeader>
      <nav>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/catalog">Catalog</StyledLink>
        <StyledLink to="/favorites">Favorites</StyledLink>
      </nav>
    </StyledHeader>
  );
};

export default Header;
