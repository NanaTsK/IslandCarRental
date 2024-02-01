import { useSelector } from 'react-redux';

// import { selectCars } from '../../../../services/state/cars/carsSelectors';
import { selectCars } from '../../redux/cars/carsSelectors';

import AdvertItem from '../AdvertItem';
import { StyledAdvertList } from './AdvertList.styled';

const AdvertList = () => {
  const cars = useSelector(selectCars);

  return (
    <StyledAdvertList>
      {cars.map(car => (
        <AdvertItem key={car.id} car={car} />
      ))}
    </StyledAdvertList>
  );
};

export default AdvertList;
