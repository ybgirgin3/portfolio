type ExperiencesType = {
  label: string; // date
  children: string;
  dot?: any;
  color: string;
  itemPaddingBottom?: number;
  fontSize?: string;
};

export const Experiences: ExperiencesType[] = [
  {
    label: 'July 2019 - Jan 2020',
    children: 'Realkom Textile LTD - Software Engineering Intern',
    color: 'blue',
    itemPaddingBottom: 60,
    fontSize: '300px',
  },
  {
    label: 'June 2021 - Nov 2021',
    children: 'Ayhan Computer and Electronics LTD - Embedded Developer',
    color: 'blue',
  },
  { label: '2021 - Aug', children: 'Graduated', color: 'green' },
  {
    label: 'Nov 2021 - June 2022',
    children: 'Arma Group Holding - Backend Developer',
    color: 'red',
  },
  {
    label: 'June 2022 - Dec 2022',
    children: 'Arma Group Holding - Machine Learning Developer',
    color: 'red',
  },
  {
    label: 'Dec 2022 - Present',
    children: 'Usersdot E-Commers and Consulting - Big Data Engineer (Python)',
    color: 'blue',
  },
];
