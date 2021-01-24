import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Box,
  Card,
  CardContent,
  Divider,
  Typography,
  Grid,
  CardMedia,
  CardHeader,
  makeStyles
} from '@material-ui/core';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import getFromNow from 'src/utils/getFromNow';
import UserAvatar from 'src/components/UserAvatar';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column'
  },
  statsItem: {
    alignItems: 'center',
    display: 'flex'
  },
  statsIcon: {
    marginRight: theme.spacing(1)
  },
  media: {
    height: 0,
    paddingTop: '56.25%' // 16:9
  },
  iconbutton: {
    width: '33%',
    padding: '4px 0px',
    borderRadius: 4
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: 'rotate(180deg)'
  },
  avatar: {},
  cardaction: {
    padding: '4px 8px'
  }
}));

const ProductCard = ({ className, product, ...rest }) => {
  const classes = useStyles();

  const formatNumber = (numberString) => {
    return parseInt(numberString, 10).toLocaleString();
  };

  return (
    <Card className={clsx(classes.root, className)} {...rest}>
      <CardHeader
        avatar={<UserAvatar className={classes.avatar} to="" user={product.user} />}
        title={product.user.name}
        subheader={getFromNow(product.created_at)}
      />
      <CardMedia className={classes.media} image={product.image} title={product.name} />

      <CardContent>
        <Typography align="left" color="textPrimary" variant="body1">
          {product.name}
        </Typography>
      </CardContent>
      <Box flexGrow={1} />
      <Divider />
      <Box p={2}>
        <Grid container justify="space-between" spacing={2}>
          <Grid className={classes.statsItem} item>
            <AttachMoneyIcon className={classes.statsIcon} color="action" />
            <Typography color="textSecondary" display="inline" variant="body2">
              {formatNumber(product.listed_price)} đ
            </Typography>
          </Grid>
          <Grid className={classes.statsItem} item>
            <AccessAlarmIcon className={classes.statsIcon} color="action" />
            <Typography color="textSecondary" display="inline" variant="body2">
              {product.auction_cnt} Auctions
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Card>
  );
};

ProductCard.propTypes = {
  className: PropTypes.string,
  product: PropTypes.object.isRequired
};

export default ProductCard;
