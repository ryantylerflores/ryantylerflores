import React from 'react';
import { 
  Avatar,
  withStyles
} from '@material-ui/core';

import styles from './ProfilePhoto.style.js';

const ProfilePhoto = props => {
  const { classes } = props;
  return (
    <Avatar 
      alt='Ryan Flores' 
      src='./assets/me.jpg' 
      className={classes.avatar}
    />
  )
}

export default withStyles(styles)(ProfilePhoto);