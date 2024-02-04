import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';

export const StyledHeader = styled('header')({
  position: 'fixed',
  top: '0',
  left: '0',
  zIndex: '999',
  width: '100%',
  backgroundColor: 'var(--background-color)',
  boxShadow: '0 1px 8px 0 rgba(18, 20, 23, 0.5)',
});

export const StyledHeaderContainer = styled.header`
  padding-top: 10px;
  padding-bottom: 10px;
`;

export const StyledLogo = styled(Link)`
  display: flex;
  align-items: center;
  gap: 4px;
  margin-left: 20px;
`;

export const StyledLogoIcon = styled.img`
  height: 46px;
  width: 46px;
`;

export const StyledLogoTitle = styled.p`
  font-weight: 600;
  font-size: 19px;
  color: var(--accent-color);
`;

export const StyledNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
  }
`;

export const StyledLink = styled(NavLink)`
  position: relative;

  font-weight: 600;
  font-size: 19px;
  padding: 2px 8px;
  margin: 0 10px;
  color: var(--main-blue-color);

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover,
  &:focus {
    color: var(--hover-blue-color);
    transform: scale(1.1);
  }

  &.active {
    text-decoration: underline;
    color: var(--hover-blue-color);
    transform: scale(1.1);
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
    padding: 8px 8px;
  }
`;
