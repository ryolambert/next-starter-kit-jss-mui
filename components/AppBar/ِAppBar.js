import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import MuiAppBar from '@material-ui/core/AppBar'
import withStyles from '@material-ui/core/styles/withStyles'

export const styles = theme => ({
  root: {
    '& svg': {
      fill: '#ffffff',
    },
  },
})

const AppBar = props => {
  const { children, classes, className, ...other } = props

  return (
    <MuiAppBar
      className={classnames(classes.root, className)}
      position="sticky"
      {...other}
    >
      {children}
    </MuiAppBar>
  )
}

AppBar.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
}

AppBar.uiName = 'AppBar'

export default withStyles(styles)(AppBar)
