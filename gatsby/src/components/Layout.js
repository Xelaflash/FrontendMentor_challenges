import React from 'react';
import styled from 'styled-components';
import Nav from './Nav';
// import Footer from './Footer';

const LayoutStyles = styled.div`
  .svg-wrapper {
    transform: skewY(-5deg);
    position: relative;
    z-index: 2;
    background: linear-gradient(
      rgba(255, 255, 255, 0.15),
      rgba(255, 255, 255, 0)
    );
    height: 160px;
    overflow: hidden;
  }
  .svg_curves {
    display: block;
    width: 100%;
    min-width: 700px;
    height: 80px;
    transform: translateY(-2px) scale(1.1);
  }
`;

export default function Layout({ children }) {
  return (
    <LayoutStyles>
      <Nav />
      <>{children}</>
      {/* <Footer /> */}
      <div className="svg-wrapper">
        <svg
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          fill="#110d12"
          viewBox="0 0 441 73"
          className="svg_curves"
        >
          <path d="M133 39.5C80.795 39.858 0 26 0 26V0h440.5v51.5S427.546 62.233 418 67c-49.342 24.641-78.218-41.116-133-47.5-59.469-6.93-92.13 19.589-152 20z" />
        </svg>
      </div>
    </LayoutStyles>
  );
}
