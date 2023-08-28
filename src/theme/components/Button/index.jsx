import { Button as MuiButton } from "@mui/material"
import PropTypes from "prop-types"

const Button = ({ variant }) => {
  return <MuiButton variant={variant}>my MuiButton</MuiButton>
}

Button.defaultProps={
  variant:'contained'
}
Button.propTypes = {
  variant: PropTypes.oneOf(["contained", "outlined"]),
}

export default Button
