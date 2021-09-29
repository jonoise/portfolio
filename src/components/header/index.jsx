import { Flex } from '@chakra-ui/react'
import Container from '../container'
import { MotionDivider } from '../motion/components'
import Amilkar from './name'
import Technologies from './technologies'
const Header = () => {
  return (
    <Container justify="center" align="center">
      <Amilkar />
      <MotionDivider
        borderColor="#3838386B"
        w={{ base: '50%', lg: '70%', xl: '100%' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 1.1 } }}
      />
      <Technologies />
    </Container>
  )
}

export default Header
