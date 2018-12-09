import React from 'react'
import { storiesOf } from '@storybook/react'
import Svg from '.'

const stories = storiesOf('1. Components/Svg', module)

export const Default = () => (
  <div>
    <Svg.SiteLogo width="200" />
  </div>
)

stories.add('Default', Default)

export default Default
