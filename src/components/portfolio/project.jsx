import { Tooltip, Flex, Stack, Text } from '@chakra-ui/react'
import Image from 'next/image'
import { SiGithub } from 'react-icons/si'

const Project = ({ project }) => {
  return (
    <Flex
      as="a"
      href={project.url}
      target="_blank"
      h="220px"
      w="full"
      rounded="lg"
      overflow="hidden"
      opacity=".3"
      transition=".3s"
      _hover={{ opacity: '1' }}
    >
      <Flex rounded="lg">
        <Image src={project.image} width="400" height="1" alt="bg" />
      </Flex>
      <Stack position="absolute" px="5" py="4" maxW="50%" spacing="1">
        <Flex justify="space-between" align="center" zIndex="10">
          <Text fontSize="40px" fontWeight="extrabold">
            {project.title}
          </Text>
          <Tooltip
            label={'Repo'}
            placement="right"
            bg="#fff56d"
            color="#1a1a1a"
          >
            <Text
              fontSize="40px"
              fontWeight="extrabold"
              as="a"
              href={project.github}
              target="_blank"
              transition=".4s"
              _hover={{ color: '#fff56d' }}
            >
              {<SiGithub />}
            </Text>
          </Tooltip>
        </Flex>
        <Text fontSize="15px" fontWeight="bold">
          {project.type}
        </Text>
        <Text fontSize="13px" fontWeight="normal">
          {project.description}
        </Text>
      </Stack>
    </Flex>
  )
}

export default Project
