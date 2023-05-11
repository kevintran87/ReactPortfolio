import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"
import mock5 from "../img/mock5.png"


export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];


export const info = {
    firstName: "Kevin",
    lastName: "Tran",
    initials: "kt", 
    position: "a Future Front End Developer",
    selfPortrait: self,
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, 
    baseColor: colors[0],
    miniBio: [ 
        {
            emoji: '🥐',
            text: 'croissant lover'
        },
        {
            emoji: '🌎',
            text: 'based in the US'
        },
        {
            emoji: "🖥",
            text: "Freelance Web Developer"
        },
        {
            emoji: "📧",
            text: "kevinqtran@mail.com"
        }
    ],
    socials: [
   
        {
            link: "https://github.com/kevintran87",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/kevin-tran-b7a96194",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
   
    ],
    bio: "Hello! I'm Kevin. I was in medical sales for the last 10 years and am now making a transition into tech. I enjoy building websites to help maintain or expand and grow your business. You should hire me!",
    skills:
        {
            proficientWith: ['javascript', 'react', 'nodejs', 'github', 'bootstrap', 'html5', 'css3', 'figma'],
            exposedTo: ['mysql', 'python', 'adobe illustrator']
        }
    ,
    hobbies: [
        {
            label: 'sports',
            emoji: '🏈'
        },
        {
            label: 'traveling',
            emoji: '🛩'
        },
        {
            label: 'movies',
            emoji: '🎥'
        },
        {
            label: 'cooking',
            emoji: '🌶'
        }

    ],
    portfolio: [ 
        {
            title: "Your BF",
            live: "https://the-best-grouppe.github.io/Your-fridge-and-your-bar/", 
            source: "https://github.com/The-Best-Grouppe/Your-fridge-and-your-bar",
            image: mock1
        },
        {
            title: "Our Vacation",
            live: "https://github.com/sickOfYourCodes/Group-Travel-Planner",
            source: "https://github.com/sickOfYourCodes/Group-Travel-Planner",
            image: mock2
        },
        {
            title: "Weather App",
            live: "https://kevintran87.github.io/mod6/",
            source: "https://github.com/kevintran87/mod6",
            image: mock3
        },
        {
            title: "Work Day Scheduler",
            live: "https://kevintran87.github.io/mod5/",
            source: "https://github.com/kevintran87/mod5",
            image: mock4
        },
        {
            title: "Purrfect Pals",
            live: "https://cryptic-retreat-89387.herokuapp.com/",
            source: "https://github.com/talexander91/Purrfect_Pals",
            image: mock5
        }
    ]
}