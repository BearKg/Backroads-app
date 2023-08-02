import img1 from './img/tour-1.jpeg'
import img2 from './img/tour-2.jpeg'
import img3 from './img/tour-3.jpeg'
import img4 from './img/tour-4.jpeg'


export const pageLinks = [
  { id: 1, href: '#home', content: 'home' },
  { id: 2, href: '#about', content: 'about' },
  { id: 3, href: '#services', content: 'services' },
  { id: 4, href: '#featured', content: 'featured' },
  { id: 5, href: '#gallery', content: 'gallery' },
]

export const socialLinks = [
  { id: 1, href: 'https://www.facebook.com', icon: 'fab fa-facebook' },
  { id: 2, href: 'https://twitter.com', icon: 'fab fa-twitter' },
  { id: 3, href: 'https://www.squarespace.com', icon: 'fab fa-squarespace' },
]

export const services = [
  {
    id: 1,
    icon: 'fas fa-wallet',
    title: 'saving money',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.',
  },
  {
    id: 2,
    icon: 'fas fa-tree',
    title: 'endless hiking',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.',
  },
  {
    id: 3,
    icon: 'fas fa-socks',
    title: 'amazing comfort',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.',
  },
]

export const tours = [
  {
    id: 1,
    img: img1,
    date: 'August 26th, 2020',
    title: 'Tibet Adventure',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    location: 'China',
    duration: '6 days',
    cost: 'From $2100',
  },
  {
    id: 2,
    img: img2,
    date: 'October 1th, 2020',
    title: 'Best Of Java',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    location: 'Indonesia',
    duration: '11 Days',
    cost: 'From $1400',
  },
  {
    id: 3,
    img: img3,
    date: 'September 15th, 2020',
    title: 'Explore Hong Kong',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    location: 'Hong Kong',
    duration: '8 Days',
    cost: 'From $5000',
  },
  {
    id: 4,
    img: img4,
    date: 'December 5th, 2019',
    title: 'Kenya Highlights',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    location: 'Kenya',
    duration: '20 Days',
    cost: 'From $3300',
  },
]