import React, { useState, useEffect } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import qs from 'qs';
import { Box, Container, Grid, makeStyles } from '@material-ui/core';
import Page from 'src/components/Page';
import ProductService from 'src/services/product/ProductService';
import Loading from 'src/components/Loading';
import ProductCardList from 'src/components/Default/Product/ProductCardList';
import InfiniteScroll from 'react-infinite-scroller';
import ProductCard from './ProductCard';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  },
  container: {
    paddingLeft: 0,
    paddingRight: 0
  },
  productCard: {
    height: '100%'
  }
}));

const ProductList = () => {
  const classes = useStyles();
  const [products, setProducts] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
  const location = useLocation();
  const params = qs.parse(location.search, { ignoreQueryPrefix: true });
  const searchQuery = params.q ? params.q : '';

  const loadFunc = (page, query) => {
    ProductService.listed({ page, query: query }).then((result) => {
      setProducts([...products, ...result.data]);
      setIsLoaded(true);
      setHasMore(products.length < result.pagination.total);
    });
  };

  const handleLoadMore = (page) => {
    console.log(page);
    loadFunc(page, '');
  };

  useEffect(() => {
    loadFunc(1, searchQuery);
  }, [searchQuery]);

  if (!isLoaded) {
    return <Loading />;
  }

  return (
    <Page className={classes.root} title="Products">
      <Container className={classes.container} maxWidth={true}>
        <Box style={{ height: '700px', overflow: 'auto', WebkitOverflowScrolling: 'touch' }}>
          <InfiniteScroll
            pageStart={1}
            loadMore={handleLoadMore}
            hasMore={hasMore}
            loader={
              <div className="loader" key={0}>
                Loading ...
              </div>
            }
            useWindow={false}
          >
            <Grid container>
              {products.map((product) => (
                <Grid item key={product.id} lg={3} md={6} xs={12}>
                  <RouterLink to={`/products/${product.id}`}>
                    <ProductCard className={classes.productCard} product={product} />
                  </RouterLink>
                </Grid>
              ))}
            </Grid>
          </InfiniteScroll>
        </Box>
      </Container>
    </Page>
  );
};

export default ProductList;
