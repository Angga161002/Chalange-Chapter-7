const Header = () => {
  return (
    <header className="masthead text-dark " style={{ backgroundColor: "#f1f3ff" }}>
      <div className="container">
        <br />
        <br />
        <div className="row">
          <div className="col-md-6 mb-2">
            <br />
            <br />
            <h1>Sewa & Rental Mobil Terbaik di Kawasan Pariaman</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum hic ducimus minus ullam beatae cupiditate ex distinctio repellendus atque dolorum debitis reiciendis, suscipit necessitatibus voluptate itaque nihil eveniet
              tenetur quidem!
            </p>
          </div>
          <div className="col-md-6">
            <img className="mobil" src="images/img_car.png" width="662" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
