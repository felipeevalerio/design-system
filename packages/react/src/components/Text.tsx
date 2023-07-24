import { styled } from '../styles'
import { ElementType, ComponentProps } from 'react'

export const Text = styled('p', {
  fontFamily: '$default',
  lineHeight: '$base',
  margin: 0,
  color: '$gray100',

  variants: {
    size: {
      xxs: { fontSizes: '$xxs' },
      xs: { fontSizes: '$xs' },
      sm: { fontSizes: '$sm' },
      md: { fontSizes: '$md' },
      lg: { fontSizes: '$lg' },
      xl: { fontSizes: '$xl' },
      '2xl': { fontSizes: '$2xl' },
      '4xl': { fontSizes: '$4xl' },
      '5xl': { fontSizes: '$5xl' },
      '6xl': { fontSizes: '$6xl' },
      '7xl': { fontSizes: '$7xl' },
      '8xl': { fontSizes: '$8xl' },
      '9xl': { fontSizes: '$9xl' },
    },
  },

  defaultVariants: {
    size: 'md',
  },
})

export type TextProps = ComponentProps<typeof Text> & {
  as?: ElementType
}
