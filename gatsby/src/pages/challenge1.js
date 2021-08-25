import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import bg from '../assets/images/pattern-background-desktop.svg';
import bgMobile from '../assets/images/pattern-background-mobile.svg';
import iconMusic from '../assets/images/icon-music.svg';
import illusHero from '../assets/images/illustration-hero.svg';

const Challenge1Styles = styled.div`
  --paleBlue: hsl(225, 100%, 94%);
  --brightBlue: hsl(245, 75%, 52%);
  --veryPaleBlue: hsl(225, 100%, 98%);
  --desaturatedBlue: hsl(224, 23%, 55%);
  --darkBlue: hsl(223, 47%, 23%);
  font-family: 'Red Hat Display', sans-serif;
  background: url(${bg});
    background-repeat: no-repeat;
    background-color: var(--paleBlue);
  h3 {
    margin: 40px auto 20px auto;
    font-weight: 900;
    font-size: 23px;
    text-align: center;
    font-family: 'Red Hat Display', sans-serif;
    color: var(--darkBlue);
  }

  section {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 95vh;
  }

  .card {
    background: white;
    border-radius: 10px;
    box-shadow:1px 1px 1px white;
    width: 360px;
    box-shadow: 0px 5px 15px 0px rgba(0,0,0,0.15);

  }
  .hero {
    background: url(${illusHero});
    height: 190px;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 10px 10px 0 0;
  }

  .card-inner {
    padding: 0 40px;
  }
  #description-text {
    font-size:14px;
    color: #8A8D9F;
    text-align:center;
    line-height: 1.5;
    width: 90%;
    margin: auto;
  }
  .plan {
    margin: 20px auto;
    padding: 15px;
    background-color: var(--veryPaleBlue);
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 80px;
    .plan-left {
      display:flex;
      align-items:center;
      margin-left: 10px;
      img {
        height: 36px;
      }
      font-size: 14px;
      font-weight:bold;
      color: var(--darkBlue);
    }
    .price-plan {
      margin-left: 14px;
    }
    #price {
      color: #8A8D9F;
      font-size: 14px;
      font-weight: 500;
      margin-top: 5px;
    }
    a {
      color: var(--brightBlue);
      text-decoration: underline;
      font-size: 12px;
      font-weight: 700;
      &:hover {
      opacity:0.8;
      text-decoration: none;
    }
    }
  }
  .order {
    background: var(--brightBlue);
    padding: 12px 24px;
    border-radius: 8px;
    transition: background 0.3s ease;
    text-align:center;
    cursor: pointer;
    margin: 25px auto 30px auto;
    box-shadow: 0px 20px 25px -5px rgba(26, 17, 120,0.2),0px 10px 10px -5px rgba(26, 17, 120,0.3);
    button {
      color: white;
      font-weight: bolder;
      font-size: 13px;

    }
    &:hover {
      opacity:0.7;
    }
  }
  .cancel {
    margin-bottom:40px;
    text-align:center;
    color: #8A8D9F;
    button {
      font-weight: bold;
      font-size: 12px;
    }
    &:hover {
     color: black;
    }
  }
    /* mobile layout */
    @media (min-width: 375px) and (max-width: 812px) {
    background-color: var(--paleBlue);
    .card {
      width: 340px;
    }
    .card-inner {
      padding: 0 25px;
    }
    .cancel {
      margin-bottom: 30px;
      button {
        font-size: 14px;
      }
    }
  }




  .attribution { font-size: 14px; text-align: center; padding-bottom:30px; background-color: var(--PaleBlue);  }
  .attribution a { color: hsl(228, 45%, 44%); }
`;


export default function challenge1() {
  return (
    <>
      <SEO title="Challenge 1 : Order summary" />
      <Challenge1Styles>
        <section>
          <div className="card">
            <div className="hero"></div>
            <div className="card-inner">
              <h3>Order Summary</h3>
              <p id="description-text">You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!</p>
              <div className="plan">
                <div className="plan-left">
                  <img src={iconMusic} alt="icon music" />
                  <div className="price-plan">
                    <p>Annual Plan</p>
                    <p id="price">$59.99/year</p>
                  </div>
                </div>
                <a href="#">Change</a>
              </div>
              <div className="order">
                <button type="submit">Proceed to Payment</button>
              </div>
              <div className="cancel">
                <button type="cancel">Cancel Order</button>
              </div>
            </div>
          </div>
        </section>
        <div className="attribution">
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
          Coded by <a href="www.alexgwebdev.com">AlexG WebDev</a>.
        </div>
      </Challenge1Styles>
    </>
  )
}
