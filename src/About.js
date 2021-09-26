import React from "react";
import styled, { keyframes } from "styled-components";
import { COLORS } from "./Constants";

const About = () => {
  return (
    <Background>
      <Wrapper>
        <Para>
          <h1>Why YourL🥘CAL:</h1>
          <p>
            According to{" "}
            <a
              style={{ color: "black" }}
              href="https://www.restaurantscanada.org/support-restaurants/"
              alt="restaurantscanada.org web url"
            >
              https://www.restaurantscanada.org/support-restaurants/,
            </a>{" "}
            since march 2020 10,000 restaurants closed their kitchen permanently
            due to a global pandemic. A big portion of those closed restaurants
            is locally owned small businesses. So it was never been a hard time
            for our local business owners than now ever.
          </p>
          <p>
          After analyzing the problem faced by the customers and the local restaurant owner, a restaurant finder web application will be the best possible solution for the customer and the local restaurant owner. 
          Here, in this web application, the customer can pick whichever restaurant they prefer and order food as they like. Likewise, any restaurant can add their restaurant and make deliveries to their customers. This web application will be the best possible solution for the local restaurant business to connect with their customers.{" "}
          </p>
          <p>
            This project mainly focuses on developing a restaurant finder and an online order system while considering the user experience. It will close the gap between the customer and local restaurants. It will also help the restaurant owners to save money by not having to build a separate website for the restaurant, as that costs additional investment.  With this project, the customer can try local food items from their own home and order the food item without reaching the restaurant. This will save time and money as they don’t have to go to a restaurant and order food.
          </p>{" "}
          <p>
            Now I would like to present my website yourLocals. It is a food
            ordering and restaurant finding application.
          </p>
        </Para>
      </Wrapper>
    </Background>
  );
};

const Animation = keyframes`
  0% { top: -3.125rem; }
  100% { top: 3rem;}
`;

const Background = styled.div`
  align-content: center;
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Wrapper = styled.div`
  position: relative;
  top: 0;
  animation: ${Animation};
  animation-duration: 0.8s;
  animation-fill-mode: forwards;
  padding: 2rem;
  margin: 0 20%;
  border-radius: 1.5rem;
  width: 100%;
  height: 100%;
  background: ${COLORS.secondary};
  color: ${COLORS.primary};
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;

  @media (max-width: 1000px) {
    margin: 0 1.5% 22%;
    border-radius: 1rem;
    width: 90vw;
    height: 100%;
  }
`;
const Para = styled.p`
  font-size: 1.22rem;
  padding: 0 3.5rem;
  h1 {
    font-size: 1.7rem;
    padding: 0.5rem 0;
  }

  p {
    padding: 0.5rem 0;
  }
  a {
    display: inline;
    &:hover {
      opacity: 0.5;
    }
  }
  @media (max-width: 1000px) {
    padding: 1rem;
  }
`;
export default About;
