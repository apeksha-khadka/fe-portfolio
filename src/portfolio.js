const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://blog.itsapeksha.com',
  title: 'Portfolio',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Apeksha Khadka',
  role: 'Software Developer',
  description:
      ' I am a Software Developer based in Weingarten. I like learning new stuffs and creating them in my spare time.',
  resume: '/resume.pdf',
  social: {
    linkedin: 'https://www.linkedin.com/in/apeksha-khadka',
    github: 'https://github.com/apeksha-khadka',
    facebook: 'https://www.facebook.com/Apeksha-Khadka',
    instagram: 'https://www.instagram.com/apeksha',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'assignment-tracker',
    description:
      'A central service where teachers and students can assign/submit assignments.',
    stack: ['Kotlin', 'API'],
    sourceCode: 'https://github.com/apeksha-khadka/assignment-tracker',

  },
  {
    name: 'fe-library',
    description: ' Frontend for both the library admin and library user dashboard',
    stack: ['javaScript','html','CSS'],
    sourceCode: 'https://github.com/apeksha-khadka/fe-library',
    imagePreview: '',
  },
  {
    name: 'fe-movie',
    description: ' Frontend for the movies fetched via API from TMDB ',
    stack: ['javaScript','REACT','CSS'],
    sourceCode: 'https://github.com/apeksha-khadka/fe-movie',
    imagePreview: '',
  },

]

const certifications = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Certificate 1',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Certificate 2',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Certificate 3',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'Java',
  'Kotlin',
  'SpringBoot',
  'React',
  ' JUnit',
  'Cloud Computing',
  'Vue JS',
  'Git',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'khadka.apeksha5@gmail.com',
  phone: '+4917643479762',
  address: 'Germany',
}

export { header, about, projects, skills, contact, certifications }
