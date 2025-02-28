import { Meta, StoryObj } from '@storybook/react'
import Highlight from '.'

export default {
  title: 'Highlight',
  component: Highlight,
  args: {
    title: 'is Back',
    subtitle: 'subtitle',
    buttonLabel: 'buy now',
    buttonLink: '/rdr2'
  }
} as Meta

export const Default: StoryObj = {}
