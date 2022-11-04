const Footer = () => {
  return (
    <footer className="text-center text-lg-start bg-white text-muted">
      <section className="">
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <p className="content">Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
              <p className="content">binarcarrental@gmail.com</p>
              <p className="content">081374821410</p>
            </div>

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 grid-coloum">
              <p>
                <a href="#our-service" className="text-reset">
                  Our Service
                </a>
              </p>
              <p>
                <a href="#why-us" className="text-reset">
                  Why Us
                </a>
              </p>
              <p>
                <a href="#testimonial" className="text-reset">
                  Testimonial
                </a>
              </p>
              <p>
                <a href="#faq" className="text-reset">
                  FAQ
                </a>
              </p>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <p className="content">Connect with us</p>
              <img className="img-ft" src="images/icon_facebook.jpg" />
              <img className="img-ft mx-1" src="images/icon_instagram.png" />
              <img className="img-ft mx-1" src="images/icon_twitter.jpg" />
              <img className="img-ft mx-1" src="images/icon_mail.jpg" />
              <img className="img-ft mx-1" src="images/icon_twitch.jpg" />
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="mb-4"> Copyright Binar 2022</h6>
              <img className="img-ft " src="images/Rectangle.png" />
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
