import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Container, Grid, makeStyles } from '@material-ui/core';
import Page from 'src/components/Page';
import Breadcrumb from 'src/components/Default/Breadcrumb';
import ProductService from 'src/services/product/ProductService';
import Loading from 'src/components/Loading';
import ProductCard from './ProductCard';
import ProductInfomation from './ProductInfomation';
import ProductComment from './ProductComment';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%'
  },
  container: {
    height: 'calc(100vh - 70px)',
    overflow: 'auto',
    WebkitOverflowScrolling: 'touch'
  },
  wrapper: {
    flexGrow: 1,
    maxWidth: 1270,
    margin: 'auto'
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

const ProductDetail = () => {
  const classes = useStyles();
  const [product, setProduct] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    let mounted = true;

    ProductService.detail(id).then((result) => {
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
      <Breadcrumb />
      <Container maxWidth={true} className={classes.container}>
        <div className={classes.wrapper}>
          <ProductCard product={product} />
          <ProductInfomation />
          <ProductComment />
        </div>
      </Container>
    </Page>
  );
};

export default ProductDetail;
