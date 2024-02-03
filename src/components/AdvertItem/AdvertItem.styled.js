import styled from 'styled-components';

export const StyledAdvertItemCard = styled.li`
  width: 274px;
`;

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

  transition: var(--transition);
  &:hover {
    transform: scale(1.2);
    stroke: var(--hover-blue-color);
  }
`;

export const StyledAdvertItemTitleContainer = styled.div`
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

export const StyledAdvertItemInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: 28px;
`;

export const StyledAdvertItemInfoList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  max-width: 100%;
`;

export const StyledAdvertItemInfoItem = styled.li`
  color: var(--accessories-text-color);
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
  &:not(:first-child) {
    padding-left: 6px;
    border-left: 1px solid rgba(18, 20, 23, 0.1);
  }
`;
