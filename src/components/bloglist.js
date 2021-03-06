import React, { Component } from "react";
// import axios from "axios";
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import { getAllBlogs } from '../actions';
import { bindActionCreators } from 'redux';

class Bloglist extends Component {
  componentDidMount() {
    this.props.getAllBlogs();
  }


  render() {
    
    const BlogData = this.props.blogs.blogs ? this.props.blogs.blogs.map((item) => {
      
      return(
          <div className="col-md-12" key={item.id}>
          <div className="blog-entry d-md-flex ftco-animate fadeInUp ftco-animated">
            <a
                href="#"
                className="img img-2"
                style={{
                  backgroundImage: "url(" + "images/image_1.jpg" + ")"
                }}
              ></a>
              <div className="text text-2 pl-md-4">
                <h3 className="mb-2">
                  <a href={"home/"+item.id}>{item.title}</a>
                </h3>
                <div className="meta-wrap">
                  <p className="meta">
                    <span>
                      <i className="icon-calendar mr-2"></i>June 28,
                      2019
                    </span>
                    <span>
                      <a href="#">
                        <i className="icon-folder-o mr-2"></i>Travel
                      </a>
                    </span>
                    <span>
                      <i className="icon-comment2 mr-2"></i>5 Comment
                    </span>
                  </p>
                </div>
                {/* This throws an error, so commenting for now */}
                {/* <p className="mb-4">
                  <ReadMoreReact 
                    text={item.content}
                    readMoreText="" />
                  
                </p> */}
                <p>
                  <Link to={"home/"+item.id} className="btn-custom">
                  Read More{" "}
                    <span className="ion-ios-arrow-forward"></span>
                  </Link>
                  {/* <a href="#" className="btn-custom">
                    Read More{" "}
                    <span className="ion-ios-arrow-forward"></span>
                  </a> */}
                </p>
              </div>
            </div>
          </div>
      )}
    ): null;
    
    return (
      <div id="colorlib-main">
        <section className="ftco-section ftco-no-pt ftco-no-pb">
          <div className="container">
            <div className="row d-flex">
              <div className="col-xl-8 py-5 px-md-5">
                <div className="row pt-md-4">
               { BlogData }
                  
                </div>
                <div className="row">
                  <div className="col">
                    <div className="block-27">
                      <ul>
                        <li>
                          <a href="#">&lt;</a>
                        </li>
                        <li className="active">
                          <span>1</span>
                        </li>
                        <li>
                          <a href="#">2</a>
                        </li>
                        <li>
                          <a href="#">3</a>
                        </li>
                        <li>
                          <a href="#">4</a>
                        </li>
                        <li>
                          <a href="#">5</a>
                        </li>
                        <li>
                          <a href="#">&gt;</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xl-4 sidebar ftco-animate bg-light pt-5 fadeInUp ftco-animated">
                <div className="sidebar-box pt-md-4">
                  <form action="#" className="search-form">
                    <div className="form-group">
                      <span className="icon icon-search"></span>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Type a keyword and hit enter"
                      />
                    </div>
                  </form>
                </div>
                <div className="sidebar-box ftco-animate fadeInUp ftco-animated">
                  <h3 className="sidebar-heading">Categories</h3>
                  <ul className="categories">
                    <li>
                      <a href="#">
                        Fashion <span>(6)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Technology <span>(8)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Travel <span>(2)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Food <span>(2)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Photography <span>(7)</span>
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="sidebar-box ftco-animate fadeInUp ftco-animated">
                  <h3 className="sidebar-heading">Popular Articles</h3>
                  <div className="block-21 mb-4 d-flex">
                    <a
                      className="blog-img mr-4"
                      style={{
                        backgroundImage: "url(" + "images/image_1.jpg" + ")"
                      }}
                    ></a>
                    <div className="text">
                      <h3 className="heading">
                        <a href="#">
                          Even the all-powerful Pointing as no control
                        </a>
                      </h3>
                      <div className="meta">
                        <div>
                          <a href="#">
                            <span className="icon-calendar"></span> June 28,
                            2019
                          </a>
                        </div>
                        <div>
                          <a href="#">
                            <span className="icon-person"></span> Dave Lewis
                          </a>
                        </div>
                        <div>
                          <a href="#">
                            <span className="icon-chat"></span> 19
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="block-21 mb-4 d-flex">
                    <a
                      className="blog-img mr-4"
                      style={{
                        backgroundImage: "url(" + "images/image_2.jpg" + ")"
                      }}
                    ></a>
                    <div className="text">
                      <h3 className="heading">
                        <a href="#">
                          Even the all-powerful Pointing has no control
                        </a>
                      </h3>
                      <div className="meta">
                        <div>
                          <a href="#">
                            <span className="icon-calendar"></span> June 28,
                            2019
                          </a>
                        </div>
                        <div>
                          <a href="#">
                            <span className="icon-person"></span> Dave Lewis
                          </a>
                        </div>
                        <div>
                          <a href="#">
                            <span className="icon-chat"></span> 19
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="block-21 mb-4 d-flex">
                    <a
                      className="blog-img mr-4"
                      style={{
                        backgroundImage: "url(" + "images/image_3.jpg" + ")"
                      }}
                    ></a>
                    <div className="text">
                      <h3 className="heading">
                        <a href="#">
                          Even the all-powerful Pointing has no control
                        </a>
                      </h3>
                      <div className="meta">
                        <div>
                          <a href="#">
                            <span className="icon-calendar"></span> June 28,
                            2019
                          </a>
                        </div>
                        <div>
                          <a href="#">
                            <span className="icon-person"></span> Dave Lewis
                          </a>
                        </div>
                        <div>
                          <a href="#">
                            <span className="icon-chat"></span> 19
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="sidebar-box ftco-animate fadeInUp ftco-animated">
                  <h3 className="sidebar-heading">Tag Cloud</h3>
                  <ul className="tagcloud">
                    <a href="#" className="tag-cloud-link">
                      animals
                    </a>
                    <a href="#" className="tag-cloud-link">
                      human
                    </a>
                    <a href="#" className="tag-cloud-link">
                      people
                    </a>
                    <a href="#" className="tag-cloud-link">
                      cat
                    </a>
                    <a href="#" className="tag-cloud-link">
                      dog
                    </a>
                    <a href="#" className="tag-cloud-link">
                      nature
                    </a>
                    <a href="#" className="tag-cloud-link">
                      leaves
                    </a>
                    <a href="#" className="tag-cloud-link">
                      food
                    </a>
                  </ul>
                </div>

                <div
                  className="sidebar-box subs-wrap img py-4"
                  style={{ backgroundImage: "url(" + "images/bg_1.jpg" + ")" }}
                >
                  <div className="overlay"></div>
                  <h3 className="mb-4 sidebar-heading">Newsletter</h3>
                  <p className="mb-4">
                    Far far away, behind the word mountains, far from the
                    countries Vokalia
                  </p>
                  <form action="#" className="subscribe-form">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Email Address"
                      />
                      <input
                        type="submit"
                        value="Subscribe"
                        className="mt-2 btn btn-white submit"
                      />
                    </div>
                  </form>
                </div>

                <div className="sidebar-box ftco-animate fadeInUp ftco-animated">
                  <h3 className="sidebar-heading">Archives</h3>
                  <ul className="categories">
                    <li>
                      <a href="#">
                        Decob14 2018 <span>(10)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        September 2018 <span>(6)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        August 2018 <span>(8)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        July 2018 <span>(2)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        June 2018 <span>(7)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        May 2018 <span>(5)</span>
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="sidebar-box ftco-animate fadeInUp ftco-animated">
                  <h3 className="sidebar-heading">Paragraph</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Ducimus itaque, autem necessitatibus voluptate quod mollitia
                    delectus aut.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    blogs: state.blogs
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getAllBlogs
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps) (Bloglist);
