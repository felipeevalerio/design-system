import type { Meta, StoryObj } from '@storybook/react'
import { Avatar, AvatarProps } from '@felipe-ignite-ui-system/react'

export default {
  title: 'Data display/Avatar',
  tags: ['autodocs'],
  component: Avatar,
  args: {
    src: 'https://github.com/felipeevalerio.png',
    alt: 'Felipe Valério',
  },
  argTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
