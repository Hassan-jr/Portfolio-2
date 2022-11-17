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
    name: 'Test skill',
    bgColor: '#ffffff',
    icon: images.about01,
  },
];

const experiences = [
  {
    year: 2022,
    works: [
      {
        name: 'Works name',
        company: 'Comp work',
        desc: 'Work descrip',
      },
    ],
  },
];

const testimonials = [
  {
    imgurl: images.pro1,
    name: 'Zakaria',
    feedback: 'Without doubt one of the most talented programmers out there.  I always go back to Hassan when I am out of my depth and he never failed to deliver what I ask for.   Smart, trustworthy and professional.You would not be disappointed.',
    company: 'Company testimonial',
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
    description: 'NO des in works',
    tags: ['Frontend'],
  },
  {
    imgUrl: images.blog,
    name: 'Blog Website',
    projectLink: 'https://blog.hassanjr.com/',
    codeLink: 'https://github.com/Hassan-jr/Blog',
    title: 'Blog Website',
    description: 'NO des in works',
    tags: ['Backend', 'Frontend'],
  },
  {
    imgUrl: images.caske3,
    name: 'Real Estate Project',
    projectLink: 'https://blog.hassanjr.com/',
    codeLink: 'https://github.com/Hassan-jr/Blog',
    title: 'Real Estate Project',
    description: 'NO des in works',
    tags: ['Frontend'],
  },
  {
    imgUrl: images.amazon,
    name: 'Responsive Amazon-clone Website',
    projectLink: 'http://amazonbyhassan.herokuapp.com/',
    codeLink: 'https://github.com/Hassan-jr/amazon-clone-website',
    title: 'Responsive Amazon-clone Website',
    description: 'NO des in works',
    tags: ['Backend', 'Frontend'],
  },
  {
    imgUrl: images.noma,
    name: 'Document Manager App',
    projectLink: 'http://amazonbyhassan.herokuapp.com/',
    codeLink: 'https://github.com/Hassan-jr/amazon-clone-website',
    title: 'Document Manager App',
    description: 'NO des in works',
    tags: ['Mobile App'],
  },
];

export { abouts, skills, experiences, testimonials, brands, works };
