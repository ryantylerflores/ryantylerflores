import React from 'react';
import { 
  Avatar,
  withStyles
} from '@material-ui/core';

import styles from './ProfilePhoto.style.js';

const ProfilePhoto = props => {
  const { classes } = props;
  return (
    <div className="profile-img__background">
    <Avatar 
      alt='Ryan Flores' 
      src='./assets/me.jpg' 
      className='profile-img'
    />
    </div>
  )
}

export default withStyles(styles)(ProfilePhoto);