import React from 'react';
import {
  withStyles
} from '@material-ui/core';

import styles from './ClosingContent.style';

const ClosingContent = props => {
  const { classes } = props;

  return(
    <div className={classes.root}>
      closing content
    </div>
  )
}

export default withStyles(styles)(ClosingContent);