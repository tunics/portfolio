import fiveHundredPx from '../assets/logos/500px.svg?url';
import behance from '../assets/logos/behance.svg?url';
import github from '../assets/logos/github.svg?url';
import instagram from '../assets/logos/instagram.svg?url';
import linkedin from '../assets/logos/linkedin.svg?url';
import whatsapp from '../assets/logos/whatsapp.svg?url';

export const socialLinks = [
    {
        href: 'https://wa.me/5561982282199',
        label: 'WhatsApp',
        icon: whatsapp,
        officialProfile: false,
    },
    {
        href: 'https://www.linkedin.com/in/antonio-caixeta',
        label: 'LinkedIn',
        icon: linkedin,
        officialProfile: true,
    },
    {
        href: 'https://behance.net/tunics',
        label: 'Behance',
        icon: behance,
        officialProfile: true,
    },
    {
        href: 'https://github.com/tunics',
        label: 'GitHub',
        icon: github,
        officialProfile: true,
    },
    {
        href: 'https://www.instagram.com/tunics/',
        label: 'Instagram',
        icon: instagram,
        officialProfile: true,
    },
    {
        href: 'https://500px.com/tunics',
        label: '500px',
        icon: fiveHundredPx,
        officialProfile: true,
    },
] as const;

export const officialProfileUrls = socialLinks
    .filter(({ officialProfile }) => officialProfile)
    .map(({ href }) => href);
