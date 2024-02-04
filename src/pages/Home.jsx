// const Home = () => {
//   return <div>Home</div>;
// };

// export default Home;
//* =====
import { useNavigate } from 'react-router-dom';
import Button from 'components/Button';
import MainImage from '../assets/classic-car.png';

import {
  StyledMainImage,
  StyledHomeContainer,
  StyledHomePageTitle,
  StyledHomePageTitleName,
  ButtonContainer,
  // StyledHomePageInfo,
  // StyledHomePageInfoSection,
} from './Home.styled';

const HomePage = () => {
  const navigate = useNavigate();

  const onHandleClick = () => {
    navigate('/catalog');
  };

  return (
    <StyledHomeContainer>
      <StyledHomePageTitle>
        <StyledHomePageTitleName>Island Car Rental</StyledHomePageTitleName> -
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
