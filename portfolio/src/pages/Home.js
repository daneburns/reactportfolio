import React from "react";
import profilePic from "./dane.png";
import linkedInLogo from "./linkedIn.png";
import gitHubLogo from "./github.png";
import resumeLogo from "./resume.png"

function Home() {
  return (
    <div className="wrap">
      <div className="container-lg mx-auto typewriter m-3 text-wrap">
        <h1 class="text-center">Developer</h1>
      </div>
      <div className="d-flex flex-column bg-custom-primary align-items-center justify-content-between mx-auto mt-5">
        <div className="row d-flex justify-content-center">
          <div className="col-2">
            <img className="img-fluid" src={profilePic}></img>
          </div>
          <div className="col">
            <h1 className="text-center text-white">About Me</h1>
            <p className="text-white">
              {" "}
              I am a Fullstack Developer based in Phoenix, Arizona. All roads
              lead to software development. Aenean volutpat erat et elit
              bibendum cursus. Ut iaculis in arcu ac maximus. Mauris maximus
              lacus at nisi consequat viverra. Vestibulum mattis eu odio et
              feugiat. Pellentesque vestibulum maximus blandit. Maecenas velit
              libero, maximus ac sagittis ut, lobortis et metus. Donec convallis
              tortor eu bibendum convallis. Phasellus congue pharetra lacus sed
              tincidunt. Donec mollis finibus euismod. Nullam efficitur et metus
              in egestas.
            </p>
          </div>
        </div>
        <div className="d-flex flex-row justify-content-center p-2 w-100">
          <a href="https://www.linkedin.com/in/dane-burns-06b0b634/">
            <img className="thumboi" src={linkedInLogo}></img>
          </a>
          <a href="https://github.com/daneburns">
            <img className="thumboi" src={gitHubLogo}></img>
          </a>
          <a href="https://github.com/daneburns">
            <img className="thumboi" src={resumeLogo}></img>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
