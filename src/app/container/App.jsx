import { CssBaseline, ThemeProvider, createTheme } from "@mui/material"
import { default as AppComponent } from "../App/App"
// import { useConsumTheme } from "../../theme/utils/useCustomTheme"

export function App() {
  const theme = createTheme()
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppComponent />
    </ThemeProvider>
  )
}
