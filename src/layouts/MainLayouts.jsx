import { Container } from "@mui/material"
import PropTypes from "prop-types"

const MainLayouts = ({ children }) => {
  return (
    <main>
      <Container>{children}</Container>
    </main>
  )
}

MainLayouts.propTypes = {
  children: PropTypes.node.isRequired,
}

export default MainLayouts
