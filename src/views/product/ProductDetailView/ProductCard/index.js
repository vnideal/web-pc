import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as FontIcons from '@fortawesome/fontawesome-free-solid';
import * as Icons from '@fortawesome/free-solid-svg-icons';
import formatPrice from 'src/utils/formatPrice';
import SimpleSlider from './SimpleSlider';
import UserAvatar from 'src/components/UserAvatar';
import { Box, Typography, makeStyles } from '@material-ui/core';

import './index.css';

const userInfo = {
  avatar: 'https://storage.googleapis.com/cdn.vnideal.com/users/images/iuWmNGGNVufdwSwN1G76P5wDBx4ZTjEBIctVJWod.jpg',
  name: 'Nhan Nguyen'
};

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2)
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%'
  }
}));

const ProductCard = ({ product }) => {
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <Grid container spacing={2} id="product">
        <Grid item>
          <SimpleSlider product={product} />
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs className="pb-right-column">
            <Typography gutterBottom variant="h1" className="product-name">
              {product.name}
            </Typography>
            <div class="product-comments">
              <div class="product-star">
                <FontAwesomeIcon icon={FontIcons.faStar} size="1x" />
                <FontAwesomeIcon icon={FontIcons.faStar} size="1x" />
                <FontAwesomeIcon icon={FontIcons.faStar} size="1x" />
                <FontAwesomeIcon icon={FontIcons.faStar} size="1x" />
                <FontAwesomeIcon icon={Icons.faStarHalfAlt} size="1x" />
              </div>
              <div class="comments-advices">
                <a href="#">(Xem 734 đánh giá)</a>
              </div>
            </div>
            <div class="product-price-group">
              <span class="price">{formatPrice(product.listed_price)}đ</span>
              <span class="old-price">$52.00</span>
              <span class="discount">-30%</span>
            </div>
            <div class="info-orther">
              <p>Item Code: #453217907</p>
              <p>
                Availability: <span class="in-stock">In stock</span>
              </p>
              {/* <p>Condition: New</p> */}
            </div>
            <div class="product-desc">
              Vestibulum eu odio. Suspendisse potenti. Morbi mollis tellus ac sapien. Praesent egestas tristique nibh.
              Nullam dictum felis eu pede mollis pretium.Fusce egestas elit eget lorem.
            </div>
            {/* <div class="form-option">
              <p class="form-option-title">Available Options:</p>
              <div class="attributes">
                <div class="attribute-label">Color:</div>
                <div class="attribute-list">
                  <ul class="list-color">
                    <li style={{ background: '#0c3b90' }}>
                      <a href="#">red</a>
                    </li>
                    <li style={{ background: '#036c5d' }} class="active">
                      <a href="#">red</a>
                    </li>
                    <li style={{ background: '#5f2363' }}>
                      <a href="#">red</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="attributes">
                <div class="attribute-label">Qty:</div>
                <div class="attribute-list product-qty">
                  <div class="qty">
                    <input id="option-product-qty" type="text" value="1" />
                  </div>
                  <div class="btn-plus">
                    <a href="#" class="btn-plus-up">
                      <FontAwesomeIcon icon={Icons.faCaretUp} size="1x" />
                    </a>
                    <a href="#" class="btn-plus-down">
                      <FontAwesomeIcon icon={Icons.faCaretDown} size="1x" />
                    </a>
                  </div>
                </div>
              </div>
              <div class="attributes">
                <div class="attribute-label">Size:</div>
                <div class="attribute-list">
                  <select>
                    <option value="1">X</option>
                    <option value="2">XL</option>
                    <option value="3">XXL</option>
                  </select>
                  <a id="size_chart" class="fancybox" href="assets/data/size-chart.jpg">
                    Size Chart
                  </a>
                </div>
              </div>
            </div> */}
            <div class="form-action">
              <div class="button-group">
                <a class="btn-add-cart" href="#">
                  <FontAwesomeIcon icon={Icons.faShoppingCart} size="1x" /> Add to cart
                </a>
              </div>
            </div>
          </Grid>
        </Grid>
        <Grid item md={3}>
          <Box alignItems="center" display="flex" flexDirection="column">
            <Typography gutterBottom variant="h4">
              THÔNG TIN NGƯỜI ĐĂNG
            </Typography>
            <UserAvatar className={classes.avatar} user={userInfo} to="" />
            <Typography color="textPrimary" gutterBottom variant="h3">
              {userInfo.name}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};
ProductCard.propTypes = {
  product: PropTypes.object.isRequired
};
export default ProductCard;
