import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { Formik } from 'formik';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { Box, Button, Card, CardContent, CardHeader, Divider, Grid, TextField, makeStyles } from '@material-ui/core';
import ImageUploader from 'react-images-upload';
import ProductService from 'src/services/product/ProductService';

const categories = [
  {
    value: '1',
    label: 'Tranh tự vẽ'
  },
  {
    value: '2',
    label: 'Tranh sưu tầm'
  },
  {
    value: '3',
    label: 'Khác'
  }
];

const useStyles = makeStyles(() => ({
  root: {}
}));

const ProductNew = ({ className, ...rest }) => {
  const classes = useStyles();
  const [pictures, setPictures] = useState([]);
  const navigate = useNavigate();

  const handleSelectFile = (picture) => {
    setPictures(picture);
  };

  const handleSubmitForm = (values, { setSubmitting, setErrors }) => {
    ProductService.add(values.name, values.category, values.price, pictures).then((response) => {
      setSubmitting(false);
      if (response.result) {
        navigate('/app/dashboard', { replace: true });
      } else {
        setErrors(response.errors);
      }
    });
  };

  return (
    <Formik
      initialValues={{
        name: '',
        category: 1,
        price: ''
      }}
      validationSchema={Yup.object().shape({
        name: Yup.string()
          .max(255)
          .required('Title is required'),
        price: Yup.string()
          .max(255)
          .required('Price is required')
      })}
      onSubmit={(values, { setSubmitting, setErrors }) => handleSubmitForm(values, { setSubmitting, setErrors })}
    >
      {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
        <form autoComplete="off" noValidate className={clsx(classes.root, className)} {...rest} onSubmit={handleSubmit}>
          <Card>
            <CardHeader subheader="The information can be added" title="Product" />
            <Divider />
            <CardContent>
              <Grid container spacing={3}>
                <Grid item md={12} xs={12}>
                  <TextField
                    error={Boolean(touched.name && errors.name)}
                    fullWidth
                    helperText={touched.name && errors.name}
                    label="Title"
                    name="name"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    required
                    value={values.name}
                    variant="outlined"
                  />
                </Grid>
                <Grid item md={12} xs={12}>
                  <ImageUploader
                    withIcon
                    withPreview
                    buttonText="Choose images"
                    onChange={handleSelectFile}
                    name="files"
                    imgExtension={['.jpg', '.gif', '.png', '.gif']}
                    maxFileSize={5242880}
                  />
                </Grid>
                <Grid item md={6} xs={12}>
                  <TextField
                    error={Boolean(touched.price && errors.price)}
                    fullWidth
                    helperText={touched.price && errors.price}
                    label="Price"
                    name="price"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    required
                    value={values.price}
                    variant="outlined"
                  />
                </Grid>
                <Grid item md={6} xs={12}>
                  <TextField
                    error={Boolean(touched.category && errors.category)}
                    fullWidth
                    helperText={touched.category && errors.category}
                    label="Select Categoty"
                    name="category"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    required
                    select
                    SelectProps={{ native: true }}
                    value={values.category}
                    variant="outlined"
                  >
                    {categories.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </TextField>
                </Grid>
              </Grid>
            </CardContent>
            <Divider />
            <Box display="flex" justifyContent="flex-end" p={2}>
              <Button color="primary" variant="contained" type="submit" disabled={isSubmitting}>
                Save details
              </Button>
            </Box>
          </Card>
        </form>
      )}
    </Formik>
  );
};

ProductNew.propTypes = {
  className: PropTypes.string
};

export default ProductNew;
