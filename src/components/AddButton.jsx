import * as React from "react";
import Button from "@mui/material/Button";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { Box } from "@mui/material";

export default function AddButton() {
	return (
		<Box sx={{ mb: 2, textAlign: "right" }}>
			<Button
				variant="contained"
				size="large"
				startIcon={<AddCircleOutlineIcon />}
			>
				新規予約
			</Button>
		</Box>
	);
}
