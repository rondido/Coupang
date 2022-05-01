import React from "react";
import MainContainer from "../container/MainContainer";
import Header from "../component/common/Header";
import Footer from "../component/common/Footer";
import styled from "styled-components";

const Blockstyle = styled.div`
  display: block;
`;

const MainPage = () => {
  return (
    <>
      <Blockstyle>
        <Header />
      </Blockstyle>
    </>
  );
};

export default MainPage;
