import { createTheme } from "@mui/material"
import { globalTheme } from "./theme"
import { useAppSelector } from "../../store"
// import { componentThemes } from './components/componentThemes'

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
    // components: componentThemes(theme),
    shadows: globalTheme.shadows,
  })
}
