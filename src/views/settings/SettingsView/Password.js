import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import { Formik } from 'formik';
import clsx from 'clsx';
import { Box, Button, Card, CardContent, CardHeader, Divider, TextField, makeStyles } from '@material-ui/core';
import ProfileService from 'src/services/profile/ProfileService';

const useStyles = makeStyles({
  root: {}
});

const Password = ({ className, ...rest }) => {
  const classes = useStyles();
  const navigate = useNavigate();

  const handleSubmitForm = (values, { setSubmitting, setErrors }) => {
    ProfileService.updatePassword(values.password, values.newPassword, values.confirmNewPassword).then((response) => {
      setSubmitting(false);
      if (response.result) {
        localStorage.removeItem('currentUser');
        navigate('/app/dashboard', { replace: true });
      } else {
        setErrors(response.errors);
      }
    });
  };

  return (
    <Formik
      initialValues={{
        password: '',
        newPassword: '',
        confirmNewPassword: ''
      }}
      validationSchema={Yup.object().shape({
        password: Yup.string()
          .max(255)
          .required('Current Password is required'),
        newPassword: Yup.string()
          .max(255)
          .required('New password is required'),
        confirmNewPassword: Yup.string()
          .max(255)
          .required('Confirm new password is required')
          .when('newPassword', {
            is: (val) => !!(val && val.length > 0),
            then: Yup.string().oneOf([Yup.ref('newPassword')], 'Both new password need to be the same')
          })
      })}
      onSubmit={(values, { setSubmitting, setErrors }) => handleSubmitForm(values, { setSubmitting, setErrors })}
    >
      {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
        <form className={clsx(classes.root, className)} onSubmit={handleSubmit} {...rest}>
          <Card>
            <CardHeader subheader="Update password" title="Password" />
            <Divider />
            <CardContent>
              <TextField
                error={Boolean(touched.password && errors.password)}
                fullWidth
                helperText={touched.password && errors.password}
                label="Password"
                margin="normal"
                name="password"
                onBlur={handleBlur}
                onChange={handleChange}
                type="password"
                value={values.password}
                variant="outlined"
              />
              <TextField
                error={Boolean(touched.newPassword && errors.newPassword)}
                fullWidth
                helperText={touched.newPassword && errors.newPassword}
                label="New password"
                margin="normal"
                name="newPassword"
                onBlur={handleBlur}
                onChange={handleChange}
                type="password"
                value={values.newPassword}
                variant="outlined"
              />
              <TextField
                error={Boolean(touched.confirmNewPassword && errors.confirmNewPassword)}
                fullWidth
                helperText={touched.confirmNewPassword && errors.confirmNewPassword}
                label="Confirm New password"
                margin="normal"
                name="confirmNewPassword"
                onBlur={handleBlur}
                onChange={handleChange}
                type="password"
                value={values.confirmNewPassword}
                variant="outlined"
              />
            </CardContent>
            <Divider />
            <Box display="flex" justifyContent="flex-end" p={2}>
              <Button color="primary" variant="contained" type="submit" disabled={isSubmitting}>
                Update
              </Button>
            </Box>
          </Card>
        </form>
      )}
    </Formik>
  );
};

Password.propTypes = {
  className: PropTypes.string
};

export default Password;
