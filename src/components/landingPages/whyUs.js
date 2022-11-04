const WhyUs = () => {
  return (
    <section id="why-us">
      <div className="container">
        <div className="row">
          <div className="col-md-12 ">
            <h1 className="mb-3 why-us">Why Us?</h1>
            <p className="text-ws">Mengapa Harus Pilih Binar Car Rental ?</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3 mt-3">
            <div className="card">
              <div className="card-body" style={{ minHeight: "15rem" }}>
                <blockquote className="blockquote mb-0">
                  <img className="img" src="images/icon_complete.jpg" />
                  <h5 className="mt-3">Mobil Lengkap</h5>
                  <p className="mt-3">Tersedia Banyak Pilihan Mobil, kondisi masih baru, bersih dan terawat</p>
                </blockquote>
              </div>
            </div>
          </div>
          <div className="col-md-3 mt-3">
            <div className="card">
              <div className="card-body" style={{ minHeight: "15rem" }}>
                <blockquote className="blockquote mb-0">
                  <img className="img" src="images/icon_price.jpg" />
                  <h5 className="mt-3">Harga Murah</h5>
                  <p className="mt-3">Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain</p>
                </blockquote>
              </div>
            </div>
          </div>
          <div className="col-md-3 mt-3">
            <div className="card">
              <div className="card-body" style={{ minHeight: "15rem" }}>
                <blockquote className="blockquote mb-0">
                  <img src="images/icon_24hrs.jpg" />
                  <h5 className="mt-3">Layanan 24 Jam</h5>
                  <p className="mt-3">Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu</p>
                </blockquote>
              </div>
            </div>
          </div>
          <div className="col-md-3 mt-3">
            <div className="card">
              <div className="card-body" style={{ minHeight: "15rem" }}>
                <blockquote className="blockquote mb-0">
                  <img src="images/icon_professional.jpg" />
                  <h5 className="mt-3">Sopir Profesional</h5>
                  <p className="mt-3">Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu</p>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
