// import { Link } from 'react-router-dom';
import {
  StyledHeader,
  StyledLogo,
  StyledLogoIcon,
  StyledLogoTitle,
  StyledNav,
  StyledLink,
} from './Header.styled';

const Header = () => {
  return (
    <StyledHeader>
      <StyledLogo to="/">
        <StyledLogoIcon>
          <use xlinkHref="public/icons.svg#icon-heart" />
        </StyledLogoIcon>
        <StyledLogoTitle>IslandCarRental</StyledLogoTitle>
      </StyledLogo>
      <StyledNav>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/catalog">Catalog</StyledLink>
        <StyledLink to="/favorites">Favorites</StyledLink>
      </StyledNav>
    </StyledHeader>
  );
};

export default Header;
