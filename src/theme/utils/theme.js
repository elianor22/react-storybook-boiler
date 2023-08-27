import { typography } from "./typography"
import { colorVariant } from "./colors"

export const globalTheme = {
  palette: {
    ...colorVariant,
  },
  typography: {
    ...typography,
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 768,
      md: 992,
      lg: 1200,
      xl: 1680,
    },
  },
}
