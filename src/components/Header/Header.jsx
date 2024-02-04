import ClassicCarLogo from '../../assets/classic-car.png';
import {
  StyledHeader,
  StyledHeaderContainer,
  StyledLogo,
  StyledLogoIcon,
  StyledLogoTitle,
  StyledNav,
  StyledLink,
} from './Header.styled';

const Header = () => {
  return (
    <StyledHeader>
      <StyledHeaderContainer>
        <StyledLogo to="/">
          <StyledLogoIcon src={ClassicCarLogo} alt="Classic Car Logo" />{' '}
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
