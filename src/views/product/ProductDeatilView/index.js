import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import qs from 'qs';
import { Box, Container, Grid, makeStyles } from '@material-ui/core';
import Page from 'src/components/Page';
import ProductService from 'src/services/product/ProductService';
import Loading from 'src/components/Loading';
import ProductCard from './ProductCard';

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

const ProductList = () => {
  const classes = useStyles();
  const [product, setProduct] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const location = useLocation();
  const params = qs.parse(location.search, { ignoreQueryPrefix: true });
  const searchQuery = params.q ? params.q : '';

  useEffect(() => {
    let mounted = true;

    ProductService.detail({ id: 1 }).then((result) => {
      if (mounted) {
        setProduct(result.data);
        setIsLoaded(true);
      }
    });

    // eslint-disable-next-line no-return-assign
    return () => (mounted = false);
  }, [searchQuery]);

  if (!isLoaded) {
    return <Loading />;
  }

  return (
    <Page className={classes.root} title="Product">
      <Container maxWidth={false}>
        <ProductCard product />
      </Container>
    </Page>
  );
};

export default ProductList;
