import { Flex } from '@chakra-ui/react'
import Container from '../container'
import { MotionDivider } from '../motion/components'
import Amilcar from './name'
import Technologies from './technologies'
const Header = () => {
  return (
    <Container justify='center' align='center'>
      <Amilcar />
      <Technologies />
    </Container>
  )
}

export default Header
