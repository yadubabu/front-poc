import React from "react";
import Sidebar from "../components/Sidebar";

const FAQ = () => {
  return (
    <div className="row">
      <div className="w-1/5 ">
        <Sidebar />
      </div>
      <div className="w-4/5 my-2">
        <div className="rounded bg-indigo-100 m-3">
          <h4 className="text-center text-indigo-900 font-bold">FAQ's</h4>
          <div className="text-secondary p-2 m-3">
            <p className="text-dark font-bold text-center">What is Budget?</p>
            <div className="text-black text-sm text-center">
              "A <span className="text-danger font-bold">BUDGET</span> is
              telling your money where to go instead of wondering where it
              went",
            </div>
          </div>
          <div className="text-secondary p-2 m-3">
            <p className="text-dark font-bold text-center">What is Budget?</p>
            <div className="text-black text-sm text-center">
              "Used correctly, a BUDGET doesn't restrict you;it empowers
              you.*****",
            </div>
          </div>
          <div className="text-secondary p-2 m-3">
            <p className="text-dark font-bold text-center">What is Budget?</p>
            <div className="text-black text-sm text-center">
              "A <span className="text-danger font-bold">BUDGET</span> tells us
              what we can't afford but it doesn't keep us from buying it.",
            </div>
          </div>
          <div className="text-secondary p-2 m-3">
            <p className="text-dark font-bold text-center">What is Budget?</p>
            <div className="text-black text-sm text-center">
              "A <span className="text-danger font-bold">BUDGET</span> is more
              than just a series of numbers on page,it is a embodiment of our
              values",
            </div>
          </div>
          <div className="text-secondary p-2 m-3">
            <p className="text-dark font-bold text-center">What is Budget?</p>
            <div className="text-black text-sm text-center">
              "A <span className="text-danger font-bold">BUDGET</span> tells us
              what "Balancing the BUDGET is like going to heaven.Everybody wants
              to do it,but nobody wants to do what you have to do to get
              there.",
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
