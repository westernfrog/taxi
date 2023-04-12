import Image from "next/image";
import Link from "next/link";

export default function RideWithCaber(params) {
  return (
    <>
      <div className="container my-5 py-4">
        <h1 className="fw-bold">Ride with Caber</h1>
        <div className="container row my-5 py-4 d-flex justify-content-between gap-5">
          <div className="col-md-5">
            <Link
              href={"/"}
              className="text-decoration-none text-dark d-flex align-items-center arrow-hover"
            >
              <div className="row">
                <div className="col-md-4 d-flex align-items-md-center justify-content-md-center">
                  <Image
                    src={
                      "https://cdn-icons-png.flaticon.com/512/1048/1048339.png"
                    }
                    width={110}
                    height={110}
                  />
                </div>
                <div className="col-md-8 my-4 my-lg-0">
                  <h3 className="fw-bold">Caber Auto</h3>
                  <p>
                    Get affordable Caber Auto rides with no haggling. Request
                    Caber Auto and ride comfortably around your&nbsp;city.
                  </p>
                </div>
              </div>
              <i className="fa-solid fa-arrow-right fa-xl ms-4"></i>
            </Link>
          </div>
          <div className="col-md-5">
            <Link
              href={"/"}
              className="text-decoration-none text-dark d-flex align-items-center arrow-hover"
            >
              <div className="row">
                <div className="col-md-4 d-flex align-items-md-center justify-content-md-center">
                  <Image
                    src={
                      "https://cdn-icons-png.flaticon.com/512/1048/1048334.png"
                    }
                    width={110}
                    height={110}
                  />
                </div>
                <div className="col-md-8 my-4 my-lg-0">
                  <h3 className="fw-bold">Caber Moto</h3>
                  <p>
                    Get affordable bike rides at your doorstep. Skip the crowd
                    and zip through traffic with Caber&nbsp;Moto.
                  </p>
                </div>
              </div>
              <i className="fa-solid fa-arrow-right fa-xl ms-4"></i>
            </Link>
          </div>
          <div className="col-md-5">
            <Link
              href={"/"}
              className="text-decoration-none text-dark d-flex align-items-center arrow-hover"
            >
              <div className="row">
                <div className="col-md-4 d-flex align-items-md-center justify-content-md-center">
                  <Image
                    src={
                      "https://cdn-icons-png.flaticon.com/512/1048/1048315.png"
                    }
                    width={110}
                    height={110}
                  />
                </div>
                <div className="col-md-8 my-4 my-lg-0">
                  <h3 className="fw-bold">Caber Rentals</h3>
                  <p>
                    Book Rentals to save time with one car and driver for your
                    multi-stop&nbsp;trips.
                  </p>
                </div>
              </div>
              <i className="fa-solid fa-arrow-right fa-xl ms-4"></i>
            </Link>
          </div>
          <div className="col-md-5">
            <Link
              href={"/"}
              className="text-decoration-none text-dark d-flex align-items-center arrow-hover"
            >
              <div className="row">
                <div className="col-md-4 d-flex align-items-md-center justify-content-md-center">
                  <Image
                    src={
                      "https://cdn-icons-png.flaticon.com/512/1048/1048313.png"
                    }
                    width={110}
                    height={110}
                  />
                </div>
                <div className="col-md-8 my-4 my-lg-0">
                  <h3 className="fw-bold">Caber Intercity</h3>
                  <p>
                    Book Intercity to head outstation anytime in convenient and
                    affordable&nbsp;cars.
                  </p>
                </div>
              </div>
              <i className="fa-solid fa-arrow-right fa-xl ms-4"></i>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
