import { addDecorator, configure } from '@storybook/react'
import { withOptions } from '@storybook/addon-options'
import { withKnobs } from '@storybook/addon-knobs'

const components = require.context('../components', true, /\/stories\.js$/)

function loadStories() {
  components.keys().forEach(filename => components(filename))
}

addDecorator(
  withOptions({
    name: 'NextJS Starter JSS Kit',
    sortStoriesByKind: true,
  }),
)

addDecorator(withKnobs)

configure(loadStories, module)