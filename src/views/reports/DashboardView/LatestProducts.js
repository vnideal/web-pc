import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { v4 as uuid } from 'uuid';
import moment from 'moment';
import {
  Box,
  Button,
  Typography,
  Card,
  CardHeader,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  makeStyles
} from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import getFromNow from 'src/utils/getFromNow';

const useStyles = makeStyles({
  root: {
    height: '100%'
  },
  image: {
    height: 48,
    width: 48
  }
});

const LatestProducts = ({ className, data, ...rest }) => {
  const classes = useStyles();
  const [products] = useState(data);

  if (products.length === 0) {
    return (
      <Card className={clsx(classes.root, className)} {...rest}>
        <CardHeader subtitle={`${products.length} in total`} title="Latest Products" />
        <Divider />
        <Typography color="textPrimary" variant="h5">
          No record
        </Typography>
      </Card>
    );
  }

  return (
    <Card className={clsx(classes.root, className)} {...rest}>
      <CardHeader subtitle={`${products.length} in total`} title="Latest Products" />
      <Divider />
      <List>
        {products.map((product, i) => (
          <ListItem divider={i < products.length - 1} key={product.id}>
            <ListItemAvatar>
              <img alt="Product" className={classes.image} src={product.image} />
            </ListItemAvatar>
            <ListItemText primary={product.name} secondary={`Created ${getFromNow(product.created_at)}`} />
            <IconButton edge="end" size="small">
              <MoreVertIcon />
            </IconButton>
          </ListItem>
        ))}
      </List>
    </Card>
  );
};

LatestProducts.propTypes = {
  className: PropTypes.string,
  data: PropTypes.array
};

export default LatestProducts;
