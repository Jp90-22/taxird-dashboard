import React from "react";
import styled from "styled-components";

// Icons
import { BiSearch } from "react-icons/bi";

/**
 * Navbar styled component
 * @returns Navbar component
 */
export default function Navbar() {
  return (
    <Nav>
      <div className="title">
        <h4>Hi José,</h4>
        <h1>
          Welcome to <span>TaxiRD platform</span>
        </h1>
      </div>
      <div className="search">
        <BiSearch />
        <input
          type="search"
          name="search_content"
          id="search"
          placeholder="Search"
        />
      </div>
    </Nav>
  );
}

/**
 * Nav styled component
 */
const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  color: white;
  .title {
    h1 {
      span {
        margin-left: 0.5rem;
        color: #ffc107;
        font-family: "Permanent Marker", cursive;
        letter-spacing: 0.2rem;
      }
    }
  }
  .search {
    background-color: #212121;
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem 6.5rem 1rem 1rem;
    border-radius: 1rem;
    svg {
      color: #ffc107;
    }
    input {
      background-color: transparent;
      border: none;
      color: #ffc107;
      font-family: "Permanent Marker", cursive;
      letter-spacing: 0.3rem;
      &:focus {
        outline: none;
      }
      &::placeholder {
        color: #ffc107;
        font-family: "Permanent Marker", cursive;
      }
      &::-webkit-search-cancel-button {
        display: none;
      }
    }
  }

  /* === Media queries === */
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    flex-direction: column;
    .title {
      h1 {
        span {
          display: block;
          margin: 1rem 0 2rem 0;
        }
      }
    }
    .search {
      padding-right: 2rem;

      input {
        width: 100%;
      }
    }
  }
`;
