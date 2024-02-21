import React from "react";

const BuyMore = () => {
  return (
    <React.Fragment>
      <div className="container pb-5">
        <div className="container Buymore pb-4">
          <div className="row">
            <div className="col-sm-6  pt-5 ">
              <h2 className="Buymore-heading pt-5">
                Buy more positions and Resell your positions!
              </h2>
              <h6 className="pt-4 buymore-details">
                Everybody is a whale only 10.000 spots. You can buy multiple
                spots with a max of 20 spots per person. Later you may resell
                those spots to your friends and families. Do you want to buy
                multiple spots? Just send an email to
                info@screaminggoatsinnovations.com for more spots!
              </h6>
            </div>
            <div className="col-sm-6 pt-5 text-center ">
              <img src="asset/coin.png" alt="" className="w-75" />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default BuyMore;
