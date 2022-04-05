import { Heading, Stack, Text, ListItem, UnorderedList } from '@chakra-ui/react'
import { posts } from '../../data/blogList'
import Container from '../container'
import Link from 'next/link'
import { Card } from '@nextui-org/react'
const BlogList = () => {
  const emojis = [
    '✨',
    '🚀',
    '🎉',
    '🤍',
    '😃',
    '👌',
    '🌟',
    '🏆',
    '👀',
    '🧨',
    '⌛️',
  ]

  return (
    <Container>
      <Stack mb={50}>
        <Heading>Articles: </Heading>
        {posts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`}>
            <a>
              <Card
                bordered
                shadow={false}
                hoverable
                css={{ w: 'full', bg: '#1a1a1a' }}
              >
                <p>
                  {emojis[Math.floor(Math.random() * emojis.length - 1)]}{' '}
                  {post.title}
                </p>
              </Card>
            </a>
          </Link>
        ))}
      </Stack>
    </Container>
  )
}

export default BlogList
