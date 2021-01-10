import React, { useState, useEffect } from 'react';
import { Container, Grid, makeStyles } from '@material-ui/core';
import Page from 'src/components/Page';
import ProfileService from 'src/services/profile/ProfileService';
import Profile from './Profile';
import ProfileDetails from './ProfileDetails';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const Account = () => {
  const classes = useStyles();
  const [user, setUser] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    let mounted = true;

    ProfileService.info().then((userInfo) => {
      if (mounted) {
        setUser(userInfo);
        setIsLoaded(true);
      }
    });

    // eslint-disable-next-line no-return-assign
    return () => (mounted = false);
  }, []);

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <Page className={classes.root} title="Account">
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item lg={4} md={6} xs={12}>
            <Profile user={user} />
          </Grid>
          <Grid item lg={8} md={6} xs={12}>
            <ProfileDetails user={user} />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
};

export default Account;
