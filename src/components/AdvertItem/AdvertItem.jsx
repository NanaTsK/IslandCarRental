/* eslint-disable react/prop-types */

import React, { useState } from 'react';
import Button from '../Button';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

import {
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
  const [isLiked, setIsLiked] = useState(false);

  const toggleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <StyledAdvertItemCard>
      <StyledAdvertItemCardImageWrapper $img={car.img}>
        {/* <StyledAdvertItemLikeButton> */}
        <StyledAdvertItemLikeButton
          onClick={toggleLike}
          className={isLiked ? 'liked' : ''}
        >
          <FavoriteBorderIcon
            fontSize="medium"
            style={{ fill: 'var(--heart-color)' }}
          />
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
