import React, { useState, useEffect } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { Container, Grid, Box, Button, makeStyles } from '@material-ui/core';
import Page from 'src/components/Page';
import ProductService from 'src/services/product/ProductService';
import Loading from 'src/components/Loading';
import Budget from './Budget';
import LatestOrders from './LatestOrders';
import LatestProducts from './LatestProducts';
import Sales from './Sales';
import TasksProgress from './TasksProgress';
import TotalCustomers from './TotalCustomers';
import TotalProfit from './TotalProfit';
import TrafficByDevice from './TrafficByDevice';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const Dashboard = () => {
  const classes = useStyles();

  const [products, setProducts] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    let mounted = true;

    ProductService.myProducts().then((result) => {
      if (mounted) {
        setProducts(result.data);
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
    <Page className={classes.root} title="Dashboard">
      <Container maxWidth={false}>
        <Box display="flex" justifyContent="flex-end" marginBottom={3}>
          <Button color="primary" variant="contained" component={RouterLink} to="/app/products/add">
            Add product
          </Button>
        </Box>
        <Grid container>
          <Grid item md={12} xs={12} sm={12}>
            <LatestProducts data={products} />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
};

export default Dashboard;
