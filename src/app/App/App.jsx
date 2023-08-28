import Avatar from "@components/Avatar"
import MainLayouts from "@layouts/MainLayouts"
import { Container, Typography } from "@mui/material"
import SwitchTheme from "@themeComponents/SwitchTheme"

const App = () => {
  return <MainLayouts>
    <Container>
      <Typography variant="h1">May app</Typography>
      <Avatar/>
      <SwitchTheme/>
    </Container>
  </MainLayouts>
}

export default App
