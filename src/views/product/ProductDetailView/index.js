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
    minHeight: '100%'
  },
  container: {
    height: 'calc(100vh - 70px)',
    overflow: 'auto'
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
      <div style={{ backgroundColor: 'rgb(239, 239, 239)' }}>
        <div style={{ width: 1270, margin: 'auto' }}>
          <div class="breadcrumb">
            <a class="breadcrumb-item" data-view-id="breadcrumb_item" data-view-index="0" href="/">
              Trang chủ
            </a>
            <a
              class="breadcrumb-item"
              data-view-id="breadcrumb_item"
              data-view-index="1"
              href="/phu-kien-thoi-trang/c27498"
            >
              Phụ kiện thời trang
            </a>
            <a
              class="breadcrumb-item"
              data-view-id="breadcrumb_item"
              data-view-index="2"
              href="/phu-kien-thoi-trang-nam/c27550"
            >
              Phụ kiện thời trang nam
            </a>
            <a
              class="breadcrumb-item"
              data-view-id="breadcrumb_item"
              data-view-index="3"
              href="/that-lung-day-nit-nam/c968"
            >
              Thắt lưng, dây nịt nam
            </a>
            <a href="#" class="breadcrumb-item" data-view-id="breadcrumb_item" data-view-index="4">
              <span>Thắt Lưng Nam Dây Da Phong Cách Hàn Quốc Khóa Tự Động - TOPEE OTOL5 (Đen)</span>
            </a>
          </div>
        </div>
      </div>
      <Container maxWidth={true} className={classes.container}>
        <ProductCard product={product} />
      </Container>
    </Page>
  );
};

export default ProductDetail;
