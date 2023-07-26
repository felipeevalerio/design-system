import { styled } from '../styles'
import { ElementType, ComponentProps } from 'react'

export const Heading = styled('h2', {
  fontFamily: '$default',
  lineHeight: '$shorter',
  margin: 0,
  color: '$gray100',

  variants: {
    size: {
      sm: { fontSizes: '$xl' },
      md: { fontSizes: '$2xl' },
      lg: { fontSizes: '$4xl' },
      '2xl': { fontSizes: '$5xl' },
      '3xl': { fontSizes: '$6xl' },
      '4xl': { fontSizes: '$7xl' },
      '5xl': { fontSizes: '$8xl' },
      '6xl': { fontSizes: '$9xl' },
    },
  },

  defaultVariants: {
    size: 'md',
  },
})

export type HeadingProps = ComponentProps<typeof Heading> & {
  as?: ElementType
}

Heading.displayName = 'Heading'
