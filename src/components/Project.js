import React from "react";
import ModalExample from "./Modal";

function Project() {
  const description = (
    <div class="wrap">
      <p>
        Bullet Journal is an application utilizing MySQL and relational database
        to recreate the bullet journal experience.
      </p>
      <a href="https://github.com/bfeliz/bullet-journal">Github Link</a>
      <p></p>
      <a href="https://personal-bullet-journal.herokuapp.com/">Deployed Link</a>
    </div>
  );
  const grocerDesc = (
    <div class="wrap">
      <p>
        GrocerEASE is a serverless front-end application that aims to give you
        one combined grocery list for all of your recipes.
      </p>
      <a href="https://github.com/lorddominic/grocerEASE">Github Link</a>
      <p></p>
      <a href="https://lorddominic.github.io/grocerEASE/">Deployed Link</a>
    </div>
  );
  const weatherDesc = (
    <div class="wrap">
      <p>
        Weather dashboard is an application utilizing API calls to get weather around the world.
      </p>
      <a href="https://github.com/daneburns/weather_dashboard">Github Link</a>
      <p></p>
      <a href="https://daneburns.github.io/weather_dashboard/">Deployed Link</a>
    </div>
  );
  const empDesc =  (<div class="wrap">
  <p>
    React Employee is an employee listing application built entirely in React!
  </p>
  <a href="https://github.com/daneburns/reactdirectory">Github Link</a>
  <p></p>
  <a href="https://nifty-euclid-b8b117.netlify.com/">Deployed Link</a>
</div>
  )
  const soberedDesc = (<div class="wrap">
  <p>
    Sobered is a meet-up style app for people struggling with addiction.
  </p>
  <a href="https://github.com/daneburns/reactdirectory">Github Link</a>
  <p></p>
  <a href="https://github.com/jkile/sobered">Deployed link coming soon!</a>
</div>
  )
  const fitnessTrack = (<div class="wrap">
  <p>
    Fitness Tracker is a mongoDB powered application that allows users to track workout data and get statistics about that data.
  </p>
  <a href="https://github.com/daneburns/fitnesstracker">Github Link</a>
  <p></p>
  <a href="https://radiant-retreat-88389.herokuapp.com/">Deployed link</a>
</div>
  )
  return (
    <div className="container bg-black text-white mt-5 mx-auto p-5">
      <div className="row text-center text-white mx-auto d-flex justify-content-center">
        <p className="text-center">
          Click any of the items below to see more details
        </p>
      </div>
      <div className="row text-center m-5">
        <div className="col-4">
          <ModalExample
            title="Bullet Journal"
            imgsource="bujo"
            description={description}
          />
        </div>
        <div className="col-4">
          <ModalExample
            title="Weather Dashboard"
            imgsource="weatherDash"
            description={weatherDesc}
          />
        </div>
        <div className="col-4">
          <ModalExample
            title="grocerEase"
            imgsource="grocerEase"
            description={grocerDesc}
          />
        </div>
      </div>
      <div className="row text-center m-5">
        <div className="col-4">
          <ModalExample
            title="React Employee Directory"
            imgsource="reactEmployee"
            description={empDesc}
          />
        </div>
        <div className="col-4">
          <ModalExample
            title="Sobered"
            imgsource="sobered"
            description={soberedDesc}
          />
        </div>
        <div className="col-4">
          <ModalExample
            title="Fitness Tracker"
            imgsource="fitness"
            description={fitnessTrack}
          />
        </div>
      </div>
    </div>
  );
}

export default Project;
