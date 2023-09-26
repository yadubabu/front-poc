import React from "react";

const Form = () => {
  return (
    <div>
      <h3 className="m-1 p-1 text-center font-bold text-indigo-700 h5">
        Add Transactions
      </h3>
      <form>
        <div className="col p-2 flex ">
          <label className="font-bold col-4 text-xs p-1">Name</label>
          <input type="text" className="col-2 m-1 w-1/2" />
        </div>
        <div className="col p-2 ">
          <label className="font-bold col-4 text-xs p-1">Type</label>
          <input type="text" className="col-2 m-1 w-1/2" />
        </div>
        <div className="col p-2 flex">
          <label className="font-bold col-4 text-xs p-1">Amount</label>
          <input type="number" className="col-2 m-1 w-1/2" />
        </div>
        <div className="col p-2 ">
          <label className="col-4 font-bold text-xs p-1">Date</label>
          <input type="date" className="col-2 m-1 w-1/2" />
        </div>
        <div className="text-center p-1 m-1">
          <input
            type="submit"
            value="Add"
            className="m-1 uppercase text-indigo-800 font-bold"
          />
        </div>
      </form>
    </div>
  );
};

export default Form;
