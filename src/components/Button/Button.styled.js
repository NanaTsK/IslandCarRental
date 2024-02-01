import styled from 'styled-components';

export const StyledButton = styled.button`
  color: var(--background-color);
  font-size: 14px;
  font-weight: 600;
  line-height: 1.43;
  border: none;

  padding: ${({ $padY, $padX }) => `${$padY}px ${$padX}px`};
  border-radius: 12px;
  background: var(--main-blue-color);

  transition: var(--transition);

  &:hover,
  &:focus {
    background: var(--hover-blue-color);
  }
`;
