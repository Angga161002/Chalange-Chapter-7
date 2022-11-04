const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg ">
      <div className="container">
        <img className="img-fluid" src="images/logo.png" style={{ width: "100px" }} />
        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse offcanvas offcanvas-end" data-bs-scroll="true" id="offcanvasWithBothOptions" tabIndex="-1">
          <div className="offcanvas-header w-100 align-items-center">
            <h2 className="mb-0">BCR</h2>
            <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item ">
              <a className="nav-link active" aria-current="page" href="#our-service">
                Our Service
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#why-us">
                Why Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#testimonial">
                Testimonial
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#faq">
                FAQ
              </a>
            </li>
            <form className="form-inline my-2 my-lg-0">
              <button className="btn btn-success my-2 my-sm-0" type="submit">
                Register
              </button>
            </form>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
