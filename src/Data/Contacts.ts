type CustomTab = {
  key: string;
  label: string;
  text: string;
  icon: string;
  children: string;
};

export const contact: CustomTab[] = [
  {
    key: '1',
    label: 'Gmail',
    text: 'Scan QR to Send Email',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg',
    children: 'yusufbgirginis@gmail.com',
  },
  {
    key: '2',
    label: 'Github',
    text: 'Scan QR to Reach Out My Github Profile',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg',
    children: 'github.com/ybgirgin3',
  },
  {
    key: '3',
    label: 'Reddit',
    text: 'Scan QR to Reach Out My Reddit Account',
    icon: 'https://upload.wikimedia.org/wikipedia/en/b/bd/Reddit_Logo_Icon.svg',
    children: 'Reddit.com/blblbl',
  },
];