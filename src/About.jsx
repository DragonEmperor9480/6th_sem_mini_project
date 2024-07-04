import React from "react";
import './index.css'
let About = ()=>{
    return(
      <>
      <div className="flex justify-center flex-around m-4">
      <div className="card bg-base-100 w-96 shadow-xl m-10">
  <figure className="px-10 pt-10">
    <img
      src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExY3h0d3lpZTZzM3hhc3J4am0yY2h5c3V1MWQ2ZGk3bjlmbzZ0NWI0dCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/eNAsjO55tPbgaor7ma/giphy.webp"
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Reactjs!</h2>
    <p>The frontend Framework</p>
    <div className="card-actions">
    </div>
  </div>
</div>

<div className="card bg-base-100 w-96 shadow-xl m-10">
  <figure className="px-10 pt-10">
    <img
      src="https://raw.githubusercontent.com/yoavain/create-windowless-app/main/resources/docs/logo.gif"
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">NodeJS</h2>
    <p>The backend framework</p>
    <div className="card-actions">
    </div>
  </div>
</div>

<div className="card bg-base-100 w-96 shadow-xl m-10">
  <figure className="px-10 pt-10">
    <img
      src="https://logos-download.com/wp-content/uploads/2019/01/JavaScript_Logo.png"
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Javascript</h2>
    <p>Heart of our project</p>
    <div className="card-actions">
    </div>
  </div>
</div>

<div className="card bg-base-100 w-96 shadow-xl m-10">
  <figure className="px-10 pt-10">
    <img
      src="https://vectorified.com/images/html-logo-icon-9.png"
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">HTML</h2>
    <p>the base of our project</p>
    <div className="card-actions">
    </div>
  </div>
</div>

<div className="card bg-base-100 w-96 shadow-xl m-10">
  <figure className="px-10 pt-10">
    <img
      src="https://www.freepnglogos.com/uploads/html5-logo-png/html5-logo-css-logo-png-transparent-svg-vector-bie-supply-9.png"
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">CSS</h2>
    <p>Styling the project</p>
    <div className="card-actions">
    </div>
  </div>
</div>

      </div>
    </>
    )
}
export default About;