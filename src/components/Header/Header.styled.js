import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';

export const StyledHeader = styled.header`
  /* position: fixed;
  z-index: 20; */
  /* width: '100%'; */

  width: 100%;
  padding-top: 20px;
  padding-bottom: 20px;
  border-bottom: 2px solid var(--options-text-color);
  margin-bottom: 30px;

  background-color: var(--accent-color-02);
`;

export const StyledLogo = styled(Link)`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const StyledLogoIcon = styled.svg`
  height: 32px;
  width: 32px;
  fill: var(--main-text-color);
  /* stroke: var(--accent-color); */
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

// export const StyledLogoIcon = styled.svg`
//   height: 32px;
//   width: 32px;
//   fill: var(--main-blue-color);
//   /* stroke: none; */
// `;
