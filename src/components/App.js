import React from 'react';
import { connect } from 'react-redux';

import Header from './Header/Header';
import Home from './Home/Home';
import Projects from './Projects/Projects';
import About from './About/About';
import Contact from './Contact/Contact';
import ClosingContent from './ClosingContent/ClosingContent';
import Footer from './Footer/Footer';

// import './App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let currentComponent; 

    switch(this.props.location.current) {
      case 'HOME':
        currentComponent = <Home />
        break;
      case 'PROJECTS':
        currentComponent = <Projects />
        break;
      case 'ABOUT':
        currentComponent = <About />
        break;
      case 'CONTACT':
        currentComponent = <Contact />
        break;
    }

    return (
      <React.Fragment>
        <Header />
        { currentComponent }
        {/* <ClosingContent /> */}
        {/* <Footer /> */}
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => {
  return { location: state.location }
}

export default connect(mapStateToProps)(App);
