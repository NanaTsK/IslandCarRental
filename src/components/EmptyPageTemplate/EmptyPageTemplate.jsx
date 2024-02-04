import MainImage from '../../assets/classic-car-emblem.webp';

import {
  StyledMainImage,
  StyledHomeContainer,
  StyledHomePageTitle,
  StyledHomePageTitleName,
  ButtonContainer,
} from './EmptyPageTemplate.styled';

const EmptyPageTemplate = ({ titleName, titleText, children }) => {
  return (
    <StyledHomeContainer>
      <StyledHomePageTitleName>{titleName}</StyledHomePageTitleName>
      <StyledHomePageTitle>{titleText}</StyledHomePageTitle>
      <StyledMainImage src={MainImage} alt="Classic Car" />
      <ButtonContainer>{children}</ButtonContainer>
    </StyledHomeContainer>
  );
};

export default EmptyPageTemplate;
