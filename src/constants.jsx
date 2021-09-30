import {
  SiReact,
  SiJavascript,
  SiDjango,
  SiPython,
  SiGithub,
  SiTwitter,
  SiKoFi,
} from 'react-icons/si'

// STYLE COLORS
export const colors = {
  hoverWhite: '#f4f4f49d',
  purple: '#8F14FF',
  contrast: '#ffe77b',
}

export const socialLinks = [
  {
    id: 'github',
    name: 'Github',
    url: 'https://github.com/soloamilkar',
    icon: <SiGithub />,
  },
  {
    id: 'twitter',
    name: 'Twitter',
    url: 'https://twitter.com/soloamilkar',
    icon: <SiTwitter />,
  },
  {
    id: 'kofi',
    name: 'Kofi',
    url: 'https://ko-fi.com/amilkar',
    icon: <SiKoFi />,
  },
]

export const technologies = [
  {
    id: 'javascript',
    name: 'Javascript',
    icon: <SiJavascript />,
  },
  {
    id: 'react',
    name: 'React',
    icon: <SiReact />,
  },
  {
    id: 'python',
    name: 'Python',
    icon: <SiPython />,
  },
  {
    id: 'django',
    name: 'Django',
    icon: <SiDjango />,
  },
]

export const projects = [
  {
    id: '1',
    title: 'Los Junior',
    type: 'Fullstack Application',
    description:
      'My attempt to create a note-taking app like Notion. On this project I implemented Drag and Drop to-do list, markdown notes, grades tracker. Using React + Django Rest Framework.',
    image: '/images/1.png',
    github: 'https://github.com/soloamilkar/los-junior-frontend',
    url: 'https://losjunior.co',
  },
  {
    id: '2',
    title: 'Mein',
    type: 'Fullstack Application',
    description:
      'This is my first "SaaS" application. It\'s a digital menu for restaurants. Creating interactive tables with websockets. Using React, NextJS, SocketIO and Django Rest Framework for the backend.',
    image: '/images/2.png',
    github: 'https://github.com/soloamilkar/mein-nextjs',
    url: 'https://meincr.com',
  },
  {
    id: '3',
    title: 'One Radio',
    type: 'Client Application',
    description:
      'Radio stream from a third party URL broadcasting Lo-Fi 24/7. Was made with React and NextJS. The idea is to implement websockets to display how many users there are in the streaming and even a chat.',
    image: '/images/3.png',
    github: 'https://github.com/soloamilkar/radio',
    url: 'https://radio-one.vercel.app',
  },
  {
    id: '4',
    title: 'Semiótica',
    type: 'Client Application',
    description:
      'Small prototype for a psychology podcast in Costa Rica. Custom design with custom images touched with Photoshop to match the flow of the page.',
    image: '/images/4.png',
    github:
      'https://github.com/soloamilkar/frontendmentor-challenges/tree/main/semiotica-podcast',
    url: 'https://semiotica.vercel.app/',
  },
]
