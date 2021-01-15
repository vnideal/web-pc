import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import IconButton from '@material-ui/core/IconButton';
import PersonIcon from '@material-ui/icons/Person';
import { makeStyles } from '@material-ui/core/styles';
import AuthenticationService from 'src/services/auth/AuthenticationService';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex'
  }
}));

const UserMenuList = ({ display }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const [isSubmitting, setSubmitting] = React.useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    setSubmitting(true);
    AuthenticationService.logout().then((result) => {
      setSubmitting(false);
      if (result) {
        if (location.pathname === '/') {
          window.location.reload();
        } else {
          navigate('/', { replace: true });
        }
      }
    });
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  const navigateDashboard = (event) => {
    navigate('/app/dashboard', { replace: true });
    handleClose(event);
  };

  const navigateProfile = (event) => {
    navigate('/app/account', { replace: true });
    handleClose(event);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  if (!display) {
    return null;
  }

  return (
    <div className={classes.root}>
      <IconButton
        color="inherit"
        onClick={handleToggle}
        ref={anchorRef}
        aria-controls={open ? 'menu-list-grow' : undefined}
        aria-haspopup="true"
      >
        <PersonIcon />
      </IconButton>
      <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                  <MenuItem onClick={navigateProfile}>Profile</MenuItem>
                  <MenuItem onClick={navigateDashboard}>My account</MenuItem>
                  <MenuItem onClick={handleLogout} disabled={isSubmitting}>
                    Logout
                  </MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </div>
  );
};

UserMenuList.propTypes = {
  display: PropTypes.bool
};

export default UserMenuList;
