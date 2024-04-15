import React from "react";
import "./BlogArea.css";

const BlogArea = () => {
  return (
    <div className="blogs-container">
      <div className="best-seller ">
        <h2 className="mb-5">FROM THE BLOG</h2>
      </div>
      <div className="blog-section">
        <div className="blogs">
          <div className="blog p-2">
            <div className="video">
              <iframe
                className="iframe"
                src="https://www.youtube.com/embed/78EjyqRHlSo"
                allow="autoplay; encrypted-media"
                allowFullScreen
                title="video"
              />
            </div>
            <div className="title">
              <h3>Weight Benches</h3>

              <p>
                Weight training benches may be of various designs: fixed
                horizontal, fixed inclined, fixed in a folded position, with one
                adjustable portion, with two or more adjustable portions, with
                racks to hold bars, etc.
              </p>
            </div>
          </div>
          <div className="blog p-2 second-one">
            <div className="video">
              <iframe
                className="iframe"
                src="https://www.youtube.com/embed/tLBJeXIIlN0"
                allow="autoplay; encrypted-media"
                allowFullScreen
                title="video"
              />
            </div>
            <div className="title">
              <h2>Treadmill</h2>
              <p>
                The continuous loop allows a person to walk or run on the
                treadmill in place. Treadmills are often used as part of aerobic
                exercise or as a warmup before doing strength training
                exercises.
              </p>
            </div>
          </div>
          <div className="blog last-one">
            <div className="video">
              {" "}
              <iframe
                className="iframe"
                src="https://www.youtube.com/embed/_ELeraSbEHg?start=10"
                allow="autoplay; encrypted-media"
                allowFullScreen
                title="video"
              />
            </div>
            <div className="title">
              <h2>Torque Fitness Tank</h2>
              <p>
                The Tank M1 is designed with a unique resistance system that
                uses a series of four wheels and an adjustable braking mechanism
                to create variable resistance. The user can adjust the
                resistance level by changing the amount of brake pressure .
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogArea;
