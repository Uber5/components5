import React from 'react'
import { Box } from 'rebass'
export const Dummy = ({ children, ...props }) => <Box {...props}>
  {children}
</Box>
