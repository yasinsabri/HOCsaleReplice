import React from "react";

const Discount = () => {
  return (
    <React.Fragment>
      <div className="container  pt-5 pb-5">
        <div className="row discount-bg pb-5">
          <div className="col-sm-12 pt-5 pb-5">
            <div className="text-center text-light pt-5 dist ">
              <h1>Everyone can become a WHALE in HOC!</h1>
              <h1>Get all the perks with a 90% discount!👇</h1>
              <button className="whale-btn1 pt-2 pb-2">yes i want to become a Whale</button>
              <h2 className="pt-3">Join Biggest Real estate Revolution <span> For Only 500 USDT </span></h2>
              <h2>Retail Value: <s> 5000 USDT,</s> <span> You Save 4500 USDT </span> </h2>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Discount;
