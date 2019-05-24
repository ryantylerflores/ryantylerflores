import React from 'react';
import {
  withStyles,
  Grid,
  AppBar,
  Toolbar,
  IconButton,
  Fab,
  Typography
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

import styles from './Footer.style';


const Footer = props => {
  const { classes } = props;
  return(
    <footer className={`${classes.footer} ${classes.gray} ${classes.borderTop}`}>
      <Typography variant='caption'>
        © Ryan Flores, 2019
      </Typography>
    </footer>
  )
}

export default withStyles(styles)(Footer);