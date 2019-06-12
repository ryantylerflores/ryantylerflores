import React from 'react';
import { connect } from 'react-redux';
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

import * as actions from '../../actions/header-actions'

import styles from './Footer.style';


const Footer = props => {
  const { classes } = props;
  console.log(props);
  return(
    <footer className="footer">
    {/* // <footer className={`${classes.footer} ${classes.gray} ${classes.borderTop}`}> */}
      {/* <div className={classes.textContainer}>
        <Typography variant='body1'>
          © Ryan Flores, 2019
        </Typography>
      </div> */}
      <Grid container spacing={2} className={classes.padding}>
        <Grid item xs={12} md={6}>
          <div className="footer__nav">
            <ul className="footer__list">
              <li className="footer__item"><a onClick={() => props.changeAppLocation('Home')} className="footer__link">Home</a></li>
              <li className="footer__item"><a onClick={() => props.changeAppLocation('About')} className="footer__link">About</a></li>
              <li className="footer__item"><a onClick={() => props.changeAppLocation('Projects')} className="footer__link">Projects</a></li>
              <li className="footer__item"><a onClick={() => props.changeAppLocation('Contact')} className="footer__link">Contact</a></li>
            </ul>
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <p className="footer__copyright">
            © Ryan Flores, 2019. All rights reserved.
          </p>
        </Grid>
      </Grid>
    </footer>
  )
}

export default withStyles(styles)(connect(null,actions)(Footer));