import React,{ useState } from 'react';
import { Field, reduxForm } from 'redux-form';
import {
  TextField,
  withStyles,
  Grid, 
  Typography,
  Divider,
  FormControl
} from '@material-ui/core';

import styles from './Contact.style'

// import UnderConstruction from '../UnderConstruction/UnderConstruction';

const Contact = props => {
  const { handleSubmit, pristine, reset, submitting, classes } = props;

 

  const renderError = ({error, touched}) => {
    if (touched && error){
      return (
        <div className="ui error mesasge">
          <div className="header">{error}</div>
        </div>
      );
    }
  }

  

  const renderInput = ({input, label, meta }) => {
    return( 
      <div>
        <TextField
          required
          // errorText={meta.touched && meta.error}
          label={label}
          className={classes.textField}
          margin="normal"
          variant="outlined"
          {...input}
        />
      </div>
    )
  }

  return(
    <div className={classes.root}>
      <Typography variant='h2'>
        Contact Me
      </Typography>
      <Typography>
        I'll be glad to answer your questions!
      </Typography>
      <form onSubmit={handleSubmit}>
        <Field name='name' component={renderInput} label='Your Name (required)' />
        <Field name='email' component={renderInput} label='Your Email (required)' />
        <Field name='subject' component={renderInput} label='Subject' />
        <Field name='message' multiline rows='10' component={renderInput} label='Your Message' />
        <button type='button' disabled={pristine || submitting} className='btn btn-primary'>Submit</button>
      </form>
        {/* </Grid> */}
        {/* <Grid item xs={6}>
          <Typography>
            Ryan Flores
          </Typography>
          <Typography>
            714.595.6250
          </Typography>
          <Typography>
            rtflores90@gmail.com
          </Typography>
          <Divider />
        </Grid>
      </Grid> */}
    </div>
  )
}

const validate = formValues => {
  const errors = {};

  if(!formValues.name) {
    errors.name = 'You Must Enter a Name';
  }

  if(!formValues.email) {
    errors.name = 'You Must Enter an Email'
  }

  return errors
}

export default withStyles(styles)(reduxForm({
  form: 'contactForm',
  validate
})(Contact));