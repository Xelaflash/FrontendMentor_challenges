import React, { useEffect } from "react";
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
    }
  `);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 2500,
    cssEase: "linear",
  };

  /// video cards
  useEffect(() => {
    const videoCards = [...document.querySelectorAll(".video-card")];
    videoCards.forEach((item) => {
      item.addEventListener("mouseover", () => {
        let video = item.children[1];
        video.play();
      });
      item.addEventListener("mouseleave", () => {
        let video = item.children[1];
        video.pause();
      });
    });
  });

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
        <Slider {...settings}>
          {movies.map((movie) => (
            <div className="slider" key={movie.name}>
              <div className="slide-content">
                <h1 className="movie-title">{movie.name}</h1>
                <p className="movie-des">{movie.des}</p>
              </div>
              <img src={`${movie.image}`} alt="" className="sliderImg" />
            </div>
          ))}
        </Slider>
      </div>
      <div className="video-card-container">
        <div className="video-card">
          <img src="disney.PNG" className="video-card-image" alt="" />
          <video
            src="videos/disney/disney.mp4"
            mute="true"
            loop
            className="card-video"
          ></video>
        </div>
        <div className="video-card">
          <img src="pixar.PNG" className="video-card-image" alt="" />
          <video
            src="videos/disney/pixar.mp4"
            mute="true"
            loop
            className="card-video"
          ></video>
        </div>
        <div className="video-card">
          <img src="marvel.PNG" className="video-card-image" alt="" />
          <video
            src="videos/disney/marvel.mp4"
            mute="true"
            loop
            className="card-video"
          ></video>
        </div>
        <div className="video-card">
          <img src="star-wars.PNG" className="video-card-image" alt="" />
          <video
            src="videos/disney/star-war.mp4"
            mute="true"
            loop
            className="card-video"
          ></video>
        </div>
        <div className="video-card">
          <img src="geographic.PNG" className="video-card-image" alt="" />
          <video
            src="videos/disney/geographic.mp4"
            mute="true"
            loop
            className="card-video"
          ></video>
        </div>
      </div>
    </div>
  );
}
