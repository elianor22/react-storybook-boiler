import styled from "@emotion/styled"
import { Box, Paper, Typography } from "@mui/material"
import { colorVariant } from "src/theme/utils/colors"

export const Card = styled(Paper)(({ theme }) => ({
  borderRadius: "12px",
  boxShadow: "0px 2px 8px -3px rgb(0 0 0 / 30%)",
  backgroundColor: colorVariant["background.1"][theme.palette.mode],
}))

export const CardContent = styled(Box)({
  padding: "1rem",
  fontFamily:'Poppins'
})

export const CardAction = styled(Box)({
    display:'flex',
    justifyContent:'flex-end',
    padding:'8px 1rem'
})

export const CardHeader = styled(Typography)({
  fontSize: "24px",
  marginBottom: "8px",
})
