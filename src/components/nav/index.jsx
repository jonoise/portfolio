import { Flex, Text } from '@chakra-ui/react'
import SocialLinks from './social'
import Container from '../container/index'
import { colors } from '../../constants'
import { MotionText } from '../motion/components'
import Link from 'next/link'
import { SiReact } from 'react-icons/si'
const Navbar = () => {
  return (
    <Container
      minH='60px'
      borderBottom='1px solid #3838386B'
      align='center'
      justify='center'
      color={colors.hoverWhite}
    >
      <Flex w='full' h='100%' justify='space-between' align='center'>
        <MotionText
          fontWeight='bold'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <Link href={'/'}>
            <a>
              <Text cursor={'pointer'}>
                <SiReact />
              </Text>
            </a>
          </Link>
        </MotionText>
        <SocialLinks />
      </Flex>
    </Container>
  )
}

export default Navbar
