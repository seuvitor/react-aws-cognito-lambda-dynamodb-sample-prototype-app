import React from 'react';
import { NavLink } from 'react-router-dom';

import {
  Box,
  Divider,
  Drawer,
  Icon,
  ListItem,
  ListItemText,
  Toolbar
} from '@mui/material';
import { useAppDrawerState } from 'react-aws-cognito-lambda-dynamodb-base-prototype-app';

const AppDrawer = ({ routes, drawerOpen, setDrawerOpen }) => {
  const { appLogoUrl, menuRoutes } = useAppDrawerState(routes);

  const handleClose = () => setDrawerOpen(false);

  return <Drawer open={drawerOpen} onClose={handleClose}>
    <Toolbar onClick={handleClose} style={{ padding: 'inherit' }}>
      <ListItem button={true} style={{ justifyContent: 'space-between', height: '100%' }}>
        <Box style={{ flex: 'auto', textAlign: 'center' }}>
          <img src={appLogoUrl} width="70px" height="70px" />
        </Box>
        <Icon>chevron_left</Icon>
      </ListItem>
    </Toolbar>
    <Divider />
    {menuRoutes.map((route) => (
      <ListItem
        key={`${route.name}-route-drawer-item`}
        button={true}
        component={NavLink}
        activeClassName="Mui-selected"
        to={route.path}
        onClick={handleClose}
        {...route.options}
      >
        <ListItemText primary={route.label} />
      </ListItem>
    ))
    }
  </Drawer>;
};

export default AppDrawer;
