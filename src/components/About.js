import React, { Fragment } from 'react'
import { SiCodechef, SiHackerrank } from 'react-icons/si';

function About() {
  return (
    <Fragment>
        <div className="col p-4"> 
            <div className="p-4 bg-dark slide-in-top">
                
                <div className="row">
                    <div className="col-6">
                        <h2 className="ff-jose fw-bold ls-2">Nivetha S</h2>
                    </div>
                </div>
                <hr></hr>
                <div className="row">
                    <div className="col-md-6">
                        <h4 className="ff-jose ls-2">EDUCATION</h4>
                        <ul>
                            <li>
                                <h4 className="ff-jose my-1 text-red">B.TECH INFORMATION TECHNOLOGY</h4>
                                <h6 className="blue-label px-2 py-1">sept 2021 - march 2025</h6>
                                <h5 className="m-0">Kongu Engineering College</h5>
                                <p>Erode, Tamil Nadu, India</p>
                            </li>
                            <li>
                                <h4 className="ff-jose my-1 text-red">HSC</h4>
                                <h6 className="blue-label px-2 py-1">2020 - 2021</h6>
                                <h5 className="m-0">Sri Vijay Vidyalaya Matric Higher Secondary School</h5>
                                <p>Dharmapuri, Tamil Nadu, India</p>
                            </li>
                            <li>
                                <h4 className="ff-jose my-1 text-red">SSCL</h4>
                                <h6 className="blue-label px-2 py-1">2019 - 2020</h6>
                                <h5 className="m-0">Sri Vijay Vidyalaya Matric Higher Secondary School</h5>
                                <p>Dharmapuri, Tamil Nadu, India</p>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-6">
                        <img className="img-fluid" style={{ width: '400px', height: '400px' }}  src="../images/education.png" alt="..."></img>

                    </div>
                </div>

                <hr></hr>
                
               
                
            </div>
        </div>
    </Fragment>
  )
}

export default About