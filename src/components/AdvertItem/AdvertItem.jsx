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
  BottomTextStyle,
  BottomTextListStyle,
  BottomTextItemStyle,
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

  const addressParts = car.address.split(',');
  const city = addressParts[1].trim();
  const country = addressParts[2].trim();

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

      {/* <StyledAdvertItemFeaturesList>
        <StyledAdvertItemFeature>
          {extractLocation(car.address).city}
        </StyledAdvertItemFeature>
        <StyledAdvertItemFeature>
          {extractLocation(car.address).country}
        </StyledAdvertItemFeature>
        <StyledAdvertItemFeature>{car.rentalCompany}</StyledAdvertItemFeature>
        <StyledAdvertItemFeature>Premium</StyledAdvertItemFeature>
        <StyledAdvertItemFeature>{car.type}</StyledAdvertItemFeature>
        <StyledAdvertItemFeature>{car.model}</StyledAdvertItemFeature>
        <StyledAdvertItemFeature>{car.id}</StyledAdvertItemFeature>
        <StyledAdvertItemFeature>{car.accessories[0]}</StyledAdvertItemFeature>
      </StyledAdvertItemFeaturesList> */}

      <BottomTextStyle>
        <BottomTextListStyle>
          <BottomTextItemStyle>{city}</BottomTextItemStyle>
          <BottomTextItemStyle>{country}</BottomTextItemStyle>
          <BottomTextItemStyle>{car.rentalCompany}</BottomTextItemStyle>
          {/* <BottomTextItemStyle>Premium</BottomTextItemStyle> */}
        </BottomTextListStyle>
        <BottomTextListStyle>
          <BottomTextItemStyle>{car.type}</BottomTextItemStyle>
          <BottomTextItemStyle>{car.make}</BottomTextItemStyle>
          <BottomTextItemStyle>{car.id}</BottomTextItemStyle>
          {/* <BottomTextItemStyle>{car.accessories[0]}</BottomTextItemStyle> */}
        </BottomTextListStyle>
      </BottomTextStyle>

      <Button padX={99} padY={12}>
        Learn More
      </Button>
    </StyledAdvertItemCard>
  );
};

export default AdvertItem;
