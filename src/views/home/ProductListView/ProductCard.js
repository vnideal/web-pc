import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Divider,
  Typography,
  IconButton,
  CardMedia,
  CardHeader,
  CardActions,
  makeStyles
} from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import CommentIcon from '@material-ui/icons/Comment';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import getFromNow from 'src/utils/getFromNow';

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
  avatar: {
  },
  cardaction: {
    padding: '4px 8px'
  }
}));

const ProductCard = ({ className, product, ...rest }) => {
  const classes = useStyles();

  return (
    <Card className={clsx(classes.root, className)} {...rest}>
      <CardHeader
        avatar={(
          <Avatar aria-label="recipe" className={classes.avatar} style={{ backgroundColor: product.user.avatar.color }}>
            {product.user.avatar.letter}
          </Avatar>
        )}
        action={(
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        )}
        title={product.title}
        subheader={getFromNow(product.createdAt)}
      />
      <CardMedia
        className={classes.media}
        image={product.media}
        title="Paella dish"
      />

      <CardContent>
        <Typography align="center" color="textPrimary" variant="body1">
          {product.description}
        </Typography>
      </CardContent>
      <Box flexGrow={1} />
      <Divider />
      <CardActions disableSpacing>
        <IconButton className={classes.iconbutton} aria-label="favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton className={classes.iconbutton} aria-label="show more">
          <CommentIcon />
        </IconButton>
        <IconButton className={classes.iconbutton} aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

ProductCard.propTypes = {
  className: PropTypes.string,
  product: PropTypes.object.isRequired
};

export default ProductCard;
