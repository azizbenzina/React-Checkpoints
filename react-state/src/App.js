import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Button } from 'react-bootstrap';
import "./App.css";
class App extends React.Component {
  
  state = {
    fullName: "Benzina Mohamed Aziz",
    bio: "I'm BENZINA Aziz, Full-Stack Developer. I am looking for a new opportunity in Web and Mobile development, more interested in these Environments: java, dart, python, JavaScript, Node JS, Express JS, HTML5, CSS, C#, php, React JS, Flutter, Spring boot, jqery, boostrap. Database: Mongodb, SQL, Firebase, FireStore.", 
    imgSrc:"imageInSrc.png",
    profession:"Full-Stack Developer",
    shows:false
  };
  handleClick=()=>this.setState({shows:!this.state.shows});
  
  render() {
    return ( <div className="App">  
    <div class="row">
    <div class="col-lg-7 mx-auto text-white text-center pt-5">
        <h1 className="page" > Profile Page</h1>
        <p >{this.state.shows}</p>
        <p > <Button className="but" onClick={this.handleClick}>Show Profile</Button>
        </p>
    </div>
    <hr className="hr"/>

{
  this.state.shows==true ? (
        <div className="App">  
        <div class="row py-5 px-4">
      <div class="col-xl-4 col-md-6 col-sm-10 mx-auto">
  
          <div class="bg-white shadow rounded overflow-hidden">
              <div class="px-4 pt-0 pb-4 bg-dark">
                  <div class="media align-items-end profile-header">
                      <div class="profile mr-3"><img src={this.state.imgSrc} alt="..." width="110" class="rounded mb-2 img-thumbnail"/></div>
                      <div class="media-body mb-5 text-white">
                          <h4 class="mt-0 mb-0">{this.state.fullName}</h4>
                          <br />
                          <p class="medium mb-4"> <i class="fa fa-map-marker mr-2"></i>{this.state.profession}</p>
                      </div>
                  </div>
              </div>
  
              <div class="bg-light p-4 d-flex justify-content-start text-center">

                  <ul class="list-inline mb-0">
                      <li class="list-inline-item">
                          <h5 class="font-weight-bold mb-0 d-block">241</h5><small class=""> <i class=""></i>Photos</small>
                      </li>
                      <li class="list-inline-item">
                          <h5 class="font-weight-bold mb-0 d-block">84K</h5><small class="text-muted"> <i class="fa fa-user-circle-o mr-1"></i>Followers</small>
                      </li>
                  </ul>
              </div>
  
              <div class="py-4 px-4">
              <div class="d-flex align-items-center justify-content-between mb-3">
                    <h5 class="mb-0">Recent works</h5><a href="#" class="btn btn-link text-muted">Show all</a>
                </div>
                  <div class="row">
                      <div class="col-lg-6 mb-2 pr-lg-1"><img src="https://bootstrapious.com/i/snippets/sn-profile/img-3.jpg" alt="" class="img-fluid rounded shadow-sm"/></div>
                      <div class="col-lg-6 mb-2 pl-lg-1"><img src="https://bootstrapious.com/i/snippets/sn-profile/img-4.jpg" alt="" class="img-fluid rounded shadow-sm"/></div>
                      <div class="col-lg-6 pr-lg-1 mb-2"><img src="https://bootstrapious.com/i/snippets/sn-profile/img-5.jpg" alt="" class="img-fluid rounded shadow-sm"/></div>
                      <div class="col-lg-6 pl-lg-1"><img src="https://bootstrapious.com/i/snippets/sn-profile/img-6.jpg" alt="" class="img-fluid rounded shadow-sm"/></div>
                  </div>
                  <div class="py-4">
                      <h5 class="mb-3">Bio</h5>
                      <div class="p-4 bg-light rounded shadow-sm">
                          <p class="font-italic mb-0">{this.state.bio}</p>
                          <ul class="list-inline small text-muted mt-3 mb-0">
                              <li class="list-inline-item"><i class="fa fa-comment-o mr-2"></i>12 Comments</li>
                              <li class="list-inline-item"><i class="fa fa-heart-o mr-2"></i>200 Likes</li>
                          </ul>
                      </div>
                  </div>
              </div>
          </div>
  
      </div>
  </div>    
  
       
       </div>
      ): null
}
</div>
</div>
)
 }
    
}

export default App;
