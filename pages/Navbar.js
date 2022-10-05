import 'bootstrap/dist/css/bootstrap.min.css'

import React from 'react';



function Navbar() {
  return (
                <>

              <nav class="navbar navbar-dark bg-dark fixed-top">
            <div class="container-fluid">
              <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
                <span class="navbar-toggler-icon"></span>
              </button>
              
              
              
              <div class="offcanvas offcanvas-start text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                <div class="offcanvas-header">
                  <h1 class="offcanvas-title" id="offcanvasDarkNavbarLabel">Calculater Nummerical</h1>
                  
                  <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                  <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                    <li class="nav-item">
                      <a class="nav-link active fs-4" aria-current="page" href="http://localhost:3000/Bisection">Bisection</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link active fs-4" aria-current="page" href="#">Flase position</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link active fs-4" aria-current="page" href="#">One point iteration</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link active fs-4" aria-current="page" href="#">newton Raphson</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link active fs-4" aria-current="page" href="#">Secant</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link active fs-4" aria-current="page" href="#">Carmer's Rule</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link active fs-4" aria-current="page" href="#">One point iteration</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link active fs-4" aria-current="page" href="#">Gauss Elimination Method</a>
                    </li>
                   
                    
                     
                    
                    
                    
                  </ul>
                 
                </div>
              </div>
            </div>
          </nav>
              
        
                      
                      
              

    </>
  );
}

export default Navbar;
