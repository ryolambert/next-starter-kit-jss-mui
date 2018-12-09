import React from 'react'
import PropTypes from 'prop-types'
import FrameworkLink from 'next/link'

/**
 * Purpose:
 *
 * Wrapper for handling minor routing logic
 */

const Link = ({ className, children, href, ...rest }) => (
  <FrameworkLink {...rest} href={href} passHref={Boolean(href)}>
    <a className={className}>{children}</a>
  </FrameworkLink>
)

Link.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  href: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      pathname: PropTypes.string,
      query: PropTypes.object,
    }),
  ]),
}

Link.defaultProps = {
  className: '',
  children: null,
  href: '',
}

export default Link
