import { FC } from "react";
import style from "./Medications.module.scss";
import { Pill } from "lucide-react";

import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const Medications : FC = () => {

	const card = (
		
			<CardContent>
				<Typography sx={{ mb: 1.5 }} color="text.secondary">
					AM and PM
				</Typography>
				<Typography variant="h6" component="div" mt={1}>
					Apixaban (Eliquis)
				</Typography>
				<Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
					Prevent blood clots (Atrial Fib.)
				</Typography>
				
				<Typography variant="body2">
					1 tablet 2 X's a day
					<br />
					Dose = 1 tablet = 5mg
				</Typography>
			</CardContent>
	);
	return <div className={style.medications}>
		<div>
			<Container maxWidth="lg">
				<Box sx={{ minWidth: 275 }}>
					<Pill color="#0F0E38" />
					<Box sx={{ width: '100%' }}>
						<Grid  container rowSpacing={{ xs: 1, sm: 2, md: 3 }} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
							<Grid item xs={12} sm={4} md={3}>
								<Paper elevation={6}>		
									<Card variant="outlined">{card}</Card>
								</Paper>	
							</Grid>
							<Grid item xs={12} sm={4} md={3}>
								<Card variant="outlined">{card}</Card>
							</Grid>
							<Grid item xs={12} sm={4} md={3}>
								<Card variant="outlined">{card}</Card>
							</Grid>
							<Grid item xs={12} sm={4} md={3}>
								<Card variant="outlined">{card}</Card>
							</Grid>
							<Grid item xs={12} sm={4} md={3}>
								<Card variant="outlined">{card}</Card>
							</Grid>
							<Grid item xs={12} sm={4} md={3}>
								<Card variant="outlined">{card}</Card>
							</Grid>
						</Grid>
					</Box>
				</Box>
			</Container>


			
			{/* <Tablets color="#0F0E38" /> */}
		</div>
	</div>;
};

export default Medications;