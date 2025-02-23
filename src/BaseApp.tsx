import { Toolbar } from "@mui/material";
import { useState } from "react";
import { BaseAppScope } from "react-aws-cognito-lambda-dynamodb-base-prototype-app";
import type {
	AppConfig,
	AppRoute,
} from "react-aws-cognito-lambda-dynamodb-base-prototype-app";
import AppBar from "./AppBar";
import AppDrawer from "./AppDrawer";
import AppThemeProvider from "./AppThemeProvider";
import MessageArea from "./MessageArea";
import SpinnerArea from "./SpinnerArea";

type BaseAppProps = {
	appConfig: AppConfig;
	appRoutes: AppRoute[];
};

const BaseApp = ({ appConfig, appRoutes }: BaseAppProps) => {
	const [drawerOpen, setDrawerOpen] = useState(false);

	return (
		<AppThemeProvider>
			<BaseAppScope appConfig={appConfig} routes={appRoutes}>
				<AppBar setDrawerOpen={setDrawerOpen} routes={appRoutes} />
				<AppDrawer
					routes={appRoutes}
					drawerOpen={drawerOpen}
					setDrawerOpen={setDrawerOpen}
				/>
				<Toolbar />
				<MessageArea />
				<SpinnerArea />
			</BaseAppScope>
		</AppThemeProvider>
	);
};

export default BaseApp;
