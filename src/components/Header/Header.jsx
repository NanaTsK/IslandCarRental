// import { Link } from 'react-router-dom';
import SpaOutlined from '@mui/icons-material/SpaOutlined';
import {
  StyledHeader,
  StyledHeaderContainer,
  StyledLogo,
  // StyledLogoIcon,
  StyledLogoTitle,
  StyledNav,
  StyledLink,
} from './Header.styled';

const Header = () => {
  return (
    <StyledHeader>
      <StyledHeaderContainer>
        <StyledLogo to="/">
          <SpaOutlined sx={{ display: 'flex' }} />
          <StyledLogoTitle>IslandCarRental</StyledLogoTitle>
        </StyledLogo>
        <StyledNav>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/catalog">Catalog</StyledLink>
          <StyledLink to="/favorites">Favorites</StyledLink>
        </StyledNav>
      </StyledHeaderContainer>
    </StyledHeader>
  );
};

export default Header;
