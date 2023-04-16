import clsx from 'clsx';
import css from './FriendListItem.module.css';
import PropTypes from 'prop-types';

export const FriendListItem = ({ avatarUrl, name, isOnline }) => {
  return (
    <>
      <span
        className={clsx(css.status, {
          [css.isOnline]: isOnline,
          [css.isOffline]: !isOnline,
        })}
      ></span>
      <img
        className={css.avatar}
        src={avatarUrl}
        alt="User avatar"
        width="48"
      />
      <p className={css.name}>{name}</p>
    </>
  );
};

FriendListItem.propTypes = {
  avatarUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
