import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, boolean } from '@storybook/addon-knobs'
import Button from '.'

const stories = storiesOf('1. Components/Button', module)

export const Default = () => (
  <Button disabled={boolean('disabled', false)}>
    {text('children', 'Just a Material Button')}
  </Button>
)

stories.add('Default', Default)

export default Default
