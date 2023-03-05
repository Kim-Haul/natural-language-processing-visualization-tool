import React from "react";
import styled from "styled-components";

// 대시보드 내 개별 컴포넌트 임포트
import LeftItem from "../component/LeftItem";
import CenterItem from "../component/CenterItem";
import RightItem from "../component/RightItem";

const Dashboard = () => {
  return (
    <Wrap>
      <LeftItem />
      <CenterItem />
      <RightItem />
    </Wrap>
  );
};

export default Dashboard;
const Wrap = styled.div`
  display: flex;
  gap: 20px;
`;
