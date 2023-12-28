import React from "react";

const Vision = () => {
  return (
    <React.Fragment>
      <div className="container pt-5">
        <div className="row">
          <div className="col-sm-6">
            <div>
              <p className="yellow-text">How does it work?</p>
              <h2 className="text-light">
                What are the rules for the HOC rewards?
              </h2>
              <h4 className="yellow-text pt-2">Supporting us means REWARDS!</h4>
            </div>
            <div className="pt-3">
              <div className="d-flex gap-3 text-light">
                <img src="asset/play.svg" alt="" />
                <p className="pt-3">
                  The HOC rewards will be blocked for the upcoming 5 years
                </p>
              </div>
              <div className="d-flex gap-3 text-light">
                <img src="asset/play.svg" alt="" />
                <p className="pt-3">
                  They will be put in the friends and family minter and will
                  deliver an extra 14% per year.
                </p>
              </div>
              <div className="d-flex gap-3 text-light">
                <img src="asset/play.svg" alt="" />
                <p className="pt-3">
                  The 14% extra rewards will automatically be sent to your
                  private wallet each year.
                </p>
              </div>
              <div className="d-flex gap-3 text-light">
                <img src="asset/play.svg" alt="" />
                <p className="pt-3">
                  In year 5 all your coins including the last 14% will be
                  released to your private wallet.
                </p>
              </div>
              <div className="d-flex gap-3 text-light">
                <img src="asset/play.svg" alt="" />
                <p className="pt-3">
                  You can use the coins for all the functionalities and
                  useability that are developed within our ecosystem.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 pt-5">
            <img src="asset/vision.jpeg" alt="" className="w-100 pt-5" />
          </div>
          <div className="pt-3 text-center">
            <button className="whale-btn">Make Me a Whale</button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Vision;
