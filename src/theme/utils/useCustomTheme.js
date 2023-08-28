import { createTheme } from "@mui/material"
import { globalTheme } from "./theme"
import { useAppSelector } from "@dispatch/index"

import "@fontsource/roboto"
import "@fontsource/poppins"

export const useConsumTheme = () => {
  const theme = useAppSelector((state) => state.theme)

  return createTheme({
    palette: {
      mode: theme,
      background: {
        default: theme === "light" ? "#FAFAFA" : "#182747",
      },
      ...globalTheme.palette,
    },
    typography: {
      ...globalTheme.typography,
    },
    breakpoints: {
      ...globalTheme.breakpoints,
    },
  })
}
