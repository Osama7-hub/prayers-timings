import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function MediaCard({ name, time }) {
	return (
		<Card className="card" style={{ backgroundColor: "#fcfcfc", padding: "5px", Width: "fit-content" }}>
			<CardContent className="CardContent">
				<h2>{name}</h2>
				<Typography variant="span" color="text.secondary" sx={{fontWeight: "normal", fontSize: "60px", color: "#2cbf92"}}>{time}</Typography>
			</CardContent>
		</Card>
	);
}
