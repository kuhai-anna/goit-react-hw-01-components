import { FriendListItem } from 'components/frindListItem/FriendListItem';

export const FrindList = ({ items }) => {
  return (
    <ul className="friend-list">
      {items.map(({ id, avatar, name, isOnline }) => (
        <li className="item" key={id}>
          <FriendListItem avatarUrl={avatar} name={name} isOnline={isOnline} />
        </li>
      ))}
    </ul>
  );
};
