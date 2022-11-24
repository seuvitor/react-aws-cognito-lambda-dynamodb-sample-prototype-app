import React, { useRef, useState } from 'react';
import {
  AppBar as MuiAppBar,
  Button,
  Divider,
  Icon,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography
} from '@mui/material';
import { useAppBarState } from 'react-aws-cognito-lambda-dynamodb-base-prototype-app';

const LoginButton = ({ hideLoginButton, appExternalLoginUrl }) => (
  (hideLoginButton)
    ? null
    : <Button color="inherit" href={appExternalLoginUrl}>Login</Button>
);

const AccountButton = ({ hideAccountButton, userName, logoffAndShowMessage }) => {
  const [accountMenuOpened, setAccountMenuOpened] = useState(false);
  const accountMenuRef = useRef(null);

  const handleAccountMenuClick = () => {
    setAccountMenuOpened(true);
  };

  const handleAccountMenuClose = () => {
    setAccountMenuOpened(false);
  };

  const handleLogoff = () => {
    logoffAndShowMessage();
    setAccountMenuOpened(false);
  };

  return (hideAccountButton)
    ? null
    : (
      <>
        <IconButton color="inherit" ref={accountMenuRef} onClick={handleAccountMenuClick}>
          <Icon>account_circle</Icon>
        </IconButton>
        <Menu open={accountMenuOpened}
            onClose={handleAccountMenuClose}
            anchorEl={accountMenuRef.current}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}>
          <MenuItem disabled={true}>{userName}</MenuItem>
          <Divider />
          <MenuItem onClick={handleLogoff}>Logoff</MenuItem>
        </Menu>
      </>
    );
};

const AppBar = ({ setDrawerOpen, routes }) => {
  const {
    currentRouteLabel,
    hideLoginButton,
    appExternalLoginUrl,
    hideAccountButton,
    userName,
    logoffAndShowMessage
  } = useAppBarState(routes);

  return <MuiAppBar>
    <Toolbar>
      <IconButton edge="start" color="inherit" onClick={() => setDrawerOpen(true)}>
        <Icon>menu</Icon>
      </IconButton>
      <Typography style={{ flexGrow: 1 }}>{currentRouteLabel}</Typography>
      <LoginButton hideLoginButton={hideLoginButton} appExternalLoginUrl={appExternalLoginUrl} />
      <AccountButton
        hideAccountButton={hideAccountButton}
        userName={userName}
        logoffAndShowMessage={logoffAndShowMessage} />
    </Toolbar>
  </MuiAppBar>;
};

export default AppBar;
