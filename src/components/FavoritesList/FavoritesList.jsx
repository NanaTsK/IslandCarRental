/* eslint-disable react/prop-types */

import AdvertItem from '../AdvertItem';

import {
  // StyledFavoriteListWrapper,
  // StyledFavoriteListTitle,
  StyledFavoritesList,
} from './FavoritesList.styled';

const FavoritesList = ({ favorites }) => {
  return (
    <StyledFavoritesList>
      {favorites.map(favorite => (
        <AdvertItem key={favorite.id} car={favorite} />
      ))}
    </StyledFavoritesList>
  );
};

export default FavoritesList;
