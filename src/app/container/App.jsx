import { CssBaseline, ThemeProvider } from "@mui/material"
import { default as AppComponent } from "../App/App"
import { useConsumTheme } from "src/theme/utils/useCustomTheme"
// import { useConsumTheme } from "../../theme/utils/useCustomTheme"

export function App() {
  const theme = useConsumTheme()
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppComponent />
    </ThemeProvider>
  )
}
