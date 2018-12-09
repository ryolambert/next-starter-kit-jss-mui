import '../css/global.css'
import { addDecorator, configure } from '@storybook/react'
import { withOptions } from '@storybook/addon-options'
import { withKnobs } from '@storybook/addon-knobs'
import React from 'react'
import { MuiThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import createCustomTheme from '../components/styles/createCustomTheme'

const components = require.context('../components', true, /\/stories\.js$/)
const containers = require.context('../containers', true, /\/stories\.js$/)

function loadStories() {
  components.keys().forEach(filename => components(filename))
  containers.keys().forEach(filename => containers(filename))
}

addDecorator(
  withOptions({
    name: 'NextJS Starter JSS Kit',
    sortStoriesByKind: true,
  }),
)

addDecorator(story => {
  const content = story()
  return (
    <MuiThemeProvider theme={createCustomTheme()}>
      <CssBaseline />
      {content}
    </MuiThemeProvider>
  )
})

addDecorator(withKnobs)

configure(loadStories, module)