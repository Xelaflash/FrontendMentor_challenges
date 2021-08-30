import React, { useEffect, useRef } from "react";
import "../styles/disney.scss";
import Img from "gatsby-image";
import { graphql, useStaticQuery } from "gatsby";
import { movies } from "../assets/data/disney";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function disneyClone() {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "images/disney/logo.png" }) {
        childImageSharp {
          fixed(height: 80) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      # slider1: file(relativePath: { eq: "images/disney/slider1.PNG" }) {
      #   childImageSharp {
      #     fluid {
      #       ...GatsbyImageSharpFluid
      #     }
      #   }
      # }
    }
  `);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 8000,
    speed: 2500,
    cssEase: "linear",
  };

  return (
    <div className="disney">
      <nav className="navbar">
        <Img
          fixed={data.logo.childImageSharp.fixed}
          alt="logo"
          className="brand-logo"
        />
        <ul className="nav-links">
          <li className="nav-items">
            <a href="#">TV</a>
          </li>
          <li className="nav-items">
            <a href="#">movies</a>
          </li>
          <li className="nav-items">
            <a href="#">sports</a>
          </li>
          <li className="nav-items">
            <a href="#">premium</a>
          </li>
        </ul>
        <div className="right-container">
          <input type="text" className="search-box" placeholder="search" />
          <button className="sub-btn">subscribe</button>
          <a href="#" className="login-link">
            login
          </a>
        </div>
      </nav>
      {/* carousel */}
      <div className="carousel-container">
        <Slider {...settings} >
        {movies.map((movie) => (
            <div className="slider">
              <div className="slide-content">
                <h1 className="movie-title">{movie.name}</h1>
                <p className="movie-des">{movie.des}</p>
              </div>
              <img src={`${movie.image}`} alt="" className="sliderImg" />
            </div>
        ))}
        </Slider>
      </div>
    </div>
  );
}
