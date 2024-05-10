import React from "react";
import BikeImageSlider from "../components/UI/BikeImageSlider";
// import VideoPlayer from "../components/UI/VideoPlayer";
import "../styles/CarDetails.css";

const BikeDetails = () => {
  return (
    <div className="car-details-container">
      <div class="modal-body row">
        <div class="col-md-8">
          <BikeImageSlider />
        </div>
        <div class="col-md-2">
          {
            <iframe
              width="360"
              height="500"
              src="https://www.youtube.com/embed/PIIVchOaWak"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          }
        </div>
      </div>

      <div className="car-details container">
        <h2 className="details mt-3 p-3">Details</h2>
        <table class="table table-bordered table-info car-detail-table p-4">
          <tbody>
            <tr>
              <td scope="col">
                <div class="row">
                  <div class="col-auto">
                    <img
                      src="https://www.carandbike.com/_next/image?url=https%3A%2F%2Fimages.carandbike.com%2Fkms.svg&w=96&q=75"
                      alt=""
                      style={{ width: "34px", height: "34px" }}
                    />
                  </div>
                  <div class="col">
                    <h4> KMs Driven</h4>
                  </div>
                </div>
              </td>
              <td scope="col">
                <h4>27,000</h4>
              </td>
            </tr>
            <tr>
              <td scope="col">
                <div class="row">
                  <div class="col-auto">
                    <img
                      src="https://www.carandbike.com/_next/image?url=https%3A%2F%2Fimages.carandbike.com%2Fkms.svg&w=96&q=75"
                      alt=""
                      style={{ width: "34px", height: "34px" }}
                    />
                  </div>
                  <div class="col">
                    <h4> Owner</h4>
                  </div>
                </div>
              </td>
              <td scope="col">
                <h4>1st</h4>
              </td>
            </tr>
            <tr>
              <td scope="col">
                <div class="row">
                  <div class="col-auto">
                    <img
                      src="https://www.carandbike.com/_next/image?url=https%3A%2F%2Fimages.carandbike.com%2Fkms.svg&w=96&q=75"
                      alt=""
                      style={{ width: "34px", height: "34px" }}
                    />
                  </div>
                  <div class="col">
                    <h4> Fuel</h4>
                  </div>
                </div>
              </td>
              <td scope="col">
                <h4>Petrol</h4>
              </td>
            </tr>
            <tr>
              <td scope="col">
                <div class="row">
                  <div class="col-auto">
                    <img
                      src="https://www.carandbike.com/_next/image?url=https%3A%2F%2Fimages.carandbike.com%2Fkms.svg&w=96&q=75"
                      alt=""
                      style={{ width: "34px", height: "34px" }}
                    />
                  </div>
                  <div class="col">
                    <h4> Transmission</h4>
                  </div>
                </div>
              </td>
              <td scope="col">
                <h4>AMT</h4>
              </td>
            </tr>
            <tr>
              <td scope="col">
                <div class="row">
                  <div class="col-auto">
                    <img
                      src="https://www.carandbike.com/_next/image?url=https%3A%2F%2Fimages.carandbike.com%2Fkms.svg&w=96&q=75"
                      alt=""
                      style={{ width: "34px", height: "34px" }}
                    />
                  </div>
                  <div class="col">
                    <h4> Transmission</h4>
                  </div>
                </div>
              </td>
              <td scope="col">
                <h4>AMT</h4>
              </td>
            </tr>
            <tr>
              <td scope="col">
                <div class="row">
                  <div class="col-auto">
                    <img
                      src="https://www.carandbike.com/_next/image?url=https%3A%2F%2Fimages.carandbike.com%2Fkms.svg&w=96&q=75"
                      alt=""
                      style={{ width: "34px", height: "34px" }}
                    />
                  </div>
                  <div class="col">
                    <h4> Transmission</h4>
                  </div>
                </div>
              </td>
              <td scope="col">
                <h4>AMT</h4>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BikeDetails;
