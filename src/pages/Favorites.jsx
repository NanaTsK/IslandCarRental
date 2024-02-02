// const Favorites = () => {
//   return <div>Favorites</div>;
// };

// export default Favorites;

import { useSelector } from 'react-redux';
import { selectFavorites } from '../redux/cars/carsSelectors';

import FavoritesList from '../components/FavoritesList';
// import NotFoundMessage from './_components/NotFoundMessage';

const FavoritesPage = () => {
  const favorites = useSelector(selectFavorites);

  return (
    <div style={{ height: '100%' }}>
      {favorites.length === 0 ? (
        // <NotFoundMessage />
        <div>List of your favorite cars</div>
      ) : (
        <FavoritesList favorites={favorites} />
      )}
    </div>
  );
};

export default FavoritesPage;
