import * as React from "react";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Title from "./Title";

function preventDefault(event) {
	event.preventDefault();
}

export default function Deposits() {
	return (
		<React.Fragment>
			<Title>No.1</Title>
			<Typography component="p" variant="h4">
				6月24日 15:00～
			</Typography>
			<Typography color="text.secondary" sx={{ flex: 1, mb: 2 }}>
				順番：15人目
			</Typography>
			<div>
				<Link color="primary" href="#" onClick={preventDefault}>
					詳細
				</Link>
			</div>
		</React.Fragment>
	);
}
