/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from 'react-redux';
import Button from '../Button';
import { toggleFavorite } from '../../redux/cars/carsSlice';
import { selectFavorites } from '../../redux/cars/carsSelectors';
import {
  StyledAdvertItemCard,
  StyledAdvertItemCardImageWrapper,
  StyledAdvertItemLikeButton,
  StyledAdvertItemInfoContainer,
  StyledAdvertItemTitle,
  StyledAdvertItemModel,
  StyledAdvertItemPrice,
  // StyledAdvertItemFeaturesList,
  // StyledAdvertItemFeature,
} from './AdvertItem.styled';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';

const AdvertItem = ({ car }) => {
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);
  const isFavorite = favorites.filter(favorite => favorite.id === car.id)[0];
  const onFavoriteToggle = car => {
    dispatch(toggleFavorite(car));
  };

  return (
    <StyledAdvertItemCard>
      <StyledAdvertItemCardImageWrapper $img={car.img}>
        <StyledAdvertItemLikeButton onClick={() => onFavoriteToggle(car)}>
          {isFavorite ? (
            <FavoriteOutlinedIcon
              fontSize="medium"
              style={{ fill: 'var(--main-blue-color)' }}
            />
          ) : (
            <FavoriteBorderIcon
              fontSize="medium"
              style={{ fill: 'var(--heart-color)' }}
            />
          )}
        </StyledAdvertItemLikeButton>
      </StyledAdvertItemCardImageWrapper>

      <StyledAdvertItemInfoContainer>
        <StyledAdvertItemTitle>
          {car.make}
          {car.make.length < 10 && car.model ? (
            <>
              &nbsp;<StyledAdvertItemModel>{car.model}</StyledAdvertItemModel>
            </>
          ) : null}
          , {car.year}
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
