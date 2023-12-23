import React from "react";

const Join = () => {
  return (
    <React.Fragment>
      <div className="container  pb-5 pt-5">
        <div className="row">
          <div className="col-sm-7">
            <div>
              <p className="yellow-text">
                Your Christmas special offer Join HOC now
              </p>
              <p className="white-text">
                Everyone can become a WHALE in HOC! Get all the perks with a 90%
                discount!👇
              </p>
              <div className="pt-3">
                <button className="whale-btn">Make Me a Whale</button>
              </div>
              <div className="d-flex gap-2 pt-4 ">
                <button className="whale-btn">WhitePaper</button>

                <a href="/" className="pt-2 text-light  ">
                  <img src="asset/wp.svg" alt="" className="mx-2  wp" />
                  What is HOC?
                </a>
              </div>
              <h4 className="pt-4 yellow-text ">
                Hurry! Don't miss this Only till the end of the year 2023!
              </h4>
              <h6 className="pt-4 yellow-text ">
                Get Immediate Access to our SGI Academy get your free E-BOOK
                about Decentralized Autonomous Organisations, And gain access to
                the SGI community for free
              </h6>
              <div className="pt-5">
                <div className="tick-images d-flex gap-3 ">
                  <img src="asset/tick.svg" alt="" />
                  <p>
                    Free E-book: Revolutionizing Real Estate: How Decentralized
                    Autonomous Organizations are Transforming the Industry is
                    normally worth 24,19 USDT
                  </p>
                </div>
                <div className="tick-images d-flex gap-3 ">
                  <img src="asset/tick.svg" alt="" />
                  <p>
                    Lifetime user Access to myhoc platform is normally worth 250
                    USDT
                  </p>
                </div>
                <div className="tick-images d-flex gap-3 ">
                  <img src="asset/tick.svg" alt="" />
                  <p>
                    Lifetime access to SGI Academy basic normal price 34.95 USDT
                    per month. Get access to coaching or mentorship in personal,
                    business, financial, and more
                  </p>
                </div>
                <div className="tick-images d-flex gap-3 ">
                  <img src="asset/tick.svg" alt="" />
                  <p>HOC rewards 22.222 HOC</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-5   pt-5 ">
            <div className="chacha-image ">
              <img src="asset/hero1.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Join;
