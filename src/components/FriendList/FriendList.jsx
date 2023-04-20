import PropTypes from 'prop-types';
import { FriendListItem } from 'components/FrindListItem/FriendListItem';
import { Friends } from './FriendList.styled';

export const FriendList = ({ items }) => {
  return (
    <Friends>
      {items.map(({ id, avatar, name, isOnline }) => (
        <FriendListItem
          key={id}
          avatarUrl={avatar}
          name={name}
          isOnline={isOnline}
        />
      ))}
    </Friends>
  );
};

FriendList.prototype = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      avatarUrl: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};
