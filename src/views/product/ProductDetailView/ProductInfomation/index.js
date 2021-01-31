import React from 'react';
import { Paper, Typography, makeStyles } from '@material-ui/core';
import './index.css';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '100%'
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

const ProductInfomation = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography gutterBottom variant="h4" className={classes.title}>
        THÔNG TIN CHI TIẾT
      </Typography>
      <Paper className={classes.paper} id="detail_infomation" sm style={{ maxWidth: 900 }}>
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
      <Paper className={classes.paper} id="detail_description" style={{ maxWidth: 900 }}>
        <p>
          Thắt Lưng Nam TOPEE là món phụ kiện thời trang cao cấp dành cho quý ông trẻ trung, sành điệu Sản phẩm được gia
          công tỉ mỉ và tinh xảo giúp gia tăng tuổi thọ dài lâu khi sử dụng. Chất liệu da cao cấp đã qua quy trình xử lý
          kỳ công giúp cho bề mặt sản phẩm luôn có độ bóng đẹp hoàn hảo. Bề mặt da không bị rạn nứt hay gãy đứt trong
          suốt thời gian sử dụng. Đường chỉ may đều đặn, sắc sảo và trau chuốt. Đầu khóa hợp kim không gỉ chắc chắn và
          siêu bền, có thể dễ dàng tùy chỉnh kích cỡ cho phù hợp với vóc dáng cơ thể. Dễ dàng kết hợp cùng quần Jeans,
          Kaki, áo Sơ Mi, áo thun, nhằm mang lại vẻ ngoài lịch thiệp và sang trọng cho đấng mày râu. Thắt lưng nam TOPEE
          với chất liệu da cao cấp đẹp bền bỉ, chống đứt gãy hay bong tróc hiệu quả Đầu khóa hợp kim không gỉ sáng bóng
          thời thượng Kiểu dáng đẳng cấp sang trọng Tông màu lịch lãm, dễ kết hợp trang phục Kích thước 3.5 x 120cm
        </p>
      </Paper>
    </div>
  );
};

export default ProductInfomation;
