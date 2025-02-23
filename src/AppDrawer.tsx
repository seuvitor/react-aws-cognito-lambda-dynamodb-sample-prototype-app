import {
	Box,
	Divider,
	Drawer,
	Icon,
	ListItem,
	ListItemButton,
	ListItemText,
	Toolbar,
} from "@mui/material";
import { useAppDrawerState } from "react-aws-cognito-lambda-dynamodb-base-prototype-app";
import type { AppRoute } from "react-aws-cognito-lambda-dynamodb-base-prototype-app";
import { NavLink } from "react-router-dom";

type AppDrawerProps = {
	routes: AppRoute[];
	drawerOpen: boolean;
	setDrawerOpen: (_open: boolean) => void;
};

const AppDrawer = ({ routes, drawerOpen, setDrawerOpen }: AppDrawerProps) => {
	const { appLogoUrl, menuRoutes } = useAppDrawerState(routes);

	const handleClose = () => setDrawerOpen(false);

	return (
		<Drawer open={drawerOpen} onClose={handleClose}>
			<Toolbar onClick={handleClose} style={{ padding: "inherit" }}>
				<ListItem
					button={true}
					style={{ justifyContent: "space-between", height: "100%" }}
				>
					<Box style={{ flex: "auto", textAlign: "center" }}>
						<img
							src={appLogoUrl}
							width="70px"
							height="70px"
							aria-label="App Logo"
						/>
					</Box>
					<Icon>chevron_left</Icon>
				</ListItem>
			</Toolbar>
			<Divider />
			{menuRoutes.map((route) => (
				<ListItem disablePadding key={`${route.name}-route-drawer-item`}>
					<ListItemButton
						component={NavLink}
						to={route.path}
						onClick={handleClose}
						{...route.options}
					>
						<ListItemText primary={route.label} />
					</ListItemButton>
				</ListItem>
			))}
		</Drawer>
	);
};

export default AppDrawer;
