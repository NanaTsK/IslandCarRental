import styled from 'styled-components';

export const StyledAdvertItemCard = styled.li``;

export const StyledAdvertItemCardImageWrapper = styled.div`
  height: 268px;
  border-radius: 14px;

  position: relative;

  background-image: ${({ $img }) => `url(${$img})`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  margin-bottom: 14px;
`;

export const StyledAdvertItemLikeButton = styled.button`
  padding: 0;
  line-height: 0;
  border: none;
  background-color: transparent;
  position: absolute;
  top: 14px;
  right: 14px;

  /* &:hover,
  &:focus {
    & > svg {
      stroke: var(--hover-blue-color);
    }
  } */
  &:hover,
  &:focus {
    .heart-icon {
      fill: var(--hover-blue-color);
    }
  }
`;

// export const StyledAdvertItemLikeIcon = styled.svg`
//   width: 18px;
//   height: 18px;
//   /* fill: none; */
//   /* stroke: var(--heart-color); */
//   /* stroke: rgba(255, 255, 255, 0.8);
//   fill: none; */

//   transition: var(--transition);
// `;

export const StyledAdvertItemLikeIcon = styled.div`
  width: 18px;
  height: 18px;
  position: relative;

  &:before,
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 8px;
    width: 8px;
    height: 14px;
    border-radius: 8px 8px 0 0;
    background-color: var(--heart-color); /* Set the heart color */
    transform: rotate(-45deg);
    transform-origin: center bottom;
  }

  &:after {
    left: 0;
    transform: rotate(45deg);
  }
`;

export const StyledAdvertItemInfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 8px;
`;

export const StyledAdvertItemTitle = styled.h3`
  color: var(--main-text-color);

  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;

  max-width: 20ch;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const StyledAdvertItemModel = styled.span`
  color: var(--main-blue-color);
`;

export const StyledAdvertItemPrice = styled.p`
  color: var(--main-text-color);

  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
`;

export const StyledAdvertItemFeaturesList = styled.ul``;

export const StyledAdvertItemFeature = styled.li``;
