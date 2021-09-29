import { Tooltip, HStack, Box } from '@chakra-ui/react'
import { colors, socialLinks } from '../../constants'
import { motion } from 'framer-motion'

const MotionHStack = motion(HStack)
const MotionChildren = motion(Box)

const SocialLinks = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.13,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: -30 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <MotionHStack
      spacing="5"
      variants={container}
      initial="hidden"
      animate="show"
    >
      {socialLinks.map((link) => (
        <MotionChildren key={link.id} variants={item}>
          <Tooltip
            label={link.name}
            colorScheme="cyan"
            hasArrow
            bg="#3838386B"
            fontSize="10px"
          >
            <Box
              as="a"
              href={link.url}
              target={'_blank'}
              size="sm"
              color="white"
              rounded="full"
              cursor="pointer"
              transition=".3s"
              _hover={{ bg: 'none', color: colors.hoverWhite }}
            >
              {link.icon}
            </Box>
          </Tooltip>
        </MotionChildren>
      ))}
    </MotionHStack>
  )
}

export default SocialLinks
