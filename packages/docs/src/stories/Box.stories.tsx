import type { Meta, StoryObj } from '@storybook/react'
import { Box, BoxProps, Text } from '@felipe-ignite-ui-system/react'

export default {
  title: 'Surfaces/Box',
  tags: ['autodocs'],
  component: Box,
  args: {
    children: <Text>Testando elemento Box</Text>,
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
