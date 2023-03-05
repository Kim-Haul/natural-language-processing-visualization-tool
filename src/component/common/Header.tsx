import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <Wrap>
      <Frame>
        <div className="header-left">
          <span className="title">Personal Knowledge Graph Construction DEMO</span>
        </div>
      </Frame>
    </Wrap>
  );
};

export default Header;
const Wrap = styled.header`
  position: fixed;
  width: 100%;
  height: 60px;
  background-color: #093687;
`;
const Frame = styled.div`
  width: 1400px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1.4rem;
  color: #fff;
  .header-left {
    font-size: 2.2rem;
    font-weight: 700;
  }
`;
