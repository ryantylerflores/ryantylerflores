import React from 'react';
import PropTypes from 'prop-types';
import Slide from '@material-ui/core/Slide';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';

function HideHeader(props) {
  const { children, window } = props;

  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideHeader.propTypes = {
  children: PropTypes.node.isRequired
};

export default HideHeader;