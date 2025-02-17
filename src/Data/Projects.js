import podcast from '../components/images/projectimgs/podcast.png';
import quizapp from '../components/images/projectimgs/quizapp.png';
import Ems from '../components/images/projectimgs/ems.png';
import Todo from '../components/images/projectimgs/todo.png';
const projects = [
    
    {
        "title": "Podcast web",
        "image": podcast,
        "description": "This is a web application for streaming podvibe with the following features: User authentication Podcast search functionality Popular podcasts displayed on the main dashboard Admin panel for creating and adding new podcasts Favourite Podcasts Pause podcasts and come back play at same time Getting Started To use the application, simply create an account and log in. From there, you can search for podcasts, view popular podcasts on the main dashboard, and listen to podcasts. Admin users can access the admin panel to create and add new podcasts, which will be displayed on the main dashboard.",
        "skills": ["React","Express","Node", "MongoDB", "Firebase","GoogleAuth"],
        "github": "https://github.com/shrikant215/new_podvibe",
        "webapp": "https://podvibe-srjk-91bde6.netlify.app"
    },
    {
        "title": "TaskTamer",
        "image": Ems,
        "description": "TaskTamer is a web application designed to streamline task management and enhance productivity in the workplace. It provides a user-friendly interface for employers to keep track of their employees' daily work activities and empowers employees to log their tasks efficiently. Admin Credentials: # Email: admin@example.com #Password- 123, Employee Credentials: #Email: employee1@example.com #Password- 123",
        "skills": ["Vite","Tailwind CSS","Javascript"],
        "github": "https://github.com/shrikant215/EMSwebsite/tree/master",
        "webapp": "https://ems-web-571b7a.netlify.app/"
    },
    // {
    //     "title": "Zomato clone",
    //     "image":"https://restaurantindia.s3.ap-south-1.amazonaws.com/s3fs-public/news16787.jpg",
    //     "description": "Designed and developed a Zomato clone web application using the MERN stack. Implemented key features such as user authentication, restaurant search, menu browsing, ordering, and payment processing. Integrated Google Maps API for location-based services and enhanced user experience. Conducted thorough testing and debugging to ensure functionality and security. Collaborated with a team to gather requirements and deliver a high-quality product meeting client specifications and deadlines.",
    //     "skills": ["React","Express","Node", "MongoDB","Material UI"],
    //     "github": "https://github.com/shrikant215/zomatoWebApp",
    //     "webapp": ""
    // },
    {
        "title": "Quiz Application",
        "image": quizapp,
        "description": "Developed a user-friendly quiz application from scratch using the MERN (MongoDB, Express.js, React, Node.js) stack. Implemented essential features like scoring, time limits, and dynamic question generation to enhance user engagement. Conducted comprehensive testing and debugging to ensure seamless performance across different devices. Collaborated closely with stakeholders to gather requirements and delivered a polished product on time.",
        "skills": ["React","Express","Node", "MongoDB"],
        "github": "https://github.com/shrikant215/quiz_app",
        "webapp": "https://gentle-puppy-12abfb.netlify.app/"
    },
    {
        "title": "Todo Web App",
        "image": Todo,
        "description": "A Todo Web App made with React JS, Redux, and Material UI. It has a login page where users can log in with their Google account. It has a sidebar where users can see all the tasks and can create a new task. It has a calendar where users can see all the tasks on a particular date. It has a search bar where users can search for a particular task.",
        "skills": ["React"],
        "github": "https://github.com/shrikant215/Todo-app",
        "webapp": "todo-app-a3b2c0.netlify.app"
    },
    {
        "title": "Tourist web",
        "image":"https://skift.com/wp-content/uploads/2022/06/Italy-Frame.png",
        "description": "this is project made to learn the latest",
        "skills": ["HTML","CSS","Javascript"],
        "github": "https://github.com/shrikant215/touristWebsite",
        "webapp": ""
    },
    
]

export default projects;