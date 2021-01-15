import React from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { Formik } from 'formik';
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormHelperText,
  Link,
  TextField,
  Grid,
  Typography,
  makeStyles
} from '@material-ui/core';
import Page from 'src/components/Page';
import AuthenticationService from 'src/services/auth/AuthenticationService';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    height: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const RegisterView = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const handleSubmitForm = (values, { setSubmitting, setErrors }) => {
    AuthenticationService.signup(
      values.firstName,
      values.lastName,
      values.displayName,
      values.email,
      values.password,
      values.confirmPassword
    ).then((response) => {
      setSubmitting(false);
      if (response.result) {
        localStorage.setItem('currentUser', JSON.stringify(response.result));
        navigate('/app/dashboard', { replace: true });
      } else {
        setErrors({ email: 'This email address is already used.' });
      }
    });
  };

  return (
    <Page className={classes.root} title="Register">
      <Box display="flex" flexDirection="column" height="100%" justifyContent="center">
        <Container maxWidth="sm">
          <Formik
            initialValues={{
              email: '',
              firstName: '',
              lastName: '',
              displayName: '',
              password: '',
              confirmPassword: '',
              policy: false
            }}
            validationSchema={Yup.object().shape({
              email: Yup.string()
                .email('Must be a valid email')
                .max(255)
                .required('Email is required'),
              firstName: Yup.string()
                .max(255)
                .required('First name is required'),
              lastName: Yup.string()
                .max(255)
                .required('Last name is required'),
              displayName: Yup.string()
                .max(255)
                .required('Display name is required'),
              password: Yup.string()
                .max(255)
                .required('password is required'),
              confirmPassword: Yup.string()
                .max(255)
                .required('Confirm password is required')
                .when('password', {
                  is: (val) => !!(val && val.length > 0),
                  then: Yup.string().oneOf([Yup.ref('password')], 'Both password need to be the same')
                }),
              policy: Yup.boolean().oneOf([true], 'This field must be checked')
            })}
            onSubmit={(values, { setSubmitting, setErrors }) => handleSubmitForm(values, { setSubmitting, setErrors })}
          >
            {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
              <form onSubmit={handleSubmit}>
                <Box mb={3}>
                  <Typography color="textPrimary" variant="h2">
                    Create new account
                  </Typography>
                  <Typography color="textSecondary" gutterBottom variant="body2">
                    Use your email to create new account
                  </Typography>
                </Box>
                <Grid container spacing={1}>
                  <Grid item md={6} xs={12}>
                    <TextField
                      error={Boolean(touched.firstName && errors.firstName)}
                      fullWidth
                      helperText={touched.firstName && errors.firstName}
                      label="First name"
                      margin="normal"
                      name="firstName"
                      onBlur={handleBlur}
                      onChange={handleChange}
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
                      margin="normal"
                      name="lastName"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.lastName}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item md={12} xs={12}>
                    <TextField
                      error={Boolean(touched.displayName && errors.displayName)}
                      fullWidth
                      helperText={touched.displayName && errors.displayName}
                      label="Display name"
                      margin="normal"
                      name="displayName"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.displayName}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item md={12} xs={12}>
                    <TextField
                      error={Boolean(touched.email && errors.email)}
                      fullWidth
                      helperText={touched.email && errors.email}
                      label="Email Address"
                      margin="normal"
                      name="email"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      type="email"
                      value={values.email}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item md={6} xs={12}>
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
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <TextField
                      error={Boolean(touched.confirmPassword && errors.confirmPassword)}
                      fullWidth
                      helperText={touched.confirmPassword && errors.confirmPassword}
                      label="Confirm"
                      margin="normal"
                      name="confirmPassword"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      type="password"
                      value={values.confirmPassword}
                      variant="outlined"
                    />
                  </Grid>
                </Grid>
                <Box alignItems="center" display="flex" ml={-1}>
                  <Checkbox checked={values.policy} name="policy" onChange={handleChange} />
                  <Typography color="textSecondary" variant="body1">
                    I have read the
                    {' '}
                    <Link color="primary" component={RouterLink} to="#" underline="always" variant="h6">
                      Terms and Conditions
                    </Link>
                  </Typography>
                </Box>
                {Boolean(touched.policy && errors.policy) && <FormHelperText error>{errors.policy}</FormHelperText>}
                <Box my={2}>
                  <Button
                    color="primary"
                    disabled={isSubmitting}
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                  >
                    Sign up now
                  </Button>
                </Box>
                <Typography color="textSecondary" variant="body1">
                  Have an account?
                  {' '}
                  <Link component={RouterLink} to="/login" variant="h6">
                    Sign in
                  </Link>
                </Typography>
              </form>
            )}
          </Formik>
        </Container>
      </Box>
    </Page>
  );
};

export default RegisterView;
