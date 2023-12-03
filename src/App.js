import React from "react";
import { styled, createGlobalStyle } from "styled-components";
import SemiBold from "./Fonts/SUIT-SemiBold.ttf";
import background from "./Images/1.png";
import call from "./Images/call.png";
import "./App.css";
import ScrollButton from "./ScrollButton.jsx";

function App() {
  return (
    <>
      <GlobalStyle />
      <div>
        <div className="App">
          <TopBar>
            <img src={call} alt="call" className="menu-item"></img>
            <div className="menu-item1">857-7355 / 011-752-8239</div>
            <div className="menu-item2">학사일정</div>
            <div className="menu-item3">참 좋은 앨범</div>
          </TopBar>
          <Main>
            <text>
              참 좋은 지역
              <br />
              아동센터
            </text>
          </Main>
          <Intro>
            <text>
              방과후에 부담없이 다닐 수 있는
              <br />
              공부방
            </text>
          </Intro>
          <Button>
            <ScrollButton />
          </Button>
          <IntroText>
            <text>
              참 좋은 지역 아동센터
              <br />
              ---------------------------------------------------
              <br />
              --------------------------------------------------------------
              <br />
              -------------------------------------------------------------------------------------------------------------------------------
            </text>
          </IntroText>
        </div>
      </div>
    </>
  );
}

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    @font-face {
      font-family: 'SUIT-SemiBold';
      src: local('SUIT-SemiBold'), local('SUIT-SemiBold');
      font-style: normal;
      src: url(${SemiBold}) format('truetype');
    }
    font-family: SUIT-SemiBold;
  }
`;

const TopBar = styled.div`
  height: 54px;
  display: flex;
  align-items: center;
  background-color: #33b660;
  color: #ffffff;
  font-size: 20px;

  .menu-item {
    margin-left: 17.709%;
  }

  .menu-item1 {
    margin-right: 36.719%;
  }

  .menu-item2 {
    margin-right: 3.23%;
  }
`;

const Main = styled.div`
  color: #ffffff;
  font-size: 64px;
  width: fit-content;
  height: fit-content;
  text-align: left;
  margin-top: 18.3%;
  margin-left: 17.709%;
`;

const Intro = styled.div`
  color: #ffffff;
  font-size: 24px;
  width: fit-content;
  height: fit-content;
  text-align: left;
  margin-top: 20px;
  margin-left: 17.709%;
`;

const Button = styled.div`
  width: fit-content;
  height: fit-content;
  margin-top: 20px;
  margin-left: 17.709%;
`;

const IntroText = styled.div`
  color: #ffffff;
  font-size: 24px;
  width: fit-content;
  height: fit-content;
  text-align: left;
  margin-top: 670px;
`;

export default App;
