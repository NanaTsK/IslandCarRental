/* eslint-disable react/prop-types */

// import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../Button';
// import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { toggleFavorite } from '../../redux/cars/carsSlice';
import { selectFavorites } from '../../redux/cars/carsSelectors';
import {
  StyledFavoriteBorderIcon,
  StyledAdvertItemCard,
  StyledAdvertItemCardImageWrapper,
  StyledAdvertItemLikeButton,
  // StyledAdvertItemLikeIcon,
  StyledAdvertItemInfoContainer,
  StyledAdvertItemTitle,
  StyledAdvertItemModel,
  StyledAdvertItemPrice,
  // StyledAdvertItemFeaturesList,
  // StyledAdvertItemFeature,
} from './AdvertItem.styled';

const AdvertItem = ({ car }) => {
  // const [isLiked, setIsLiked] = useState(false);

  // const toggleLike = () => {
  //   setIsLiked(!isLiked);
  // };

  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);
  const isFavorite = favorites.filter(favorite => favorite.id === car.id)[0];
  const onFavoriteToggle = car => {
    dispatch(toggleFavorite(car));
  };

  return (
    <StyledAdvertItemCard>
      <StyledAdvertItemCardImageWrapper $img={car.img}>
        {/* <StyledAdvertItemLikeButton> */}
        <StyledAdvertItemLikeButton
          onClick={() => onFavoriteToggle(car)}
          // className={isLiked ? 'liked' : ''}
        >
          {/* <StyledAdvertItemLikeIcon $isFavorite={isFavorite}></StyledAdvertItemLikeIcon> */}
          {/* <FavoriteBorderIcon
            fontSize="medium"
            style={{ fill: 'var(--heart-color)' }}
          /> */}
          <StyledFavoriteBorderIcon $isFavorite={isFavorite} />
        </StyledAdvertItemLikeButton>
      </StyledAdvertItemCardImageWrapper>

      <StyledAdvertItemInfoContainer>
        <StyledAdvertItemTitle>
          {car.make} <StyledAdvertItemModel>{car.model}</StyledAdvertItemModel>,{' '}
          {car.year}
        </StyledAdvertItemTitle>
        <StyledAdvertItemPrice>{car.rentalPrice}</StyledAdvertItemPrice>
      </StyledAdvertItemInfoContainer>

      <Button padX={99} padY={12}>
        Learn More
      </Button>
    </StyledAdvertItemCard>
  );
};

export default AdvertItem;
