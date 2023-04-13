import PropTypes from 'prop-types';

export const FriendListItem = ({ avatarUrl, name, IsOnline }) => {
  return (
    <>
      <span className="status"></span>
      <img className="avatar" src={avatarUrl} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </>
  );
};

FriendListItem.propTypes = {
  avatarUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  status: PropTypes.bool.isRequired,
};
