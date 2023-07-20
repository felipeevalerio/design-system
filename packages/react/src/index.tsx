import { ComponentProps } from '@stitches/react'
import { styled } from './styles'

export const Button = styled('button', {
  fontFamily: '$default',
  backgroundColor: '$ignite500',
  border: 0,

  variants: {
    size: {
      small: {
        padding: '$1 $2',
        fontSize: 14,
      },
      big: {
        padding: '$4 $6',
        fontSize: 16,
      },
    },
  },
  defaultVariants: {
    size: 'small',
  },
})

export type ButtonProps = ComponentProps<typeof Button>
