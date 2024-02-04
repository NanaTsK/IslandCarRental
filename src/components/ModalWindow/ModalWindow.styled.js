import styled from 'styled-components';

export const StyledModalWindowOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: var(--accessories-text-color);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledModalWindow = styled.div`
  position: relative;

  box-sizing: border-box;
  width: 541px;
  border-radius: 24px;
  padding: 40px;
  background-color: var(--background-color);
`;

export const StyledModalWindowCloseButton = styled.button`
  padding: 0;
  line-height: 0;
  background-color: transparent;
  border: none;

  position: absolute;
  top: 16px;
  right: 16px;

  &:hover,
  &:focus {
    & > svg {
      stroke: var(--accent-color);
      transform: rotate(90deg);
    }
  }
`;

// export const StyledModalWindowCloseIcon = styled.svg`
//   stroke: var(--main-text-color);
//   width: 24px;
//   height: 24px;

//   transition: var(--transition);
// `;

export const StyledModalWindowContainer = styled.div``;
