import React from "react";

function Form() {
  return (
    <div className="container">
      <div className="row">
        <h1>Contact</h1>
      </div>
      <div className="row">
        <hr></hr>
      </div>
      <div className="row">
          <div className='col-12'>
        <form>
          <div class="form-group">
            <label for="exampleFormControlInput1">Email address</label>
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
            ></input>
          </div>
          <div class="form-group">
            <label for="exampleFormControlSelect1">Nature of Inquiry</label>
            <select class="form-control" id="exampleFormControlSelect1">
              <option>Employment</option>
              <option>Social</option>
             
            </select>
          </div>
        </form>
       <a href='mailto:daneb91@gmail.com'> <button className='btn btn-primary m-2 mb-3'>E-mail me</button></a>
      </div>
      </div>
    </div>
  );
}

export default Form;
