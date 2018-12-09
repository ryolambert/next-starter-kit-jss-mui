import React from 'react'
import PropTypes from 'prop-types'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import withStyles from '@material-ui/core/styles/withStyles'
import AppBar from '../../components/AppBar'
import Svg from '../../components/Svg'
import Link from '../../components/Link'

/**
 * Purpose:
 *
 * Wrapper for UI components that are shared between routes
 * e.g. a Header or a Footer
 */
export const styles = () => ({
  root: {
    flexGrow: 1,
    '& main': {
      maxWidth: 900,
      margin: '0 auto',
    },
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
})
const Page = ({ children, classes }) => (
  <div className={classes.root}>
    <AppBar>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="Menu"
          className={classes.menuButton}
        >
          <MenuIcon />
        </IconButton>
        <div className={classes.grow}>
          <Link href="/">
            <Svg.SiteLogo width="100" height="60px" />
          </Link>
        </div>
        <IconButton color="inherit" aria-label="Menu">
          <ShoppingBasketIcon />
        </IconButton>
      </Toolbar>
    </AppBar>

    <main>{children}</main>
  </div>
)

Page.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.object.isRequired,
}

Page.uiName = 'Page'

export default withStyles(styles)(Page)
