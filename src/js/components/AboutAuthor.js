import React from "react";
import "../../scss/utils/_all.scss";
import "../../scss/components/_aboutAuthor.scss";

export default function AboutAuthor() {
  return (
    <section id='aboutAuthor' className="aboutAuthor  col-lg ">
      <div className="imgWrap col-lg-4">
        <div className="img" alt="grey square"></div>
      </div>
      <div className="descWrap col-lg-6">
        <div className="authorNameWrap">
          <h3>Lorem, ipsum dolor sit amet </h3>
        </div>
        <div className="authorDescWrap">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            neque dolores voluptatem ipsam officiis inventore aperiam ut at
            illum natus earum ipsa velit cumque ullam quo possimus, delectus
            placeat distinctio?
          </p>
        </div>
      </div>
    </section>
  );
}
