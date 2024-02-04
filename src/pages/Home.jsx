import { useNavigate } from 'react-router-dom';
import Button from 'components/Button';
import MainImage from '../assets/classic-car-emblem.webp';

import {
  StyledMainImage,
  StyledHomeContainer,
  StyledHomePageTitle,
  StyledHomePageTitleName,
  ButtonContainer,
} from './Home.styled';

const HomePage = () => {
  const navigate = useNavigate();

  const onHandleClick = () => {
    navigate('/catalog');
  };

  return (
    <StyledHomeContainer>
      {/* <StyledHomePageTitle>
        <StyledHomePageTitleName>Island Car Rental</StyledHomePageTitleName> -
        Your Way To Explore Malta With Joy !
      </StyledHomePageTitle> */}
      <StyledHomePageTitleName>Island Car Rental</StyledHomePageTitleName>

      <StyledHomePageTitle>
        Your Way To Explore Malta With Joy !
      </StyledHomePageTitle>

      <StyledMainImage src={MainImage} alt="Classic Car" />
      <ButtonContainer>
        <Button padY={14} padX={80} onClick={onHandleClick}>
          Choose Your Car
        </Button>
      </ButtonContainer>
    </StyledHomeContainer>
  );
};

export default HomePage;
