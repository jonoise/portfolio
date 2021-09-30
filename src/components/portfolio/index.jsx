import Container from '../container'
import { Text, SimpleGrid } from '@chakra-ui/react'
import { MotionDivider, MotionVStack } from '../motion/components'
import { colors, projects } from '../../constants'
import Project from './project'

const Portfolio = () => {
  return (
    <Container justify="center" align="center" pt="10" pb="10">
      <MotionVStack
        w="full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 1.2 } }}
      >
        <Text color={colors.hoverWhite} fontWeight="bold">
          Projects
        </Text>
        <MotionDivider borderColor="#3838386B" w="50%" />
        <SimpleGrid
          w="full"
          columns={{ base: 1, lg: 2 }}
          spacing="5"
          pt="2"
          overflow="hidden"
          position="relative"
          color="white"
        >
          {projects.map((project) => (
            <Project key={project.id} project={project} />
          ))}
        </SimpleGrid>
      </MotionVStack>
    </Container>
  )
}

export default Portfolio
