import styled from 'styled-components';

export const StyledButton = styled.button`
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  line-height: 143;
  border: none;

  padding: ${({ $padY, $padX }) => `${$padY}px ${$padX}px`};
  border-radius: 12px;
  background: var(--accent-color);

  transition: var(--transition);

  &:hover,
  &:focus {
    background: var(--hover-color);
  }
`;
