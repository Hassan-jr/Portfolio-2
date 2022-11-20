import { images } from '../constants';

const abouts = [
  {
    title: 'Software Engineer',
    imgUrl: images.about03,
    description: 'I am a well-qualified Software Engineer familiar with wide range of programming utilities and languages',
  },
  {
    title: 'Frontend Developer',
    imgUrl: images.about01,
    description: 'As a frontend developer, My interest is to create beautiful and performant products with delightful user experiences',
  },
  {
    title: 'Backend Developer',
    imgUrl: images.about02,
    description: 'As a backend developer I am skilled enough to understand, plan, develop and test the server-side/business logic of any application',
  },
  {
    title: 'Cross-platform Developer',
    imgUrl: images.about04,
    description: 'I am a cross-platform developer knowledgeable of both both Android and iOS mobile application development',
  },
];

const skills = [
  {
    name: 'Javascript',
    bgColor: '#EEEEEE',
    icon: images.javascript,
  },
  {
    name: 'Css',
    bgColor: '#F8FFDB',
    icon: images.css,
  },
  {
    name: 'HTML',
    bgColor: '#FAF7F0',
    icon: images.html,
  },
  {
    name: 'React.js',
    bgColor: '#DFE8CC',
    icon: images.react,
  },
  {
    name: 'Redux',
    bgColor: '#FFE6F7',
    icon: images.redux,
  },
  {
    name: 'React Native',
    bgColor: '#EEF1FF',
    icon: images.flutter,
  },
  {
    name: 'Node.js',
    bgColor: '#F9F9F9',
    icon: images.node,
  },
  {
    name: 'MongoDB',
    bgColor: '#DAEAF1',
    icon: images.javascript,
  },
  {
    name: 'MongoDB',
    bgColor: '#DFE8CC',
    icon: images.javascript,
  },
];

const experiences = [
  {
    year: 2021,
    works: [
      {
        name: 'Software Engineer',
        company: 'Upwork',
        desc: 'I a verified freelance software,full stack and cross platform developer at upwork',
      },
      {
        name: 'Software Engineer',
        company: 'Freelancer',
        desc: 'I a verified freelance software,full stack and cross platform developer at freelancer',
      },
    ],
  },
];

const testimonials = [
  {
    imgurl: images.pro1,
    name: 'Zakaria',
    feedback: 'Without doubt one of the most talented programmers out there.  I always go back to Hassan when I am out of my depth and he never failed to deliver what I ask for.   Smart, trustworthy and professional.You would not be disappointed.',
    company: 'Upwork',
  },
  {
    imgurl: images.pro2,
    name: 'Jhon Oyu',
    feedback: 'Hassan is a great help, managing a very out of date website. Everything we ask him to do is done quickly and efficiently, we would be lost without him.',
    company: 'Upwork',
  },
  {
    imgurl: images.pro3,
    name: 'Yussuf Jama',
    feedback: 'Very helpful when building my website, I now have my ecommerce store built by him',
    company: 'Upwork',
  },
];

const brands = [
  {
    _id: 45,
    imgUrl: images.about01,
    name: 'Brand name',
  },
];

const works = [
  {
    imgUrl: images.dashboard1,
    name: 'Admin Dashboard',
    projectLink: 'https://github.com/Hassan-jr/Admin-Dashboard',
    codeLink: 'https://github.com/Hassan-jr/Admin-Dashboard',
    title: 'Admin Dashboard',
    description: '',
    tags: ['Frontend'],
  },
  {
    imgUrl: images.blog,
    name: 'Blog Website',
    projectLink: 'https://blog.hassanjr.com/',
    codeLink: 'https://github.com/Hassan-jr/Blog',
    title: 'Blog Website',
    description: '',
    tags: ['Backend', 'Frontend'],
  },
  {
    imgUrl: images.caske3,
    name: 'Real Estate Project',
    projectLink: 'https://blog.hassanjr.com/',
    codeLink: 'https://github.com/Hassan-jr/Blog',
    title: 'Real Estate Project',
    description: '',
    tags: ['Frontend'],
  },
  {
    imgUrl: images.amazon,
    name: 'Responsive Amazon-clone Website',
    projectLink: 'http://amazonbyhassan.herokuapp.com/',
    codeLink: 'https://github.com/Hassan-jr/amazon-clone-website',
    title: 'Responsive Amazon-clone Website',
    description: '',
    tags: ['Backend', 'Frontend'],
  },
  {
    imgUrl: images.noma,
    name: 'Document Manager App',
    projectLink: 'http://amazonbyhassan.herokuapp.com/',
    codeLink: 'https://github.com/Hassan-jr/amazon-clone-website',
    title: 'Document Manager App',
    description: '',
    tags: ['Mobile App'],
  },
];

export { abouts, skills, experiences, testimonials, brands, works };
