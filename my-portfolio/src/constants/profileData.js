import avatarImg from '../assets/princess-cabradilla.jpg';

export const PROFILE_DATA = {
  name: 'Princess Crisha G. Cabradilla',
  title: 'Aspiring Cybersecurity Developer',
  avatar: avatarImg,
  statusBadges: [
    { id: 'open-to-work', label: 'Open to Work', variant: 'blue' },
    { id: 'graduate', label: '2025 Graduate', variant: 'purple' },
  ],
  bio: 'Computer Science student specializing in Cybersecurity, with experience building web and mobile applications. Passionate about developing secure, functional, and user-friendly applications, and always eager to learn and adapt.',
  skills: [
    'Cybersecurity',
    'Laravel',
    'Quasar',
    'HTML & CSS',
    'Java',
    'Flutter',
    'Python',
    'MySQL',
    'Git',
  ],
  socialLinks: [
    {
      id: 'portfolio',
      label: 'Portfolio',
      iconName: 'monitor',
      url: 'https://princesscabradilla.dev',
    },
    {
      id: 'email',
      label: 'Email',
      iconName: 'mail',
      url: 'mailto:princesscrisha.cabradilla@example.com',
    },
    {
      id: 'github',
      label: 'GitHub',
      iconName: 'github',
      url: 'https://github.com/princesscabradilla',
    },
    {
      id: 'linkedin',
      label: 'LinkedIn',
      iconName: 'linkedin',
      url: 'https://linkedin.com/in/princess-crisha-cabradilla',
    },
  ],
};
