import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

// import { getAllCars } from '../../services/state/cars/carsOperations';
import { getAllCars } from '../redux/cars/carsOperations';
// import { selectIsLoading } from '../../services/state/cars/carsSelectors';
// import { selectIsLoading } from '../redux/cars/carsSelectors';

// import Loader from '../../components/ui/Loader';
import AdvertList from '../components/AdvertList';

const CatalogPage = () => {
  const dispatch = useDispatch();
  // const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(getAllCars());
  }, [dispatch]);

  return (
    <section>
      <AdvertList />
      {/* {isLoading && <Loader />} */}
    </section>
  );
};

export default CatalogPage;
