import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { graphql, Link, useStaticQuery } from 'gatsby';


const NavStyles = styled.div`
  margin: 10px 20px;
  padding: 10px;
`;

const LogoRoundStyles = styled.div`
  width: 110px;
  @media (max-width: 400px) {
    margin-left: 10px;
  }
  @media (max-width: 812px) {
    margin: auto;
  }
`;

const LogoRound = () => {
  const logoSmall = useStaticQuery(graphql`
    query {
      file(name: { eq: "meta_image" }, extension: { eq: "png" }) {
        childImageSharp {
          fluid(maxWidth: 110, pngQuality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <LogoRoundStyles>
      <Link to="/">
        <Img fluid={logoSmall.file.childImageSharp.fluid} alt="AlexG logo" />
      </Link>
    </LogoRoundStyles>
  );
};

const Navbar = () => (
  <NavStyles>
    <LogoRound />
  </NavStyles>
);

export default Navbar;
