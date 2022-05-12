import React, { useEffect } from 'react'
import {useNavigate} from 'react-router-dom';

function AppBar() {
  const navigate=useNavigate();
  useEffect(()=>{
    navigate('/');
  },[]);
  return (
    <div>
      <div class="page-title  home text-center">
                <h1 class="heading-page " style={{textAlign:'center'}}> Welcome to Home Page
                </h1>
                <div class="hexagon-menu clear" style={{paddingLeft:'40%',paddingTop:'2%'}}> 
                <div class="hexagon-item">
                  <div class="hex-item">
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                  <div class="hex-item">
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                  <a class="hex-content">
                    <span class="hex-content-inner">
                      <span class="icon">
                        <i class="fa fa-bullseye"></i>
                      </span>
                      <span class="title" onClick={()=> navigate('/')} > Home </span>
                    </span>
                    <svg viewBox="0 0 173.20508075688772 200" height="200" width="174" version="1.1" xmlns="http://www.w3.org/2000/svg">
                      <path d="M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z" fill="#1e2530"></path>
                    </svg>
                  </a>
                </div>
                <div class="hexagon-item">
                  <div class="hex-item">
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                  <div class="hex-item">
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                  <a class="hex-content">
                    <span class="hex-content-inner">
                      <span class="icon">
                        <i class="fa fa-braille"></i>
                      </span>
                      <span class="title" onClick={()=> navigate('/movies')}>Movies</span>
                    </span>
                    <svg viewBox="0 0 173.20508075688772 200" height="200" width="174" version="1.1" xmlns="http://www.w3.org/2000/svg">
                      <path d="M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z" fill="#1e2530"></path>
                    </svg>
                  </a>
                </div>
             
              </div>
              </div>
      <main class="site-wrapper">
    
  </main>
  <br />
  </div>
  )
}

export default AppBar