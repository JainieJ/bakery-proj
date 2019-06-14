import React from "react";

const Columns = () => {
  return (
    <div className="container-fluid text-uppercase d-none d-lg-block">
      <div className="row text-center">
        <div className="col-2 mx-auto">PRODUCTS</div>
        <div className="col-2 mx-auto">NAME OF PRODUCT</div>
        <div className="col-2 mx-auto">PRICE</div>
        <div className="col-2 mx-auto">QUANTITY</div>
        <div className="col-2 mx-auto">REMOVE</div>
        <div className="col-2 mx-auto">TOTAL</div>
      </div>
    </div>
  );
};

export default Columns;
