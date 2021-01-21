import './Flight.css';
import React, { Component } from "react";
import Status from '../Status/Status';
import { Box, Grid, Card, Link, CardContent, Typography, Dialog } from "@material-ui/core";
import ArrowForwardRoundedIcon from '@material-ui/icons/ArrowForwardRounded';
import FlightDetails from '../FlightDetails/FlightDetails';

export default class Flight extends Component {

  constructor(props) {
    super(props);
    this.state = {
      ...this.props.data, 
      open: false,
    };
    this.changeFlightStatus = this.changeFlightStatus.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleOpen() {
    this.setState({open: true});
  };

  handleClose(){
    this.setState({open: false});
  };

  changeFlightStatus(status) {
    this.setState({status: status.target.value});
    const requestOptions = {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({...this.state, status: status.target.value})
    };
    fetch('http://localhost:3001/flight/update/', requestOptions)
      .then(response => response.json());
    this.handleClose();
  }

  getTime(datetime) {
    const date = new Date(datetime);
    let hours = date.getHours();
    let minutes = "0" + date.getMinutes();
    return hours + ":" + minutes.substr(-2);
  }

  render() {
    const isDelayed = (this.props.data.status === "DELAYED") ? true : false;

    return (
      <Card className="flight-card">
        <CardContent>
          <Typography color="textPrimary" component="span">
            <Box textAlign="left">
              <Grid container direction="row" justify="space-evenly" alignItems="flex-start" spacing={5}>

                <Grid item xs>
                  {isDelayed && <Box textAlign="left" fontSize={10} style={{ textDecorationLine: 'line-through' }}>
                    {this.getTime(this.state.scheduledArrival)}
                  </Box>}
                  <Box textAlign="left" fontWeight="fontWeightBold">
                    {this.getTime(this.state.actualArrival)}
                  </Box>
                </Grid>

                <Grid item xs>
                  <Box textAlign="left" fontWeight="fontWeightBold">
                    {this.props.data.sourcePortName}&nbsp;{this.props.data.sourcePortCode}
                  </Box>
                  <Box textAlign="left" fontWeight="fontWeightLight" fontSize={12}>
                    {this.props.data.flightCode}&nbsp;{this.props.data.flightProvider}
                  </Box>
                </Grid>

                <Grid item xs>
                  <Box textAlign="left" m={1}>
                    <Status data={this.state.status}/>
                  </Box>
                </Grid>

                <Grid item xs>
                  <Box textAlign="left" m={1}>
                    Terminal&nbsp;{this.props.data.terminal}
                  </Box>
                </Grid>

                <Grid item xs>
                  <Link href="#" className="flight-link" component="button" onClick={this.handleOpen}>
                    More details <ArrowForwardRoundedIcon />
                  </Link>
                  <Dialog open={this.state.open} onClose={this.handleClose} aria-labelledby="flight-details-dialog-title">
                    <FlightDetails changeFlightStatus={this.changeFlightStatus} data={this.state} />
                  </Dialog>
                </Grid>
                
              </Grid>
            </Box>
          </Typography>
        </CardContent>
      </Card>
    );
  }
}
