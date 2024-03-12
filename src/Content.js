import Meditation from './Assets/programs/Meditation.jpg'
import Nunchack from './Assets/programs/Nunchack.png'
// import Karate from './Assets/programs/Shotokan-karate.png'
import Karate from './Assets/programs/Karate.jpg'
import Silambam from './Assets/programs/Silambam.jpg'
import Varmam from './Assets/programs/Varmam.png'


export const content = {

    nav: [
        { title: "Programs", path: "#programs" },
        { title: "About us", path: "#about" },
        { title: "Gallery", path: "#media" },
        { title: "Team", path: "#team" },
        { title: "Contact us", path: "#contact" }
    ],

    programData: [
        {
            title: 'Shotokan Karate',
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto explicabo non quas impedit exercitationem suscipit praesentium tempora dicta, facilis nihil amet deserunt delectus ut, provident, molestias odio laudantium voluptates velit!",
            image: Karate,
            link: '',
            // gridStyle:''
        },
        {
            title: 'Nunchack',
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto explicabo non quas impedit exercitationem suscipit praesentium tempora dicta, facilis nihil amet deserunt delectus ut, provident, molestias odio laudantium voluptates velit!",
            image: Nunchack,
            link: ''
        },
        {
            title: 'Silambam',
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto explicabo non quas impedit exercitationem suscipit praesentium tempora dicta, facilis nihil amet deserunt delectus ut, provident, molestias odio laudantium voluptates velit!",
            image: Silambam,
            link: ''
        },
        {
            title: 'Yoga & Meditation',
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto explicabo non quas impedit exercitationem suscipit praesentium tempora dicta, facilis nihil amet deserunt delectus ut, provident, molestias odio laudantium voluptates velit!",
            image: Meditation,
            link: ''
        },
        {
            title: 'Varmam',
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto explicabo non quas impedit exercitationem suscipit praesentium tempora dicta, facilis nihil amet deserunt delectus ut, provident, molestias odio laudantium voluptates velit!",
            image: Varmam,
            link: ''
        },
    ],

    team : [
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
}