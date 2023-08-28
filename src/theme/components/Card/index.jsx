// import { Typography } from "@mui/material"
import PropTypes from "prop-types"
import { CardAction, CardContent, Card as CardElement, CardHeader } from "./element"
import { Button } from "@mui/material"

const Card = ({ children, variant, sx, title, action, onClick }) => {
  return (
    <CardElement variant={variant} sx={{ ...sx }}>
      <CardContent>
        {title && <CardHeader>{title}</CardHeader>}
        {children}
      </CardContent>
      {action && (
        <CardAction>
          <Button variant="contained" onClick={(e) => action && onClick(e)}>
            Button
          </Button>
        </CardAction>
      )}
    </CardElement>
  )
}

Card.defaultProps = {
  variant: "elevation",
}
Card.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.oneOf(["elevation", "outlined"]),
  title: PropTypes.string,
  action: PropTypes.bool,
  onClick: PropTypes.func,
  sx: PropTypes.any,
}

export default Card
