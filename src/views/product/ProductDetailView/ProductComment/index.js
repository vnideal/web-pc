import React from 'react';
import { Paper, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '100%'
  },
  paper: {
    padding: theme.spacing(2)
  },
  title: {
    paddingTop: 16,
    paddingBottom: 16,
    marginBottom: 0
  }
}));

const ProductComment = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography gutterBottom variant="h4" className={classes.title}>
        KHÁCH HÀNG NHẬN XÉT
      </Typography>
    </div>
  );
};

export default ProductComment;
