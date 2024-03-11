import { ITEM_PER_PAGE } from "./constants";

 type Job = {
  id: string;
  companyName: string;
  location: string;
  role: string,
  interviewed: boolean,
  date: string,
}

 const jobs: Array<Job> = [
  {
    id: '1',
    companyName: 'RWWA/TAB',
    location: 'Perth',
    role: 'Frontend Developer',
    interviewed: true,
    date: '12/5/2023',
  },
  {
    id: '2',
    companyName: 'Zencontrol',
    location: 'Queensland',
    role: 'Android Mobile Developer',
    interviewed: true,
    date: '2/7/2024',
  },
  {
    id: '3',
    companyName: 'Propte/Landnow',
    location: 'Perth',
    role: 'Senior Frontend Developer',
    interviewed: true,
    date: '3/4/2024',
  },
  {
    id: '4',
    companyName: 'Genvis',
    location: 'Perth',
    role: 'Senior Frontend Engineer',
    interviewed: true,
    date: '3/7/2024',
  },
  {
    id: '5',
    companyName: 'Curtin University',
    location: 'Perth',
    role: 'Software Engineer',
    interviewed: false,
    date: '3/5/2024',
  },
  {
    id: '6',
    companyName: 'SignOnSite',
    location: 'Canberra',
    role: 'software developer',
    interviewed: false,
    date: '2/29/2024',
  },
  {
    id: '7',
    companyName: 'Innova Solutions',
    location: 'Melbourne',
    role: 'Software Developer',
    interviewed: false,
    date: '2/28/2024',
  },
  {
    id: '8',
    companyName: 'CTM',
    location: 'Perth',
    role: 'Front-end Developer',
    interviewed: false,
    date: '2/8/2024',
  },
  {
    id: '9',
    companyName: 'Fortescue',
    location: 'Perth',
    role: 'DevOps Engineer',
    interviewed: false,
    date: '2/2/2024',
  },
  {
    id: '10',
    companyName: 'Agoda',
    location: 'Perth',
    role: 'Software Developer',
    interviewed: false,
    date: '2/1/2024',
  },
  {
    id: '11',
    companyName: 'OXMT',
    location: 'Perth',
    role: 'Software Developer',
    interviewed: false,
    date: '2/1/2024',
  },
  {
    id: '12',
    companyName: 'Octopus',
    location: 'Brisbane',
    role: 'Software Developer',
    interviewed: false,
    date: '1/30/2024',
  },
  {
    id: '13',
    companyName: 'MLC',
    location: 'Perth',
    role: 'Senior Front End Developer',
    interviewed: false,
    date: '1/17/2024',
  },
  {
    id: '14',
    companyName: 'GLiNTECH',
    location: 'Sydney',
    role: 'Junior Software Developer',
    interviewed: false,
    date: '3/4/2024',
  },
  {
    id: '15',
    companyName: 'Arney Recruitment',
    location: 'Sydney',
    role: 'Front End Developer',
    interviewed: false,
    date: '3/4/2024',
  },
  {
    id: '16',
    companyName: 'Just Digital People',
    location: 'Sydney',
    role: 'Front End Developer',
    interviewed: false,
    date: '3/4/2024',
  },
  {
    id: '17',
    companyName: 'Delphinus Lab Pty Ltd',
    location: 'Sydney',
    role: 'Mid-Level Front End Developer - (JavaScript, React)',
    interviewed: false,
    date: '3/4/2024',
  },
  {
    id: '18',
    companyName: 'Bila Support Services',
    location: 'Perth',
    role: 'bubble.io Software Developer',
    interviewed: false,
    date: '2/26/2024',
  },
  {
    id: '19',
    companyName: 'iterate',
    location: 'Melbourne',
    role: 'Front End Developer',
    interviewed: false,
    date: '2/26/2024',
  },
  {
    id: '20',
    companyName: 'ANZ',
    location: 'Melbourne',
    role: 'Staff Software Engineer (Frontend)',
    interviewed: false,
    date: '2/26/2024',
  },
  {
    id: '21',
    companyName: 'Preacta Recruitment',
    location: 'Melbourne',
    role: 'Senior Software Engineer - Frontend React.js',
    interviewed: false,
    date: '2/26/2024',
  },
  {
    id: '22',
    companyName: 'Opus Recruitment Solutions',
    location: 'Melbourne',
    role: 'SENIOR FRONT END DEVELOPER',
    interviewed: false,
    date: '2/26/2024',
  },
  {
    id: '23',
    companyName: 'CorePlan',
    location: 'Perth',
    role: 'Software Engineer (Fullstack)',
    interviewed: false,
    date: '2/26/2024',
  },
  {
    id: '24',
    companyName: 'Spectrum Ecology',
    location: 'Perth',
    role: 'Full Stack Developer',
    interviewed: false,
    date: '2/26/2024',
  },

  {
    id: '25',
    companyName: 'HSI APAC PTY LTD',
    location: 'Perth',
    role: 'Full Stack Developer',
    interviewed: false,
    date: '2/26/2024',
  },

  {
    id: '26',
    companyName: 'Aurizn Pty Ltd',
    location: 'Perth',
    role: 'Software Engineer (WA)',
    interviewed: false,
    date: '2/26/2024',

  },
  {
    id: '27',
    companyName: 'Sime Darby Motors Group Australia',
    location: 'Perth',
    role: 'Applications Developer',
    interviewed: false,
    date: '2/26/2024',
  },
  {
    id: '28',
    companyName: 'Dorner Australia Pty Ltd',
    location: 'Perth',
    role: 'Software Developer',
    interviewed: false,
    date: '2/28/2024',
  },
  {
    id: '29',
    companyName: 'Akkodis',
    location: 'Perth',
    role: 'Mobile Apps Developer',
    interviewed: false,
    date: '2/28/2024',
  },
  {
    id: '30',
    companyName: 'Verse Group',
    location: 'Perth',
    role: 'Software Developer',
    interviewed: false,
    date: '2/28/2024',
  },
  {
    id: '31',
    companyName: 'Digital Resources Australia Pty Ltd',
    location: 'Perth',
    role: 'Software Developer',
    interviewed: false,
    date: '2/28/2024',
  },
  {
    id: '32',
    companyName: 'Expertech',
    location: 'Sydney',
    role: 'React Developer | WFH',
    interviewed: false,
    date: '2/28/2024',
  },
  {
    id: '32',
    companyName: 'McKay Drilling',
    location: 'Perth',
    role: 'Web Developer',
    interviewed: false,
    date: '2/28/2024',
  },
  {
    id: '33',
    companyName: 'AB Web Developers',
    location: 'Perth',
    role: 'Web Developer',
    interviewed: false,
    date: '2/28/2024',
  },
  {
    id: '34',
    companyName: 'Martian Logic',
    location: 'Sydney',
    role: 'MID-LEVEL FRONT-END DEVELOPERS',
    interviewed: false,
    date: '2/26/2024',
  },
  {
    id: '35',
    companyName: 'Entain Group PTY LTD',
    location: 'Brisbane',
    role: 'Native Mobile Engineer - iOS/Android',
    interviewed: false,
   date: '2/21/2024',
  },
  {
    id: '36',
    companyName: 'DataMesh',
    location: 'Sydney',
    role: 'Android Engineer',
    interviewed: false,
   date: '2/21/2024',
  },
  {
    id: '37',
    companyName: 'Green Light PS Pty Ltd',
    location: 'Melbourne',
    role: 'Mobile application Developer',
    interviewed: false,
   date: '2/21/2024',
  },
  {
    id: '38',
    companyName: 'Milestone Information Technology',
    location: 'Melbourne',
    role: 'App Developer (iOS swift and Android experienced)',
    interviewed: false,
   date: '2/21/2024',
  },
  {
    id: '39',
    companyName: 'Attract People',
    location: 'Melbourne',
    role: 'Mobile Applications Developer',
    interviewed: false,
   date: '2/21/2024',
  },
  {
    id: '40',
    companyName: 'HCL Australia Services Pty Ltd',
    location: 'Sydney ',
    role: 'Android application developer',
    interviewed: false,
   date: '2/21/2024',
  },
  {
    id: '41',
    companyName: 'Private Advertiser',
    location: 'Melbourne',
    role: 'Mobile Engineer (Native Android & iOS) - Long-term contract',
    interviewed: false,
   date: '2/21/2024',
  },
  {
    id: '42',
    companyName: 'Davidson',
    location: 'Sydney',
    role: 'Mobile App Developer',
    interviewed: false,
   date: '2/21/2024',
  },
  {
    id: '43',
    companyName: 'Talenza',
    location: 'Sydney',
    role: 'Mobile Applications Developer',
    interviewed: false,
   date: '2/21/2024',
  },
  {
    id: '44',
    companyName: 'Talent Realised',
    location: 'Sydney',
    role: 'Android Developer',
    interviewed: false,
   date: '2/21/2024',
  },
  {
    id: '45',
    companyName: 'Duress',
    location: 'Melbourne',
    role: 'Full time Android Software Developer',
    interviewed: false,
   date: '2/21/2024',
  },
  {
    id: '46',
    companyName: 'Pioneer Credit Ltd',
    location: 'Perth',
    role: 'Junior Software Developer',
    interviewed: false,
    date: '2/25/2024',
  },
  {
    id: '47',
    companyName: 'Collabera Technologies Pty Ltd',
    location: 'Perth',
    role: 'Flutter Developer',
    interviewed: false,
    date: '2/25/2024',
  },
  {
    id: '48',
    companyName: 'Clear Learning Systems',
    location: 'Melbourne',
    role: 'Junior Developer',
    interviewed: false,
    date: '2/14/2024',
  },
  {
    id: '49',
    companyName: 'Halo Service Solutions',
    location: 'Melbourne',
    role: 'Entry Level Position / Graduate Program',
    interviewed: false,
    date: '2/14/2024',
  },
  {
    id: '50',
    companyName: 'Elite IT Recruitment',
    location: 'Perth ',
    role: 'Flutter Developer',
    interviewed: false,
    date: '2/14/2024',
  },
  {
    id: '51',
    companyName: 'Liebherr Australia Pty Ltd',
    location: 'Perth ',
    role: 'Software Developer',
    interviewed: false,
    date: '2/14/2024',
  },
  {
    id: '53',
    companyName: 'Digital Resources Australia Pty Ltd',
    location: 'Perth ',
    role: 'Software Developer',
    interviewed: false,
    date: '2/14/2024',
  },
  {
    id: '54',
    companyName: 'ALLTRADES CONTRACTING SERVICES PTY LTD',
    location: 'Sydney',
    role: 'Software Developer',
    interviewed: false,
    date: '2/14/2024',
  },
  {
    id: '55',
    companyName: 'Sinorbis Australia Pty Ltd',
    location: 'Sydney ',
    role: 'Frontedn Developer',
    interviewed: false,
    date: '2/14/2024',
  },
  {
    id: '56',
    companyName: 'Terem',
    location: 'Sydney ',
    role: 'Fullstack Engineer (React/NodeJS/AWS)',
    interviewed: false,
    date: '2/14/2024',
  },
  {
    id: '57',
    companyName: 'Liebherr Australia Pty Ltd',
    location: 'Perth ',
    role: 'Software Developer',
    interviewed: false,
   date: '2/7/2024',
  },
  {
    id: '58',
    companyName: 'Fast Cover',
    location: 'Sydney',
    role: 'Junior Software Developer',
    interviewed: false,
   date: '2/7/2024',
  },
  {
    id: '59',
    companyName: 'Sydney Tools',
    location: 'Sydney ',
    role: 'Web Developer',
    interviewed: false,
   date: '2/7/2024',
  },
  {
    id: '60',
    companyName: 'Nexigen Digital',
    location: 'Gold Coast ',
    role: 'React Developer',
    interviewed: false,
   date: '2/7/2024',
  },
  {
    id: '61',
    companyName: 'Corporate Travel Management',
    location: 'Melbourne ',
    role: 'Front-end Developer',
    interviewed: false,
   date: '2/7/2024',
  },
  {
    id: '62',
    companyName: 'Blocksglobal Pty Ltd',
    location: 'Melbourne ',
    role: 'Android Developer',
    interviewed: false,
   date: '2/7/2024',
  },
  {
    id: '63',
    companyName: 'Talent',
    location: 'Brisbane ',
    role: 'Android App Developer | Mid Level',
    interviewed: false,
   date: '2/7/2024',
  },
  {
    id: '64',
    companyName: 'Davidson',
    location: 'Brisbane ',
    role: 'Mid Android App Developer',
    interviewed: false,
   date: '2/7/2024',
  },
  {
    id: '65',
    companyName: 'Private Advertiser',
    location: 'Perth ',
    role: 'Full Stack Developer',
    interviewed: false,
   date: '2/7/2024',
  },
  {
    id: '66',
    companyName: 'Optus',
    location: 'Perth ',
    role: 'Android Developer',
    interviewed: false,
    date: '2/2/2024',
  },
  {
    id: '67',
    companyName: 'Daelibs Pty Ltd',
    location: 'Gold Coast ',
    role: 'Android Developer',
    interviewed: false,
    date: '2/2/2024',
  },
  {
    id: '68',
    companyName: 'Creatio',
    location: 'Hobart',
    role: 'Native Mobile App Developer ',
    interviewed: false,
    date: '2/2/2024',
  },

  {
    id: '69',
    companyName: 'Aurec',
    location: 'Perth ',
    role: 'Application Developer',
    interviewed: false,
    date: '2/2/2024',
  },
  {
    id: '70',
    companyName: 'Information Quality',
    location: 'Perth',
    role: 'Web Developer',
    interviewed: false,
    date: '2/2/2024',
  },
  {
    id: '71',
    companyName: 'Paperly',
    location: 'Perth ',
    role: 'Software Developer',
    interviewed: false,
    date: '2/2/2024',
  },
  {
    id: '72',
    companyName: 'Greenbase Pty Ltd',
    location: 'Perth ',
    role: 'Front End Developer',
    interviewed: false,
    date: '1/24/2024',
  },
  {
    id: '73',
    companyName: 'Life Ready',
    location: 'Perth',
    role: 'Full Stack Developer',
    interviewed: false,
    date: '1/24/2024',
  },

  {
    id: '74',
    companyName: 'Paxus',
    location: 'Melbourne ',
    role: 'Front End Engineer',
    interviewed: false,
    date: '1/24/2024',
  },
  {
    id: '75',
    companyName: 'Halcyon Knights Pty Ltd',
    location: 'Brisbane ',
    role: 'Front-end Developer',
    interviewed: false,
    date: '1/24/2024',
  },
  {
    id: '76',
    companyName: 'The Good Guys',
    location: 'Melbourne ',
    role: 'Front End Developer',
    interviewed: false,
    date: '1/24/2024',
  },
  {
    id: '77',
    companyName: 'Australian Council for Educational Research (ACER)',
    location: 'Melbourne ',
    role: 'Front-End Developer',
    interviewed: false,
    date: '1/19/2024',
  },
  {
    id: '78',
    companyName: 'The 7 Day Project',
    location: 'Sydney',
    role: 'Junior-Mid Full Stack Developer',
    interviewed: false,
    date: '1/19/2024',
  },
  {
    id: '79',
    companyName: 'Ethan Talent',
    location: 'Sydney ',
    role: 'Front end Web Developer Junior',
    interviewed: false,
    date: '1/22/2024',
  },
  {
    id: '80',
    companyName: 'Careview',
    location: 'Gold Coast ',
    role: 'Senior React Developer',
    interviewed: false,
    date: '1/24/2024',
  },
  {
    id: '81',
    companyName: 'Aurec',
    location: 'Melbourne ',
    role: 'React Developer',
    interviewed: false,
    date: '1/24/2024',
  },
  {
    id: '82',
    companyName: 'Liebherr Australia Pty Ltd',
    location: 'Perth ',
    role: 'Software Developer',
    interviewed: false,
    date: '1/24/2024',
  },
  {
    id: '83',
    companyName: 'TheDriveGroup',
    location: 'Sydney',
    role: 'Senior Front End Next.js Developer',
    interviewed: false,
    date: '1/21/2024',
  },
  {
    id: '84',
    companyName: 'Claros Technology Pty. Ltd',
    location: 'Brisbane',
    role: 'Front End/UI Developer & Designer ',
    interviewed: false,
    date: '1/20/2024',
  },
  {
    id: '85',
    companyName: 'Bang Digital',
    location: 'Perth ',
    role: 'Web Developer',
    interviewed: false,
    date: '1/20/2024',
  },
  {
    id: '86',
    companyName: 'Absolute People Solutions',
    location: 'Perth ',
    role: 'Software Developer',
    interviewed: false,
    date: '1/19/2024',
  },
  {
    id: '87',
    companyName: 'Bang Digital',
    location: 'Perth ',
    role: 'Web Developer',
    interviewed: false,
    date: '1/18/2024',
  },
  {
    id: '88',
    companyName: 'Plural Agency',
    location: 'Melbourne ',
    role: 'Frontend Developer',
    interviewed: false,
    date: '1/18/2024',
  },
  {
    id: '89',
    companyName: 'Digital Resources Australia Pty Ltd',
    location: 'Perth ',
    role: 'Software Developer',
    interviewed: false,
    date: '1/18/2024',
  },
  {
    id: '90',
    companyName: 'Aurec',
    location: 'Melbourne ',
    role: 'Software Developer',
    interviewed: false,
    date: '1/18/2024',
  },
  {
    id: '91',
    companyName: 'McKay Drilling',
    location: 'Perth ',
    role: 'Web Developer',
    interviewed: false,
    date: '1/18/2024',
  },
  {
    id: '92',
    companyName: 'Bytemakers Pty Ltd',
    location: 'Brisbane ',
    role: 'Web Developer',
    interviewed: false,
    date: '1/18/2024',
  },
  {
    id: '93',
    companyName: 'Plural Agency',
    location: 'Melbourne',
    role: 'Web Developer',
    interviewed: false,
    date: '1/18/2024',
  },

  {
    id: '94',
    companyName: 'Aurizn Pty Ltd',
    location: 'Melbourne',
    role: 'Web Developer',
    interviewed: false,
    date: '1/18/2024',
  },
  {
    id: '95',
    companyName: 'Finance One',
    location: 'Melbourne',
    role: ' Junior Developer',
    interviewed: false,
    date: '1/18/2024',
  },
  {
    id: '96',
    companyName: 'Imagemation',
    location: 'Perth',
    role: ' Front End Developer',
    interviewed: false,
    date: '1/18/2024',
  },
  {
    id: '97',
    companyName: 'Bytemakers Pty Ltd',
    location: 'Brisbane',
    role: ' Front End Developer',
    interviewed: false,
    date: '1/16/2024',
  },
  {
    id: '98',
    companyName: 'Bytemakers Pty Ltd',
    location: 'Brisbane',
    role: ' Front End Developer',
    interviewed: false,
    date: '1/16/2024',
  },
  {
    id: '99',
    companyName: 'BLACKROC',
    location: 'Brisbane',
    role: ' Front End Developer',
    interviewed: false,
    date: '1/12/2024',
  },
  {
    id: '100',
    companyName: 'Resly pty ltd',
    location: 'Canberra',
    role: ' Senior Full Stack Developer',
    interviewed: false,
    date: '1/11/2024',
  },
  {
    id: '101',
    companyName: 'Hello Molly Pty Ltd',
    location: 'Sydney ',
    role: ' Senior Full Stack Developer',
    interviewed: false,
    date: '1/11/2024',
  },
  {
    id: '103',
    companyName: 'Recruitment Hive',
    location: 'Canberra ',
    role: ' Front End Developer',
    interviewed: false,
    date: '1/11/2024',
  },
  {
    id: '104',
    companyName: 'Wall Street',
    location: 'Melbourne ',
    role: ' Front End Developer',
    interviewed: false,
    date: '1/11/2024',
  },
  {
    id: '105',
    companyName: 'Private Advertiser',
    location: 'Sydney ',
    role: ' Front End Developer',
    interviewed: false,
    date: '1/10/2024',
  },
  {
    id: '106',
    companyName: 'Imagemation',
    location: 'Sydney ',
    role: ' Front End Developer',
    interviewed: false,
    date: '1/10/2024',
  },
  {
    id: '107',
    companyName: 'ARRPWERE CONSULTING PTY LTD',
    location: 'Canberra ',
    role: ' Front End Developer',
    interviewed: false,
    date: '1/9/2024',
  },
  {
    id: '108',
    companyName: 'Australian Finance Group',
    location: 'Perth ',
    role: ' Software Developer',
    interviewed: false,
    date: '1/9/2024',
  },
  {
    id: '109',
    companyName: 'PlanCare',
    location: 'Perth ',
    role: ' Full Stack Developer',
    interviewed: false,
    date: '1/9/2024',
  },
  {
    id: '110',
    companyName: 'FWD Search',
    location: 'Perth ',
    role: 'Embedded Software Engineer ',
    interviewed: false,
    date: '1/9/2024',
  },
  {
    id: '111',
    companyName: 'ARRPWERE CONSULTING PTY LTD',
    location: 'Canberra  ',
    role: 'Front End Developer',
    interviewed: false,
    date: '1/9/2024',
  },
  {
    id: '112',
    companyName: 'Quickmail',
    location: 'Perth  ',
    role: 'Software Developer/Programmer',
    interviewed: false,
    date: '1/6/2024',
  },
  {
    id: '113',
    companyName: 'FinTech Services Australia',
    location: 'Perth  ',
    role: 'Full Stack Developer',
    interviewed: false,
    date: '1/4/2024',
  },
  {
    id: '115',
    companyName: 'Marcel Pacific',
    location: 'Perth ',
    role: 'Software Developer/Programmer',
    interviewed: false,
    date: '1/3/2024',
  },
  {
    id: '116',
    companyName: 'Living Online',
    location: 'Perth ',
    role: 'Web Developer',
    interviewed: false,
    date: '1/3/2024',
  },
  {
    id: '117',
    companyName: 'Marketforce Limited',
    location: 'Perth ',
    role: 'Web Developer',
    interviewed: false,
    date: '12/29/2023',
  },
  {
    id: '119',
    companyName: 'Skin Rejuvenate',
    location: 'Perth  ',
    role: 'Web Designer & Developer',
    interviewed: false,
    date: '12/25/2023',
  },
  {
    id: '120',
    companyName: 'Word of Mouth Agency',
    location: 'Perth  ',
    role: 'Web Designer & Developer',
    interviewed: false,
    date: '12/21/2023',
  },
  {
    id: '121',
    companyName: 'PRA',
    location: 'Perth  ',
    role: 'Senior Front-End Developer',
    interviewed: false,
    date: '12/15/2023',
  },
  {
    id: '125',
    companyName: 'Load Link Australia Pty Ltd',
    location: 'Gold Coast ',
    role: 'React Web and App Developer',
    interviewed: false,
    date: '12/13/2023',
  },
  {
    id: '126',
    companyName: 'Udio Systems',
    location: 'Perth ',
    role: 'Full Stack Django Developer',
    interviewed: false,
    date: '12/13/2023',
  },
  {
    id: '127',
    companyName: 'Intertek',
    location: 'Perth ',
    role: 'Software Developer',
    interviewed: false,
    date: '12/13/2023',
  },
  {
    id: '128',
    companyName: 'Airteam',
    location: 'Sydney ',
    role: 'Full Stack  Developer',
    interviewed: false,
    date: '12/12/2023',
  },
  {
    id: '129',
    companyName: 'Marketforce Limited',
    location: 'Perth ',
    role: 'Senior Web Developer',
    interviewed: false,
    date: '12/8/2023',
  },
  {
    id: '130',
    companyName: 'CSG Talent',
    location: 'Perth ',
    role: 'Senior Web Developer',
    interviewed: false,
    date: '12/8/2023',
  },
  {
    id: '131',
    companyName: 'FLANDERS of Australia',
    location: 'Perth ',
    role: 'Senior Web Developer',
    interviewed: false,
    date: '12/6/2023',
  },
  {
    id: '132',
    companyName: 'MindArc',
    location: 'Sydney ',
    role: 'Frontend Developer',
    interviewed: false,
    date: '12/6/2023',
  },
  {
    id: '133',
    companyName: 'Eagers Automotive',
    location: 'Perth ',
    role: 'Frontend Developer',
    interviewed: false,
    date: '12/3/2023',
  },
  {
    id: '134',
    companyName: 'Remote Pro',
    location: 'Brisbane ',
    role: 'Frontend Developer',
    interviewed: false,
    date: '12/3/2023',
  },
  {
    id: '135',
    companyName: 'ezilinx',
    location: 'Perth ',
    role: 'Full Stack Developer',
    interviewed: false,
    date: '12/2/2023',
  },
  {
    id: '136',
    companyName: 'connectingus',
    location: ' Melbourne ',
    role: 'Full Stack Developer',
    interviewed: false,
    date: '12/2/2023',
  },
  {
    id: '139',
    companyName: 'Montagu Group Pty Ltd',
    location: ' Sydney ',
    role: 'Mid Level Front End Developer',
    interviewed: false,
    date: '11/30/2023',
  },
  {
    id: '141',
    companyName: 'Novus',
    location: ' Perth ',
    role: 'Senior Front End Engineer',
    interviewed: false,
    date: '11/30/2023',
  },
  {
    id: '145',
    companyName: 'Oqea',
    location: ' Perth ',
    role: ' Fullstack Developer',
    interviewed: false,
    date: '11/20/2023',
  },
]


export const validatedJobs = jobs.map(
  (job,index) => ({...job, id: (index+1).toString()})
).reduce((acc, job) => {

  if (acc.some((j) => j.companyName === job.companyName)){
    return acc;
  }
  return [...acc, job];
}, []as Array<Job>) ;


export const getDataFromGmail = async () => {

  const response = await fetch('/api/gmail');
  const data = await response.json();
  return data;

}




export const getFilteredJobs = (query?: string, page?: number): Array<Job> => {

  const search = query || '';
  const currentPage = Number(page) || 1;

  const searchFilteredData =  validatedJobs.filter((job) => {
    return job.companyName.toLowerCase().includes(search.toLowerCase());
  });

  const start = (currentPage - 1) * ITEM_PER_PAGE;
  const end = currentPage * ITEM_PER_PAGE;

  const paginatedData = searchFilteredData.slice(start, end);

  return paginatedData;
}

export const getTotalPages = (query?: string): number => {

  const search = query || '';

  const searchFilteredData =  validatedJobs.filter((job) => {
    return job.companyName.toLowerCase().includes(search.toLowerCase());
  });

  return Math.ceil(searchFilteredData.length / ITEM_PER_PAGE);
}