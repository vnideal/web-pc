import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Card, CardContent, CardActions, Grid, Divider, Box } from '@material-ui/core';
import VisibilityIcon from '@material-ui/icons/Visibility';
import FolderIcon from '@material-ui/icons/Folder';
import ReactPlaceholder from 'react-placeholder';
import 'react-placeholder/lib/reactPlaceholder.css';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(1)
  },
  imageContainer: {
    height: '100%',
    width: '100%',
    margin: '0 auto',
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: '5px',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  statsItem: {
    display: 'flex',
    alignItems: 'center'
  },
  statsIcon: {
    color: theme.palette.icon,
    marginRight: theme.spacing(1)
  }
}));

const TopicCardPlacehoder = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root} key={0}>
      <CardActions style={{ with: '100%' }}>
        <ReactPlaceholder type="round" ready={false} color="#E0E0E0" style={{ width: 40, height: 40 }} />
        <ReactPlaceholder type="text" ready={false} rows={1} color="#E0E0E0" style={{ width: 100 }} />
      </CardActions>
      <Divider />
      <CardContent>
        <div className={classes.imageContainer}>
          <ReactPlaceholder
            type="rect"
            ready={false}
            color="#E0E0E0"
            style={{ width: '100%', height: 200, margin: 0 }}
          />
        </div>
        <Box mb={1} />
        <ReactPlaceholder type="textRow" ready={false} color="#E0E0E0" />
      </CardContent>
      <Divider />
      <CardActions>
        <Grid container justify="space-between">
          <Grid className={classes.statsItem} item>
            <FolderIcon className={classes.statsIcon} />
            <ReactPlaceholder type="text" ready={false} rows={1} color="#E0E0E0" style={{ width: 100 }} />
          </Grid>
          <Grid className={classes.statsItem} item>
            <VisibilityIcon className={classes.statsIcon} />
            <ReactPlaceholder type="text" ready={false} rows={1} color="#E0E0E0" style={{ width: 50 }} />
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
};

TopicCardPlacehoder.propTypes = {};

export default TopicCardPlacehoder;
