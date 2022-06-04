import React, { useEffect } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Toolbar from "@mui/material/Toolbar";
import AddButton from "./components/AddButton";
import BottomAppBar from "./components/BottomAppBar";
import Deposits from "./Deposits";
import MedicalCountPanel from "./components/MedicalCountPanel";
import TopAppBar from "./components/TopAppBar";

const mdTheme = createTheme();

function App() {
	useEffect(() => {
		return console.log("アンマウントされた？");
	}, []);

	return (
		<ThemeProvider theme={mdTheme}>
			<TopAppBar>ホーム</TopAppBar>
			<Box sx={{ display: "flex" }}>
				<CssBaseline />
				<Box
					component="main"
					sx={{
						backgroundColor: (theme) =>
							theme.palette.mode === "light"
								? theme.palette.grey[100]
								: theme.palette.grey[900],
						flexGrow: 1,
						height: "100vh",
						overflow: "auto",
					}}
				>
					<Toolbar />
					<Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
						<Grid container spacing={3}>
							<Grid item xs={12}>
								<AddButton />
								<Paper
									sx={{
										p: 2,
										display: "flex",
										flexDirection: "column",
										height: 240,
									}}
								>
									<MedicalCountPanel />
								</Paper>
							</Grid>
							<Grid item xs={12} md={6}>
								<Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
									<Deposits />
								</Paper>
							</Grid>
							<Grid item xs={12} md={6}>
								<Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
									<Deposits />
								</Paper>
							</Grid>
						</Grid>
					</Container>
				</Box>
			</Box>
			<BottomAppBar />
		</ThemeProvider>
	);
}
export default App;
