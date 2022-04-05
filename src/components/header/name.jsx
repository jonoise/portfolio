import { Text } from '@chakra-ui/react'
import { colors } from '../../constants'
import { MotionFlex, MotionDivider } from '../motion/components'

const Amilcar = () => {
  return (
    <>
      <MotionFlex
        direction='column'
        justify='center'
        align='center'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.5 } }}
        fontFamily='Montserrat'
        color={colors.hoverWhite}
      >
        <Text fontSize='40px' fontWeight='900'>
          Amilcar Munoz
        </Text>
        <MotionDivider
          borderColor='#3838386B'
          w={{ base: '50%', lg: '70%', xl: '100%' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 1.1 } }}
        />
        <Text fontSize='14px' fontWeight='700'>
          Web Developer
        </Text>
      </MotionFlex>
    </>
  )
}

export default Amilcar
