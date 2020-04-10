import React from "react";
import ModalExample from "./Modal"

function Project() {
  return (
    <div className="container bg-black text-white mt-5 mx-auto">
      <div className="row text-center">
        <div className="col-4 m-2">
            <ModalExample title="Bullet Journal"/>
        </div>
        <div className="col-4">
          <p>Other Project</p>
        </div>
        <div className="col-4">
          <p>Other Project</p>
        </div>
      </div>
      <div className="row text-center">
        <div className="col-4">
          <p>Other Project</p>
        </div>
        <div className="col-4">
          <p>Other Project</p>
        </div>
        <div className="col-4">
          <p>Other Project</p>
        </div>
      </div>
      <div className="row text-center">
        <div className="col-4">
          <p>Other Project</p>
        </div>
        <div className="col-4">
          <p>Other Project</p>
        </div>
        <div className="col-4">
          <p>Other Project</p>
        </div>
      </div>
    </div>
  );
}

export default Project;
