import type { ColorSchemeData } from './types';

export const TECH_DATA: { icon: string; title: string; alt: string }[] = [
    {
        icon: '/css_logo.webp',
        title: 'CSS',
        alt: 'CSS logo',
    },
    {
        icon: '/gsap_logo.webp',
        title: 'GSAP',
        alt: 'GSAP logo',
    },
    {
        icon: '/html_logo.webp',
        title: 'HTML',
        alt: 'HTML logo',
    },
    {
        icon: '/javascript_logo.webp',
        title: 'JAVASCRIPT',
        alt: 'JavaScript logo',
    },
    {
        icon: '/json_token_logo.webp',
        title: 'JWT',
        alt: 'JWT logo',
    },
    {
        icon: '/node_logo.webp',
        title: 'NODEJS',
        alt: 'Node.js logo',
    },
    {
        icon: '/react_logo.webp',
        title: 'REACT',
        alt: 'React logo',
    },
    {
        icon: '/typescript_logo.webp',
        title: 'TYPESCRIPT',
        alt: 'TypeScript logo',
    },
    {
        icon: '/wordpress_logo.webp',
        title: 'WORDPRESS',
        alt: 'WordPress logo',
    },
    {
        icon: '/mongodb_logo.webp',
        title: 'MONGO DB',
        alt: 'MongoDB logo',
    },
    {
        icon: '/socketio_logo.webp',
        title: 'SOCKET IO',
        alt: 'Socket.IO logo',
    },
    {
        icon: '/tailwind_logo.webp',
        title: 'TAILWIND',
        alt: 'Tailwind CSS logo',
    },
    {
        icon: '/elementor_logo.webp',
        title: 'ELEMENTOR',
        alt: 'Elementor logo',
    },
    {
        icon: '/figma_logo.webp',
        title: 'FIGMA',
        alt: 'Figma logo',
    },
];

export const PROJECTS_DATA: {
    title: string;
    img1: {
        src: string;
        alt: string;
    };
    img2: {
        src: string;
        alt: string;
    };
    img3: {
        src: string;
        alt: string;
    };
    url: string;
}[] = [
    {
        title: 'Designer Portfolio',
        img1: {
            src: '/fugasha_1.webp',
            alt: 'Portfolio first view'
        },
        img2: {
            src: '/fugasha_2.webp',
            alt: 'Portfolio design process card'
        },
        img3: {
            src: '/fugasha_3.webp',
            alt: 'Portfolio connect section'
        },
        url: 'https://fugasha.com'
    },
    {
        title: 'Developer Portfolio',
        img1: {
            src: '/portfolio_1.webp',
            alt: 'Portfolio First View',
        },
        img2: {
            src: '/portfolio_2.webp',
            alt: 'Portfolio About Page',
        },
        img3: {
            src: '/portfolio_3.webp',
            alt: 'Portfolio Hobby Page',
        },
        url: '',
    },
    {
        title: 'Web Portfolio',
        img1: {
            src: '/rica1.webp',
            alt: 'Japanese Teacher Portfolio First View',
        },
        img2: {
            src: '/rica2.webp',
            alt: 'Japanese Teacher Portfolio',
        },
        img3: {
            src: '/rica3.webp',
            alt: 'Japanese Teacher Portfolio About Page',
        },
        url: 'https://japanesewithrica.com',
    },
    {
        title: 'Amazon Clone',
        img1: {
            src: '/amazon_clone1.webp',
            alt: 'Amazon Clone Project First View',
        },
        img2: {
            src: '/amazon_clone2.webp',
            alt: 'Amazon Clone Project Item Basket',
        },
        img3: {
            src: '/amazon_clone3.webp',
            alt: 'Amazon Clone Project Item List',
        },
        url: 'https://clone-fd8f3.web.app/',
    },
];

export const EXPERTISES: { title: string; content: string }[] = [
    {
        title: 'Full-Stack Web Development',
        content: 'Building fast, scalable MERN + Typescript apps with clean code and modern tech.',
    },
    {
        title: 'UI/UX<br/>& Animations',
        content: 'Crafting smooth, interactive experiences with React and GSAP.',
    },
    {
        title: 'WordPress<br/>& No-Code',
        content: 'Quick, custom websites with WordPress and no-code tools.',
    },
];

export const TIMELINE_FEATURES: { title: string; content: string; date: string }[] = [
    {
        title: 'Military Education',
        content:
            'After graduating from high school, I enrolled in a military education program called VEVA (Veiligheid en Vakmanschap). After completing my first year, I decided to take a gap year to reflect on my next steps.',
        date: '2013 - 2014',
    },
    {
        title: 'Laboratory education',
        content:
            'After my gap year, I started studying laboratory chemistry, but after a few years, I realized it wasn’t the path I wanted to pursue. I then began working for a company that specialized in manufacturing modular walls (also known as partition walls).',
        date: '2015 - 2018',
    },
    {
        title: 'Cleaning Business',
        content:
            'After a year working in the modular wall factory, I decided I wanted to take on a bigger challenge and started my own business as a window cleaner and general cleaner. I built and managed a client base of over 300 customers, including both small and large businesses as well as private residences. My work focused on cleaning windows, solar panels, building exteriors, and interior office spaces.',
        date: '2019 - 2023',
    },
    {
        title: 'Web Development & Backpacking',
        content:
            'After selling my business, I traveled extensively and decided to pursue my passion for technology. Learned multiple programming languages and databases, earning several certificates along the way. Currently focused on building websites and web applications, specializing in:<br />• MERN Stack with TypeScript<br />• Animations with GSAP<br />• WordPress Development<br />• App.Studio Design',
        date: '2023 - Present',
    },
];

export const HOBBY_DATA: { title: string; gif: string; thumbnail: string; alt: string }[] = [
    {
        title: 'MUAY THAI',
        gif: 'muay-thai-gif.mp4',
        thumbnail: '',
        alt: 'Muay Thai training',
    },
    {
        title: 'TRAVELLING',
        gif: 'travelling-gif.mp4',
        thumbnail: '',
        alt: 'Traveling around the world',
    },
    {
        title: 'ANIME',
        gif: 'anime-gif.mp4',
        thumbnail: '',
        alt: 'Watching anime',
    },
    {
        title: 'GAMING',
        gif: 'gaming-gif.mp4',
        thumbnail: '',
        alt: 'Playing video games',
    },
    {
        title: 'MOTORBIKE',
        gif: '',
        thumbnail: 'motorbike_image.webp',
        alt: 'Riding a motorbike',
    },
];

export const TESTIMONIALS: {
    name: string;
    icon: string;
    alt: string;
    function: string;
    rating: number;
    testimonial: string;
}[] = [
    {
        name: 'Aimi Takanaga',
        icon: 'frontpage_image.webp',
        alt: 'Profile picture of Aimi Takanaga',
        function: 'Web Designer',
        rating: 4.5,
        testimonial:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
        name: 'Aimi Takanaga',
        icon: 'frontpage_image.webp',
        alt: 'Profile picture of Aimi Takanaga',
        function: 'Web Designer',
        rating: 5.0,
        testimonial:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    },
    {
        name: 'Aimi Takanaga',
        icon: 'frontpage_image.webp',
        alt: 'Profile picture of Aimi Takanaga',
        function: 'Web Designer',
        rating: 5.0,
        testimonial:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
];

export const FOOTER_LINKS: {
    title: string;
    href: string;
    download: boolean;
}[] = [
    {
        title: 'GitHub',
        href: 'https://github.com/Timgeenen',
        download: false,
    },
    {
        title: 'LinkedIn',
        href: 'https://www.linkedin.com/in/tim-geenen-62959a302/',
        download: false,
    },
    {
        title: 'FreeCodeCamp',
        href: 'https://www.freecodecamp.org/fcc57f784ce-2e62-4bc7-acb9-6d5f185a3375',
        download: false,
    },
    {
        title: 'Resume',
        href: 'Resume Tim Geenen.pdf',
        download: true,
    },
];

export const COLOR_SCHEMES: ColorSchemeData[] = [
    {
        scheme: 'orange',
        primary_color1: 'rgba(253, 111, 0, 1)',
        primary_color2: 'rgba(226, 55, 47, 1)',
    },
    {
        scheme: 'purple',
        primary_color1: 'rgba(219, 48, 105, 1)',
        primary_color2: 'rgba(138, 79, 255, 1)',
    },
    {
        scheme: 'blue',
        primary_color1: 'rgba(128, 255, 232, 1)',
        primary_color2: 'rgba(0, 161, 228, 1)',
    },
    {
        scheme: 'green',
        primary_color1: 'rgba(50, 232, 117, 1)',
        primary_color2: 'rgba(246, 174, 45, 1)',
    },
    {
        scheme: 'redblue',
        primary_color1: 'rgba(214, 40, 40, 1)',
        primary_color2: 'rgba(18, 21, 248, 1)',
    },
];
