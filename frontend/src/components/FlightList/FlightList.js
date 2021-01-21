import React, { Component } from "react";
import Flight from '../Flight/Flight';
import { Grid } from '@material-ui/core';

export default class FlightList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    const requestOptions = {
      method: 'GET',
      headers: {'Content-Type': 'application/json'}
    };
    fetch("http://localhost:3001/flight/all", requestOptions)
      .then((response) => response.json())
      .then((data) => this.setState({data: data}));
  }

  render() {
    const flights = this.state.data;
    const list = [];

    flights.forEach((element, index, array) => {
      list.push(<Flight key={element._id} data={element}/>);
    });

    return (
      <div className="container">
        <Grid container direction="column" justify="space-around" alignItems="center">
          {list}
        </Grid>
      </div>
    );
  }
}
