import React from "react";
import styled from "styled-components";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const Layout = () => {
  return (
    <React.Fragment>
      <Header />
      <BgColor>
        <Main>
          <Outlet />
        </Main>
      </BgColor>
    </React.Fragment>
  );
};

export default Layout;
const BgColor = styled.div`
  background-color: #e9edf3;
  height: 100vh;
  width: 100%;
  padding-bottom: 10px;
`;
const Main = styled.main`
  font-size: 1.6rem;
  padding-top: 120px;
  width: 1400px;
  margin: 0 auto;
`;
