// import { Link } from 'react-router-dom';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import {
  StyledHeader,
  StyledLogo,
  // StyledLogoIcon,
  StyledLogoTitle,
  StyledNav,
  StyledLink,
} from './Header.styled';

const Header = () => {
  return (
    <StyledHeader>
      <StyledLogo to="/">
        <FavoriteBorderIcon sx={{ display: 'flex' }} />
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
