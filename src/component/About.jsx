import React from 'react'
import { Link } from 'react-router-dom'
function About() {
  return (
    <>
         {/* <!-- Page Header Start --> */}
    <div className="container-fluid page-header pt-5 mb-6 wow fadeIn" data-wow-delay="0.1s">
        <div className="container text-center pt-5">
            <div className="row justify-content-center">
                <div className="col-lg-7">
                    <div className="bg-white p-5">
                        <h1 className="display-6 text-uppercase mb-3 animated slideInDown">About</h1>
                        <nav aria-label="breadcrumb animated slideInDown">
                            <ol className="breadcrumb justify-content-center mb-0">
                                <li className="breadcrumb-item"><Link href="#">Home</Link></li>
                                <li className="breadcrumb-item"><Link href="#">Pages</Link></li>
                                <li className="breadcrumb-item" aria-current="page">About</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Page Header End --> */}


        {/* <!-- About Start --> */}
      <div className="container-fluid pt-6 pb-6">
          <div className="container">
              <div className="row g-5">
                  <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                      <div className="about-img">
                          <img className="img-fluid w-100" src="img/about.jpg" alt=""/>   
                      </div>
                  </div>
                  <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                      <h1 className="display-6 text-uppercase mb-4">Ultimate Welding and Quality Metal Solutions</h1>
                      <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tellus augue,
                          iaculis id elit eget, ultrices pulvinar tortor. Quisque vel lorem porttitor, malesuada arcu
                          quis, fringilla risus. Pellentesque eu consequat augue.</p>
                      <div className="row g-5 mb-4">
                          <div className="col-sm-6">
                              <div className="d-flex align-items-center">
                                  <div className="flex-shrink-0 btn-xl-square bg-light me-3">
                                      <i className="fa fa-users-cog fa-2x text-primary"></i>
                                  </div>
                                  <h5 className="lh-base text-uppercase mb-0">Certified Expert & Team</h5>
                              </div>
                          </div>
                          <div className="col-sm-6">
                              <div className="d-flex align-items-center">
                                  <div className="flex-shrink-0 btn-xl-square bg-light me-3">
                                      <i className="fa fa-tachometer-alt fa-2x text-primary"></i>
                                  </div>
                                  <h5 className="lh-base text-uppercase mb-0">Fast & Reliable Services</h5>
                              </div>
                          </div>
                      </div>
                      <p><i className="fa fa-check-square text-primary me-3"></i>Many variations of passages of lorem ipsum
                      </p>
                      <p><i className="fa fa-check-square text-primary me-3"></i>Many variations of passages of lorem ipsum
                      </p>
                      <p><i className="fa fa-check-square text-primary me-3"></i>Many variations of passages of lorem ipsum
                      </p>
                      <div className="border border-5 border-primary p-4 text-center mt-4">
                          <h4 className="lh-base text-uppercase mb-0">We’re Good in All Metal Works Using Quality Welding Tools</h4>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      {/* <!-- About End -->


      <!-- Features Start --> */}
      <div className="container-fluid pt-6 pb-6">
          <div className="container pt-4">
              <div className="row g-0 feature-row wow fadeIn" data-wow-delay="0.1s">
                  <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.3s">
                      <div className="feature-item border h-100">
                          <div className="feature-icon btn-xxl-square bg-primary mb-4 mt-n4">
                              <i className="fa fa-hammer fa-2x text-white"></i>
                          </div>
                          <div className="p-5 pt-0">
                              <h5 className="text-uppercase mb-3">Quality Welding</h5>
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tellus augue.</p>
                              <Link className="position-relative text-body text-uppercase small d-flex justify-content-between"
                                  to="#"><b className="bg-white pe-3">Read More</b> <i
                                      className="bi bi-arrow-right bg-white ps-3"></i></Link>
                          </div>
                      </div>
                  </div>
                  <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.4s">
                      <div className="feature-item border h-100">
                          <div className="feature-icon btn-xxl-square bg-primary mb-4 mt-n4">
                              <i className="fa fa-dollar-sign fa-2x text-white"></i>
                          </div>
                          <div className="p-5 pt-0">
                              <h5 className="text-uppercase">Affordable Pricing</h5>
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tellus augue.</p>
                              <Link className="position-relative text-body text-uppercase small d-flex justify-content-between"
                                  to="#"><b className="bg-white pe-3">Read More</b> <i
                                      className="bi bi-arrow-right bg-white ps-3"></i></Link>
                          </div>
                      </div>
                  </div>
                  <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.5s">
                      <div className="feature-item border h-100">
                          <div className="feature-icon btn-xxl-square bg-primary mb-4 mt-n4">
                              <i className="fa fa-check-double fa-2x text-white"></i>
                          </div>
                          <div className="p-5 pt-0">
                              <h5 className="text-uppercase">Best Welder</h5>
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tellus augue.</p>
                              <Link className="position-relative text-body text-uppercase small d-flex justify-content-between"
                                  to="#"><b className="bg-white pe-3">Read More</b> <i
                                      className="bi bi-arrow-right bg-white ps-3"></i></Link>
                          </div>
                      </div>
                  </div>
                  <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.6s">
                      <div className="feature-item border h-100">
                          <div className="feature-icon btn-xxl-square bg-primary mb-4 mt-n4">
                              <i className="fa fa-tools fa-2x text-white"></i>
                          </div>
                          <div className="p-5 pt-0">
                              <h5 className="text-uppercase">Quality Tools</h5>
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tellus augue.</p>
                              <Link className="position-relative text-body text-uppercase small d-flex justify-content-between"
                                  to="#"><b className="bg-white pe-3">Read More</b> <i
                                      className="bi bi-arrow-right bg-white ps-3"></i></Link>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      {/* <!-- Features End -->


      <!-- Team Start --> */}
      <div className="container-fluid team pt-6 pb-6">
          <div className="container">
              <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: '600px'}}>
                  <h1 className="display-6 text-uppercase mb-5">Meet Our Professional and Experience Welder</h1>
              </div>
              <div className="row g-4">
                  <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                      <div className="team-item">
                          <div className="position-relative overflow-hidden">
                              <img className="img-fluid w-100" src="img/team-1.jpg" alt=""/>
                              <div className="team-social">
                                  <Link className="btn btn-square btn-dark mx-1" to=""><i className="fab fa-facebook-f"></i></Link>
                                  <Link className="btn btn-square btn-dark mx-1" to=""><i className="fab fa-twitter"></i></Link>
                                  <Link className="btn btn-square btn-dark mx-1" to=""><i className="fab fa-linkedin-in"></i></Link>
                                  <Link className="btn btn-square btn-dark mx-1" to=""><i className="fab fa-youtube"></i></Link>
                              </div>
                          </div>
                          <div className="text-center p-4">
                              <h5 className="mb-1">Alex Robin</h5>
                              <span>Welder</span>
                          </div>
                      </div>
                  </div>
                  <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.4s">
                      <div className="team-item">
                          <div className="position-relative overflow-hidden">
                              <img className="img-fluid w-100" src="img/team-2.jpg" alt=""/>
                              <div className="team-social">
                                  <Link className="btn btn-square btn-dark mx-1" to=""><i className="fab fa-facebook-f"></i></Link>
                                  <Link className="btn btn-square btn-dark mx-1" to=""><i className="fab fa-twitter"></i></Link>
                                  <Link className="btn btn-square btn-dark mx-1" to=""><i className="fab fa-linkedin-in"></i></Link>
                                  <Link className="btn btn-square btn-dark mx-1" to=""><i className="fab fa-youtube"></i></Link>
                              </div>
                          </div>
                          <div className="text-center p-4">
                              <h5 className="mb-1">Andrew Bon</h5>
                              <span>Welder</span>
                          </div>
                      </div>
                  </div>
                  <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                      <div className="team-item">
                          <div className="position-relative overflow-hidden">
                              <img className="img-fluid w-100" src="img/team-3.jpg" alt=""/>
                              <div className="team-social">
                                  <Link className="btn btn-square btn-dark mx-1" to=""><i className="fab fa-facebook-f"></i></Link>
                                  <Link className="btn btn-square btn-dark mx-1" to=""><i className="fab fa-twitter"></i></Link>
                                  <Link className="btn btn-square btn-dark mx-1" to=""><i className="fab fa-linkedin-in"></i></Link>
                                  <Link className="btn btn-square btn-dark mx-1" to=""><i className="fab fa-youtube"></i></Link>
                              </div>
                          </div>
                          <div className="text-center p-4">
                              <h5 className="mb-1">Martin Tompson</h5>
                              <span>Welder</span>
                          </div>
                      </div>
                  </div>
                  <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.6s">
                      <div className="team-item">
                          <div className="position-relative overflow-hidden">
                              <img className="img-fluid w-100" src="img/team-4.jpg" alt=""/>
                              <div className="team-social">
                                  <Link className="btn btn-square btn-dark mx-1" to=""><i className="fab fa-facebook-f"></i></Link>
                                  <Link className="btn btn-square btn-dark mx-1" to=""><i className="fab fa-twitter"></i></Link>
                                  <Link className="btn btn-square btn-dark mx-1" to=""><i className="fab fa-linkedin-in"></i></Link>
                                  <Link className="btn btn-square btn-dark mx-1" to=""><i className="fab fa-youtube"></i></Link>
                              </div>
                          </div>
                          <div className="text-center p-4">
                              <h5 className="mb-1">Clarabelle Samber</h5>
                              <span>Welder</span>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      {/* <!-- Team End -->

      
      <!-- Newsletter Start --> */}
      <div className="container-fluid newsletter mt-6 wow fadeIn" data-wow-delay="0.1s">
          <div className="container pb-5">
              <div className="bg-white p-5 mb-5">
                  <div className="row g-5">
                      <div className="col-md-6 wow fadeIn" data-wow-delay="0.3s">
                          <h1 className="display-6 text-uppercase mb-4">Newsletter</h1>
                          <div className="d-flex">
                              <i className="far fa-envelope-open fa-3x text-primary me-4"></i>
                              <p className="fs-5 fst-italic mb-0">Dolores sed duo clita tempor justo dolor et stet lorem kasd labore lorem ipsum.</p>
                          </div>
                      </div>
                      <div className="col-md-6 wow fadeIn" data-wow-delay="0.5s">
                          <div className="form-floating mb-3">
                              <input type="email" className="form-control border-0 bg-light" id="mail" placeholder="Your Email"/>
                              <label htmlFor="mail">Your Email</label>
                          </div>
                          <button className="btn btn-primary w-100 py-3" type="submit">Submit Now</button>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      {/* <!-- Newsletter End --> */}

    </>
  )
}

export default About