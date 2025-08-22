import React, { useState } from 'react'
import portfolioItems from './portfolioItems ';
import "./Portfolio.css"
const Portfolio = () => {

  const [filter, setFilter] = useState("all");

  const filteredItems = portfolioItems.filter(
    item => filter === "all" || item.category === filter
  );

  return (
    <>
      <div id="portfolio" className="Head-title ">
        <span>Portfolio</span>
        <h1>Portfolio</h1>
        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      </div>
      {/* 
 <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
    <li class="nav-item" role="presentation">
      <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home"
        type="button" role="tab" data-filter="all" onClick={() => setFilter("all")}>All</button>
    </li>
    <li class="nav-item" role="presentation">
      <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile"
        type="button" role="tab" data-filter="App" onClick={() => setFilter("App")}>App</button>
    </li>
    <li class="nav-item" role="presentation">
      <button class="nav-link" id="pills-settings-tab" data-bs-toggle="pill" data-bs-target="#pills-settings"
        type="button" role="tab" data-filter="Product" onClick={() => setFilter("Product")}>Product</button>
    </li>
      <li class="nav-item" role="presentation">
      <button class="nav-link" id="pills-settings-tab" data-bs-toggle="pill" data-bs-target="#pills-settings"
        type="button" role="tab" data-filter="Branding" onClick={() => setFilter("Branding")}>Branding</button>
    </li>
      <li class="nav-item" role="presentation">
      <button class="nav-link" id="pills-settings-tab" data-bs-toggle="pill" data-bs-target="#pills-settings"
        type="button" role="tab" data-filter="Books" onClick={() => setFilter("Books")}>Books</button>
    </li>
  </ul> */}


      <ul className="nav  nav-pills  ">
        <li className="nav-itemp " role="presentation">
          <button data-filter="all" onClick={() => setFilter("all")}>All</button>
        </li>
        <li className="nav-itemp" role="presentation">
          <button data-filter="App" onClick={() => setFilter("App")}>App</button>
        </li>
        <li className="nav-itemp" role="presentation">
          <button data-filter="Product" onClick={() => setFilter("Product")}>Product</button>
        </li>
        <li className="nav-itemp" role="presentation">
          <button data-filter="Branding" onClick={() => setFilter("Branding")}>Branding</button>
        </li>
        <li className="nav-itemp" role="presentation">
          <button data-filter="Books" onClick={() => setFilter("Books")}>Books</button>
        </li>
      </ul>
      {/* 
  <button data-filter="all" onClick={() => setFilter("all")}>All</button>
    <button data-filter="App" onClick={() => setFilter("App")}>Fruits</button> */}


      <div className="portfolio-container container" data-aos="fade-up" data-aos-delay="200">
        <div className="row  gy-4">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className={`col-lg-4 col-md-6 portfolio-item isotope-item ${item.categorys}`}
            >
              <div className="portfolio-item">
                <img src={item.image} className="img-fluid" alt={item.title} />
                <div className="portfolio-info">

                  <h4>{item.title}</h4>
                  <p>{item.description}</p>

                  <div>
                    <a
                      href={item.image}
                      title={item.title}
                      data-gallery={item.gallery}
                      className="glightbox preview-link"
                    >
                      <i className="bi bi-zoom-in"></i>
                    </a>
                    <a
                      href="portfolio-details.html"
                      title="More Details"
                      className="details-link"
                    >
                      <i className="bi bi-link-45deg"></i>
                    </a>
                  </div>

                </div>
              </div>

            </div>
          ))}
        </div>
      </div>

    </>
  )
}

export default Portfolio
