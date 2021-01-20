import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Container, Grid, makeStyles } from '@material-ui/core';
import Page from 'src/components/Page';
import ProductService from 'src/services/product/ProductService';
import Loading from 'src/components/Loading';
import ProductNew from './ProductNew';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  },
  productCard: {
    height: '100%'
  }
}));

const ProductAdd = () => {
  const classes = useStyles();
  const [product, setProduct] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <Page className={classes.root} title="Product">
      <Container maxWidth={false}>
        <ProductNew />
      </Container>
    </Page>
  );
};

export default ProductAdd;
