import React, { useState } from 'react';
import { Toolbar } from '@mui/material';
import { BaseAppScope, useBaseAppScopeState } from 'react-aws-cognito-lambda-dynamodb-base-prototype-app';

import AppThemeProvider from './AppThemeProvider';
import AppBar from './AppBar';
import AppDrawer from './AppDrawer';
import MessageArea from './MessageArea';
import SpinnerArea from './SpinnerArea';

const BaseApp = ({ appConfig, appRoutes }) => {
  const { routes } = useBaseAppScopeState(appRoutes);
  const [drawerOpen, setDrawerOpen] = useState(false);

  return <AppThemeProvider>
      <BaseAppScope appConfig={appConfig} routes={routes}>
        <AppBar setDrawerOpen={setDrawerOpen} routes={routes} />
        <AppDrawer routes={routes} drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} />
        <Toolbar />
        <MessageArea />
        <SpinnerArea />
      </BaseAppScope>
    </AppThemeProvider>;
};

export default BaseApp;
