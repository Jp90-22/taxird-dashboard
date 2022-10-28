import React from "react";
import styled from "styled-components";
import { cardStyles } from "./reusableStyles";

// Icons
import { IoIosArrowForward } from "react-icons/io";
import { AiFillCalendar } from "react-icons/ai";
import { MdTimelapse } from "react-icons/md";
import { IoMdCash } from "react-icons/io";

/**
 * FAQ styled component
 * @returns FAQ component
 */
export default function FAQ() {
  // All FAQs to show, this list should be odd
  const faqs = [
    {
      icon: <AiFillCalendar />,
      text: "How to manage time and get good marks for trips",
    },
    {
      icon: <MdTimelapse />,
      text: "How to regulate transactions over time",
    },
    {
      icon: <IoMdCash />,
      text: "Withdrawing money through an ATM",
    },
  ];

  return (
    <Section>
      <div className="title">
        <h2>Information for drivers</h2>
      </div>
      <div className="faqs">
        {faqs.map((faq, idx) => (
          <div key={idx} className="faq">
            <div className="info">
              {faq.icon}
              <h4>{faq.text}</h4>
            </div>
            <IoIosArrowForward />
          </div>
        ))}
      </div>
    </Section>
  );
}

/**
 * Section styled component
 */
const Section = styled.section`
  ${cardStyles};
  .title {
    h2 {
      color: #ffc107;
      font-family: "Permanent Marker", cursive;
      letter-spacing: 0.3rem;
    }
  }
  .faqs {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 1rem;
    .faq {
      display: flex;
      align-items: center;
      justify-content: space-between;
      cursor: pointer;
      .info {
        display: flex;
        gap: 1rem;
        align-items: center;
      }
      svg {
        font-size: 1.4rem;
      }
      &:nth-of-type(even) {
        border-top: 0.01rem solid #6c6e6e;
        border-bottom: 0.01rem solid #6c6e6e;
        padding: 0.8rem 0;
      }
    }
  }
`;
