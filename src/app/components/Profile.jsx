import React from "react";
import styled from "styled-components";
import { cardStyles } from "./reusableStyles";

import profileImg from "../assets/profile.jpg";

// Icons
import { HiOutlineLocationMarker } from "react-icons/hi";

/**
 * Profile styled component
 * @returns Profile component
 */
export default function Profile() {
  return (
    <Section>
      <div className="image">
        <img src={profileImg} alt="User profile" />
      </div>
      <div className="title">
        <h2>José Paulino</h2>
        <h5>
          <HiOutlineLocationMarker /> Santo Domingo, RD
        </h5>
      </div>
      <div className="info">
        <div className="container">
          <h5>Days at work</h5>
          <h3>35</h3>
        </div>
        <div className="container">
          <h5>Rides</h5>
          <h3>347</h3>
        </div>
        <div className="container">
          <h5>Hours</h5>
          <h3>140</h3>
        </div>
      </div>
    </Section>
  );
}

/**
 * Section styled component
 */
const Section = styled.section`
  ${cardStyles};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  .image {
    max-height: 10rem;
    overflow: hidden;
    border-radius: 20rem;
    img {
      height: 10rem;
      width: 10rem;
      object-fit: cover;
      border-radius: 20rem;
      transition: 0.5s ease-in-out;
    }
    &:hover {
      img {
        transform: scale(1.1);
      }
    }
  }
  .title {
    text-align: center;
    h2,
    h5 {
      color: #ffc107;
      font-family: "Permanent Marker", cursive;
      letter-spacing: 0.3rem;
    }
    h5 {
      letter-spacing: 0.2rem;
    }
  }
  .info {
    display: flex;
    gap: 1.5rem;
    .container {
      text-align: center;
    }
  }
`;
