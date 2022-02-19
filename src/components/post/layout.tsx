import { Box } from '@chakra-ui/react'
import Container from '../container'
import Navbar from '../nav'
import { colors } from '../../constants'
export const PostLayout = ({ children }) => {
  return (
    <Box bg={'#1a1a1a'}>
      <Navbar />
      <Container>{children}</Container>
    </Box>
  )
}
