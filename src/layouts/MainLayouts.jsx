import styled from "@emotion/styled"
import PropTypes from "prop-types"

const Main = styled("main")({
  display: "flex",
  height: "100vh",
  width: "100%",
  flexDirection: "column",
})

const MainLayouts = ({ children }) => {
  return <Main>{children}</Main>
}

MainLayouts.propTypes = {
  children: PropTypes.node.isRequired,
}

export default MainLayouts
