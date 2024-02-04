/* eslint-disable react/prop-types */
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../Button';
import AdvertInfoModalCard from 'components/AdvertInfoModalCard';
import { toggleFavorite } from '../../redux/cars/carsSlice';
import { selectFavorites } from '../../redux/cars/carsSelectors';
import {
  StyledAdvertItemCard,
  StyledAdvertItemCardImageWrapper,
  StyledAdvertItemLikeButton,
  StyledAdvertItemTitleContainer,
  StyledAdvertItemTitle,
  StyledAdvertItemModel,
  StyledAdvertItemPrice,
  StyledAdvertItemInfoContainer,
  StyledAdvertItemInfoList,
  StyledAdvertItemInfoItem,
} from './AdvertItem.styled';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';

const AdvertItem = ({ car }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);
  const isFavorite = favorites.filter(favorite => favorite.id === car.id)[0];
  const onFavoriteToggle = car => {
    dispatch(toggleFavorite(car));
  };
  const toggleModal = () => {
    setIsModalOpen(prev => !prev);
  };

  const addressParts = car.address.split(',');
  const city = addressParts[1].trim();
  const country = addressParts[2].trim();

  const fitTextInRow = (text, maxLength) => {
    let words = text.split(' ');
    let fittedText = '';
    for (let word of words) {
      if ((fittedText + word).length <= maxLength) {
        fittedText += (fittedText.length === 0 ? '' : ' ') + word;
      } else {
        break;
      }
    }
    return fittedText;
  };

  return (
    <>
      <StyledAdvertItemCard>
        <StyledAdvertItemCardImageWrapper $img={car.img} alt={car.model}>
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

        <StyledAdvertItemTitleContainer>
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
        </StyledAdvertItemTitleContainer>

        <StyledAdvertItemInfoContainer>
          {city && country && car.rentalCompany && (
            <StyledAdvertItemInfoList>
              <StyledAdvertItemInfoItem>{city}</StyledAdvertItemInfoItem>
              <StyledAdvertItemInfoItem>{country}</StyledAdvertItemInfoItem>
              <StyledAdvertItemInfoItem>
                {car.rentalCompany}
              </StyledAdvertItemInfoItem>
              {city.length + country.length + car.rentalCompany.length <=
                29 && (
                <StyledAdvertItemInfoItem>Premium</StyledAdvertItemInfoItem>
              )}
            </StyledAdvertItemInfoList>
          )}

          <StyledAdvertItemInfoList>
            {car.type && (
              <StyledAdvertItemInfoItem>{car.type}</StyledAdvertItemInfoItem>
            )}
            {car.make && (
              <StyledAdvertItemInfoItem>{car.make}</StyledAdvertItemInfoItem>
            )}
            {car.id && (
              <StyledAdvertItemInfoItem>{car.id}</StyledAdvertItemInfoItem>
            )}
            {car.accessories[0] && (
              <StyledAdvertItemInfoItem>
                {fitTextInRow(car.accessories[0], 12)}
              </StyledAdvertItemInfoItem>
            )}
          </StyledAdvertItemInfoList>
        </StyledAdvertItemInfoContainer>

        <Button padX={99} padY={12} onClick={toggleModal}>
          Learn More
        </Button>
      </StyledAdvertItemCard>
      {isModalOpen && <AdvertInfoModalCard car={car} onClose={toggleModal} />}
    </>
  );
};

export default AdvertItem;
