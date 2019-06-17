import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import {
  TextField,
  withStyles,
  Grid, 
  Typography,
  Divider,
  FormControl
} from '@material-ui/core';

import MapContainer from '../Map/MapContainer';

import * as actions from '../../actions/form-actions';


const renderTextField = ({input, label, meta: {touched, error} }) => {
  console.log()
  return( 
      <TextField
        required
        label={label}
        className="contact__text-field"
        margin="normal"
        variant="outlined"
        {...input}
      />
  )
}

const Form = props => {

  const { handleSubmit, pristine, reset, submitting, classes } = props;

// const renderError = ({error, touched}) => {
//   if (touched && error){
//     return (
//       <div className="ui error mesasge">
//         <div className="header">{error}</div>
//       </div>
//     );
//   }
// }

  

  const onSubmit = formValues => {
    props.sendEmail(formValues);
    // console.log(props);
  }

  return(
    <div className="contact">
      <div className="contact__form">
        <Typography variant='h2' className="heading-tertiary">
          Contact Me
        </Typography>
        <Typography className="heading-primary--sub">
          I'll be glad to answer your questions!
        </Typography>
        <form action="https://formspree.io/rtflores90@gmail.com" method="POST" target="_blank">
          <div>
            <Field name='name' component={renderTextField} label='Your Name (required)' />
          </div>
          <div>
            <Field name='email' component={renderTextField} label='Your Email (required)' />
          </div>
          <div>
            <Field name='subject' component={renderTextField} label='Subject' />
          </div>
          <div>
            <Field name='message' component={renderTextField} label='Your Message' multiLine={true} rows={10} />
          </div>
          <div className='u-text-center u-margin-top-big'>
            <button type='submit' className='btn btn--blue'>Submit</button>
          </div>
        </form>
      </div>
    </div>
  )
}

  // const validate = formValues => {
  //   const errors = {};

  //   if(!formValues.name) {
  //     errors.name = 'You Must Enter a Name';
  //   }

  //   if(!formValues.email) {
  //     errors.name = 'You Must Enter an Email'
  //   }

  //   return errors
  // }
// }

export default reduxForm({
  form: 'contactForm',
  // validate
})(connect(null,actions)(Form));