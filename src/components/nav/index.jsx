import { Flex, Text } from '@chakra-ui/react'
import SocialLinks from './social'
import Container from '../container/index'
const Navbar = () => {
  return (
    <Container
      minH="60px"
      borderBottom="1px solid #3838386B"
      align="center"
      justify="center"
    >
      <Flex w="full" h="100%" justify="space-between" align="center">
        <Text color="white">amilkar.dev</Text>
        <SocialLinks />
      </Flex>
    </Container>
  )
}

export default Navbar
