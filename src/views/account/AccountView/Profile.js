import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import moment from 'moment';
import { Box, Button, Card, CardActions, CardContent, Divider, Typography, makeStyles } from '@material-ui/core';
import UserAvatar from 'src/components/UserAvatar';
import ProfileService from 'src/services/profile/ProfileService';

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
  const [isSubmitting, setSubmitting] = React.useState(false);
  const [userInfo, setUserInfo] = React.useState(user);

  const handleSelectFile = (event) => {
    setSubmitting(true);
    const currentFile = event.target.files[0];
    ProfileService.uploadAvatar(currentFile, (e) => {
      console.log(Math.round((100 * e.loaded) / e.total));
    }).then((info) => {
      setSubmitting(false);
      setUserInfo(info);
    });
  };

  return (
    <Card className={clsx(classes.root, className)} {...rest}>
      <CardContent>
        <Box alignItems="center" display="flex" flexDirection="column">
          <UserAvatar className={classes.avatar} user={userInfo} to="" />
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
        <Button color="primary" fullWidth variant="contained" component="label" disabled={isSubmitting}>
          Upload picture
          <input accept="image/*" type="file" hidden onChange={handleSelectFile} />
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
