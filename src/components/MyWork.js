import React, { Fragment } from 'react';
import { GrPrevious, GrNext } from 'react-icons/gr';
import { BsLaptop } from 'react-icons/bs';
import { AiFillGithub } from 'react-icons/ai';

const projects = [
  {
    id: 1,
    title: "Contact Manager",
    description: "The Contact Manager is a full-stack application built with React, Express, Node.js, and MongoDB. It allows users to efficiently manage their contacts by adding, updating, finding, and deleting entries. The application provides a seamless experience for organizing and maintaining contact information, demonstrating a robust integration of frontend and backend technologies.",
    images: ["c-1.png", "c-2.png", "c-3.png"],
    // liveLink: "https://weather-yg.herokuapp.com/",
    codeLink: "https://github.com/Nivetha-Saravana/Contact-Manager"
  },
  {
    id: 2,
    title: "Travel Booking",
    description: "The Travel Booking Website is a comprehensive platform developed using React, Express, Node.js, and MongoDB. It allows users to explore a wide range of tour destinations and seamlessly book their trips. The application combines a user-friendly interface with powerful backend functionality, providing a reliable and efficient solution for managing travel plans.",
    images: ["t-1.png", "t-2.png", "t-3.png"],
    liveLink: "https://travel-front-coral.vercel.app/", 
    codeLink: "https://github.com/Nivetha-Saravana/Travel__Frontend"
  },
  {
    id: 3,
    title: "Portfolio",
    description: "This portfolio website, crafted using React, highlights my skills. It presents a curated selection of my projects and expertise, offering a clean and responsive interface that reflects my commitment to modern web design and user experience.",
    images: ["p-1.png", "p-2.png", "p-3.png"],
    codeLink: "https://github.com/Yagnik-Gohil/NoteMarketPlaceHTML"
  },
  // {
  //   id: 4,
  //   title: "Solo",
  //   description: "A personal blog platform where users can post and manage their blogs.",
  //   images: ["solo-01.png", "solo-02.png", "solo-03.png", "solo-04.png"],
  //   liveLink: "https://solo-webapp.herokuapp.com/",
  //   codeLink: "https://github.com/Yagnik-Gohil/Solo"
  // },
  // {
  //   id: 5,
  //   title: "Resume Builder",
  //   description: "An application to create and customize resumes with ease.",
  //   images: ["resume-1.jpg", "resume-2.jpg", "resume-3.jpg", "resume-4.jpg"],
  //   liveLink: "https://resume-builder-yg.netlify.app/",
  //   codeLink: "https://github.com/Yagnik-Gohil/Resume-Builder"
  // },
  // {
  //   id: 6,
  //   title: "Natours",
  //   description: "A tour booking website with features like destination browsing and tour booking.",
  //   images: ["tour-01.png", "tour-02.png", "tour-03.jpg", "tour-04.jpg", "tour-05.jpg"],
  //   liveLink: "https://natour-yg.herokuapp.com/",
  //   codeLink: "https://github.com/Yagnik-Gohil/Natours"
  // }
];

const Carousel = ({ id, images }) => (
  <div id={`carouselExampleControls${id}`} className="carousel slide my-1" data-bs-ride="carousel">
    <div className="carousel-inner">
      {images.map((image, index) => (
        <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
          <img src={`../portfolio-images/${image}`} className="d-block w-100" alt="..." />
        </div>
      ))}
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target={`#carouselExampleControls${id}`} data-bs-slide="prev">
      <GrPrevious />
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target={`#carouselExampleControls${id}`} data-bs-slide="next">
      <GrNext />
      <span className="visually-hidden">Next</span>
    </button>
  </div>
);

const Project = ({ project }) => (
  <div className="col-md-4 text-center my-2">
    <Carousel id={project.id} images={project.images} />
    <h5 className="ff-jose my-1">{project.title}</h5>
    <p className="project-description">{project.description}</p> {/* Description added here */}
    <div className="row d-flex justify-content-center">
      {project.liveLink && (
        <a href={project.liveLink} className="col-sm-12 col-md-5 portfolio-link text-decoration-none text-white m-1 px-2 py-1 bg-blue rounded" target="_blank" rel="noopener noreferrer">
          <BsLaptop /> Watch Live
        </a>
      )}
      {project.codeLink && (
        <a href={project.codeLink} className="col-sm-12 col-md-5 portfolio-link text-decoration-none text-white m-1 px-2 py-1 bg-blue rounded" target="_blank" rel="noopener noreferrer">
          <AiFillGithub /> Source Code
        </a>
      )}
    </div>
  </div>
);

function MyWork() {
  return (
    <Fragment>
      <div className="col p-4">
        <div className="p-4 slide-in-top">
          <div className="row">
            <div className="col-6">
              <h2 className="ff-jose fw-bold ls-2">Something I've Built</h2>
            </div>
          </div>
          <hr />
          <div className="row">
            {projects.map(project => (
              <Project key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default MyWork;
