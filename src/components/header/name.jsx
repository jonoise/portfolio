import { Text } from '@chakra-ui/react'
import { colors } from '../../constants'
import { MotionFlex, MotionDivider } from '../motion/components'

const Amilkar = () => {
  return (
    <>
      <MotionFlex
        direction="column"
        justify="center"
        align="center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.5 } }}
        fontFamily="Montserrat"
        color={colors.hoverWhite}
      >
        <Text fontSize="40px" fontWeight="900">
          Amilkar Munoz
        </Text>
        <Text fontSize="14px" fontWeight="700">
          Developer
        </Text>
      </MotionFlex>
    </>
  )
}

export default Amilkar
