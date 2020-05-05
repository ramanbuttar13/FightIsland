import React, { Component } from "react";

class Leftnav extends Component {
  state = {
    keyword: "Hiiii"
  };
  render() {
    return (
      <>
        <a href="#" className="js-colorlib-nav-toggle colorlib-nav-toggle">
          <i></i>
        </a>
        <aside
          id="colorlib-aside"
          role="complementary"
          className="js-fullheight"
        >
          <nav id="colorlib-main-menu" role="navigation">
            <ul>
              <li className="colorlib-active">
                <a href="index.html">Home</a>
              </li>
              <li>
                <a href="fashion.html">Fashion</a>
              </li>
              <li>
                <a href="travel.html">Travel</a>
              </li>
              <li>
                <a href="about.html">About</a>
              </li>
              <li>
                <a href="contact.html">Contact</a>
              </li>
            </ul>
          </nav>

          <div className="colorlib-footer">
            <h1 id="colorlib-logo" className="mb-4">
              <a href="index.html" style={{ backgroundImage: "url(" + "images/bg_1.jpg" + ")" }}>
                Andrea <span>Moore</span>
              </a>
            </h1>
            <div className="mb-4">
              <h3>Subscribe for newsletter</h3>
              <form action="#" className="colorlib-subscribe-form">
                <div className="form-group d-flex">
                  <div className="icon">
                    <span className="icon-paper-plane"></span>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Email Address"
                  />
                </div>
              </form>
            </div>
            <p className="pfooter">
              Copyright &copy;
              <script>document.write(new Date().getFullYear());</script> All
              rights reserved | This template is made with{" "}
              <i className="icon-heart" aria-hidden="true"></i> by{" "}
              <a href="https://colorlib.com">Colorlib</a>
            </p>
          </div>
        </aside>
      </>
    );
  }
}

export default Leftnav;
