import makes from '../../makes.json';
import Button from '../../components/Button';
import {
  StyledAdvertForm,
  StyledAdvertFormItemWrapper,
  StyledAdvertFormLabel,
  StyledAvdretFormSelect,
  StyledAvdretFormArrowIcon,
  StyledAvdretFormCustomSelect,
  StyledAvdretFormMileageInput,
  StyledAvdretFormInputFrom,
  StyledAvdretFormInputTo,
} from './AdvertFilterForm.styled';

function createPrices() {
  const prices = [];
  for (let price = 10; price <= 100; price += 10) {
    prices.push(price.toString());
  }
  return prices;
}

const AdvertFilterForm = () => {
  const prices = createPrices();

  const onFormSubmit = e => {
    e.preventDefault();
    const { brand, price, minMileage, maxMileage } = e.target.elements;
    const data = {
      brand: brand.value,
      maxPrice: price.value,
      minMileage: minMileage.value,
      maxMileage: maxMileage.value,
    };

    console.log(data);
  };

  return (
    <StyledAdvertForm onSubmit={onFormSubmit}>
      <StyledAdvertFormItemWrapper>
        <StyledAdvertFormLabel htmlFor="car_brand">
          Car Brand
        </StyledAdvertFormLabel>

        <StyledAvdretFormCustomSelect>
          <StyledAvdretFormSelect
            name="brand"
            placeholder="Enter the text"
            id="car_brand"
            defaultValue=""
            $width={224}
          >
            <option value="" disabled>
              Enter the text
            </option>
            {makes.map(make => (
              <option key={make} value={make}>
                {make}
              </option>
            ))}
          </StyledAvdretFormSelect>
          <StyledAvdretFormArrowIcon>
            <use xlinkHref="/icons.svg#icon-chevron-down"></use>
          </StyledAvdretFormArrowIcon>
        </StyledAvdretFormCustomSelect>
      </StyledAdvertFormItemWrapper>

      <StyledAdvertFormItemWrapper>
        <StyledAdvertFormLabel htmlFor="car_price">
          Price/ 1 hour
        </StyledAdvertFormLabel>

        <StyledAvdretFormCustomSelect>
          <StyledAvdretFormSelect
            name="price"
            placeholder="To $"
            id="car_price"
            defaultValue=""
            $width={125}
          >
            <option value="" disabled>
              To $
            </option>
            {prices.map(price => (
              <option key={price}>{price}</option>
            ))}
          </StyledAvdretFormSelect>
          <StyledAvdretFormArrowIcon>
            <use xlinkHref="/icons.svg#icon-chevron-down"></use>
          </StyledAvdretFormArrowIcon>
        </StyledAvdretFormCustomSelect>
      </StyledAdvertFormItemWrapper>

      <StyledAdvertFormItemWrapper>
        <StyledAdvertFormLabel htmlFor="min_mileage">
          Сar mileage / km
        </StyledAdvertFormLabel>
        <StyledAvdretFormMileageInput>
          <StyledAvdretFormInputFrom
            type="number"
            name="minMileage"
            placeholder="From"
            id="min_mileage"
          />
          <StyledAvdretFormInputTo
            type="number"
            name="maxMileage"
            placeholder="To"
            id="max_mileage"
          />
        </StyledAvdretFormMileageInput>
      </StyledAdvertFormItemWrapper>

      <Button padY={14} padX={44}>
        Search
      </Button>
    </StyledAdvertForm>
  );
};

export default AdvertFilterForm;
