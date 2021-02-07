import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import { Box, Grid } from '@material-ui/core';
import ProductCard from './ProductCard';
import Loading from 'src/components/Loading';
import InfiniteScroll from 'react-infinite-scroller';

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

const ProductCardList = (props) => {
  const classes = useStyles();
  const { products, hasMore, loadMore } = props;

  return (
    <Box className={classes.infiniteScroll}>
      <InfiniteScroll
        pageStart={1}
        loadMore={loadMore}
        hasMore={hasMore}
        loader={<Loading />}
        useWindow={false}
        initialLoad={false}
      >
        <Grid container>
          {products.map((product) => (
            <Grid item key={product.id} lg={3} md={6} xs={12} className={classes.item}>
              <RouterLink to={`/products/${product.id}`}>
                <ProductCard className={classes.productCard} product={product} />
              </RouterLink>
            </Grid>
          ))}
        </Grid>
      </InfiniteScroll>
    </Box>
  );
};

ProductCardList.propTypes = {
  loadMore: PropTypes.func.isRequired,
  hasMore: PropTypes.bool,
  products: PropTypes.array.isRequired
};

export default ProductCardList;
