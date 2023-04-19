import PropTypes from 'prop-types';
import {
  FriendsAvatar,
  FriendsItem,
  FriendsName,
  FriendsStatus,
} from './FriendListItem.styled';

export const FriendListItem = ({ id, avatarUrl, name, isOnline }) => {
  return (
    <FriendsItem key={id}>
      <FriendsStatus isOnline={isOnline}></FriendsStatus>
      <FriendsAvatar src={avatarUrl} alt="User avatar" width="48" />
      <FriendsName>{name}</FriendsName>
    </FriendsItem>
  );
};

FriendListItem.propTypes = {
  id: PropTypes.number.isRequired,
  avatarUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
