import styled from 'styled-components';

export const StyledMainImage = styled.img`
  width: 60%;
  display: block;
  margin: 0 auto;

  @media (min-width: 768px) {
    width: 40%;
  }
`;

export const StyledHomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
`;

export const StyledHomePageTitle = styled.span`
  font-weight: 600;
  font-size: 24px;
  color: var(--secondary-text-color);
  text-align: center;
  /* margin-bottom: 20px; */

  @media (min-width: 768px) {
    font-size: 28px;
  }
`;

export const StyledHomePageTitleName = styled.h1`
  font-weight: 600;
  font-size: 34px;
  margin-top: 20px;
  margin-bottom: 8px;

  color: var(--accent-color);

  @media (min-width: 768px) {
    font-size: 38px;
  }
`;

export const ButtonContainer = styled.div`
  text-align: center;
`;
