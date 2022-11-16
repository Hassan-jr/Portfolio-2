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
    imgurl: images.about01,
    name: 'TESTIMO NAME',
    feedback: 'TESTIMONIAL feedback',
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
    imgUrl: images.about01,
    name: 'Google',
    projectLink: 'www.hassanjr.com',
    codeLink: 'www.hassanjr.com',
    title: 'works at nothing',
    description: 'NO des in works',
    tags: ['Mobile App'],
  },
];

export { abouts, skills, experiences, testimonials, brands, works };
