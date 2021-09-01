/* eslint-disable jsx-a11y/media-has-caption */
import React, { useEffect } from 'react';
import '../styles/disney.scss';
import Img from 'gatsby-image';
import { graphql, useStaticQuery } from 'gatsby';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { movies, moviesCard } from '../assets/data/disney';

export default function DisneyClone() {
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
    cssEase: 'linear',
  };

  const cardSettings = {
    dots: false,
    infinite: true,
    slidesToShow: 8,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  useEffect(() => {
    // video cards
    const videoCards = [...document.querySelectorAll('.video-card')];
    videoCards.forEach((item) => {
      item.addEventListener('mouseover', () => {
        const video = item.children[1];
        video.play();
      });
      item.addEventListener('mouseleave', () => {
        const video = item.children[1];
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
          <button className="sub-btn" type="button">
            subscribe
          </button>
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
          <img
            src="disney.PNG"
            className="video-card-image"
            alt="disney logo"
          />
          <video
            src="videos/disney/disney.mp4"
            autoPlay
            muted
            type="video/mp4"
            loop
            className="card-video"
          />
        </div>
        <div className="video-card">
          <img src="pixar.PNG" className="video-card-image" alt="pixar logo" />
          <video
            src="videos/disney/pixar.mp4"
            autoPlay
            muted
            type="video/mp4"
            loop
            className="card-video"
          />
        </div>
        <div className="video-card">
          <img
            src="marvel.PNG"
            className="video-card-image"
            alt="marvel logo"
          />
          <video
            src="videos/disney/marvel.mp4"
            autoPlay
            muted
            type="video/mp4"
            loop
            className="card-video"
          />
        </div>
        <div className="video-card">
          <img
            src="star-wars.PNG"
            className="video-card-image"
            alt="star wars logo"
          />
          <video
            src="videos/disney/star-war.mp4"
            autoPlay
            muted
            type="video/mp4"
            loop
            className="card-video"
          />
        </div>
        <div className="video-card">
          <img
            src="geographic.PNG"
            className="video-card-image"
            alt="National geographic logo"
          />
          <video
            src="videos/disney/geographic.mp4"
            autoPlay
            muted
            type="video/mp4"
            loop
            className="card-video"
          />
        </div>
      </div>
      <div className="movies-container">
        <h2 className="movies-title">recommended for you</h2>
        <div className="movies-list">
          <Slider {...cardSettings}>
            {moviesCard.map((card) => (
              <div className="card-disney" key={card.name}>
                <img
                  src={`${card.image}`}
                  className="card-disney-img"
                  alt={card.name}
                />
                <div className="card-disney-body">
                  <h2 className="name">{card.name}</h2>
                  <h6 className="des">{card.des}</h6>
                  <button className="watchlist-btn" type="button">
                    Add to watchlist
                  </button>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
