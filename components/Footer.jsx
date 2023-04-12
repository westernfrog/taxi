import { useState, useEffect } from "react";

export default function Footer(params) {
  const [newYear, setNewYear] = useState("");
  useEffect(() => {
    const year = new Date().getFullYear();
    setNewYear(year);
  }, []);

  return (
    <>
      <div className="bg-black text-light py-4">
        <div className="container mt-5">
          <h5 className="fw-bold mb-4">Caber</h5>
          <h6 className="arrow-hover">
            Visit Help Center
            <i className="fa-solid fa-arrow-right ms-3"></i>
            <hr />
          </h6>
          <div className="row mt-5 pt-5 mb-4">
            <div className="col-md-3 my-3 my-lg-0">
              <h5>Company</h5>
              <ul className="list-group">
                <li>About us</li>
                <li>Our offerings</li>
                <li>Newsroom</li>
                <li>Blog</li>
                <li>Gift Cards</li>
              </ul>
            </div>
            <div className="col-md-3 my-3 my-lg-0">
              <h5>Products</h5>
              <ul className="list-group">
                <li>Ride</li>
                <li>Drive</li>
                <li>Deliver</li>
                <li>Caber for Business</li>
              </ul>
            </div>
            <div className="col-md-3 my-3 my-lg-0">
              <h5>Global citizenship</h5>
              <ul className="list-group">
                <li>Safety</li>
                <li>Diversity and Inclusion</li>
              </ul>
            </div>
            <div className="col-md-3 my-3 my-lg-0">
              <h5>Travel</h5>
              <ul className="list-group">
                <li>Airports</li>
                <li>Cities</li>
              </ul>
            </div>
          </div>
          <div className="mt-5">
            <p>© Copyright {newYear} Caber. All Rights Reserved</p>
          </div>
        </div>
      </div>
    </>
  );
}
