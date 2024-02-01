// import { Link } from 'react-router-dom';
import {
  StyledHeader,
  StyledNav,
  StyledLink,
  // StyledLogoIcon,
} from './Header.styled';

const Header = () => {
  return (
    <StyledHeader>
      <div>
        {/* <StyledLogoIcon>
          <use xlinkHref="/car2.png" />
        </StyledLogoIcon> */}
        <p>IslandCarRental</p>
      </div>
      <StyledNav>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/catalog">Catalog</StyledLink>
        <StyledLink to="/favorites">Favorites</StyledLink>
      </StyledNav>
    </StyledHeader>
  );
};

export default Header;
