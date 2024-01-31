import React from "react";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";
import "../../styles/car-item.css";

const CarItem = (props) => {
  const { imgUrl, model, carName, automatic, speed, price, kilometer,fuel } = props.item;

  return (
    <Col lg="4" md="4" sm="6" className="mb-5">
      <div className="car__item">
        <div className="car__img">
          <Link to="/car-details">
            <img src={imgUrl} alt="" className="w-100" />
          </Link>
        </div>

        <div className="car__item-content mt-4">
          <h4 className="section__title text-center">{carName}</h4>
          <h6 className="rent__price text-center mt-4">
          ₹{price}
          </h6>


          <div className="car__item-info d-flex align-items-center justify-content-between mt-3 mb-4">
            <span className=" d-flex align-items-center gap-1">
              {/* <i class="ri-car-line"></i> {kilometer} */}
              <p>{kilometer}</p>
            </span>
            <span className=" d-flex align-items-center gap-1">
              {/* <i class="ri-settings-2-line"></i> {automatic} */}
              <p>{automatic}</p>
            </span>
            <span className=" d-flex align-items-center gap-1">
              {/* <i class="ri-timer-flash-line"></i> {speed} */}
              <p>{fuel}</p>
            </span>
          </div>


          <div className="car__item-info d-flex align-items-center justify-content-between mt-3 mb-4">
            <span className=" d-flex align-items-center gap-1">
              <i class="ri-car-line"></i> {model}
            </span>
            <span className=" d-flex align-items-center gap-1">
              <i class="ri-settings-2-line"></i> {automatic}
            </span>
            <span className=" d-flex align-items-center gap-1">
              <i class="ri-timer-flash-line"></i> {speed}
            </span>
          </div>

          {/* <button className=" w-50 car__item-btn car__btn-rent">
            <Link to={`/cars/${carName}`}>Rent</Link>
          </button>

          <button className=" w-50 car__item-btn car__btn-details">
            <Link to={`/cars/${carName}`}>Details</Link>
          </button> */}
        </div>
      </div>
    </Col>
  );
};

export default CarItem;


// import React from 'react';

// const MenuItem = () => {
//   return (
//     <div className="menu-list-row">
//       <div className="row g-xxl-5 bydefault_show" id="menu-dish">
//         <div className="col-lg-4 col-sm-6 dish-box-wp breakfast" data-cat="breakfast">
//           <div className="dish-box text-center">
//             <div className="dist-img">
//               <img src="/home/ansar/Desktop/used-car-frontend/usedCarNBikes/src/Assets/images/car-01.png" alt="" />
//             </div>
//             <div className="dish-rating">
//               5
//               <i className="uil uil-star"></i>
//             </div>
//             <div className="dish-title">
//               <h3 className="h3-title">Fresh Chicken Veggies</h3>
//               <p>120 calories</p>
//             </div>
//             <div className="dish-info">
//               <ul>
//                 <li>
//                   <p>Type</p>
//                   <b>Non Veg</b>
//                 </li>
//                 <li>
//                   <p>Persons</p>
//                   <b>2</b>
//                 </li>
//               </ul>
//             </div>
//             <div className="dist-bottom-row">
//               <ul>
//                 <li>
//                   <b>Rs. 499</b>
//                 </li>
//                 <li>
//                   <button className="dish-add-btn">
//                     <i className="uil uil-plus"></i>
//                   </button>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MenuItem;

{/* <div class="usedCarCard widgets js-widget" data-widget="UsedCarCard" data-type="Widget">
  <div class="usedCarCard cardHover relative">
    <div class="ucCardWrap imgRound">
      <a rel="" class="js-tracker relative" target="_self" href="/used/skoda-rapid-cars-in-kochi-156899">
        <img alt="Used 2013 Skoda Rapid, Cheranallur, Ernakulam" title="Used 2013 Skoda Rapid, Cheranallur, Ernakulam" loading="lazy" width="360" height="200" decoding="async" data-nimg="1" class=" ucImage imgRound imgFull" style="color:transparent" sizes="(max-width: 750px), 50vw" srcset="/_next/image?url=https%3A%2F%2Fmedia.mahindrafirstchoice.com%2Flive_web_images%2Fusedcarsimg%2Fmfc%2F2636%2F558413%2Fleft_side_view-20230227162700.jpg&amp;w=384&amp;q=75 384w, /_next/image?url=https%3A%2F%2Fmedia.mahindrafirstchoice.com%2Flive_web_images%2Fusedcarsimg%2Fmfc%2F2636%2F558413%2Fleft_side_view-20230227162700.jpg&amp;w=640&amp;q=75 640w, /_next/image?url=https%3A%2F%2Fmedia.mahindrafirstchoice.com%2Flive_web_images%2Fusedcarsimg%2Fmfc%2F2636%2F558413%2Fleft_side_view-20230227162700.jpg&amp;w=750&amp;q=75 750w, /_next/image?url=https%3A%2F%2Fmedia.mahindrafirstchoice.com%2Flive_web_images%2Fusedcarsimg%2Fmfc%2F2636%2F558413%2Fleft_side_view-20230227162700.jpg&amp;w=828&amp;q=75 828w, /_next/image?url=https%3A%2F%2Fmedia.mahindrafirstchoice.com%2Flive_web_images%2Fusedcarsimg%2Fmfc%2F2636%2F558413%2Fleft_side_view-20230227162700.jpg&amp;w=1080&amp;q=75 1080w, /_next/image?url=https%3A%2F%2Fmedia.mahindrafirstchoice.com%2Flive_web_images%2Fusedcarsimg%2Fmfc%2F2636%2F558413%2Fleft_side_view-20230227162700.jpg&amp;w=1200&amp;q=75 1200w, /_next/image?url=https%3A%2F%2Fmedia.mahindrafirstchoice.com%2Flive_web_images%2Fusedcarsimg%2Fmfc%2F2636%2F558413%2Fleft_side_view-20230227162700.jpg&amp;w=1920&amp;q=75 1920w, /_next/image?url=https%3A%2F%2Fmedia.mahindrafirstchoice.com%2Flive_web_images%2Fusedcarsimg%2Fmfc%2F2636%2F558413%2Fleft_side_view-20230227162700.jpg&amp;w=2048&amp;q=75 2048w, /_next/image?url=https%3A%2F%2Fmedia.mahindrafirstchoice.com%2Flive_web_images%2Fusedcarsimg%2Fmfc%2F2636%2F558413%2Fleft_side_view-20230227162700.jpg&amp;w=3840&amp;q=75 3840w" src="https://www.carandbike.com/_next/image?url=https%3A%2F%2Fmedia.mahindrafirstchoice.com%2Flive_web_images%2Fusedcarsimg%2Fmfc%2F2636%2F558413%2Fleft_side_view-20230227162700.jpg&amp;w=3840&amp;q=75">
          </a>
          <div class="ucContent">
            <div class="ucLeft">
              <div class="flex titleFlex gridAc">
                <div class="js-tracker pointer">
                  <div class="ucTitle truncate truncate1">2013 Skoda Rapid</div>
                  </div>
                  <div class="js-tracker pointer">
                    <div class="wishlList"></div>
                    </div>
                    </div>
                    <ul class="ucInfo flex pt10 pb10">
                      <li class="ucInfoItem relative">1,17,000 km</li>
                      <li class="ucInfoItem relative">Petrol</li>
                      <li class="ucInfoItem relative">Manual</li>
                    </ul>
                    <div class="flex price gridAc ucContentGrid relative">
                      <div class="ucPrice flex gridJcgridAc">₹ 3.25 Lakh</div>
                      <div class="emi flex gridAc pointer">₹ 7,279 /month<!-- -->&nbsp;
                      <img alt="emi" loading="lazy" width="20" height="20" decoding="async" data-nimg="1" class=" tooltip" style="color:transparent" srcset="/_next/image?url=https%3A%2F%2Fimages.carandbike.com%2Fsvg%2Fastrisk.svg&amp;w=32&amp;q=75 1x, /_next/image?url=https%3A%2F%2Fimages.carandbike.com%2Fsvg%2Fastrisk.svg&amp;w=48&amp;q=75 2x" src="https://www.carandbike.com/_next/image?url=https%3A%2F%2Fimages.carandbike.com%2Fsvg%2Fastrisk.svg&amp;w=48&amp;q=75"></div></div><div class="ucFoot flex gridAc"><div class="location"></div><div class="ucFootText truncate truncate1">Pothen Autos<!-- --> <!-- -->Cheranallur, Ernakulam</div>
                      </div>
                      </div></div></div></div></div> */}
