import './Status.css';
import React from "react";
import { Box } from "@material-ui/core";

export default function Status(props) {

  const status = (value) => {//console.log(value);
    switch (value) {
      case "LANDED": return <div className="green">LANDED</div>;
      case "ON SCHEDULE": return <div className="green">ON SCHEDULE</div>;
      case "DELAYED": return <div className="yellow">DELAYED</div>;
      default: return <div className="yellow">PENDING</div>;
    }
  }

  return (
    <Box textAlign="left">
      {status(props.data)}
    </Box>
  );
}
