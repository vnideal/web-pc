import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import qs from 'qs';
import { Box, Container, Grid, makeStyles } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
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
  const [products, setProducts] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const location = useLocation();
  const params = qs.parse(location.search, { ignoreQueryPrefix: true });
  const searchQuery = params.q ? params.q : '';

  useEffect(() => {
    let mounted = true;

    ProductService.listed({ page: 1, query: searchQuery }).then((result) => {
      if (mounted) {
        setProducts(result.data);
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
    <Page className={classes.root} title="Products">
      <Container maxWidth={false}>
        <Box mt={3}>
          <Grid container spacing={3}>
            {products.map((product) => (
              <Grid item key={product.id} lg={3} md={6} xs={12}>
                <ProductCard className={classes.productCard} product={product} />
              </Grid>
            ))}
          </Grid>
        </Box>
        {/* <Box mt={3} display="flex" justifyContent="center">
          <Pagination color="primary" count={3} size="small" />
        </Box> */}
      </Container>
    </Page>
  );
};

export default ProductList;
