import type { Meta, StoryObj } from '@storybook/react'
import {
  Box,
  Text,
  TextInput,
  TextInputProps,
} from '@felipe-ignite-ui-system/react'

export default {
  title: 'Form/Text Input',
  component: TextInput,
  args: {},
  tags: ['autodocs'],
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'column', gap: 12 }}
        >
          <Text size="sm">Email Address</Text>
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<TextInputProps>

export const Primary: StoryObj<TextInputProps> = {
  args: {
    placeholder: 'Type your name',
  },
}
export const WithPrefix: StoryObj<TextInputProps> = {
  args: {
    prefix: 'cal.com/',
    placeholder: 'your-username',
  },
}

export const Disabled: StoryObj<TextInputProps> = {
  args: {
    prefix: 'cal.com/',
    disabled: true,
  },
}
