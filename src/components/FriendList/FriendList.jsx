import css from './FriendList.module.css';
import { FriendListItem } from 'components/FrindListItem/FriendListItem';

export const FrindList = ({ items }) => {
  return (
    <ul className={css.friendList}>
      {items.map(({ id, avatar, name, isOnline }) => (
        <FriendListItem
          key={id}
          avatarUrl={avatar}
          name={name}
          isOnline={isOnline}
        />
      ))}
    </ul>
  );
};
