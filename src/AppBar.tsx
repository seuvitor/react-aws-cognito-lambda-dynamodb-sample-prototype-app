import {
	Button,
	Divider,
	Icon,
	IconButton,
	Menu,
	MenuItem,
	AppBar as MuiAppBar,
	Toolbar,
	Typography,
} from "@mui/material";
import { useRef, useState } from "react";
import { useAppBarState } from "react-aws-cognito-lambda-dynamodb-base-prototype-app";
import type { AppRoute } from "react-aws-cognito-lambda-dynamodb-base-prototype-app";

type LoginButtonProps = {
	hideLoginButton: boolean;
	appExternalLoginUrl: string;
};

const LoginButton = ({
	hideLoginButton,
	appExternalLoginUrl,
}: LoginButtonProps) =>
	hideLoginButton ? null : (
		<Button color="inherit" href={appExternalLoginUrl}>
			Login
		</Button>
	);

type AccountButtonProps = {
	hideAccountButton: boolean;
	userName: string;
	logoffAndShowMessage: () => void;
};

const AccountButton = ({
	hideAccountButton,
	userName,
	logoffAndShowMessage,
}: AccountButtonProps) => {
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

	return hideAccountButton ? null : (
		<>
			<IconButton
				color="inherit"
				ref={accountMenuRef}
				onClick={handleAccountMenuClick}
			>
				<Icon>account_circle</Icon>
			</IconButton>
			<Menu
				open={accountMenuOpened}
				onClose={handleAccountMenuClose}
				anchorEl={accountMenuRef.current}
				anchorOrigin={{ vertical: "top", horizontal: "right" }}
				transformOrigin={{ vertical: "top", horizontal: "right" }}
			>
				<MenuItem disabled={true}>{userName}</MenuItem>
				<Divider />
				<MenuItem onClick={handleLogoff}>Logoff</MenuItem>
			</Menu>
		</>
	);
};

type AppBarProps = {
	setDrawerOpen: (_open: boolean) => void;
	routes: AppRoute[];
};

const AppBar = ({ setDrawerOpen, routes }: AppBarProps) => {
	const {
		currentRouteLabel,
		hideLoginButton,
		appExternalLoginUrl,
		hideAccountButton,
		userName,
		logoffAndShowMessage,
	} = useAppBarState(routes);

	return (
		<MuiAppBar>
			<Toolbar>
				<IconButton
					edge="start"
					color="inherit"
					onClick={() => setDrawerOpen(true)}
				>
					<Icon>menu</Icon>
				</IconButton>
				<Typography style={{ flexGrow: 1 }}>{currentRouteLabel}</Typography>
				<LoginButton
					hideLoginButton={hideLoginButton}
					appExternalLoginUrl={appExternalLoginUrl}
				/>
				<AccountButton
					hideAccountButton={hideAccountButton}
					userName={userName || "No User"}
					logoffAndShowMessage={logoffAndShowMessage}
				/>
			</Toolbar>
		</MuiAppBar>
	);
};

export default AppBar;
