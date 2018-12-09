import React from 'react';
import PropTypes from 'prop-types';

import SiteLogo from './SiteLogo';

const Svg = ({ children, innerRef, ...rest }) => (
  <svg viewBox="0 0 100 100" {...rest} ref={innerRef}>
    {children}
  </svg>
);

Svg.propTypes = {
  innerRef: PropTypes.func,
  children: PropTypes.node.isRequired
};

Svg.defaultProps = {
  innerRef: () => {}
};

Svg.SiteLogo = SiteLogo;

export default Svg;