import { Flex, Text } from '@chakra-ui/react'
import SocialLinks from './social'

const Navbar = () => {
  return (
    <Flex
      w="full"
      minH="60px"
      borderBottom="1px solid #3838386B"
      px="50vh"
      color="white"
      align="center"
    >
      <Flex w="full" h="100%" justify="space-between" align="center">
        <Text>amilkar.dev</Text>
        <SocialLinks />
      </Flex>
    </Flex>
  )
}

export default Navbar
