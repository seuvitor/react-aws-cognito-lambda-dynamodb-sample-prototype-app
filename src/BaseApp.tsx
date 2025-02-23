import React, { useState } from 'react';
import { Toolbar } from '@mui/material';
import { BaseAppScope } from 'react-aws-cognito-lambda-dynamodb-base-prototype-app';

import AppThemeProvider from './AppThemeProvider';
import AppBar from './AppBar';
import AppDrawer from './AppDrawer';
import MessageArea from './MessageArea';
import SpinnerArea from './SpinnerArea';

const BaseApp = ({ appConfig, appRoutes }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return <AppThemeProvider>
      <BaseAppScope appConfig={appConfig} routes={appRoutes}>
        <AppBar setDrawerOpen={setDrawerOpen} routes={appRoutes} />
        <AppDrawer routes={appRoutes} drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} />
        <Toolbar />
        <MessageArea />
        <SpinnerArea />
      </BaseAppScope>
    </AppThemeProvider>;
};

export default BaseApp;
