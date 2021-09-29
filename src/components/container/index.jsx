import { Stack } from '@chakra-ui/react'

const Container = (props) => {
  return (
    <Stack w="full" px="96" {...props}>
      {props.children}
    </Stack>
  )
}

export default Container
