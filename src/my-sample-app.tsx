import { makeAppConfig } from "react-aws-cognito-lambda-dynamodb-base-prototype-app";
import { createRoot } from "react-dom/client";
import "@mui/material-pigment-css/styles.css";
import BaseApp from "./BaseApp";

const myAppMessages = {
	LOGIN_SUCCESSFUL: "User logged-in successfully",
	LOGIN_FAILED: "Login failed",
	LOGOUT_SUCCESSFUL: "User logged-out successfully",
	LOGOUT_FAILED: "Log-out failed",
	LOGGED_OUT_USER: "Logged-out User",
	LOG_COULD_NOT_LOGIN_WITH_REFRESHED_TOKENS:
		"Could not login with refreshed tokens",
	LOG_COULD_NOT_DECODE_AUTHENTICATION_RESPONSE:
		"Could not decode authentication response",
	LOG_COULD_NOT_GET_REFRESHED_TOKENS: "Could not get refreshed tokens",
	LOG_NO_REFRESH_TOKEN_AVAILABLE: "No refresh token available",
	LOG_COULD_NOT_REFRESH_TOKENS: "Could not refresh tokens",
	LOG_COULD_NOT_GET_IDENTIFICATION_TOKENS:
		"Could not get identification tokens with this authorization code",
};

const myEnv = {
	appHost: import.meta.env.VITE_APP_HOST,
	appBasePath: import.meta.env.VITE_APP_BASE_PATH,
	appLogoUrl: import.meta.env.VITE_APP_LOGO_URL,
	appRegion: import.meta.env.VITE_APP_AWS_REGION,
	appUserPoolId: import.meta.env.VITE_APP_USER_POOL_ID,
	appUserPoolDomain: import.meta.env.VITE_APP_USER_POOL_DOMAIN,
	appClientId: import.meta.env.VITE_APP_USER_POOL_APP_CLIENT_ID,
	appIdentityPoolId: import.meta.env.VITE_APP_IDENTITY_POOL_ID,
};

const myAppConfig = makeAppConfig({
	...myEnv,
	appRefreshTokenStorageKey: "my-sample-app-refresh-token",
	appMessages: myAppMessages,
});

const MainContent = () => <div>Main content text.</div>;

const appRoutes = [
	{
		name: "main",
		label: "Main",
		path: "/",
		hideFromMenu: false,
		component: MainContent,
	},
];

const App = () => <BaseApp appRoutes={appRoutes} appConfig={myAppConfig} />;

const rootNode = document.getElementById("app_container");
if (rootNode) {
	const root = createRoot(rootNode);
	root.render(<App />);
}
