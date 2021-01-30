import React from 'react';
import Slider from 'react-slick';
import { CardMedia, makeStyles } from '@material-ui/core';

// Import css files
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './index.css';

const useStyles = makeStyles((theme) => ({
  media: {
    height: 0,
    paddingTop: '120%'
  }
}));

export default function SimpleSlider(prop) {
  const classes = useStyles();
  const { product } = prop;
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    focusOnSelect: false,
    autoplay: false
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="image">
          <CardMedia className={classes.media} image={product.image} title={product.name} />
        </div>
        <div className="image">
          <CardMedia className={classes.media} image={product.image} title={product.name} />
        </div>
        <div className="image">
          <CardMedia className={classes.media} image={product.image} title={product.name} />
        </div>
        <div className="image">
          <CardMedia className={classes.media} image={product.image} title={product.name} />
        </div>
        <div className="image">
          <CardMedia className={classes.media} image={product.image} title={product.name} />
        </div>
        <div className="image">
          <CardMedia className={classes.media} image={product.image} title={product.name} />
        </div>
        <div className="image">
          
          <CardMedia className={classes.media} image={product.image} title={product.name} />
        </div>
        <div className="image">
          <CardMedia className={classes.media} image={product.image} title={product.name} />
        </div>
        <div className="image">
          <CardMedia className={classes.media} image={product.image} title={product.name} />
        </div>
      </Slider>
    </div>
  );
}
