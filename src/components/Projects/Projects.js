import React from 'react';
import { connect } from 'react-redux';
// import axios from 'axios';
import { 
  Typography
} from '@material-ui/core';
// import UnderConstruction from '../UnderConstruction/UnderConstruction';

import * as actions from '../../actions/project-actions';

class Projects extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchRepos();
  }

  renderProject = () => {
    if(!this.props.projects) {
      return <li>Loading...</li>
    } else {

      return this.props.projects.map((project,index) => {
        return (
          <li key={index}>
            <a href={`${project.html_url}`} className="projects__link" target="_blank">
              {project.name}
            </a>
          </li>
        )
      })
    }
  }  

  render() {
    // if(!this.props.projects) {
    //   return <div>... Loading</div>
    // } else {
      return(
        <div className="projects">
          <div className="projects__background" />
          <div className="projects__container">
            <Typography variant='h1' className="heading-primary u-margin-top-none heading-primary--animated">
              <span className="heading-primary--main">
                Projects
              </span>
            </Typography>
            <ul className="projects__list projects__list--animated">
              { this.renderProject() }
            </ul>
          </div>
        </div>
      )
    }
  // }
}

const mapStateToProps = state => {
  return { projects: state.projects.repositories }
}

export default connect(mapStateToProps,actions)(Projects);