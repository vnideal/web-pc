import React, { useEffect, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import ProductCard from 'src/components/Default/Product/ProductCard';
import InfiniteScroll from 'react-infinite-scroll-component';
import ProductService from 'src/services/product/ProductService';

const useStyles = makeStyles(() => ({
  productCard: {
    height: '100%'
  }
}));

const ProductCardList = (props) => {
  const { loadMore, hasMore } = props;
  const [products, setProducts] = useState(props.products);
  const classes = useStyles();
  const loadFunc = (page) => {
    ProductService.listed({ page, query: '' }).then((result) => {
      setProducts([...products, ...result.data]);
    });
  };

  return (
    <InfiniteScroll
      dataLength={products.length} //This is important field to render the next data
      next={loadFunc}
      hasMore={true}
      loader={
        <div className="loader" key={0}>
          Loading ...
        </div>
      }
    >
      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid item key={product.id} lg={3} md={6} xs={12}>
            <RouterLink to={`/products/${product.id}`}>
              <ProductCard className={classes.productCard} product={product} />
            </RouterLink>
          </Grid>
        ))}
      </Grid>
    </InfiniteScroll>
  );
};

ProductCardList.propTypes = {
  loadMore: PropTypes.func.isRequired,
  hasMore: PropTypes.bool,
  products: PropTypes.array.isRequired
};

export default ProductCardList;
