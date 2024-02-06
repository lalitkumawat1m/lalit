import {SiYoutube} from '@react-icons/all-files/si/SiYoutube';
import {SiGithub} from '@react-icons/all-files/si/SiGithub';
import {SiLinkedin} from '@react-icons/all-files/si/SiLinkedin';
import {FaXTwitter} from 'react-icons/fa6';

export const SOCIAL_ACCOUNTS = {
  github: {
    name: 'GitHub',
    href: 'https://github.com/lalitkumawat1m',
    Icon: ({className = ''}) => <SiGithub className={className} />,
  },

  twitter: {
    name: 'Twitter',
    href: 'https://twitter.com/lalitkumawat1m',
    Icon: ({className = ''}) => <FaXTwitter className={className} />,
  },
  facebook: {
    name: 'YouTube',
    href: 'https://www.youtube.com/@LalitKumawatTech',
    Icon: ({className = ''}) => <SiYoutube className={className} />,
  },
  linkedin: {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/lalitkumawat1m',
    Icon: ({className = ''}) => <SiLinkedin className={className} />,
  },
};
