import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import moment from 'moment';
// eslint-disable-next-line object-curly-newline
import { Box, Button, Card, CardActions, CardContent, Divider, Typography, makeStyles } from '@material-ui/core';
import UserAvatar from 'src/components/UserAvatar';

const useStyles = makeStyles(() => ({
  root: {},
  avatar: {
    height: 100,
    width: 100,
    fontSize: 36
  }
}));

const Profile = ({ className, user, ...rest }) => {
  const classes = useStyles();

  return (
    <Card className={clsx(classes.root, className)} {...rest}>
      <CardContent>
        <Box alignItems="center" display="flex" flexDirection="column">
          <UserAvatar className={classes.avatar} user={user} to="" />
          <Typography color="textPrimary" gutterBottom variant="h3">
            {user.name}
          </Typography>
          <Typography className={classes.dateText} color="textSecondary" variant="body1">
            {`${moment().format('hh:mm A')}`}
          </Typography>
        </Box>
      </CardContent>
      <Divider />
      <CardActions>
        <Button color="primary" fullWidth variant="text">
          Upload picture
        </Button>
      </CardActions>
    </Card>
  );
};

Profile.propTypes = {
  className: PropTypes.string,
  user: PropTypes.object.isRequired
};

export default Profile;
