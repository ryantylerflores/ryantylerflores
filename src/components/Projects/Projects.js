import React from 'react';
import { connect } from 'react-redux';
import { 
  Typography
} from '@material-ui/core';

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
    return(
      <div className="projects">
        <div className="projects__background" />
        <div className="projects__container">
          <div className="projects-heading__container">
            <Typography variant='h1' className="heading-primary u-margin-top-none heading-primary--animated">
              <span className="heading-primary--main u-color-black">
                Projects
              </span>
            </Typography>
          </div>
          <ul className="projects__list projects__list--animated">
            { this.renderProject() }
          </ul>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { projects: state.projects.repositories }
}

export default connect(mapStateToProps,actions)(Projects);