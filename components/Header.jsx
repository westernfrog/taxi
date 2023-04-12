import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleCaret = async () => {
    if (isOpen === true) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  };

  return (
    <>
      <div className="sticky-top bg-black">
        <nav className="container navbar navbar-expand-lg navbar-dark">
          <div className="container-fluid px-0 d-flex align-items-center">
            <Link className="navbar-brand fs-4" href="/">
              Caber
            </Link>
            <button
              className="navbar-toggler border-0 px-0"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasExample"
              aria-controls="offcanvasExample"
              style={{ boxShadow: "none" }}
            >
              <i className="fa-solid fa-bars"></i>
            </button>

            <div
              className="offcanvas offcanvas-start d-lg-none"
              tabIndex="-1"
              id="offcanvasExample"
              aria-labelledby="offcanvasExampleLabel"
              style={{
                maxWidth: "85%",
                borderRight: 0,
              }}
            >
              <div className="offcanvas-header">
                <button
                  className="navbar-toggler border-0 px-0 ms-auto"
                  type="button"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                  style={{ boxShadow: "none" }}
                >
                  <i className="fa-solid fa-xmark text-black"></i>
                </button>
              </div>
              <div className="offcanvas-body my-5">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link
                      className="nav-link btn-shrink text-dark fs-4"
                      href={"#"}
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    >
                      <i className="fa-solid fa-taxi me-2"></i>
                      Book a Ride
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link btn-shrink text-dark fs-4"
                      data-bs-toggle="collapse"
                      href="#collapseExample"
                      role="button"
                      aria-expanded="false"
                      aria-controls="collapseExample"
                      onClick={handleCaret}
                    >
                      Company
                      <i
                        className={`fa-solid fa-caret-${
                          isOpen ? "down" : "right"
                        } ms-4`}
                      ></i>
                    </Link>
                  </li>
                  <div className="collapse" id="collapseExample">
                    <ul>
                      <li>
                        <Link className="text-dark" href="#">
                          About us
                        </Link>
                      </li>
                      <li>
                        <Link className="text-dark" href="#">
                          How Caber works
                        </Link>
                      </li>
                      <li>
                        <Link className="text-dark" href="#">
                          Blog
                        </Link>
                      </li>
                      <li>
                        <Link className="text-dark" href="#">
                          Careers
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <li className="nav-item">
                    <Link
                      className="nav-link btn-shrink text-dark fs-4"
                      aria-current="page"
                      href="#"
                    >
                      Safety
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link btn-shrink text-dark fs-4"
                      href="#"
                    >
                      Help
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link btn-shrink text-dark fs-4"
                      aria-current="page"
                      href="#"
                    >
                      Log in
                    </Link>
                  </li>
                  <li className="nav-item border border-2 border-dark">
                    <Link
                      className="nav-link btn-shrink text-dark fs-4"
                      href="#"
                    >
                      Sign up
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link
                    className="nav-link btn-shrink active"
                    href={"#"}
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    <i className="fa-solid fa-taxi me-2"></i>
                    Book a Ride
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link btn-shrink active dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Company
                  </Link>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <Link className="dropdown-item" href="#">
                        About us
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" href="#">
                        How Caber works
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" href="#">
                        Blog
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" href="#">
                        Careers
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link btn-shrink active"
                    aria-current="page"
                    href="#"
                  >
                    Safety
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link btn-shrink active" href="#">
                    Help
                  </Link>
                </li>
              </ul>
            </div>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link
                    className="nav-link btn-shrink active"
                    aria-current="page"
                    href="#"
                  >
                    Log in
                  </Link>
                </li>
                <li className="nav-item btn-shrink bg-white ms-2 rounded-0">
                  <Link className="nav-link text-dark" href="#">
                    Sign up
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
