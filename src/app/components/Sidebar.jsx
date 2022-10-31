import React, { useState } from "react";
import styled from "styled-components";

// Icons
import { MdSpaceDashboard } from "react-icons/md";
import { RiDashboard2Fill } from "react-icons/ri";
import { FaAddressCard, FaTaxi } from "react-icons/fa";
import { GiTwirlCenter } from "react-icons/gi";
import { BsFillChatTextFill } from "react-icons/bs";
import { IoSettings } from "react-icons/io5";
import { FiLogOut } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import { VscChromeClose } from "react-icons/vsc";

/**
 * Sidebar styled
 * @returns Sidebar component
 */
export default function Sidebar() {
  const [activeLink, setActiveLink] = useState(0);
  const [showNavbar, setShowNavbar] = useState(false);

  // Adding onClick event on html element for quit navbar
  const html = document.querySelector("html");
  html.addEventListener("click", () => setShowNavbar(false));

  return (
    <>
      <Section>
        <div className="top">
          <div className="brand">
            <a className="brand" href="#">
              <FaTaxi />
              <span>TaxiRD</span>
            </a>
          </div>

          <div className="toggle">
            {showNavbar ? (
              <VscChromeClose onClick={() => setShowNavbar(false)} />
            ) : (
              <GiHamburgerMenu
                onClick={(e) => {
                  e.stopPropagation();
                  setShowNavbar(true);
                }}
              />
            )}
          </div>

          <div className="logout-btn" title="Logout">
            <FiLogOut />
          </div>

          <div className="links">
            <ul>
              <li
                className={activeLink === 0 ? "active" : null}
                onClick={() => setActiveLink(0)}
              >
                <a href="#">
                  <MdSpaceDashboard />
                  <span> Dashboard</span>
                </a>
              </li>
              <li
                className={activeLink === 1 ? "active" : null}
                onClick={() => setActiveLink(1)}
              >
                <a href="#">
                  <RiDashboard2Fill />
                  <span> Riders</span>
                </a>
              </li>
              <li
                className={activeLink === 2 ? "active" : null}
                onClick={() => setActiveLink(2)}
              >
                <a href="#">
                  <FaAddressCard />
                  <span> Payment Details</span>
                </a>
              </li>
              <li
                className={activeLink === 3 ? "active" : null}
                onClick={() => setActiveLink(3)}
              >
                <a href="#">
                  <GiTwirlCenter />
                  <span> Learning Center</span>
                </a>
              </li>
              <li
                className={activeLink === 4 ? "active" : null}
                onClick={() => setActiveLink(4)}
              >
                <a href="#">
                  <BsFillChatTextFill />
                  <span> FAQs</span>
                </a>
              </li>
              <li
                className={activeLink === 5 ? "active" : null}
                onClick={() => setActiveLink(5)}
              >
                <a href="#">
                  <IoSettings />
                  <span> Settings</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="logout">
          <a href="#">
            <FiLogOut />
            <span className="logout">Logout</span>
          </a>
        </div>
      </Section>
      <ResponsiveNav state={showNavbar} className={showNavbar ? "show" : null}>
        <div className="responsive__links">
          <ul>
            <li
              className={activeLink === 0 ? "active" : null}
              onClick={() => setActiveLink(0)}
            >
              <a href="#">
                <MdSpaceDashboard />
                <span> Dashboard</span>
              </a>
            </li>
            <li
              className={activeLink === 1 ? "active" : null}
              onClick={() => setActiveLink(1)}
            >
              <a href="#">
                <RiDashboard2Fill />
                <span> Riders</span>
              </a>
            </li>
            <li
              className={activeLink === 2 ? "active" : null}
              onClick={() => setActiveLink(2)}
            >
              <a href="#">
                <FaAddressCard />
                <span> Payment Details</span>
              </a>
            </li>
            <li
              className={activeLink === 3 ? "active" : null}
              onClick={() => setActiveLink(3)}
            >
              <a href="#">
                <GiTwirlCenter />
                <span> Learning Center</span>
              </a>
            </li>
            <li
              className={activeLink === 4 ? "active" : null}
              onClick={() => setActiveLink(4)}
            >
              <a href="#">
                <BsFillChatTextFill />
                <span> FAQs</span>
              </a>
            </li>
            <li
              className={activeLink === 5 ? "active" : null}
              onClick={() => setActiveLink(5)}
            >
              <a href="#">
                <IoSettings />
                <span> Settings</span>
              </a>
            </li>
          </ul>
        </div>
      </ResponsiveNav>
    </>
  );
}

/**
 * Section styled component
 */
const Section = styled.section`
  position: fixed;
  left: 0;
  background-color: #212121;
  height: 100vh;
  width: 18vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 0;
  gap: 2rem;
  .top {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 100%;
    .toggle,
    .logout-btn {
      display: none;
    }
    .brand {
      width: 100%;
      text-decoration: none;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 2rem;

      svg {
        color: #ffc107;
        font-size: 2rem;
      }
      span {
        font-size: 2rem;
        color: #ffc107;
        font-family: "Permanent Marker", cursive;
      }
    }
    .links {
      display: flex;
      justify-content: center;
      ul {
        list-style-type: none;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        li {
          padding: 0.6rem 1rem;
          border-radius: 0.6rem;
          &:hover {
            background-color: #ffc107;
            a {
              color: black;
            }
          }
          a {
            text-decoration: none;
            display: flex;
            gap: 1rem;
            color: white;
          }
        }
        .active {
          background-color: #ffc107;
          a {
            color: black;
          }
        }
      }
    }
  }
  .logout {
    padding: 0.3rem 1rem;
    border-radius: 0.6rem;
    &:hover {
      background-color: #da0037;
    }
    a {
      text-decoration: none;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      color: white;
    }
  }

  /* === Media queries === */
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    position: initial;
    width: 100%;
    height: max-content;
    padding: 1rem;
    .top {
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      padding: 0 1rem;
      .toggle,
      .logout-btn {
        color: white;
        z-index: 99;
        display: flex;
        align-items: center;
        justify-content: center;
        svg {
          font-size: 1.4rem;
        }
      }
      .logout-btn {
        padding: 0.3rem;
        border-radius: 0.6rem;
        &:hover {
          background-color: #da0037;
        }
      }
      .brand {
        gap: 1rem;
        justify-content: flex-start;
      }
    }
    .top > .links,
    .logout {
      display: none;
    }
  }
`;

const ResponsiveNav = styled.div`
  position: fixed;
  right: -10vw;
  top: 0;
  z-index: 10;
  background-color: black;
  height: 100vh;
  width: ${({ state }) => (state ? "60%" : "0%")};
  transition: 0.4s ease-in-out;
  display: flex;
  opacity: 0;
  visibility: hidden;
  padding: 1rem;
  .responsive__links {
    ul {
      list-style-type: none;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      margin-top: 3rem;
      li {
        padding: 0.6rem 1rem;
        border-radius: 0.6rem;
        &:hover {
          background-color: #ffc107;
          a {
            color: black;
          }
        }
        a {
          text-decoration: none;
          display: flex;
          gap: 1rem;
          color: white;
        }
      }
      .active {
        background-color: #ffc107;
        a {
          color: black;
        }
      }
    }
  }
`;
