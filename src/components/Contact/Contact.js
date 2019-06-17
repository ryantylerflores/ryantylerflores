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

import Form from '../Form/Form';
import MapContainer from '../Map/MapContainer';

const Contact = props => {

  const { handleSubmit, pristine, reset, submitting, classes } = props;

  return(
    <div className="contact">
      <div>
      <MapContainer 
        mapStyles={{
          width: '100%',
          height: '45rem',
          borderRadius: '3px'
        }}
      />
      </div>
      <div>
        <Form />
      </div>
    </div>
  )
}


export default Contact;