// eslint-disable-next-line react/prop-types
import { StyledButton } from './Button.styled';

const Button = ({ padY, padX, onClick, children }) => {
  return (
    <StyledButton $padY={padY} $padX={padX} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default Button;
