import { Settings, CropRotate, ViewInAr, PieChart, Code, BarChart, CloudOutlined, FavoriteBorder, Public, PersonOutlined, AddLocationAltOutlined, PhoneIphone, EmailOutlined, Facebook, Twitter, Instagram, YouTube } from "@mui/icons-material"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import parathaStore from './images//parathastore.png'
import contactmanager from './images/contactmanager.png'
import ecommerce from './images/ecommerce.png'
import expensemanager from './images/expensemanager.png'
import newsapp from './images/newsapp.png'
import todoapp from './images/todoapp.png'
import netflixclone from './images/netflixclone.png'
import hulucone from './images/hulucone.png'
import noisewatch from './images/noisewatch.png'
import primevideos from './images/primevideos.png'
import rapidohome from './images/rapidohome.png'
import uifoodorder from './images/uifoodorder.png'
import hospitallandingpage from './images/hospitallandingpage.png'

export const navlink = [
  {
    url: "/",
    text: "Home",
  },
  {
    url: "/about",
    text: "About",
  },
  // {
  //   url: "/services",
  //   text: "Services",
  // },
  {
    url: "/portfolio",
    text: "Portfolio",
  },
  // {
  //   url: "/testimonials",
  //   text: "Testimonials",
  // },
  // {
  //   url: "/blog",
  //   text: "Blog",
  // },
  {
    url: "/contact",
    text: "Contact",
  },
]
export const home = [
  {
    text: "Hey! I Am ",
    name: "FREELANCER",
    post: "FRONTEND DEVELOPER",
    design: "WEB DESIGNER",
    desc: "As an Frontend Developer. I Coded using HTML, CSS and JavaScript to develop features for both mobile and desktop platforms.Translated UX and business requirements into elegant code solutions. Delivered responsive web design projects in Agile framework.Integrated web applications for mobile platforms into front end environment.",
  },
]
export const about = [
  {
    desc: "I am a front-end web developer with experience in creating responsive, visually appealing websites and user interfaces. I have a solid understanding of web development technologies, including HTML, CSS, JavaScript, and frameworks such as React.js. I am proficient in using development tools such as Git, npm, and webpack. I am dedicated to following best practices and staying up-to-date with the latest developments in the industry. I am passionate about creating user-friendly and accessible websites that provide an optimal experience for users.",
    cover: "./images/man.png",
  },
]
export const services = [
  {
    id: 1,
    icon: <Settings />,
    title: "Creative Design",
    desc: "Lorem Ipsum simply text of the printing and type setting industry when an unknown printing simply",
  },
  {
    id: 2,
    icon: <CropRotate />,
    title: "Clean Code",
    desc: "Lorem Ipsum simply text of the printing and type setting industry when an unknown printing simply",
  },
  {
    id: 3,
    icon: <ViewInAr />,
    title: "Responsive Design",
    desc: "Lorem Ipsum simply text of the printing and type setting industry when an unknown printing simply",
  },
  {
    id: 4,
    icon: <PieChart />,
    title: "Material UI	",
    desc: "Lorem Ipsum simply text of the printing and type setting industry when an unknown printing simply",
  },
  {
    id: 5,
    icon: <Code />,
    title: "Material UI Icons",
    desc: "Lorem Ipsum simply text of the printing and type setting industry when an unknown printing simply",
  },
  {
    id: 6,
    icon: <BarChart />,
    title: "Awesome Support",
    desc: "Lorem Ipsum simply text of the printing and type setting industry when an unknown printing simply",
  },
]
export const project = [
  {
    id: 1,
    icon: <CloudOutlined />,
    num: "89",
    title: "HAPPY CLIENTS",
  },
  {
    id: 2,
    icon: <FavoriteBorder />,
    num: "231",
    title: "PROJECTS COMPLEATED",
  },
  {
    id: 3,
    icon: <Public />,
    num: "108",
    title: "FILES DOWNLOADED",
  },
  {
    id: 4,
    icon: <PersonOutlined />,
    num: "1446",
    title: "LIENS OF CODE",
  },
]
export const portfolio = [
  // {
  //   id: 1,
  //   cover: "../images/port/port1.jpg",
  //   name: "Brand",
  //   category: "Live Projects",
  //   title: "Brex Logo",
  //   url:"https://theparatha-store.netlify.app/"
  // },
  {
    id: 2,
    cover: parathaStore,
    name: "The Paratha Store",
    category: "React Projects",
    title: "The Paratha Store",
    url:"https://theparatha-store.netlify.app/"
  },
  {
    id: 3,
    cover: ecommerce,
    name: "Ecommerce",
    category: "React Projects",
    title: "Ecommerce App",
    url:"https://ecommerce-shoping-app.netlify.app/"
  },
  {
    id: 4,
    cover: contactmanager,
    name: "Contact Manager",
    category: "React Projects",
    title: "Contact Manager",
    url:"https://contact-appreact.netlify.app/"
  },
  {
    id: 5,
    cover: expensemanager,
    name: "Expense Manager",
    category: "React Projects",
    title: "Expense Manager",
    url:"https://expense-manager-app.onrender.com/"
  },
  {
    id: 6,
    cover: todoapp,
    name: "Todo App",
    category: "React Projects",
    title: "Todo App",
    url:"https://todo-app-1od7.onrender.com/"
  },
  {
    id: 7,
    cover: newsapp,
    name: "News App",
    category: "React Projects",
    title: "News App",
    url:" https://newsappredux.netlify.app/"
   
  },
  {
    id: 8,
    cover: netflixclone,
    name: "Netflix Clone",
    category: "Designing",
    title: "Netflix Clone",
    url:"https://rajkumarthakur88.github.io/NetFlix-Home-Page/"
  },
  {
    id: 9,
    cover: hulucone,
    name: "Hulu Clone",
    category: "Designing",
    title: "Hulu Clone",
    url:"https://rajkumarthakur88.github.io/Hulu-Clone/"
  },
  {
    id: 10,
    cover: hospitallandingpage,
    name: "Hospital Landing Page",
    category: "Designing",
    title: "Hospital Landing Page",
    url:"https://rajkumarthakur88.github.io/Ui-Hospital-landing-page/"
  },
  {
    id: 11,
    cover: uifoodorder,
    name: "Ui Food Order",
    category: "Designing",
    title: "Ui Food Order",
    url:"https://rajkumarthakur88.github.io/Ui-food-order/"
  },
  {
    id: 12,
    cover: primevideos,
    name: "Amazon Prime Videos",
    category: "Designing",
    title: "Amazon Prime Videos",
    url:"https://rajkumarthakur88.github.io/Amazon-prime-videos/"
  },
  {
    id: 13,
    cover: noisewatch,
    name: "Noise Watch Clone",
    category: "Designing",
    title: "Noise Watch Clone",
    url:"https://rajkumarthakur88.github.io/Noise-Home/"
  },
  {
    id: 14,
    cover: rapidohome,
    name: "Rapido Homepage",
    category: "Designing",
    title: "Rapido Homepage",
    url:"https://rajkumarthakur88.github.io/Rapido_Homepage/"
  }
 
]
export const testimonials = [
  {
    id: 1,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam porttitordapibus dictum.Fusce faucibus ligula scelerisque, eleifend turpis in",
    image: "./images/testimonials/team-1.png",
    name: "Alamin Musa",
    post: "Front End Developer",
  },
  {
    id: 2,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam porttitordapibus dictum.Fusce faucibus ligula scelerisque, eleifend turpis in",
    image: "./images/testimonials/team-2.png",
    name: "Alex Ander",
    post: "Back End Developer",
  },
  {
    id: 3,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam porttitordapibus dictum.Fusce faucibus ligula scelerisque, eleifend turpis in",
    image: "./images/testimonials/team-3.png",
    name: "GorkCoder",
    post: "React Developer",
  },
]
export const blog = [
  {
    id: 1,
    title: "Master These Awesome",
    date: "Jun 27, 2022",
    author: "Dorian Gray",
    desc: "Lorem Ipsum has been standard. Lorem Ipsum is simply text of the printing and typesetting industry. Lorem Ipsum has been",
    cover: "./images/blog/b1.png",
  },
  {
    id: 2,
    title: "Best Design Items to Appeal",
    date: "Jun 27, 2022",
    author: "Dorian Gray",
    desc: "Lorem Ipsum has been standard. Lorem Ipsum is simply text of the printing and typesetting industry. Lorem Ipsum has been",
    cover: "./images/blog/b2.png",
  },
  {
    id: 3,
    title: "The 20 Best Lightroom Presets",
    date: "Jun 27, 2022",
    author: "Dorian Gray",
    desc: "Lorem Ipsum has been standard. Lorem Ipsum is simply text of the printing and typesetting industry. Lorem Ipsum has been",
    cover: "./images/blog/b3.png",
  },
]
export const contact = [
  {
    icon: <AddLocationAltOutlined />,
    text1: "77, Suraj Nagar,Bengali Square, Indore",
  },
  {
    icon: <PhoneIphone />,
    text1: "+91 8878240117",
  },
  {
    icon: <EmailOutlined />,
    text1: "thakurraju8878@gmail.com",
  },
]
export const social = [
  // {
  //   //  link:""
  //   icon: <Skype />,
  // },
  {
    link: "https://www.linkedin.com/in/rajkumar-thakur-887824abc/",
    icon: <LinkedInIcon  sx={{ fontSize: "40px",color:"#f39c12" , shadow: 'lg',marginRight:"10px" }}/>,
  },
  {
    link: "https://www.instagram.com/mr._rajkumar_singh_thakur/",
    icon: <Instagram sx={{ fontSize: "40px", color:"#f39c12" , shadow: 'lg',marginRight:"10px"}} />,
  },
  {
    link: "https://github.com/Rajkumarthakur88",
    icon: <GitHubIcon sx={{ fontSize: "40px", color:"#f39c12", shadow: 'lg' }} />,
  },
]