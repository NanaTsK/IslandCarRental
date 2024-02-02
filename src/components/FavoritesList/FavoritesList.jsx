/* eslint-disable react/prop-types */

import AdvertItem from '../AdvertItem';

import { StyledFavoritesList } from './FavoritesList.styled';

const FavoritesList = ({ favorites }) => {
  return (
    <div>
      <StyledFavoritesList>
        {favorites.map(favorite => (
          <li key={favorite.id}>
            <AdvertItem car={favorite} />
          </li>
        ))}
      </StyledFavoritesList>
    </div>
  );
};

export default FavoritesList;
