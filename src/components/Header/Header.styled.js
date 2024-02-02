import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';

export const StyledHeader = styled.header`
  width: 100%;
  padding-top: 20px;
  padding-bottom: 20px;
  border-bottom: 2px solid var(--options-text-color);
  margin-bottom: 30px;

  /* display: flex; */
  /* align-items: center; */
  /* justify-content: center; */
  /* flex-direction: column; */

  @media screen and (min-width: 768px) {
    /* flex-direction: row; */
    /* flex-wrap: wrap; */
    /* justify-content: center; */
    /* justify-content: space-around;
    align-items: center; */
  }
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
  stroke: var(--main-text-color);
`;

export const StyledLogoTitle = styled.p`
  font-weight: 600;
  font-size: 19px;
  color: var(--main-text-color);
`;

export const StyledNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  /* flex-wrap: nowrap; */

  @media screen and (min-width: 768px) {
    flex-direction: row;
    /* flex-wrap: wrap; */
    justify-content: center;
    /* justify-content: space-around;
    align-items: center; */
  }
`;

export const StyledLink = styled(NavLink)`
  font-weight: 600;
  font-size: 19px;
  padding: 2px 8px;
  /* display: inline-flex; */
  /* flex-wrap: nowrap; */

  display: flex;
  align-items: center;
  justify-content: center;
  /* display: flex; */
  /* flex-direction: column; */

  /* flex-direction: row; */
  margin: 0 10px;

  border: 2px solid transparent;
  border-radius: 12px;
  box-sizing: border-box;
  color: var(--main-blue-color);
  transition: transform var(--transition);

  &:hover {
    color: var(--hover-blue-color);
    transform: scale(1.1);
    /* border-color: var(--options-text-color); */
  }
  @media screen and (min-width: 768px) {
    /* margin: 0 10px; */
    flex-direction: row;
    padding: 8px 8px;

    /* justify-content: space-around;
    align-items: center; */
  }
`;

// export const StyledLogoIcon = styled.svg`
//   height: 32px;
//   width: 32px;
//   fill: var(--main-blue-color);
//   /* stroke: none; */
// `;
