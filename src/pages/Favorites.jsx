import { useSelector } from 'react-redux';
import { selectFavorites } from '../redux/cars/carsSelectors';

import { useNavigate } from 'react-router-dom';
import Button from 'components/Button';
import EmptyPageTemplate from '../components/EmptyPageTemplate';

import FavoritesList from '../components/FavoritesList';

const FavoritesPage = () => {
  const navigate = useNavigate();

  const onHandleClick = () => {
    navigate('/catalog');
  };

  const favorites = useSelector(selectFavorites);

  return (
    <div style={{ height: '100%' }}>
      {favorites.length === 0 ? (
        <EmptyPageTemplate
          // titleName="Island Car Rental"
          titleText="Your Favorites List Is Stil Empty.
          Choose Your Car From The Catalog!"
        >
          <Button padY={14} padX={80} onClick={onHandleClick}>
            Choose Your Car
          </Button>
        </EmptyPageTemplate>
      ) : (
        <FavoritesList favorites={favorites} />
      )}
    </div>
  );
};

export default FavoritesPage;
