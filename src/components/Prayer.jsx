import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function MediaCard({ name, time }) {
	return (
		<Card className="card" style={{ backgroundColor: "#fcfcfc", padding: "0", borderRadius: "20px",
			height: "80px", lineHeight: "10px"
			
		}}>
			<CardContent className="CardContent" sx={{display: "flex", justifyContent: "space-between", alignItems: "center", px: "2rem" }}>
				<h2 className="prayer-name">{name}</h2>
				<Typography variant="span" color="text.secondary" sx={{fontWeight: "normal", fontSize: "25px", color: "#ddd"}}>{time}</Typography>
			</CardContent>
		</Card>
	);
}
