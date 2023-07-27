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
    name: 'MUI 5',
    bgColor: '#FAF7F12',
    icon: images.mu5,
  },
  {
    name: 'Tailwindcss',
    bgColor: '#EEEEEE',
    icon: images.tailwind,
  },
  {
    name: 'Next Js',
    bgColor: '#FAF7F0',
    icon: images.next,
  },

  {
    name: 'React.js',
    bgColor: '#EEEEEE',
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
    icon: images.react,
  },
  {
    name: 'Node.js',
    bgColor: '#F9F9F9',
    icon: images.node,
  },
  {
    name: 'Express',
    bgColor: '#F2F2F2',
    icon: images.express,
  },
  {
    name: 'MongoDB',
    bgColor: '#F7F7F7',
    icon: images.MongoDB,
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
    imgurl: images.pro5,
    name: 'Joachim Stokke',
    feedback: 'I enjoyed working with Abdiladif and will probably work with him again in the future and would recommend him to anyone. Very good communication and always available and committed to doing a great job."',
    company: 'Upwork',
  },
  {
    imgurl: images.pro5,
    name: 'Milan Kozlovacki',
    feedback: '"Great job, delivered in no time. It was pleasure working with Abdiladif. Highly recommend!"',
    company: 'Upwork',
  },
  {
    imgurl: images.pro5,
    name: 'Raj Shah',
    feedback: '"Thanks you so much sir excellent work brother."',
    company: 'Upwork',
  },
  {
    imgurl: images.pro5,
    name: 'Smit Bhanderi',
    feedback: '"Very Good Work."',
    company: 'Upwork',
  },
];

const brands = [
  {
    _id: 48,
    imgUrl: images.up4,
    name: 'Brand name',
  },{
    _id: 49,
    imgUrl: images.up5,
    name: 'Brand name',
  },
  {
    _id: 45,
    imgUrl: images.up1,
    name: 'Brand name',
  },
  {
    _id: 46,
    imgUrl: images.up2,
    name: 'Brand name',
  }
];

const works = [
  {
    imgUrl: images.nomapos,
    name: 'POS System',
    projectLink: 'https://demo-nomapose.vercel.app/dashboard',
    codeLink: 'https://github.com/Hassan-jr',
    title: 'Point of Sale System',
    description: 'My POS startup Company built from scratch and it is powered by cloud technologies.',
    tags: [ 'Startups', 'Frontend', 'Backend'],
  },
  {
    imgUrl: images.nomaposeLanding,
    name: 'POS Landing Page',
    projectLink: 'https://nomapose.onrender.com',
    codeLink: 'https://github.com/Hassan-jr',
    title: 'POS Landing Page',
    description: 'My POS startup Company Landing Page',
    tags: [ 'Startups', 'Frontend'],
  },
  {
    imgUrl: images.relsoft,
    name: 'Admin Dashboard',
    projectLink: 'https://relsoft.netlify.app/dashboard',
    codeLink: 'https://github.com/Hassan-jr/relsoft',
    title: 'TMS System',
    description: 'Transportation Management System that provides cloud-based software to manage small trucking companies',
    tags: [ 'Startups', 'Frontend'],
  },
  {
    imgUrl: images.nomaStore,
    name: 'Ecommerce Platform',
    projectLink: 'https://nomastore.netlify.app/',
    codeLink: 'https://github.com/Hassan-jr/NomaStore',
    title: 'Ecommerce Platform',
    description: '',
    tags: ['Backend', 'Frontend'],
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
  // {
  //   imgUrl: images.caske3,
  //   name: 'Real Estate Project',
  //   projectLink: 'https://github.com/Hassan-jr/Caske',
  //   codeLink: 'https://github.com/Hassan-jr/Caske',
  //   title: 'Real Estate Project',
  //   description: '',
  //   tags: ['Frontend'],
  // },
  // {
  //   imgUrl: images.amazon,
  //   name: 'Responsive Amazon-clone Website',
  //   projectLink: 'https://amazonclone-h9a0.onrender.com/',
  //   codeLink: 'https://github.com/Hassan-jr/amazon-clone-website',
  //   title: 'Responsive Amazon-clone Website',
  //   description: '',
  //   tags: ['Backend', 'Frontend'],
  // },
  {
    imgUrl: images.noma,
    name: 'Document Manager App',
    projectLink: 'https://play.google.com/store/apps/details?id=com.noma',
    codeLink: 'https://github.com/Hassan-jr/Noma',
    title: 'Document Manager App',
    description: '',
    tags: ['Mobile App'],
  },
];

export { abouts, skills, experiences, testimonials, brands, works };
