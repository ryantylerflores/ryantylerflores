import React from 'react';
import {
  withStyles,
  Typography,
  Grid
} from '@material-ui/core';

import styles from './UnderConstruction.style';


const UnderConstruction = props => {
  const { classes } = props;

  return(
    <div className="construction">
      <div className="construction__container">
        <Typography variant='h2' className={`${classes.white}`}>
          Page is Under Construction!
        </Typography>
      </div>
    </div>
  )
}

export default withStyles(styles)(UnderConstruction);