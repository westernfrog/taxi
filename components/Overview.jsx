import { useState } from "react";

export default function Overview(params) {
  const [pickupLocation, setPickupLocation] = useState("");
  const [dropoffLocation, setDropoffLocation] = useState("");
  const [pickupDate, setPickupDate] = useState("");
  const [pickupTime, setPickupTime] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(pickupTime);
  };

  const handleTimeChange = (event) => {
    setPickupTime(event.target.value);
  };

  return (
    <>
      <div className="row py-0 py-lg-4 d-flex justify-content-between">
        <div className="col-md-5">
          <h1 className="display-4 fw-bold lh-1">We&apos;ll take you places</h1>
          <h1 className="display-5 lh-1">where ever,</h1>
          <h1 className="display-5 lh-1">when ever.</h1>
          <p className="lead my-4">
            Safe, affordable rides to every destination. Book a ride now and get
            20% discount on your first ride.
          </p>

          <button
            type="button"
            className="btn btn-dark btn-shrink px-5 rounded-0"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Book a ride
          </button>
          <div
            className="modal fade"
            id="exampleModal"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
              <div className="modal-content border-0 rounded-0">
                <div className="modal-header border-0">
                  <h5
                    className="modal-title fw-bold col-10"
                    id="exampleModalLabel"
                  >
                    Get a ride at your doorstep
                  </h5>
                  <button
                    type="button"
                    className="btn px-0"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  >
                    <i className="fa-solid fa-xmark fa-lg"></i>
                  </button>
                </div>
                <div className="modal-body border-0 rounded-0">
                  <form onSubmit={handleSubmit} className="d-grid gap-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Pickup location"
                    />
                    {/* {errors.pickupLocation && (
                      <p className="text-error text-danger ms-1">
                        {errors.pickupLocation}
                      </p>
                    )} */}
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Dropoff location"
                    />
                    {/* {errors.dropoffLocation && (
                      <p className="text-error text-danger ms-1">
                        {errors.dropoffLocation}
                      </p>
                    )} */}
                    <div className="row g-3">
                      <div className="col-6">
                        <input
                          type="date"
                          id="pickupDate"
                          className="form-control"
                        />
                        {/* {pickupDateError && (
                          <p className="text-error text-danger ms-1">
                            {pickupDateError}
                          </p>
                        )} */}
                      </div>
                      <div className="col-6">
                        <input
                          type="time"
                          id="pickupTime"
                          className="form-control"
                          value={pickupTime}
                          onChange={handleTimeChange}
                        />
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="col-md-4 ms-auto btn btn-shrink btn-dark rounded-0 mt-3"
                    >
                      Book your ride
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 bg-taxi"></div>
      </div>
    </>
  );
}
