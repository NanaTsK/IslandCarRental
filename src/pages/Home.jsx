import { useNavigate } from 'react-router-dom';
import Button from 'components/Button';
import EmptyPageTemplate from '../components/EmptyPageTemplate';

const HomePage = () => {
  const navigate = useNavigate();

  const onHandleClick = () => {
    navigate('/catalog');
  };

  return (
    <EmptyPageTemplate
      titleName="Island Car Rental"
      titleText="Your Way To Explore Malta With Joy !"
    >
      <Button padY={14} padX={80} onClick={onHandleClick}>
        Choose Your Car
      </Button>
    </EmptyPageTemplate>
  );
};

export default HomePage;
