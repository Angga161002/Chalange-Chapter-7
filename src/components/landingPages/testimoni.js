const Testimonial = () => {
  return (
    <section id="testimonial" className="py-5">
      <div className="container pt-5">
        <h2 className="h2 text-center">Testimonial</h2>
        <p className="text-center py-3">Berbagai review positif dari para pelanggan kami</p>
        <div id="carouselExampleControls" className="carousel slide mx-auto" style={{ maxWidth: "80%" }} data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active bg-aliceblue ">
              <div className="row mx-4 my-5">
                <div className="col-xl-2 m-auto">
                  <img src="images/photo1-testimoni.png" className="d-block testimonial-img m-auto" alt="Person" />
                </div>
                <div className="col-xl-10">
                  <img src="images/Rate.png" className="testimonial-rating" alt="Rating" />
                  <p className="testimonial-text">
                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”
                  </p>
                  <p className="testimonial-name">John Dee 32, Bromo</p>
                </div>
              </div>
            </div>
            <div className="carousel-item bg-aliceblue">
              <div className="row mx-4 my-5">
                <div className="col-xl-2 m-auto">
                  <img src="images/photo2-testimoni.png" className="d-block testimonial-img m-auto" alt="Person" />
                </div>
                <div className="col-xl-10">
                  <img src="images/Rate.png" className="testimonial-rating" alt="Rating" />
                  <p className="testimonial-text">
                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod””
                  </p>
                  <p className="testimonial-name">John Dee 32, Bromo</p>
                </div>
              </div>
            </div>
            <div className="carousel-item bg-aliceblue">
              <div className="row mx-4 my-5">
                <div className="col-xl-2 m-auto">
                  <img src="images/photo1-testimoni.png" className="d-block testimonial-img m-auto" alt="Person" />
                </div>
                <div className="col-xl-10">
                  <img src="images/Rate.png" className="testimonial-rating" alt="Rating" />
                  <p className="testimonial-text">
                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod””
                  </p>
                  <p className="testimonial-name">John Dee 32, Bromo</p>
                </div>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
          </button>
          <div className="text-center">
            <a type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev" className="testimonial-media">
              &#8249;
            </a>
            <a type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next" className="testimonial-media">
              &#8250;
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
