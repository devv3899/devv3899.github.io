export const personalInfo = {
  name: { first: 'Dev', last: 'Patel' },
  location: 'Irvine, California, USA',
  phone: '(551) 234-1189',
  email: 'devnandol@gmail.com',
  resume: '/Dev_Patel_Resume.pdf',
  bio: [
    'In my role as a Software Engineer specializing in IoT and IIoT, I have witnessed the boundless potential that this industry holds, and the transformative impact it can have on non-tech sectors. Drawing inspiration from this realization, I have dedicated my efforts towards creating tailored IoT solutions, leveraging the latest technological advancements to facilitate digital transformation.',
    'As a rapid learner, I am always eager to expand my skillset and acquire new knowledge, should the position demand it. I am certain that my aptitudes and expertise will be effectively utilized, and I am excited to engage in further discussions regarding this opportunity.',
  ],
  social: [
    { label: 'LinkedIn', icon: 'linkedin', url: 'https://www.linkedin.com/in/devv3899/' },
    { label: 'GitHub', icon: 'github', url: 'https://github.com/devv3899' },
    { label: 'Bitbucket', icon: 'bitbucket', url: 'https://bitbucket.org/drp145/' },
    { label: 'Twitter', icon: 'twitter', url: 'https://twitter.com/DEVNANDOL' },
    { label: 'Facebook', icon: 'facebook', url: 'https://www.facebook.com/devv3899/' },
  ],
}

export const experience = [
  {
    role: 'Software Engineer III',
    company: 'Glidewell Dental',
    period: 'September 2021 – Present',
    bullets: [
      'Designing and deploying AWS cloud architecture to bolster IoT-based services, enabling seamless transformation, analysis, and secure storage of incoming data payloads.',
      'Actively automating infrastructure deployment on AWS using Terraform, while leveraging CloudBees, Jenkins, and GitLab development tools to ensure efficient and reliable operations.',
      'Continuously developing and maintaining interactive web dashboards for machine monitoring, ensuring real-time and historical performance monitoring of IoT-enabled machines and factory lines.',
      'Leading the design and implementation of proactive microservices for monitoring production processes and machinery, with swift anomaly detection, corrective action execution, and automated reporting for data-driven decisions.',
      'Integrating multiple software services using REST API frameworks and IoT solutions, aligning technology with evolving business requirements.',
      'Contributing to the ongoing advancement of both front-end and back-end technology stacks, driving growth and innovation within the team.',
    ],
  },
  {
    role: 'Full Stack Web Developer',
    company: 'Signage Ideas',
    period: 'July 2021 – September 2021',
    bullets: [
      'Compiled and tackled technical and design specifications, merging user-oriented and front-end elements to maintain the effectiveness of the web presence.',
      'Worked closely with stakeholders throughout the development process to validate innovative proposals and implement design best practices.',
      'Recognized and resolved website performance issues to optimize speed.',
    ],
  },
]

export const education = [
  {
    institution: 'Rutgers University – New Brunswick',
    degree: 'Bachelor of Science in Computer Science',
    period: 'September 2017 – May 2021',
    logo: '/img/SAS.png',
    logoAlt: 'Rutgers University',
  },
]

export const projects = [
  {
    title: 'Photos – Android Studio',
    period: 'Nov 2020 – Jan 2021',
    description:
      'Photo application built with Java, XML, and Android Studio. Displays gallery photos with interactive controls including name, tags, and delete operations using object-oriented concepts and data structures.',
  },
  {
    title: 'Flights – Travel Reservation Website',
    period: 'Oct 2019 – Dec 2019',
    description:
      'Fully functional travel reservation website hosted on AWS with custom databases managed via MySQL Workbench, supporting reservations and related travel functionalities.',
  },
  {
    title: 'Cipher',
    period: 'Nov 2020 – Dec 2020',
    description:
      'Implemented polyalphabetic, stream, and block ciphers to encrypt or decrypt files as required.',
  },
  {
    title: 'Chess',
    period: 'Sep 2020 – Oct 2020',
    description:
      'Fully functional chess game built collaboratively in Java using object-oriented concepts and data structures.',
  },
  {
    title: 'Wumpus World',
    period: 'Sep 2020 – Oct 2020',
    description:
      'AI-driven Wumpus World game with fog-of-war mechanics using probability distributions over state variables to calculate the optimal move at each step.',
  },
  {
    title: 'IP Network',
    period: 'Mar 2020 – May 2020',
    description:
      'Configured IP assignments on each network interface and routing tables with default routes for hosts and router interfaces to forward packets correctly between nodes.',
  },
  {
    title: 'Load Balancing DNS Servers',
    period: 'Apr 2020 – May 2020',
    description:
      'Used DNS server functionality to implement a load-balancing system that splits hostnames across multiple DNS servers and displays load distribution per server.',
  },
  {
    title: 'HideFile_UnExpire',
    period: 'Sep 2019 – Mar 2020',
    description:
      'Two small functions that interpose standard library calls to hide files and remove expiration constraints, each addressing a distinct part of the assignment.',
  },
  {
    title: 'Client Server Interactor',
    period: 'Apr 2019 – Jun 2019',
    description:
      'Small-scale version control system with configure, checkout, update, commit, push, rollback, and more — built using sockets, multithreading, forking, and the file API.',
  },
  {
    title: 'Text File Compressor',
    period: 'Feb 2019 – Apr 2019',
    description:
      'Built and stored a Huffman tree in a codebook file using file system APIs and data structures, then used it to compress or decompress arbitrary text files.',
  },
  {
    title: 'Artificial Malloc',
    period: 'Jan 2019 – Feb 2019',
    description:
      'Custom implementation of malloc() and free() providing the same fundamental functionality as the system allocator while detecting common programming and usage errors.',
  },
  {
    title: 'Java Projects',
    period: 'Sep 2017 – May 2018',
    description:
      'Freshman-year foundational projects written in Java, applying a variety of data structures and core computer science concepts.',
  },
]

export const skills = {
  categories: [
    {
      label: 'Languages',
      items: ['Java', 'Python', 'C', 'C++', 'C#', '.NET'],
    },
    {
      label: 'Web',
      items: ['HTML', 'CSS', 'JavaScript', 'Angular', 'React'],
    },
    {
      label: 'Cloud',
      items: [
        'AWS IoT Core', 'IoT Greengrass', 'IoT SiteWise',
        'Lambda', 'VPC', 'EC2', 'Kafka / MSK',
        'S3', 'SQS', 'SNS', 'SES',
        'DynamoDB', 'RDS', 'API Gateway',
        'MS Azure', 'GCP',
      ],
    },
    {
      label: 'Databases',
      items: ['SQL Server', 'MySQL', 'NoSQL'],
    },
    {
      label: 'DevOps & Tools',
      items: ['Jenkins / CloudBees', 'GitLab Pipelines', 'Terraform', 'Kubernetes', 'Bitbucket', 'GitHub', 'Git'],
    },
  ],
  icons: [
    { cls: 'fab fa-html5', label: 'HTML5' },
    { cls: 'fab fa-css3-alt', label: 'CSS3' },
    { cls: 'fab fa-js-square', label: 'JavaScript' },
    { cls: 'fab fa-angular', label: 'Angular' },
    { cls: 'fab fa-react', label: 'React' },
    { cls: 'fab fa-node-js', label: 'Node.js' },
    { cls: 'fab fa-python', label: 'Python' },
    { cls: 'fab fa-java', label: 'Java' },
    { cls: 'fab fa-aws', label: 'AWS' },
    { cls: 'fab fa-android', label: 'Android' },
    { cls: 'fab fa-git-alt', label: 'Git' },
    { cls: 'fab fa-npm', label: 'npm' },
    { cls: 'fab fa-sass', label: 'Sass' },
    { cls: 'fab fa-vuejs', label: 'Vue.js' },
  ],
}

export const interests = [
  'I am empowered to effect change, driven by my unwavering faith in my capacity and determination to make a difference. My passion and competence lie in Computer Science, a field that captivates me with its vast potential and countless theories. As I have delved deeper into this domain, I have expanded my knowledge and honed my skills, gaining proficiency in various applications, tools, and techniques.',
  'With my extensive educational background and exceptional analytical, technical, and programming skills, I am poised to excel as a software engineer. If you believe I am a suitable candidate for your software engineering needs, please do not hesitate to contact me.',
]
