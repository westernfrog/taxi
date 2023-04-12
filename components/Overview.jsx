export default function Overview(params) {
  return (
    <>
      <div class="row py-0 py-lg-4 d-flex justify-content-between">
        <div class="col-md-4">
          <h1 class="display-4 fw-bold lh-1">We&apos;ll take you places</h1>
          <h1 className="display-5 lh-1">where ever,</h1>
          <h1 className="display-5 lh-1">when ever.</h1>
          <p className="lead my-4">
            Safe, affordable rides to every destination. Book a ride now and get
            20% discount on your first ride.
          </p>

          <button
            type="button"
            class="btn btn-dark btn-shrink px-5 rounded-0"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Book a ride
          </button>
          <div
            class="modal fade"
            id="exampleModal"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
              <div class="modal-content border-0 rounded-0">
                <div class="modal-header border-0">
                  <h5 class="modal-title fw-bold col-10" id="exampleModalLabel">
                    Get a ride at your doorstep
                  </h5>
                  <button
                    type="button"
                    class="btn px-0"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  >
                    <i className="fa-solid fa-xmark fa-lg"></i>
                  </button>
                </div>
                <div class="modal-body border-0 rounded-0">
                  <form action="" className="d-grid gap-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Pickup location"
                    />
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Dropoff location"
                    />
                    <div className="row g-3">
                      <div className="col-md-6">
                        <input
                          type="date"
                          className="form-control"
                          name=""
                          id=""
                        />
                      </div>
                      <div className="col-md-6">
                        <input
                          type="time"
                          className="form-control"
                          name=""
                          id=""
                        />
                      </div>
                    </div>
                  </form>
                </div>
                <div class="modal-footer border-0 my-2">
                  <button
                    type="button"
                    class="btn btn-shrink btn-dark rounded-0"
                  >
                    Book your ride
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-7 bg-taxi"></div>
      </div>
    </>
  );
}
