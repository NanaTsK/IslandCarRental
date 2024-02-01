import styled from 'styled-components';
// import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

export const StyledHeader = styled.header`
  width: 100%;
  height: 50px;
  margin-top: 20px;
  margin-bottom: 20px;
  border-bottom: 2px solid var(--options-text-color);

  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

export const StyledLink = styled(NavLink)`
  padding: 12px 50px;
  /* display: inline-block; */
  /* display: inline-flex; 
  align-items: center; 
  justify-content: center;  */
  /* display: flex;
  flex-direction: row; */
  border: 2px solid transparent;
  box-sizing: border-box;
  color: var(--button-color);
  transition: transform var(--transition);

  &:hover {
    color: var(--accent-color);
    transform: scale(1.1);

    border-color: var(--accent-color);
    border-radius: 12px;
    padding: 12px 50px;
  }
`;
