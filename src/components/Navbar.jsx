import React from 'react'

export default function Navbar() {
  return (
    <div className="container px-lg-0">
      <div className="row">
        <div className="col-lg-10 mx-auto">
        <nav class="navbar navbar-expand-lg customNavbar">
      <div class="container-fluid">
        <a class="navbar-brand ps-lg-5" href="#"><img src="/assets/logo.png" alt="" /></a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <input
                class="form-control"
                type="search"
                placeholder="Enter License Key"
                aria-label="Search"
              />
            </li>
            <li class="nav-item ms-0 ms-lg-3 mt-3 mt-lg-0">
              <button class="btn btn-outline-success" type="submit">
                Buy License
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
        </div>
      </div>
    </div>
  )
}
