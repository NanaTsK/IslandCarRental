// import { Link } from 'react-router-dom';
import { StyledHeader, StyledNav, StyledLink } from './Header.styled';

const Header = () => {
  return (
    <StyledHeader>
      <div>IslandCarRental</div>
      <StyledNav>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/catalog">Catalog</StyledLink>
        <StyledLink to="/favorites">Favorites</StyledLink>
      </StyledNav>
    </StyledHeader>
  );
};

export default Header;
