import { ThemeProvider, createTheme } from "@mui/material";
import { useState } from "react";
import type { PropsWithChildren } from "react";

const AppThemeProvider = ({ children }: PropsWithChildren) => {
	const [theme] = useState(
		createTheme({
			palette: {
				primary: {
					main: "#556cd6",
				},
			},
		}),
	);
	return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default AppThemeProvider;
