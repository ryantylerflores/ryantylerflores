import React , { useState } from 'react';
import { connect } from 'react-redux';
import { 
  AppBar,
  Toolbar,
  Typography,
  CssBaseline,
  withStyles,
  Button,
  Tabs,
  Tab
} from '@material-ui/core';

import HideHeader from './HideHeader';
import styles from './Header.styles.js';
import * as actions from '../../actions/header-actions';

const Header = props => {
  const { classes } = props;

  const [value, setValue] = React.useState('');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  }

  const handleHomeClick = () => {
    props.changeAppLocation('Home');
    setValue('');
  }
  const headerFontColorHandler = () => {
    // switch(props.location.)
  }

  console.log(props)

  return (
    <React.Fragment>
      <CssBaseline />
      <HideHeader {...props}>
        <AppBar className={ classes.headerTop }>
          <Toolbar>
            <Typography 
              className={ classes.title } 
              variant='h6'
              // onClick={ () => props.changeAppLocation('Home')}
              onClick={ handleHomeClick }
            >
              Ryan Flores
            </Typography>
            
            <Tabs
              value={ value }
              onChange={ handleChange }
              indicatorColor='primary'
              textColor='inherit'
              variant='fullWidth'
            >
              { ['About','Projects','Contact'].map((navItem,index) => {
                return <Tab 
                  key={ index }
                  label={ navItem } 
                  onClick={ () => props.changeAppLocation(navItem) }
                />
              }) }
            </Tabs>
          </Toolbar>
        </AppBar>
      </HideHeader>
      <Toolbar />
    </React.Fragment>
  );
}

const mapStateToProps = state => {
  return { location: state.location}
}

export default withStyles(styles)(connect(mapStateToProps,actions)(Header));