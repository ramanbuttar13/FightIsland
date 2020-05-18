import React, { Component } from "react";
import {connect} from 'react-redux';
import { getBlog } from '../actions';
import { bindActionCreators } from 'redux';

class Blog extends Component {

    componentDidMount() {
      this.props.getBlog(this.props.match.params.id);
    }

    blogTemplate = (blog) => (
        blog ? 
          <div id="colorlib-main">
            <section className="ftco-section ftco-no-pt ftco-no-pb">
              <div className="container">
                <div className="row d-flex">
                  <div className="col-lg-8 px-md-5 py-5">
                    <div className="row pt-md-4">
                      <h1 className="mb-3">{this.state.blog.title}</h1>
                      <p>{this.state.blog.content}</p>
                      <p>
                        <img src="../images/image_1.jpg" alt="" className="img-fluid" />
                      </p>
                      <p>Molestiae cupiditate inventore animi, maxime sapiente optio, illo est nemo veritatis repellat sunt doloribus nesciunt! Minima laborum magni reiciendis qui voluptate quisquam voluptatem soluta illo eum ullam incidunt rem assumenda eveniet eaque sequi deleniti tenetur dolore amet fugit perspiciatis ipsa, odit. Nesciunt dolor minima esse vero ut ea, repudiandae suscipit!</p>
                      <h2 className="mb-3 mt-5">#2. Creative WordPress Themes</h2>
                      <p>Temporibus ad error suscipit exercitationem hic molestiae totam obcaecati rerum, eius aut, in. Exercitationem atque quidem tempora maiores ex architecto voluptatum aut officia doloremque. Error dolore voluptas, omnis molestias odio dignissimos culpa ex earum nisi consequatur quos odit quasi repellat qui officiis reiciendis incidunt hic non? Debitis commodi aut, adipisci.</p>
                      <p>
                        <img src="../images/image_2.jpg" alt="" className="img-fluid" />
                      </p>
                      <p>Quisquam esse aliquam fuga distinctio, quidem delectus veritatis reiciendis. Nihil explicabo quod, est eos ipsum. Unde aut non tenetur tempore, nisi culpa voluptate maiores officiis quis vel ab consectetur suscipit veritatis nulla quos quia aspernatur perferendis, libero sint. Error, velit, porro. Deserunt minus, quibusdam iste enim veniam, modi rem maiores.</p>
                      <p>Odit voluptatibus, eveniet vel nihil cum ullam dolores laborum, quo velit commodi rerum eum quidem pariatur! Quia fuga iste tenetur, ipsa vel nisi in dolorum consequatur, veritatis porro explicabo soluta commodi libero voluptatem similique id quidem? Blanditiis voluptates aperiam non magni. Reprehenderit nobis odit inventore, quia laboriosam harum excepturi ea.</p>
                      <p>Adipisci vero culpa, eius nobis soluta. Dolore, maxime ullam ipsam quidem, dolor distinctio similique asperiores voluptas enim, exercitationem ratione aut adipisci modi quod quibusdam iusto, voluptates beatae iure nemo itaque laborum. Consequuntur et pariatur totam fuga eligendi vero dolorum provident. Voluptatibus, veritatis. Beatae numquam nam ab voluptatibus culpa, tenetur recusandae!</p>
                      <p>Voluptas dolores dignissimos dolorum temporibus, autem aliquam ducimus at officia adipisci quasi nemo a perspiciatis provident magni laboriosam repudiandae iure iusto commodi debitis est blanditiis alias laborum sint dolore. Dolores, iure, reprehenderit. Error provident, pariatur cupiditate soluta doloremque aut ratione. Harum voluptates mollitia illo minus praesentium, rerum ipsa debitis, inventore?</p>
                      <div className="tag-widget post-tag-container mb-5 mt-5">
                        <div className="tagcloud">
                          <a href="#" className="tag-cloud-link">Life</a>
                          <a href="#" className="tag-cloud-link">Sport</a>
                          <a href="#" className="tag-cloud-link">Tech</a>
                          <a href="#" className="tag-cloud-link">Travel</a>
                        </div>
                      </div>

                      <div className="about-author d-flex p-4 bg-light">
                        <div className="bio mr-5">
                          <img src="../images/person_1.jpg" alt="Image placeholder" className="img-fluid mb-4" />
                        </div>
                        <div className="desc">
                          <h3>George Washington</h3>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus itaque, autem necessitatibus voluptate quod mollitia delectus aut, sunt placeat nam vero culpa sapiente consectetur similique, inventore eos fugit cupiditate numquam!</p>
                        </div>
                      </div>


                      <div className="pt-5 mt-5">
                        <h3 className="mb-5 font-weight-bold">6 Comments</h3>
                        <ul className="comment-list">
                          <li className="comment">
                            <div className="vcard bio">
                              <img src="../images/person_1.jpg" alt="Image placeholder" />
                            </div>
                            <div className="comment-body">
                              <h3>John Doe</h3>
                              <div className="meta">October 03, 2018 at 2:21pm</div>
                              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?</p>
                              <p><a href="#" className="reply">Reply</a></p>
                            </div>
                          </li>

                          <li className="comment">
                            <div className="vcard bio">
                              <img src="../images/person_1.jpg" alt="Image placeholder" />
                            </div>
                            <div className="comment-body">
                              <h3>John Doe</h3>
                              <div className="meta">October 03, 2018 at 2:21pm</div>
                              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?</p>
                              <p><a href="#" className="reply">Reply</a></p>
                            </div>

                            <ul className="children">
                              <li className="comment">
                                <div className="vcard bio">
                                  <img src="../images/person_1.jpg" alt="Image placeholder" />
                                </div>
                                <div className="comment-body">
                                  <h3>John Doe</h3>
                                  <div className="meta">October 03, 2018 at 2:21pm</div>
                                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?</p>
                                  <p><a href="#" className="reply">Reply</a></p>
                                </div>


                                <ul className="children">
                                  <li className="comment">
                                    <div className="vcard bio">
                                      <img src="../images/person_1.jpg" alt="Image placeholder" />
                                    </div>
                                    <div className="comment-body">
                                      <h3>John Doe</h3>
                                      <div className="meta">October 03, 2018 at 2:21pm</div>
                                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?</p>
                                      <p><a href="#" className="reply">Reply</a></p>
                                    </div>

                                    <ul className="children">
                                      <li className="comment">
                                        <div className="vcard bio">
                                          <img src="../images/person_1.jpg" alt="Image placeholder" />
                                        </div>
                                        <div className="comment-body">
                                          <h3>John Doe</h3>
                                          <div className="meta">October 03, 2018 at 2:21pm</div>
                                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?</p>
                                          <p><a href="#" className="reply">Reply</a></p>
                                        </div>
                                      </li>
                                    </ul>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </li>

                          <li className="comment">
                            <div className="vcard bio">
                              <img src="../images/person_1.jpg" alt="Image placeholder" />
                            </div>
                            <div className="comment-body">
                              <h3>John Doe</h3>
                              <div className="meta">October 03, 2018 at 2:21pm</div>
                              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?</p>
                              <p><a href="#" className="reply">Reply</a></p>
                            </div>
                          </li>
                        </ul>

                        <div className="comment-form-wrap pt-5">
                          <h3 className="mb-5">Leave a comment</h3>
                          <form action="#" className="p-3 p-md-5 bg-light">
                            <div className="form-group">
                              <label htmlFor="name">Name *</label>
                              <input type="text" className="form-control" id="name" />
                            </div>
                            <div className="form-group">
                              <label htmlFor="email">Email *</label>
                              <input type="email" className="form-control" id="email" />
                            </div>
                            <div className="form-group">
                              <label htmlFor="website">Website</label>
                              <input type="url" className="form-control" id="website" />
                            </div>

                            <div className="form-group">
                              <label htmlFor="message">Message</label>
                              <textarea name="" id="message" cols="30" rows="10" className="form-control"></textarea>
                            </div>
                            <div className="form-group">
                              <input type="submit" value="Post Comment" className="btn py-3 px-4 btn-primary" />
                            </div>

                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 sidebar ftco-animate bg-light pt-5 fadeInUp ftco-animated">
                    <div className="sidebar-box pt-md-4">
                      <form action="#" className="search-form">
                        <div className="form-group">
                          <span className="icon icon-search"></span>
                          <input type="text" className="form-control" placeholder="Type a keyword and hit enter" />
                        </div>
                      </form>
                    </div>
                    <div className="sidebar-box ftco-animate fadeInUp ftco-animated">
                      <h3 className="sidebar-heading">Categories</h3>
                      <ul className="categories">
                        <li><a href="#">Fashion <span>(6)</span></a></li>
                        <li><a href="#">Technology <span>(8)</span></a></li>
                        <li><a href="#">Travel <span>(2)</span></a></li>
                        <li><a href="#">Food <span>(2)</span></a></li>
                        <li><a href="#">Photography <span>(7)</span></a></li>
                      </ul>
                    </div>

                    <div className="sidebar-box ftco-animate fadeInUp ftco-animated">
                      <h3 className="sidebar-heading">Popular Articles</h3>
                      <div className="block-21 mb-4 d-flex">
                        <a className="blog-img mr-4" style={{
                          backgroundImage: "url(" + "../images/image_1.jpg" + ")"
                        }}></a>
                        <div className="text">
                          <h3 className="heading"><a href="#">Even the all-powerful Pointing has no control</a></h3>
                          <div className="meta">
                            <div><a href="#"><span className="icon-calendar"></span> June 28, 2019</a></div>
                            <div><a href="#"><span className="icon-person"></span> Dave Lewis</a></div>
                            <div><a href="#"><span className="icon-chat"></span> 19</a></div>
                          </div>
                        </div>
                      </div>
                      <div className="block-21 mb-4 d-flex">
                        <a className="blog-img mr-4" style={{
                          backgroundImage: "url(" + "../images/image_2.jpg" + ")"
                        }}></a>
                        <div className="text">
                          <h3 className="heading"><a href="#">Even the all-powerful Pointing has no control</a></h3>
                          <div className="meta">
                            <div><a href="#"><span className="icon-calendar"></span> June 28, 2019</a></div>
                            <div><a href="#"><span className="icon-person"></span> Dave Lewis</a></div>
                            <div><a href="#"><span className="icon-chat"></span> 19</a></div>
                          </div>
                        </div>
                      </div>
                      <div className="block-21 mb-4 d-flex">
                        <a className="blog-img mr-4" style={{
                          backgroundImage: "url(" + "../images/image_3.jpg" + ")"
                        }}></a>
                        <div className="text">
                          <h3 className="heading"><a href="#">Even the all-powerful Pointing has no control</a></h3>
                          <div className="meta">
                            <div><a href="#"><span className="icon-calendar"></span> June 28, 2019</a></div>
                            <div><a href="#"><span className="icon-person"></span> Dave Lewis</a></div>
                            <div><a href="#"><span className="icon-chat"></span> 19</a></div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="sidebar-box ftco-animate fadeInUp ftco-animated">
                      <h3 className="sidebar-heading">Tag Cloud</h3>
                      <ul className="tagcloud">
                        <a href="#" className="tag-cloud-link">animals</a>
                        <a href="#" className="tag-cloud-link">human</a>
                        <a href="#" className="tag-cloud-link">people</a>
                        <a href="#" className="tag-cloud-link">cat</a>
                        <a href="#" className="tag-cloud-link">dog</a>
                        <a href="#" className="tag-cloud-link">nature</a>
                        <a href="#" className="tag-cloud-link">leaves</a>
                        <a href="#" className="tag-cloud-link">food</a>
                      </ul>
                    </div>

                    <div className="sidebar-box subs-wrap img" style={{
                      backgroundImage: "url(" + "../images/bg_1.jpg" + ")"
                    }}>
                      <div className="overlay"></div>
                      <h3 className="mb-4 sidebar-heading">Newsletter</h3>
                      <p className="mb-4">Far far away, behind the word mountains, far from the countries Vokalia</p>
                      <form action="#" className="subscribe-form">
                        <div className="form-group">
                          <input type="text" className="form-control" placeholder="Email Address" />
                          <input type="submit" value="Subscribe" className="mt-2 btn btn-white submit" />
                        </div>
                      </form>
                    </div>

                    <div className="sidebar-box ftco-animate fadeInUp ftco-animated">
                      <h3 className="sidebar-heading">Archives</h3>
                      <ul className="categories">
                        <li><a href="#">December 2018 <span>(10)</span></a></li>
                        <li><a href="#">September 2018 <span>(6)</span></a></li>
                        <li><a href="#">August 2018 <span>(8)</span></a></li>
                        <li><a href="#">July 2018 <span>(2)</span></a></li>
                        <li><a href="#">June 2018 <span>(7)</span></a></li>
                        <li><a href="#">May 2018 <span>(5)</span></a></li>
                      </ul>
                    </div>


                    <div className="sidebar-box ftco-animate fadeInUp ftco-animated">
                      <h3 className="sidebar-heading">Paragraph</h3>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus itaque, autem necessitatibus voluptate quod mollitia delectus aut.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          : null
    )

    render() {
        console.log(this.props)
        return(
          <div>
              { this.blogTemplate(this.props.blogData) }
          </div>
          
    )
  }
}
function mapStateToProps(state) {
  return{
    blog: state.blog
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getBlog
  }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps) (Blog);
