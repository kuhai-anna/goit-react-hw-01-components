import css from './FriendList.module.css';
import { FriendListItem } from 'components/frindListItem/FriendListItem';

export const FrindList = ({ items }) => {
  return (
    <ul className={css.friendList}>
      {items.map(({ id, avatar, name, isOnline }) => (
        <li className={css.item} key={id}>
          <FriendListItem avatarUrl={avatar} name={name} isOnline={isOnline} />
        </li>
      ))}
    </ul>
  );
};
