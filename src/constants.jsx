import {
  SiReact,
  SiJavascript,
  SiDjango,
  SiPython,
  SiGithub,
  SiTwitter,
  SiKoFi,
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiMongodb,
} from 'react-icons/si'
import { FiMail } from 'react-icons/fi'

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
  // {
  //   id: 'kofi',
  //   name: 'Kofi',
  //   url: 'https://ko-fi.com/amilkar',
  //   icon: <SiKoFi />,
  // },
  {
    id: 'mail',
    name: 'Mail',
    url: 'mailto:amilkarms@outlook.com',
    icon: <FiMail />,
  },
]

export const technologies = [
  {
    id: 'javascript',
    name: 'Javascript',
    icon: <SiJavascript />,
  },
  {
    id: 'typescript',
    name: 'Typescript',
    icon: <SiTypescript />,
  },
  {
    id: 'react',
    name: 'React',
    icon: <SiReact />,
  },
  {
    id: 'next',
    name: 'NextJS',
    icon: <SiNextdotjs />,
  },
  {
    id: 'node',
    name: 'NodeJS',
    icon: <SiNodedotjs />,
  },
  {
    id: 'mongo',
    name: 'MongoDB',
    icon: <SiMongodb />,
  },
]

export const projects = [
  {
    id: '1',
    title: 'Creadores',
    type: 'Fullstack Application',
    description:
      'An application for creators. Similar to BigCartel. It provides creators in Costa Rica a platform to create their own online store and sell via SINPE Móvil workflow',
    image: '/images/1.png',
    github: 'https://github.com/soloamilkar',
    url: 'https://creadores.shop',
  },
  {
    id: '1',
    title: 'Los Junior',
    type: 'Fullstack Application',
    description:
      'My attempt to create a note-taking app like Notion. On this project I implemented Drag and Drop to-do list, markdown notes, grades tracker. Using React + Django Rest Framework.',
    image: '/images/2.png',
    github: 'https://github.com/soloamilkar/los-junior-frontend',
    url: 'https://losjunior.co',
  },
  {
    id: '3',
    title: 'Mein',
    type: 'Fullstack Application',
    description:
      "It's a digital menu for restaurants. Creating interactive tables with websockets. Using React, NextJS, SocketIO and Django Rest Framework for the backend.",
    image: '/images/3.png',
    github: 'https://github.com/soloamilkar/mein-nextjs',
    url: 'https://meincr.com',
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
