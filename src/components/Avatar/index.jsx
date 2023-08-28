import { Avatar as MuiAvatar } from "@mui/material"
import PropTypes from "prop-types"

const Avatar = ({ src, alt, sx }) => {
  return (
    <MuiAvatar
      src={src}
      alt={alt}
      sx={{
        ...sx,
      }}
    />
  )
}

Avatar.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  sx: PropTypes.any,
}

export default Avatar
