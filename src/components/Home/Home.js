import React from 'react';
import {
  Grid,
  withStyles,
  Typography,
  Divider
} from '@material-ui/core'

import ProfilePhoto from './ProfilePhoto/ProfilePhoto';
import styles from './Home.style';

const Home = props => {

  const { classes } = props;

  const renderBodyContent = () => {
    // if
  }

  return(
    <div className={classes.root}>
      {/* <div className={classes.container}> */}
        <div className={classes.profilePictureContainer}>
          <Grid container justify='center' alignItems='center' gutterBottom>
            <ProfilePhoto />
          </Grid>
          <Grid container justify='center' alignItems='center' className={classes.margin}>
            <Typography variant='h3' className={classes.nameTitle}>Ryan Flores</Typography>
          </Grid>
          <Grid container justify='center' alignItems='center' className={classes.margin}>
            <Typography variant='body1'>Designer, Developer, Enthusiast</Typography>
          </Grid>
        </div>
        <div className={classes.bodyContainer}>
          <Grid container spacing={2} className={classes.padding}>
            <Grid item xs={12} md={6}>
              <Typography align='right' variant='h4'>
                Hi. I'm Ryan, a software developer from Placentia, California. Feel free to reach out.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant='body1' className={classes.lineHeight}>
                As a software engineer I pride myself on creating readable, reusable code using the best industry practices. 
                My passion lies in helping companies create beautiful, user-friendly UIs. My current toolset is coding these UIs
                in VSCode, ReactJS with Redux, Bootstrap, & Material-UI. Let me know how I can best help you! 
              </Typography>
            </Grid>
          </Grid>
        </div>
      {/* </div> */}
    </div>
  )
}

export default withStyles(styles)(Home);