import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as FontIcons from '@fortawesome/fontawesome-free-solid';
import * as Icons from '@fortawesome/free-solid-svg-icons';

import formatPrice from 'src/utils/formatPrice';
import SimpleSlider from './SimpleSlider';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 1270,
    margin: 'auto'
  },
  paper: {
    padding: theme.spacing(2)
  },
  image: {
    width: 300
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%'
  },
  title: {
    paddingTop: 16,
    paddingBottom: 16,
    marginBottom: 0
  }
}));

const ProductCard = ({ product }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
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
                <p>Condition: New</p>
              </div>
              <div class="product-desc">
                Vestibulum eu odio. Suspendisse potenti. Morbi mollis tellus ac sapien. Praesent egestas tristique nibh.
                Nullam dictum felis eu pede mollis pretium.Fusce egestas elit eget lorem.
              </div>
              <div class="form-option">
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
              </div>
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
            <Typography gutterBottom variant="h4" className={classes.title}>
              THÔNG TIN NGƯỜI ĐĂNG
            </Typography>
          </Grid>
        </Grid>
      </Paper>
      <Typography gutterBottom variant="h4" className={classes.title}>
        THÔNG TIN CHI TIẾT
      </Typography>
      <Paper className={classes.paper} id="detail_infomation" style={{ width: 900 }}>
        <div className="content">
          <table>
            <tbody>
              <tr>
                <td>Thương hiệu</td>
                <td>TOPEE</td>
              </tr>
              <tr>
                <td>Xuất xứ thương hiệu</td>
                <td>Việt Nam</td>
              </tr>
              <tr>
                <td>SKU</td>
                <td>4917579640505</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Paper>
      <Typography gutterBottom variant="h4" className={classes.title}>
        MÔ TẢ SẢN PHẨM
      </Typography>
      <Paper className={classes.paper} id="detail_description" style={{ width: 900 }}>
        <div className="content">
          <p>
            Thắt Lưng Nam TOPEE là món phụ kiện thời trang cao cấp dành cho quý ông trẻ trung, sành điệu Sản phẩm được
            gia công tỉ mỉ và tinh xảo giúp gia tăng tuổi thọ dài lâu khi sử dụng. Chất liệu da cao cấp đã qua quy trình
            xử lý kỳ công giúp cho bề mặt sản phẩm luôn có độ bóng đẹp hoàn hảo. Bề mặt da không bị rạn nứt hay gãy đứt
            trong suốt thời gian sử dụng. Đường chỉ may đều đặn, sắc sảo và trau chuốt. Đầu khóa hợp kim không gỉ chắc
            chắn và siêu bền, có thể dễ dàng tùy chỉnh kích cỡ cho phù hợp với vóc dáng cơ thể. Dễ dàng kết hợp cùng
            quần Jeans, Kaki, áo Sơ Mi, áo thun, nhằm mang lại vẻ ngoài lịch thiệp và sang trọng cho đấng mày râu. Thắt
            lưng nam TOPEE với chất liệu da cao cấp đẹp bền bỉ, chống đứt gãy hay bong tróc hiệu quả Đầu khóa hợp kim
            không gỉ sáng bóng thời thượng Kiểu dáng đẳng cấp sang trọng Tông màu lịch lãm, dễ kết hợp trang phục Kích
            thước 3.5 x 120cm
          </p>
        </div>
      </Paper>
      <Typography gutterBottom variant="h4" className={classes.title}>
        KHÁCH HÀNG NHẬN XÉT
      </Typography>
    </div>
  );
};
ProductCard.propTypes = {
  product: PropTypes.object.isRequired
};
export default ProductCard;
