import React from "react";
import { Paper, FormControl, InputLabel, Select, MenuItem, Grid, TextField, Box, Typography } from "@material-ui/core";

export default function FlightDetails(props) {

  const [state] = React.useState(props);

  function getTime(datetime) {
    const date = new Date(datetime);
    let day = date.toDateString();
    let hours = date.getHours();
    let minutes = "0" + date.getMinutes();
    return day + " " + hours + ":" + minutes.substr(-2);
  }

  return (
    <Paper>
      <Typography color="textPrimary" component="span">
        <Grid>
          <Box component="div" m={2}>
            <TextField margin="normal" label="Label" name="flightCode" fullWidth value={state.data.flightCode} />
            <TextField margin="normal" label="Label" name="flightProvider" fullWidth value={state.data.flightProvider} />
            <TextField margin="normal" label="Label" name="sourcePortName" fullWidth value={state.data.sourcePortName} />
            <TextField margin="normal" label="Label" name="sourcePortCode" fullWidth value={state.data.sourcePortCode} />
            <TextField margin="normal" label="Label" name="destinationPortName" fullWidth value={state.data.destinationPortName} />
            <TextField margin="normal" label="Label" name="destinationPortCode" fullWidth value={state.data.destinationPortCode} />
            <TextField margin="normal" label="Label" name="scheduledDeparture" fullWidth value={getTime(state.data.scheduledDeparture)} />
            <TextField margin="normal" label="Label" name="actualDeparture" fullWidth value={getTime(state.data.actualDeparture)} />
            <TextField margin="normal" label="Label" name="scheduledArrival" fullWidth value={getTime(state.data.scheduledArrival)} />
            <TextField margin="normal" label="Label" name="actualArrival" fullWidth value={getTime(state.data.actualArrival)} />
            <FormControl fullWidth variant="filled">
              <InputLabel id="flight-details-select-label">Flight Status</InputLabel>
              <Select labelId="flight-details-select-label" id="flight-details-select" value={state.data.status} onChange={(status) => props.changeFlightStatus(status)}>
                <MenuItem value="LANDED">LANDED</MenuItem>
                <MenuItem value="ON SCHEDULE">ON SCHEDULE</MenuItem>
                <MenuItem value="DELAYED">DELAYED</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Grid>
      </Typography>
    </Paper>
  );
}