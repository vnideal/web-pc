import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
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

const ProductDetail = () => {
  const classes = useStyles();
  const [product, setProduct] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    let mounted = true;

    ProductService.detail({ id }).then((result) => {
      if (mounted) {
        setProduct(result);
        setIsLoaded(true);
      }
    });

    // eslint-disable-next-line no-return-assign
    return () => (mounted = false);
  }, []);

  if (!isLoaded) {
    return <Loading />;
  }

  return (
    <Page className={classes.root} title="Product">
      <Container maxWidth={false}>
        <ProductCard product={product} />
      </Container>
    </Page>
  );
};

export default ProductDetail;
