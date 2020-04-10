import React from "react";
import ModalExample from "./Modal"

function Project() {
    const description = <p> Bullet Journal was a sweet project</p>
    const grocerDesc = <p>GrocerEASE was awesome.</p>
    const weatherDesc = <p>The weather dashboard was awesome.</p>
    const empDesc = <p>The react employee app was awesome.</p>
    const soberedDesc = <p>The sobered app was awesome.</p>
    const fitnessTrack = <p>The fitness tracker was awesome.</p>
  return (
    <div className="container bg-black text-white mt-5 mx-auto p-5">
      <div className="row text-center m-5">
        <div className="col-4">
            <ModalExample title="Bullet Journal" imgsource="bujo" description={description}/>
        </div>
        <div className="col-4">
            <ModalExample title="Weather Dashboard" imgsource="weatherDash" description={weatherDesc}/>
        </div>
        <div className="col-4">
            <ModalExample title="grocerEase" imgsource="grocerEase" description={grocerDesc}/>
        </div>
        </div>
        <div className='row text-center m-5'>
        <div className="col-4">
            <ModalExample title="React Employee Directory" imgsource="reactEmployee" description={empDesc}/>
        </div>
        <div className="col-4">
            <ModalExample title="Sobered" imgsource="sobered" description={soberedDesc}/>
        </div>
        <div className="col-4">
            <ModalExample title="Fitness Tracker" imgsource="fitness" description={fitnessTrack}/>
        </div>
        </div>
      </div>
  );
}

export default Project;
