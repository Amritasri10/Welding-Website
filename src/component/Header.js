import React from 'react'
import { Link } from 'react-router-dom'
function Header() {
  return (
    <>
        {/* <!-- Topbar Start --> */}
    <div className="container-fluid bg-primary text-white d-none d-lg-flex wow fadeIn" data-wow-delay="0.1s">
        <div className="container py-3">
            <div className="d-flex align-items-center">
                <Link to="/">
                    <h2 className="text-white fw-bold m-0">WELDORK</h2>
                </Link>
                <div className="ms-auto d-flex align-items-center">
                    <small className="ms-4"><i className="fa fa-map-marker-alt me-3"></i>123 Street, New York, USA</small>
                    <small className="ms-4"><i className="fa fa-envelope me-3"></i>info@example.com</small>
                    <small className="ms-4"><i className="fa fa-phone-alt me-3"></i>+012 345 67890</small>
                    <div className="ms-3 d-flex">
                        <Link className="btn btn-sm-square btn-light text-primary ms-2" to=""><i
                                className="fab fa-facebook-f"></i></Link>
                        <Link className="btn btn-sm-square btn-light text-primary ms-2" to=""><i
                                className="fab fa-twitter"></i></Link>
                        <Link className="btn btn-sm-square btn-light text-primary ms-2" to=""><i
                                className="fab fa-linkedin-in"></i></Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Topbar End -->


    <!-- Navbar Start --> */}
    <div className="container-fluid bg-white sticky-top wow fadeIn" data-wow-delay="0.1s">
        <div className="container">
            <nav className="navbar navbar-expand-lg bg-white navbar-light p-lg-0">
                <Link to="index" className="navbar-brand d-lg-none">
                    <h1 className="fw-bold m-0">WELDORK</h1>
                </Link>
                <button type="button" className="navbar-toggler me-0" data-bs-toggle="collapse"
                    data-bs-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav">
                        <Link to="/" className="nav-item nav-link active">Home</Link>
                        <Link to="/About" className="nav-item nav-link">About</Link>
                        <Link to="/user" className="nav-item nav-link">User</Link>
                        {/* <Link to="/Service" className="nav-item nav-link">Services</Link>
                        <div className="nav-item dropdown">
                            <Link to="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</Link>
                            <div className="dropdown-menu bg-light rounded-0 rounded-bottom m-0">
                                <Link to="feature" className="dropdown-item">Features</Link>
                                <Link to="team" className="dropdown-item">Our Team</Link>
                                <Link to="testimonial" className="dropdown-item">Testimonial</Link>
                                <Link to="appoinment" className="dropdown-item">Appoinment</Link>
                                <Link to="404.html" className="dropdown-item">404 Page</Link>
                            </div>
                        </div> */}
                        <Link to="contact" className="nav-item nav-link">Contact</Link>
                    </div>
                    <div className="ms-auto d-none d-lg-block">
                        <Link to="" className="btn btn-primary py-2 px-3">Get A Quote</Link>
                    </div>
                </div>
            </nav>
        </div>
    </div>
    {/* <!-- Navbar End -->*/}
    </>
  )
}

export default Header