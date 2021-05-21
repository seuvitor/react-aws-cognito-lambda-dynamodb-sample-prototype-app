import React from 'react';
import ReactDOM from 'react-dom';

import { BaseApp, makeAppConfig } from 'react-aws-cognito-lambda-dynamodb-base-prototype-app';

const e = React.createElement;

const myAppMessages = {
  LOGIN_SUCCESSFUL: 'User logged-in successfully',
  LOGIN_FAILED: 'Login failed',
  LOGOUT_SUCCESSFUL: 'User logged-out successfully',
  LOGOUT_FAILED: 'Log-out failed',
  LOGGED_OUT_USER: 'Logged-out User',
  LOG_COULD_NOT_LOGIN_WITH_REFRESHED_TOKENS: 'Could not login with refreshed tokens',
  LOG_COULD_NOT_DECODE_AUTHENTICATION_RESPONSE: 'Could not decode authentication response',
  LOG_COULD_NOT_GET_REFRESHED_TOKENS: 'Could not get refreshed tokens',
  LOG_NO_REFRESH_TOKEN_AVAILABLE: 'No refresh token available',
  LOG_COULD_NOT_REFRESH_TOKENS: 'Could not refresh tokens',
  LOG_COULD_NOT_GET_IDENTIFICATION_TOKENS: 'Could not get identification tokens with this authorization code'
};

const myEnv = {
  appHost: process.env.APP_HOST,
  appBasePath: process.env.APP_BASE_PATH,
  appLogoUrl: process.env.APP_LOGO_URL,
  appRegion: process.env.AWS_REGION,
  appUserPoolId: process.env.USER_POOL_ID,
  appUserPoolDomain: process.env.USER_POOL_DOMAIN,
  appClientId: process.env.USER_POOL_APP_CLIENT_ID,
  appIdentityPoolId: process.env.IDENTITY_POOL_ID
};

const appConfig = makeAppConfig({
  ...myEnv,
  appRefreshTokenStorageKey: 'my-sample-app-wallet-refresh-token',
  appMessages: myAppMessages
});

const MainContent = () => e('div', null, 'Main content text.');

const appRoutes = [
  {
    name: 'main',
    label: 'Main',
    path: '/',
    hideFromMenu: false,
    component: MainContent,
    options: { exact: true }
  }
];

const App = () => (
  e(BaseApp, { appRoutes, appConfig })
);

ReactDOM.render(
  e(App, null, null),
  document.getElementById('app_container')
);
