import { Heading, Stack, Text, ListItem, UnorderedList } from '@chakra-ui/react'
import { posts } from '../../data/blogList'
import Container from '../container'
import Link from 'next/link'

const BlogList = () => {
  return (
    <Container>
      <Stack mb={50}>
        <Heading>Blog</Heading>
        <UnorderedList pl={10}>
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <a>
                <ListItem>{post.title}</ListItem>
              </a>
            </Link>
          ))}
        </UnorderedList>
      </Stack>
    </Container>
  )
}

export default BlogList
