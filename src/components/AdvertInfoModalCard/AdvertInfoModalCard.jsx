/* eslint-disable react/prop-types */

// import { extractLocation, parseConditions, formatMileage } from '@/utils';

import Button from '../Button';
import ModalWindow from '../ModalWindow';

import {
  StyledAdvertDetailsContainer,
  StyledAdvertDetailsImage,
  StyledAdvertDetailsBody,
  StyledAdvertDetailsTitle,
  StyledAdvertDetailsModel,
  StyledAdvertDetailsFeatureHeading,
  StyledAdvertDetailsFeaturesList,
  StyledAdvertDetailsFeature,
  StyledAdvertDetailsDescription,
  StyledAdvertDetailsFuncList,
  StyledAdvertDetailsFunc,
  StyledAdvertDetailsRentalList,
  StyledAdvertDetailsRentalItem,
  StyledAdvertDetailsRentalItemValue,
  StyledAdvertDetailsTelephon,
} from './AdvertInfoModalCard.styled';

//* 1:
function extractLocation(address) {
  const addressComponents = address
    .split(',')
    .map(component => component.trim());

  const country = addressComponents.pop();
  const city = addressComponents.pop();

  return { country, city };
}
//* 2:
function parseConditions(value) {
  const array = value.split('\n');
  let minimumAge = null;
  const conditions = [];
  for (const el of array) {
    if (el.includes('Minimum age:')) {
      const ageMatch = el.match(/\d+/);
      minimumAge = ageMatch ? parseInt(ageMatch[0]) : null;
    } else {
      conditions.push(el.trim());
    }
  }
  return {
    minimumAge,
    conditions,
  };
}

//* 3:
function formatMileage(mileage) {
  const result = mileage.toLocaleString('en');
  return result;
}
formatMileage(40000);

const AdvertInfoModalCard = ({ car, onClose }) => {
  const { city, country } = extractLocation(car.address);
  const { minimumAge, conditions } = parseConditions(car.rentalConditions);
  const mileage = formatMileage(car.mileage);

  // const [, city, country] = address.split(',');
  // const [minAge, validLicense, insurance] = rentalConditions.split('\n');
  // const age = parseInt(minAge.match(/\d+/));

  return (
    <ModalWindow onClose={onClose}>
      <StyledAdvertDetailsContainer>
        <StyledAdvertDetailsImage $img={car.img}></StyledAdvertDetailsImage>

        <StyledAdvertDetailsBody>
          <div>
            <StyledAdvertDetailsTitle>
              {car.make}{' '}
              <StyledAdvertDetailsModel>{car.model}</StyledAdvertDetailsModel>,{' '}
              {car.year}
            </StyledAdvertDetailsTitle>

            <StyledAdvertDetailsFeaturesList>
              <StyledAdvertDetailsFeature>{city}</StyledAdvertDetailsFeature>

              <StyledAdvertDetailsFeature>{country}</StyledAdvertDetailsFeature>

              <StyledAdvertDetailsFeature>
                Id: {car.id}
              </StyledAdvertDetailsFeature>

              <StyledAdvertDetailsFeature>
                Year: {car.year}
              </StyledAdvertDetailsFeature>

              <StyledAdvertDetailsFeature>
                Type: {car.type}
              </StyledAdvertDetailsFeature>

              <StyledAdvertDetailsFeature>
                Fuel Consumption: {car.fuelConsumption}
              </StyledAdvertDetailsFeature>

              <StyledAdvertDetailsFeature>
                Engine Size: {car.engineSize}
              </StyledAdvertDetailsFeature>
            </StyledAdvertDetailsFeaturesList>

            <StyledAdvertDetailsDescription>
              {car.description}
            </StyledAdvertDetailsDescription>
          </div>

          <div>
            <StyledAdvertDetailsFeatureHeading>
              Accessories and functionalities:
            </StyledAdvertDetailsFeatureHeading>
            <StyledAdvertDetailsFuncList>
              {car.accessories.map(accessorie => (
                <StyledAdvertDetailsFunc key={accessorie}>
                  {accessorie}
                </StyledAdvertDetailsFunc>
              ))}
              {car.functionalities.map(functionalitie => (
                <StyledAdvertDetailsFunc key={functionalitie}>
                  {functionalitie}
                </StyledAdvertDetailsFunc>
              ))}
            </StyledAdvertDetailsFuncList>
          </div>

          <div>
            <StyledAdvertDetailsFeatureHeading>
              Rental conditions:
            </StyledAdvertDetailsFeatureHeading>
            <StyledAdvertDetailsRentalList>
              <StyledAdvertDetailsRentalItem>
                Minimum age:{' '}
                <StyledAdvertDetailsRentalItemValue>
                  {minimumAge}
                </StyledAdvertDetailsRentalItemValue>
              </StyledAdvertDetailsRentalItem>

              {conditions.map(condition => (
                <StyledAdvertDetailsRentalItem key={condition}>
                  {condition}
                </StyledAdvertDetailsRentalItem>
              ))}

              <StyledAdvertDetailsRentalItem>
                Mileage:{' '}
                <StyledAdvertDetailsRentalItemValue>
                  {mileage}
                </StyledAdvertDetailsRentalItemValue>
              </StyledAdvertDetailsRentalItem>

              <StyledAdvertDetailsRentalItem>
                Price:{' '}
                <StyledAdvertDetailsRentalItemValue>
                  {car.rentalPrice}
                </StyledAdvertDetailsRentalItemValue>
              </StyledAdvertDetailsRentalItem>
            </StyledAdvertDetailsRentalList>
          </div>

          <Button padY={12} padX={50}>
            <StyledAdvertDetailsTelephon href="tel:+380730000000">
              Car rental
            </StyledAdvertDetailsTelephon>
          </Button>
        </StyledAdvertDetailsBody>
      </StyledAdvertDetailsContainer>
    </ModalWindow>
  );
};

export default AdvertInfoModalCard;
