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
    <div className={classes.root}>
      <Grid container justify='center' alightItems='center'>
        <Typography variant='h3' className={`${classes.white} ${classes.paddingTop}`}>
          Page is Under Construction!
        </Typography>
      </Grid>
    </div>
  )
}

export default withStyles(styles)(UnderConstruction);