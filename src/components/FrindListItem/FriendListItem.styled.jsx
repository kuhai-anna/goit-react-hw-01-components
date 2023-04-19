import styled from '@emotion/styled';

export const FriendsItem = styled.li`
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 8px 15px;

  border-radius: 4px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
  background-color: #ffffff;

  :not(:last-child) {
    margin-bottom: 8px;
  }
`;

export const FriendsStatus = styled.span`
  display: block;
  width: 15px;
  height: 15px;
  border-radius: 50%;

  background-color: ${({ isOnline }) => {
    if (isOnline) {
      return '#02ad2d';
    } else if (!isOnline) {
      return '#c90202';
    } else {
      return '#e7e7e7';
    }
  }};
`;

export const FriendsAvatar = styled.img`
  border-radius: 4px;
  background-color: #e7e7e7;
`;

export const FriendsName = styled.p`
  font-weight: 500;
`;
