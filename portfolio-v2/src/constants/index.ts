import {
  backend,
  creator,
  web,
  pk,
  simplyDoc,
  streetVendors,
  attendance,
} from "../assets";

export const navLinks = [
  {
    href: "about",
    title: "About",
  },
  {
    href: "work",
    title: "Work",
  },
  {
    href: "blog",
    title: "Blogs",
  },
  {
    href: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const experiences = [
  {
    title: "Full Stack Developer",
    company_name: "PK Innovatives - Project Intern",
    icon: pk,
    iconBg: "#E6DEDD",
    date: "JUNE 2023 - AUG 2023",
    points: [
      "Working in an Attendance and Inventory Management project as a Full-stack developer.",
      "Used Angular, NgZorro for Front-end and NodeJs, Express, SQLite for the back-end.",
      "JWT authentication and Role-based user login.",
      "Pagination, Sorting, and Searching with debounce for increasing performance and reduce load on both server and client side.",
      "Final Report generation and can be downloaded as excel or pdf.",
    ],
  },
  {
    title: "Attendance Management System",
    company_name: "For Panimalar Engg. College - Backend Developer",
    icon: attendance,
    iconBg: "#383E56",
    date: "Feb 2023 - Mar 2023",
    points: [
      "Multi-tenant application in which mentors onboard by admin and add attendance to their students assigned by the admin.",
      "Admins can add students and mentors and assign mentors to students.",
      "Mentors add attendance to their students and can view the attendance of their students.",
      "Mentors can download the analytic of student attendance based on multiple filters.",
      "Pagination, Sorting, and Searching with debounce for increasing performance and reduce load on both server and client side.",
    ],
  },
  {
    title: "Game-Hub",
    company_name: "Personal Project",
    icon: streetVendors,
    iconBg: "#E6DEDD",
    date: "July 2022 - Oct 2022",
    points: [
      "This application is built using the custom React hooks to improve performance.",
      "Each API call is made using parameterized queries to minimize the Api call duration and server-side pagination is done to reduce the load on the client side.",
    ],
  },
  {
    title: "Dev-Talk",
    company_name: "Personal Project",
    icon: simplyDoc,
    iconBg: "#383E56",
    date: "Ongoing...",
    points: [
      "Multi-tenant application in which doctors and hospitals can onboard by admin and update their availability schedule.",
      "The Application exhibits the posts that is uploaded by the other users in the application and user can also view related posts in the homepage.",
      "Used React, AntDesign for Front-end",
      "The authentication and authorization are implemented using JWT.",
      "Users can register a separate account and can login to the existing account and write and post new blogs.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

export { services, experiences, testimonials };
