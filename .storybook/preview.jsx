/** @type { import('@storybook/react').Preview } */

import { CssBaseline, ThemeProvider, createTheme } from "@mui/material"
import { themes } from "@storybook/theming"
import { useDarkMode } from "storybook-dark-mode"
import { globalTheme } from "../src/theme/utils/theme"
import "@fontsource/roboto"
import "@fontsource/poppins"
export const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    docs: {
      theme: themes.dark,
    },
    backgrounds: {
      disable: true,
    },

    darkMode: {
      dark: {
        ...themes.dark,
        appContentBg: "#030E15",
      },
      light: {
        ...themes.normal,
        appContentBg: "#FAFAFA",
      },
    },
  },
}

const withMuiTheme = (Story, { args }) => {
  const darkMode = useDarkMode() || args.theme === "dark"

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
      ...globalTheme.palette,
    },
    typography: {
      ...globalTheme.typography,
    },
    breakpoints: {
      ...globalTheme.breakpoints,
    },
  })

  return (
    <ThemeProvider theme={theme}>
      {/* <CssBaseline /> */}
      <Story />
    </ThemeProvider>
  )
}

export const decorators = [withMuiTheme]
