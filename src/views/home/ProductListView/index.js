import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import qs from 'qs';
import { Box, Container, Grid, makeStyles } from '@material-ui/core';
import Page from 'src/components/Page';
import ProductService from 'src/services/product/ProductService';
import ProductCardList from 'src/components/Default/Product/ProductList';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3)
  },
  container: {
    paddingLeft: 0,
    paddingRight: 0
  },
  infiniteScroll: {
    height: 'calc(100vh - 10px)',
    paddingBottom: '40px',
    overflow: 'auto',
    WebkitOverflowScrolling: 'touch'
  },
  item: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1)
  },
  productCard: {
    height: '100%'
  }
}));

const ProductList = () => {
  const classes = useStyles();
  const [products, setProducts] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const location = useLocation();
  const params = qs.parse(location.search, { ignoreQueryPrefix: true });
  const searchQuery = params.q ? params.q : '';

  const loadFunc = (page, query) => {
    ProductService.listed({ page, query: query }).then((result) => {
      if (page == 1) {
        setProducts(result.data);
      } else {
        setProducts([...products, ...result.data]);
      }
      setHasMore(products.length < result.pagination.total);
    });
  };

  const handleLoadMore = (page) => {
    loadFunc(page, searchQuery);
  };

  useEffect(() => {
    loadFunc(1, searchQuery);
  }, [searchQuery]);

  return (
    <Page className={classes.root} title="Products">
      <Container className={classes.container} maxWidth={true}>
        <ProductCardList products={products} hasMore={hasMore} loadMore={handleLoadMore} />
      </Container>
    </Page>
  );
};

export default ProductList;
