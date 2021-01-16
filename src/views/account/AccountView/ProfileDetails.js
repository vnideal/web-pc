import React from 'react';
import * as Yup from 'yup';
import { Formik } from 'formik';
import clsx from 'clsx';
import PropTypes from 'prop-types';
// eslint-disable-next-line object-curly-newline
import { Box, Button, Card, CardContent, CardHeader, Divider, Grid, TextField, makeStyles } from '@material-ui/core';
import ProfileService from 'src/services/profile/ProfileService';

const countries = [
  {
    value: 'vn',
    label: 'Viet Nam'
  },
  {
    value: 'us',
    label: 'United States'
  },
  {
    value: 'jp',
    label: 'Japan'
  }
];

const useStyles = makeStyles(() => ({
  root: {}
}));

const ProfileDetails = ({ className, user, ...rest }) => {
  const classes = useStyles();

  const handleSubmitForm = (values, { setSubmitting, setErrors }) => {
    ProfileService.update(
      values.firstName,
      values.lastName,
      values.displayName,
      values.phone,
      values.country,
      values.state
    ).then((response) => {
      setSubmitting(false);
      if (response.result) {
        // localStorage.setItem('currentUser', JSON.stringify(response.result));
        console.log(response.result);
      } else {
        setErrors(response.errors);
      }
    });
  };

  return (
    <Formik
      initialValues={{
        email: user.email,
        firstName: user.first_name,
        lastName: user.last_name,
        displayName: user.name,
        state: 'Ho Chi Minh'
      }}
      validationSchema={Yup.object().shape({
        firstName: Yup.string()
          .max(255)
          .required('First name is required'),
        lastName: Yup.string()
          .max(255)
          .required('Last name is required'),
        displayName: Yup.string()
          .max(255)
          .required('Display name is required'),
        phone: Yup.string().max(255),
        state: Yup.string()
          .max(255)
          .required('State name is required')
      })}
      onSubmit={(values, { setSubmitting, setErrors }) => handleSubmitForm(values, { setSubmitting, setErrors })}
    >
      {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
        <form autoComplete="off" noValidate className={clsx(classes.root, className)} {...rest} onSubmit={handleSubmit}>
          <Card>
            <CardHeader subheader="The information can be edited" title="Profile" />
            <Divider />
            <CardContent>
              <Grid container spacing={3}>
                <Grid item md={6} xs={12}>
                  <TextField
                    error={Boolean(touched.firstName && errors.firstName)}
                    fullWidth
                    helperText={touched.firstName && errors.firstName}
                    label="First name"
                    name="firstName"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    required
                    value={values.firstName}
                    variant="outlined"
                  />
                </Grid>
                <Grid item md={6} xs={12}>
                  <TextField
                    error={Boolean(touched.lastName && errors.lastName)}
                    fullWidth
                    helperText={touched.lastName && errors.lastName}
                    label="Last name"
                    name="lastName"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    required
                    value={values.lastName}
                    variant="outlined"
                  />
                </Grid>
                <Grid item md={12} xs={12}>
                  <TextField
                    error={Boolean(touched.displayName && errors.displayName)}
                    fullWidth
                    helperText={touched.displayName && errors.displayName}
                    label="Dispaly name"
                    name="displayName"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    required
                    value={values.displayName}
                    variant="outlined"
                  />
                </Grid>
                <Grid item md={6} xs={12}>
                  <TextField
                    error={Boolean(touched.email && errors.email)}
                    fullWidth
                    helperText={touched.email && errors.email}
                    label="Email Address"
                    name="email"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    disabled
                    value={values.email}
                    variant="outlined"
                  />
                </Grid>
                <Grid item md={6} xs={12}>
                  <TextField
                    error={Boolean(touched.phone && errors.phone)}
                    fullWidth
                    helperText={touched.phone && errors.phone}
                    label="Phone Number"
                    name="phone"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.phone}
                    variant="outlined"
                  />
                </Grid>
                <Grid item md={6} xs={12}>
                  <TextField
                    error={Boolean(touched.country && errors.country)}
                    fullWidth
                    helperText={touched.country && errors.country}
                    label="Select Country"
                    name="country"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    required
                    select
                    SelectProps={{ native: true }}
                    value={values.country}
                    variant="outlined"
                  >
                    {countries.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </TextField>
                </Grid>
                <Grid item md={6} xs={12}>
                  <TextField
                    error={Boolean(touched.state && errors.state)}
                    fullWidth
                    helperText={touched.state && errors.state}
                    label="State"
                    name="state"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    required
                    value={values.state}
                    variant="outlined"
                  />
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

ProfileDetails.propTypes = {
  className: PropTypes.string,
  user: PropTypes.object.isRequired
};

export default ProfileDetails;
