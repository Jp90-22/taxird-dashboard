import React from "react";
import styled from "styled-components";
import { cardStyles } from "./reusableStyles";

import avatarImage1 from "../assets/profile.jpg";
import avatarImage2 from "../assets/avatarImg1.jpg";
import avatarImage3 from "../assets/avatarImg2.jpg";

// Icons
import { HiArrowNarrowRight } from "react-icons/hi";

/**
 * Transfers styled component
 * @returns Transfers component
 */
export default function Transfers() {
  // Transaction data
  const transactions = [
    {
      image: avatarImage1,
      name: "From José P.",
      time: "Today, 16:36",
      amount: "+ $30",
    },
    {
      image: avatarImage2,
      name: "To Laura Capellan",
      time: "Today, 08:49",
      amount: "- $35",
    },
    {
      image: avatarImage3,
      name: "From Ramon M.",
      time: "Yesterday, 14:36",
      amount: "+ $185",
    },
  ];

  return (
    <Section>
      <div className="title">
        <h2>Your Transfers</h2>
      </div>
      <div className="transactions">
        {transactions.map((transaction, idx) => (
          <div key={idx} className="transaction">
            <div className="transaction__title">
              <div className="transaction__title__image">
                <img src={transaction.image} alt={`User ${idx}`} />
              </div>
              <div className="transaction__title__details">
                <h3>{transaction.name}</h3>
                <h5>{transaction.time}</h5>
              </div>
            </div>
            <div className="transaction__amount">
              <span>{transaction.amount}</span>
            </div>
          </div>
        ))}
      </div>
      <a href="#" className="view">
        View all <HiArrowNarrowRight />
      </a>
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
  gap: 1rem;
  .title {
    h2 {
      color: #ffc107;
      font-family: "Permanent Marker", cursive;
      letter-spacing: 0.3rem;
    }
  }
  .transactions {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 1rem;
    .transaction {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      &__title {
        display: flex;
        gap: 1rem;
        &__image {
          img {
            height: 2.5rem;
            width: 2.5rem;
            border-radius: 3rem;
          }
        }
      }
      &__amount {
        background-color: #d7e41e1d;
        padding: 0.2rem 0.5rem;
        width: 4.5rem;
        margin-left: 1rem;
        border-radius: 1rem;
        text-align: center;
        transition: 0.3s ease-in-out;
        &:hover {
          background-color: #ffc107;
          span {
            color: black;
          }
        }
        span {
          color: #ffc107;
        }
      }
    }
  }
  .view {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    text-decoration: none;
    color: #ffc107;
    font-weight: bold;
    margin-top: 1rem;
    gap: 0.5rem;
    svg {
      transition: 0.3s ease-in-out;
      font-size: 1.4rem;
    }
    &:hover {
      svg {
        transform: translateX(0.5rem);
      }
    }
  }

  /* === Media queries === */
  @media screen and (min-width: 280px) and (max-width: 375px) {
    .transactions {
      .transaction {
        flex-direction: column;
        align-items: center;
        gap: 1rem;

        &__amount {
          align-items: flex-end;
        }
      }
    }
  }
`;
