import { v4 as uuid } from 'uuid';

export default [
  {
    id: uuid(),
    createdAt: '27/03/2019',
    description:
      'Dropbox is a file hosting service that offers cloud storage, file synchronization, a personal cloud.',
    media: '/static/images/products/product_1.jpg',
    title: 'Dropbox',
    totalDownloads: '594',
    user: {
      name: 'Dropbox',
      avatar: {
        color: '#4caf50',
        letter: 'D'
      }
    }
  },
  {
    id: uuid(),
    createdAt: '31/03/2019',
    description:
      'Medium is an online publishing platform developed by Evan Williams, and launched in August 2012.',
    media: '/static/images/products/product_2.jpg',
    title: 'Medium Corporation',
    totalDownloads: '625',
    user: {
      name: 'Medium Corporation',
      avatar: {
        color: '#cddc39',
        letter: 'M'
      }
    }
  },
  {
    id: uuid(),
    createdAt: '03/04/2019',
    description:
      'Slack is a cloud-based set of team collaboration tools and services, founded by Stewart Butterfield.',
    media: '/static/images/products/product_3.jpg',
    title: 'Slack',
    totalDownloads: '857',
    user: {
      name: 'Slack',
      avatar: {
        color: '#ffc107',
        letter: 'S'
      }
    }
  },
  {
    id: uuid(),
    createdAt: '04/04/2019',
    description:
      'Lyft is an on-demand transportation company based in San Francisco, California.',
    media: '/static/images/products/product_4.jpg',
    title: 'Lyft',
    totalDownloads: '406',
    user: {
      name: 'Lyft',
      avatar: {
        color: '#f44336',
        letter: 'L'
      }
    }
  },
  {
    id: uuid(),
    createdAt: '04/04/2019',
    description:
      'GitHub is a web-based hosting service for version control of code using Git.',
    media: '/static/images/products/product_5.png',
    title: 'GitHub',
    totalDownloads: '835',
    user: {
      name: 'GitHub',
      avatar: {
        color: '#9c27b0',
        letter: 'G'
      }
    }
  },
  {
    id: uuid(),
    createdAt: '04/04/2019',
    description:
      'Squarespace provides software as a service for website building and hosting. Headquartered in NYC.',
    media: '/static/images/products/product_6.png',
    title: 'Squarespace',
    totalDownloads: '835',
    user: {
      name: 'Squarespace',
      avatar: {
        color: '#f44336',
        letter: 'S'
      }
    }
  }
];
