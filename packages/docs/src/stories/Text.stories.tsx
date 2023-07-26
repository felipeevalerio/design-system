import type { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from '@ignite-ui/react'

export default {
  title: 'Typography/Text',
  tags: ['autodocs'],
  component: Text,
  args: {
    children:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium ab at sunt unde excepturi sit libero! Voluptas eos sapiente quasi laudantium praesentium sequi, est nostrum placeat, distinctio eius ab sit?',
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong',
  },
}
