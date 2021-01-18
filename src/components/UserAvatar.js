import React from 'react';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import { Avatar, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  avatar: {
    cursor: 'pointer',
    width: 64,
    height: 64
  }
}));
const UserAvatar = ({ user, className, to }) => {
  const classes = useStyles();
  className = className || classes.avatar;
  if (user.avatar) {
    console.log(user.avatar);
    return <Avatar className={className} component={RouterLink} src={user.avatar} to={to} />;
  }
  return (
    <Avatar
      aria-label={user.name}
      className={className}
      component={RouterLink}
      style={{ backgroundColor: user.avatar_color }}
      to={to}
    >
      {user.avatar_letter}
    </Avatar>
  );
};

UserAvatar.propTypes = {
  user: PropTypes.object.isRequired,
  className: PropTypes.string,
  to: PropTypes.string.isRequired
};

export default UserAvatar;
