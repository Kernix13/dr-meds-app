import { FC } from "react";
import style from "./Medications.module.scss";
import { Pill, Pencil, Trash2 } from "lucide-react";

// import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

/* 	
	The info here needs to start as a json file
	Each card will need an Edit and Delete button
	And somewhere there needs to be an Add button 
  
*/

const meds = [
  {
    "id": 1,
    "time": "AM and PM",
    "medName": "Apixaban (Eliquis)",
    "medUse": "Prevent blood clots (Atrial Fib.)",
    "medDosage": ["1 tablet 2 X's a day", "Dose = 1 tablet = 5mg"]
  },
  {
    "id": 2,
    "time": "PM only",
    "medName": "Metoprolol SUCC ER",
    "medUse": "Prevent stroke, heart attack, kidney",
    "medDosage": ["1 tablet per day", "Dose = 1 tablet = 25mg"]
  },
  {
    "id": 3,
    "time": "AM only",
    "medName": "Amiodarone (Pacerone)",
    "medUse": "Heartbeat problems",
    "medDosage": ["1 tablet daily", "Dose = 1 tablet = 200mg"]
  },
  {
    "id": 4,
    "time": "As Needed",
    "medName": "Acetaminophen (TYLENOL)",
    "medUse": "For pain/aches",
    "medDosage": ["500-650mg tablet every 6 hrs", "Dose = 1 tablet = 500mg"]
  },
]

const Medications : FC = () => {

	return (
		<div className={style.medications}>

      <Box sx={{ flexGrow: 1 }}>

        <Grid container spacing={2}>
          {meds.map(med =>(
            <Grid item xs={12} sm={4} md={3}>
              <Card variant="outlined">
                  <CardContent>
                    <Pill color="#0000CB" />
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      {med.time}
                    </Typography>
                    <Typography variant="h6" component="div" mt={1}>
                      {med.medName}
                    </Typography>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                      {med.medUse}
                    </Typography>
                    <Typography variant="body2">
                        {med.medDosage[0]}
                        <br />
                        {med.medDosage[1]}
                      </Typography>
                    <Grid container>
                      <Grid xs={6}>

                        <CardActions>
                          <Button size="small"><Pencil color="#0000CB" /></Button>
                        </CardActions>
                        
                      </Grid>
                      <Grid xs={6}>

                        <CardActions>
                          <Button size="small"><Trash2 color="#0000CB" /></Button>
                        </CardActions>

                      </Grid>
                    </Grid>
                  </CardContent>

              </Card>
            </Grid>
          ))}
        </Grid>

      </Box>
	
		</div>
	)
	
};

export default Medications;