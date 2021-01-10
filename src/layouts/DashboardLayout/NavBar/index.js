import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
// eslint-disable-next-line object-curly-newline
import { Box, Divider, Drawer, Hidden, List, Typography, makeStyles } from '@material-ui/core';
import {
  Settings as SettingsIcon,
  ShoppingBag as ShoppingBagIcon,
  Home as HomeIcon,
  AlignJustify as ServicesIcon
} from 'react-feather';
import ProfileService from 'src/services/profile/ProfileService';
import UserAvatar from 'src/components/UserAvatar';
import NavItem from './NavItem';

const items = [
  {
    href: '/',
    icon: HomeIcon,
    title: 'Trang chủ'
  },
  {
    href: '/products',
    icon: ShoppingBagIcon,
    title: 'Sản phẩm'
  },
  {
    href: '/services',
    icon: ServicesIcon,
    title: 'Dịch vụ'
  },
  {
    href: '/app/settings',
    icon: SettingsIcon,
    title: 'Thiết lập'
  }
];

const useStyles = makeStyles(() => ({
  mobileDrawer: {
    width: 256
  },
  desktopDrawer: {
    width: 256,
    top: 64,
    height: 'calc(100% - 64px)'
  },
  avatar: {
    cursor: 'pointer',
    width: 64,
    height: 64
  }
}));

const NavBar = ({ onMobileClose, openMobile }) => {
  const classes = useStyles();
  const location = useLocation();
  const [user, setUser] = useState([]);

  useEffect(() => {
    let mounted = true;
    if (openMobile && onMobileClose) {
      onMobileClose();
    }
    ProfileService.info().then((userInfo) => {
      if (mounted) {
        setUser(userInfo);
      }
    });

    // eslint-disable-next-line no-return-assign
    return () => (mounted = false);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  const content = (
    <Box height="100%" display="flex" flexDirection="column">
      <Box alignItems="center" display="flex" flexDirection="column" p={2}>
        <UserAvatar className={classes.avatar} to="/app/account" user={user} />
        <Typography className={classes.name} color="textPrimary" variant="h5">
          {user.name}
        </Typography>
      </Box>
      <Divider />
      <Box p={2}>
        <List>
          {items.map((item) => (
            <NavItem href={item.href} key={item.title} title={item.title} icon={item.icon} />
          ))}
        </List>
      </Box>
      <Box flexGrow={1} />
    </Box>
  );

  return (
    <>
      <Hidden lgUp>
        <Drawer
          anchor="left"
          classes={{ paper: classes.mobileDrawer }}
          onClose={onMobileClose}
          open={openMobile}
          variant="temporary"
        >
          {content}
        </Drawer>
      </Hidden>
      <Hidden mdDown>
        <Drawer anchor="left" classes={{ paper: classes.desktopDrawer }} open variant="persistent">
          {content}
        </Drawer>
      </Hidden>
    </>
  );
};

NavBar.propTypes = {
  onMobileClose: PropTypes.func,
  openMobile: PropTypes.bool
};

NavBar.defaultProps = {
  onMobileClose: () => {},
  openMobile: false
};

export default NavBar;
