import { Settings, CropRotate, ViewInAr, PieChart, Code, BarChart, CloudOutlined, FavoriteBorder, Public, PersonOutlined, AddLocationAltOutlined, PhoneIphone, EmailOutlined, Facebook, Twitter, Instagram, YouTube } from "@mui/icons-material"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
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
  {
    id: 1,
    cover: "../images/port/port1.jpg",
    name: "Brand",
    category: "Live Projects",
    title: "Brex Logo",
  },
  {
    id: 2,
    cover: "../images/port/port2.jpg",
    name: "Brand",
    category: "Designing",
    title: "Brex Logo",
  },
 
  {
    id: 3,
    cover: "../images/port/port4.jpg",
    name: "Brand",
    category: "development",
    title: "Brex Logo",
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