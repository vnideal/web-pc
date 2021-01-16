import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
// eslint-disable-next-line object-curly-newline
import {
  AppBar,
  Badge,
  Box,
  Hidden,
  IconButton,
  Typography,
  Button,
  Toolbar,
  Tooltip,
  fade,
  makeStyles
} from '@material-ui/core';
import NotificationsIcon from '@material-ui/icons/NotificationsOutlined';
import Logo from 'src/components/Logo';
import UserMenuList from 'src/components/UserMenuList';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import AuthenticationService from 'src/services/auth/AuthenticationService';

const useStyles = makeStyles((theme) => ({
  root: {
    color: '#263238',
    background: '#fafafb'
  },
  toolbar: {
    height: 48,
    minHeight: 48
  },
  logo: {
    marginRight: theme.spacing(2)
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block'
    }
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade('#f4f6f8', 0.75),
    '&:hover': {
      backgroundColor: fade('#f4f6f8', 0.95)
    },
    marginLeft: 10,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto'
    }
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputRoot: {
    color: 'inherit'
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '120ch',
      '&:focus': {
        width: '122ch'
      }
    }
  },
  buttons: {
    '& > *': {
      margin: theme.spacing(1)
    }
  }
}));

const TopBar = ({ className, ...rest }) => {
  const classes = useStyles();
  const [notifications] = useState([]);
  const isLogin = AuthenticationService.isLogin();

  return (
    <AppBar className={clsx(classes.root, className)} elevation={0} {...rest}>
      <Toolbar className={classes.toolbar}>
        <RouterLink to="/" className={classes.logo}>
          <Logo />
        </RouterLink>
        <RouterLink to="/">
          <Typography variant="h5" className={classes.title}>
            VN I DEAL
          </Typography>
        </RouterLink>
        <Box flexGrow={1} />
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder="Search…"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput
            }}
            inputProps={{ 'aria-label': 'search' }}
          />
        </div>
        <Hidden mdDown>
          <Tooltip title="Notifications">
            <IconButton color="inherit">
              <Badge badgeContent={notifications.length} color="primary" variant="dot">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </Tooltip>
          <div style={{ display: isLogin ? 'none' : 'block' }} className={classes.buttons}>
            <Button variant="outlined" color="primary" href="/login">
              Login
            </Button>
            <Button variant="contained" color="primary" href="/register">
              Sign Up
            </Button>
          </div>
        </Hidden>
        <UserMenuList display={isLogin} />
      </Toolbar>
    </AppBar>
  );
};

TopBar.propTypes = {
  className: PropTypes.string
};

export default TopBar;
