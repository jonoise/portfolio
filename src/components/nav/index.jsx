import { Flex, Text } from '@chakra-ui/react'
import SocialLinks from './social'
import Container from '../container/index'
import { colors } from '../../constants'
const Navbar = () => {
  return (
    <Container
      minH="60px"
      borderBottom="1px solid #3838386B"
      align="center"
      justify="center"
      color={colors.hoverWhite}
    >
      <Flex w="full" h="100%" justify="space-between" align="center">
        <Text fontWeight="bold">amilkar.dev</Text>
        <SocialLinks />
      </Flex>
    </Container>
  )
}

export default Navbar
