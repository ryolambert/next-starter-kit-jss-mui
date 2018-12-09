import React from 'react'
import { storiesOf } from '@storybook/react'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import withStyles from '@material-ui/core/styles/withStyles'
import Svg from '../Svg'
import Link from '../Link'
import AppBar from '.'

const stories = storiesOf('1. Components/AppBar', module)
const styles = theme => ({
  root: {
    flexGrow: 1,
    '& svg': {
      fill: '#ffffff',
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
export const Default = ({ classes }) => (
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
)

const StyledAppBar = withStyles(styles)(Default)

stories.add('Default', () => <StyledAppBar />)

export default StyledAppBar
