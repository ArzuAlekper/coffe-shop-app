import React from "react";
import { Animated } from "react-animated-css";

function Home() {
  return (
    <div id="home">
      <div
        className="sb-contentColumn sb-global-gutters mx-auto sb-contentColumn--xlarge px0 my5"
        id="137-77594"
      >
        <div className="sb-contentColumn__inner">
          <div className="md-flex">
            <div
              className="flex justify-center items-center md-size6of12"
              style={{ backgroundColor: "#1e3932" }}
            >
              <img
                alt=""
                className="block"
                src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-77623.jpg"
              />
            </div>
            <div
              className="py5 flex items-center justify-center text-center md-size6of12 textBlockGutter"
              style={{ backgroundColor: "#1e3932" }}
            >
              <div className="image-content-block_copyBlockMaxWidth__sOh9S">
                <h1
                  className="sb-heading mb4 md text-semibold"
                  tabindex="-1"
                  style={{ color: "#ffffff", padding: "20px" }}
                >
                  <Animated animationIn="slideInUp" animationOut="fadeOut">
                    <span className="rich-text_text__02jRf rich-text_width__0GHdb rich-text_greenLinks__BNG4d">
                      Welcome to Starbucks
                    </span>
                  </Animated>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
