import { Tooltip, Text } from '@chakra-ui/react'
import {
  MotionBox,
  MotionDivider,
  MotionHStack,
  MotionVStack,
} from '../motion/components'
import { colors, technologies } from '../../constants'

const Technologies = () => {
  return (
    <MotionVStack
      w="full"
      justify="center"
      pt="2"
      color={colors.hoverWhite}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.8 } }}
    >
      <Text>Stack</Text>
      <MotionDivider
        borderColor="#3838386B"
        w="50%"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 1.1 } }}
      />
      <MotionHStack spacing="10" pt="2">
        {technologies.map((tech) => (
          <MotionBox key={tech.id} whileHover={{ scale: 1.04 }}>
            <Tooltip label={tech.name}>
              <Text
                fontSize="60px"
                transition=".3s"
                _hover={{ color: 'white' }}
              >
                {tech.icon}
              </Text>
            </Tooltip>
          </MotionBox>
        ))}
      </MotionHStack>
    </MotionVStack>
  )
}

export default Technologies
