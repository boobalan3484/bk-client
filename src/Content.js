import Meditation from './Assets/programs/Meditation.jpg'
import Nunchack from './Assets/programs/Nunchack.png'
import Karate from './Assets/programs/Karate.jpg'
import Silambam from './Assets/programs/Silambam.jpg'
import Varmam from './Assets/programs/Varmam.png'

import { FaFacebookF, FaXTwitter, FaInstagram, FaYoutube } from "react-icons/fa6";

export const content = {

    nav: [
        { title: "programs", path: "programs" },
        { title: "about", path: "about" },
        { title: "team", path: "team" },
        { title: "gallery", path: "media" },
        { title: "contact", path: "contact" }
    ],

    programData: [
        {
            title: 'Shotokan Karate',
            description: "Elevate your martial arts journey in Shotokan Karate, our dojo offers expert instruction for all skill levels. Experience the tradition, discipline, and camaraderie of authentic karate training. Join our community today to unlock your full potential, both on and off the mat.",
            image: Karate,
            link: '',
        },
        {
            title: 'Nunchack',
            description: "Dive into the art of nunchaku with expert guidance from seasoned instructors. Explore the rich history and dynamic techniques of this iconic martial arts weapon. Join our community to master your skills, enhance coordination, and unleash the power of the nunchuck. Start your journey today!",
            image: Nunchack,
            link: ''
        },
        {
            title: 'Silambam',
            description: " Immerse yourself in the ancient art of Silambam, a traditional Indian martial art. Our experienced instructors offer comprehensive training in staff combat techniques, fostering strength, agility, and mental focus. Join our vibrant community to explore this dynamic martial art and unlock your full potential. Begin your journey today!",
            image: Silambam,
            link: ''
        },
        {
            title: 'Yoga & Meditation',
            description: "Dive into the practice of yoga and meditation with our expert instructors. Discover inner peace, improve flexibility, and enhance mindfulness through a variety of classes tailored to all levels. Join our supportive community and embark on your journey to holistic well-being today.",
            image: Meditation,
            link: ''
        },
        {
            title: 'Varmam',
            description: "Explore the intricate art of Varmam, an ancient Indian practice blending pressure points, energy flow, and combat techniques. Our experienced instructors guide you through this profound discipline, fostering wellness, self-defense skills, and spiritual growth. Join us today.",
            image: Varmam,
            link: ''
        },
    ],

    team: [
        {
            avatar: "https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
            name: "Martiana dialan",
            title: "Product designer",
            linkedin: "https://www.linkedin.com/",
            twitter: "https://twitter.com/",

        },
        {
            avatar: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
            name: "Micheal colorand",
            title: "Software engineer",
            linkedin: "https://www.linkedin.com/",
            twitter: "https://twitter.com/",

        },
        {
            avatar: "https://randomuser.me/api/portraits/women/79.jpg",
            name: "Brown Luis",
            title: "Full stack engineer",
            linkedin: "https://www.linkedin.com/",
            twitter: "https://twitter.com/",

        },
        {
            avatar: "https://randomuser.me/api/portraits/women/63.jpg",
            name: "Lysa sandiago",
            title: "Head of designers",
            linkedin: "https://www.linkedin.com/",
            twitter: "https://twitter.com/",

        },
        {
            avatar: "https://randomuser.me/api/portraits/men/86.jpg",
            name: "Daniel martin",
            title: "Product designer",
            linkedin: "https://www.linkedin.com/",
            twitter: "https://twitter.com/",
        },
        {
            avatar: "https://randomuser.me/api/portraits/men/46.jpg",
            name: "Vicky tanson",
            title: "Product manager",
            linkedin: "https://www.linkedin.com/",
            twitter: "https://twitter.com/",
        },
    ],

    images: [
        {
            set1:
                [
                    {
                        id: 1,
                        src: "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
                        alt: "image 1"
                    },
                    {
                        id: 2,
                        src: "https://images.unsplash.com/photo-1432462770865-65b70566d673?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
                        alt: "image 2"
                    },
                    {
                        id: 3,
                        src: "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80",
                        alt: "image 3"
                    }
                ],
            set2: [
                {
                    id: 4,
                    src: "https://images.unsplash.com/photo-1432462770865-65b70566d673?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
                    alt: "image 4"
                },
                {
                    id: 5,
                    src: "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80",
                    alt: "image 5"
                },
                {
                    id: 6,
                    src: "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
                    alt: "image 6"
                }
            ],
            set3: [
                {
                    id: 7,
                    src: "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80",
                    alt: "image 7"
                },
                {
                    id: 8,
                    src: "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
                    alt: "image 8"
                },
                {
                    id: 9,
                    src: "https://images.unsplash.com/photo-1432462770865-65b70566d673?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
                    alt: "image 9"
                }
            ]
        }
    ],

    contactMethods: [
        {
            contact: [
                {
                    icon:
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                        </svg>
                    ,
                    contact: "Mountain View, California, United State."
                },
                {
                    icon:
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                        </svg>
                    ,
                    contact: "boharkaratetrainingschool@gmail.com",
                    link: 'https://mailto/boharkaratetrainingschool@gmail.com'

                },
                {
                    icon:
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                        </svg>
                    ,
                    contact: "+91 7894561230",
                    link: 'https://wa.me/+917894561230'
                },
            ],
            locationTiming: [
                {
                    name: "Near Govt. Primary Health Centre, Periyamanali ",
                    days: "SUN: 07.00 AM - 09.00 AM",
                    status: "Active",
                    link: 'https://maps.app.goo.gl/bexWKrKZ7Bou9evM8'
                },
                {
                    name: "Near Sivan Temple, Iluppili",
                    days: "SAT: 07.00 AM - 09.00 AM",
                    status: "Active",
                    link: 'https://maps.app.goo.gl/XNvdNEyMKr3vxWXR8'
                },
                {
                    name: "Near Vazhakuttapatti, Mallur",
                    days: "WED & SUN: 05.30 PM - 07.00 PM",
                    status: "Archived",
                    link: ''
                }
            ],
        }
    ],
    socialMedia: [
        {
            name: 'Youtube',
            icon: FaYoutube,
            link: 'https://youtube.com/',
            color: 'text-red-400',
        },
        {
            name: 'Facebook',
            icon: FaFacebookF,
            link: 'https://facebook.com/',
            color: 'text-blue-400',
        },

        {
            name: 'Instagram.',
            icon: FaInstagram,
            link: 'https://instagramS.com/',
            color: 'text-pink-400',
        },
        {
            name: 'Twitter.',
            icon: FaXTwitter,
            link: 'https://twitter.com/',
            color: 'text-black-400',
        },
    ]

}