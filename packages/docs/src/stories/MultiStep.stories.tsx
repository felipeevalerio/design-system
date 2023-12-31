import type { Meta, StoryObj } from '@storybook/react'
import { Box, MultiStep, MultiStepProps } from '@felipe-ignite-ui-system/react'

export default {
  title: 'Form/Multi Step ',
  component: MultiStep,
  tags: ['autodocs'],
  args: {
    currentStep: 1,
    size: 4,
  },
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'column', gap: 12 }}
        >
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<MultiStepProps>

export const Primary: StoryObj<MultiStepProps> = {}

export const Full: StoryObj<MultiStepProps> = {
  args: {
    currentStep: 4,
  },
}
