import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';

function preventDefault(event) {
  event.preventDefault();
}

export default function Deposits() {
  return (
    <React.Fragment>
      <Title>Monthly Visit</Title>
      <Typography component="p" variant="h4">
        30,024
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
         December, 2022
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          View History
        </Link>
      </div>
    </React.Fragment>
  );
}