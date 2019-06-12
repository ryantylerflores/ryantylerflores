import React from 'react';
import { connect } from 'react-redux';
import {
  Grid,
  withStyles,
  Typography,
  Divider
} from '@material-ui/core'

import ProfilePhoto from './ProfilePhoto/ProfilePhoto';
import Contact from '../Contact/Contact';
import MapContainer from '../Map/MapContainer';

import * as actions from '../../actions/form-actions';

import styles from './Home.style';

const Home = props => {

  const { classes } = props;

  return(
    <main>
      <div className="section-intro">
          <div className="">
            <Grid container justify='center' alignItems='center' gutterBottom>
              <ProfilePhoto />
            </Grid>
            <Grid container justify='center' alignItems='center' className="intro__text-box">
              <Typography variant='h1' className="heading-primary">
                <span className="heading-primary--main">Ryan Flores</span>
                <span className="heading-primary--sub heading-primary--sub-up">Designer, </span>
                <span className="heading-primary--sub heading-primary--sub-down">Developer, </span>
                <span className="heading-primary--sub heading-primary--sub-up">Enthusiast</span>
              </Typography>
            </Grid>
          </div>
      </div>
      <div className="section-summary">
        <div className={classes.bodyContainer}>
          <Grid container spacing={2} className={classes.padding}>
            <Grid item xs={12} md={6}>
              <Typography align='right' variant='h3' className="heading-tertiary">
                Hi. I'm Ryan, a software developer from Placentia, California. Feel free to reach out.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant='body1' className='paragraph'>
                As a software engineer I pride myself on creating readable, reusable code using the best industry practices. 
                My passion lies in helping companies create beautiful, user-friendly UIs. My current toolset is coding these UIs
                in VSCode, ReactJS with Redux, Bootstrap, & Material-UI. Let me know how I can best help you! 
              </Typography>
            </Grid>
          </Grid>
        </div>
      </div>
      <div className="section-contact">
        <div className="contact__container">
          <div className="map__container">
            <MapContainer />
          </div>
          <div className="contact__position contact__position-home">
            <Contact 
            />
          </div>
        </div>
      </div>
    </main>
  )
}

export default withStyles(styles)(connect(null,actions)(Home));