import React from "react";
import "../../scss/utils/_all.scss";
import "../../scss/components/_aboutApp.scss";

export default function AboutApp() {
  return (

    <div id="aboutApp" className="about  col-lg-12 ">
      <div className="aboout-col-single col-lg-3">
        <div className="icon">
          <svg
            fill="currentColor"
            viewBox="0 0 16 16"
            class="bi bi-check2"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"
            />
          </svg>
        </div>
        <div className="aboutDesc">
          <div className='h-wrap'><h3>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h3></div>
          <div className='p-wrap'><p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates,
            harum enim veniam atque maxime voluptatibus tenetur veritatis sunt
            recusandae, vitae similique assumenda aliquam?
          </p></div>
          
        </div>
      </div>
      <div className="aboout-col-single col-lg-3">
        <div className="icon">
          <svg
            fill="currentColor"
            viewBox="0 0 16 16"
            className="bi bi-clock-history"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M8.515 1.019A7 7 0 0 0 8 1V0a8 8 0 0 1 .589.022l-.074.997zm2.004.45a7.003 7.003 0 0 0-.985-.299l.219-.976c.383.086.76.2 1.126.342l-.36.933zm1.37.71a7.01 7.01 0 0 0-.439-.27l.493-.87a8.025 8.025 0 0 1 .979.654l-.615.789a6.996 6.996 0 0 0-.418-.302zm1.834 1.79a6.99 6.99 0 0 0-.653-.796l.724-.69c.27.285.52.59.747.91l-.818.576zm.744 1.352a7.08 7.08 0 0 0-.214-.468l.893-.45a7.976 7.976 0 0 1 .45 1.088l-.95.313a7.023 7.023 0 0 0-.179-.483zm.53 2.507a6.991 6.991 0 0 0-.1-1.025l.985-.17c.067.386.106.778.116 1.17l-1 .025zm-.131 1.538c.033-.17.06-.339.081-.51l.993.123a7.957 7.957 0 0 1-.23 1.155l-.964-.267c.046-.165.086-.332.12-.501zm-.952 2.379c.184-.29.346-.594.486-.908l.914.405c-.16.36-.345.706-.555 1.038l-.845-.535zm-.964 1.205c.122-.122.239-.248.35-.378l.758.653a8.073 8.073 0 0 1-.401.432l-.707-.707z"
            />
            <path
              fill-rule="evenodd"
              d="M8 1a7 7 0 1 0 4.95 11.95l.707.707A8.001 8.001 0 1 1 8 0v1z"
            />
            <path
              fill-rule="evenodd"
              d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5z"
            />
          </svg>
        </div>
        <div className="aboutDesc">
        <div className='h-wrap'><h3>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h3></div>
          <div className='p-wrap'><p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates,
            harum enim veniam atque maxime voluptatibus tenetur veritatis sunt
            recusandae, vitae similique assumenda aliquam?
          </p></div>
        </div>
      </div>
      <div className="aboout-col-single col-lg-3">
        <div className="icon">
          <svg
            
            viewBox="0 0 16 16"
            class="bi bi-list-task"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M2 2.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V3a.5.5 0 0 0-.5-.5H2zM3 3H2v1h1V3z"
            />
            <path d="M5 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM5.5 7a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 4a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9z" />
            <path
              fill-rule="evenodd"
              d="M1.5 7a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5V7zM2 7h1v1H2V7zm0 3.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5H2zm1 .5H2v1h1v-1z"
            />
          </svg>
        </div>
        <div className="aboutDesc">
        <div className='h-wrap'><h3>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h3></div>
          <div className='p-wrap'><p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates,
            harum enim veniam atque maxime voluptatibus tenetur veritatis sunt
            recusandae, vitae similique assumenda aliquam?
          </p></div>
        </div>
      </div>
    </div>
  );
}
