import { FaBootstrap, FaCss3Alt, FaGithub, FaHtml5, FaLinkedinIn } from "react-icons/fa";
import { IoLogoFirebase, IoLogoJavascript } from "react-icons/io5";
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";

// for project 1
import project1Img1 from '../assets/Project1/1.png'
import project1Img2 from '../assets/Project1/2.png'
import project1Img3 from '../assets/Project1/3.png'
import project1Img4 from '../assets/Project1/4.png'
import project1Img5 from '../assets/Project1/5.png'
import project1Img6 from '../assets/Project1/6.png'
import project1Img7 from '../assets/Project1/7.png'
import project1Img8 from '../assets/Project1/8.png'

// for project 2
import project2Img1 from '../assets/Project2/1.png'
import project2Img2 from '../assets/Project2/2.png'
import project2Img3 from '../assets/Project2/3.png'
import project2Img4 from '../assets/Project2/4.png'
import project2Img5 from '../assets/Project2/5.png'
import project2Img6 from '../assets/Project2/6.png'
import project2Img7 from '../assets/Project2/7.png'

// for project 3
import project3Img1 from '../assets/Project3/1.png'
import project3Img2 from '../assets/Project3/2.png'
import project3Img3 from '../assets/Project3/3.png'
import project3Img4 from '../assets/Project3/4.png'
import project3Img5 from '../assets/Project3/5.png'

// for project 4
import project4Img1 from '../assets/Project4/1.png'
import project4Img2 from '../assets/Project4/2.png'
import project4Img3 from '../assets/Project4/3.png'
import project4Img4 from '../assets/Project4/4.png'

// socialIcons
import { FaFacebookF } from "react-icons/fa";

const skillsSubTitle = "Crazy full stack developer who wants to explore every tech stack";

// skillsIcons
const skillsIcons = [
    {
        icon: <FaHtml5 />,
        title: "Html-5"
    },
    {
        icon: <FaCss3Alt />,
        title: "css3"
    },
    {
        icon: <FaBootstrap />,
        title: "Bootstrap"
    },
    {
        icon: <IoLogoJavascript />,
        title: "JavaScript"
    },
    {
        icon: <RiReactjsLine />,
        title: "reactjs"
    },
    {
        icon: <IoLogoFirebase />,
        title: "firebase"
    },
    {
        icon: <TbBrandNextjs />,
        title: "Nextjs"
    },
];

// skillsList
const skillsList = [
    "Develop highly interactive Front end / User Interfaces for your websites.",
    "Integration of third party services such as Firebase.",
    "Easily create responsive sites."
]

// servicesList
const servicesList = [
    {
        title: "Website Development",
        description: "Create responsive and interactive websites for individuals, businesses, or organizations using your skills in HTML5, CSS3, JavaScript, and Bootstrap. Ensure that the websites are mobile-friendly and optimized for various devices and screen sizes."
    },
    {
        title: "Frontend Development",
        description: "Specialize in frontend development by building user interfaces (UIs) and user experiences (UX) using HTML5, CSS3, JavaScript, and React.js. Develop single-page applications (SPAs) and ensure they are fast, responsive, and accessible."
    },
    {
        title: "Custom Web Applications",
        description: "Utilize React.js along with backend technologies (like Node.js, Express.js, or others) to develop custom web applications. Use Firebase for real-time data syncing and backend services, such as authentication, databases, and hosting."
    },
    {
        title: "Web Hosting and Deployment",
        description: "Assist clients in deploying their websites and web applications to hosting platforms such as Firebase Hosting, Netlify, or traditional web servers. Optimize website performance and ensure secure connections (HTTPS)."
    },
    {
        title: "Maintenance and Updates",
        description: "Offer maintenance services to keep websites and web applications up-to-date with security patches, performance improvements, and feature enhancements. Provide regular backups and monitoring for uptime."
    },
    {
        title: "Responsive Design Audits",
        description: "Evaluate existing websites for responsiveness across devices and browsers. Provide recommendations and implement improvements using CSS3 media queries and responsive design principles."
    },
    {
        title: "Integration with APIs",
        description: "Integrate third-party APIs (such as social media APIs, or data APIs) into web applications using JavaScript and frameworks like React.js. Ensure secure and efficient data exchange between systems."
    },
]

// portfolio
const portfolio = [
    {
        images: [
            project1Img1,
            project1Img2,
            project1Img3,
            project1Img4,
            project1Img5,
            project1Img6,
            project1Img7,
            project1Img8,
        ],
        title: "RestaurantHub",
        description: "Streamlined restaurant website with easy navigation. Explore restaurants and menus, sign in to securely add items to your cart. Admins enjoy intuitive management, adding restaurants, and CRUD operations on menu items. Elevate your dining experience with RestaurantHub.",
        link: "https://restauranthub.vercel.app/"
    },
    {
        images: [
            project2Img1,
            project2Img2,
            project2Img3,
            project2Img4,
            project2Img5,
            project2Img6,
            project2Img7,
        ],
        title: "Dentist Website",
        description: "I have created a dentist website using React and Firebase, where users can perform CRUD operations on patient data after logging in. The website also provides daily and monthly data views. Additionally, users can manage pre-received amounts of patients through CRUD operations.",
        link: "https://react-dentist-website.vercel.app/"
    },
    {
        images: [
            project3Img1,
            project3Img2,
            project3Img3,
            project3Img4,
            project3Img5,
        ],
        title: "Blogging Website",
        description: "I've built a responsive blog website with JavaScript for seamless data operations using Firebase. Security is a top priority, leveraging Firebase features to protect user data. The focus is on delivering a precise, secure, and user-friendly blogging experience.",
        link: "https://blogging-website-huzaifa.vercel.app/"
    },
    {
        images: [
            project4Img1,
            project4Img2,
            project4Img3,
            project4Img4,
        ],
        title: "Todo Website",
        description: "I have developed a fully responsive todo website that efficiently stores data for each user, and authentication is implemented using Firebase, ensuring secure access to user accounts. Users can perform CRUD operations on todos within the website, enhancing productivity within the platform.",
        link: "https://firebase-todo-huzaifa.vercel.app/"
    },
]

// contact
const contact = {
    number: "+923492089094",
    email: "zainarfeen87@gmail.com",
    location: "Metroville S.I.T.E. Karachi."
}

// socialLinks
const socialLinks = [
    {
        icon: <FaGithub />,
        link: "https://github.com/ZainKhan25"
    },
    {
        icon: <FaLinkedinIn />,
        link: "https://www.linkedin.com/in/zain-khan-officia/"
    }
]

export { skillsSubTitle, skillsIcons, skillsList, servicesList, portfolio, contact, socialLinks }