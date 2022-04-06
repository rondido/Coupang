import React from "react";
import "../../../src/input.css";
import styled from "styled-components";
import { MenuItem, Select } from "@mui/material";

const Flexstyled = styled.div`
  display: flex;
  justify-content: space-around;
  list-style: none;
  font-size: 100%;
`;

const Listyled = styled.li`
  padding: 10px 0px 0px 12px;
  font-family: sans-serif;
  text-decoration: none;
  font-size: 11px;
`;

const CategoryBoxstyled = styled.div`
  background: skyblue;
  width: 100px;
  display: flex;
`;

const Selectstyled = styled.div`
  background: white;
`;

const Menustyled = styled.div`
  position: absolute;
`;
const Imgstyled=styled.image`
width:100px;
`;


const selectlist = ["오픈마켓", "여행·티켓", "로켓배송", "제휴마케팅"];

const Header = () => {
  const [visible, setVisible] = React.useState(false);

  const onMouseLeave = () => {
    setVisible(false);
  };

  const onMouseOver = () => {
    setVisible(true);
  };
  
  return (
    <>
      <Flexstyled className="bg-gray-100 flex">
        <ul className="flex">
          <Listyled>즐겨찾기</Listyled>
          <div onMouseLeave={onMouseLeave}>
            <Listyled onMouseOver={onMouseOver}>입점신청</Listyled>
            {visible && (
              <Menustyled>
                {selectlist.map((name) => (
                  <MenuItem key={name} value={name}>
                    {name}
                  </MenuItem>
                ))}
              </Menustyled>
            )}
          </div>
        </ul>
        <ul className="flex">
          <Listyled>로그인</Listyled>
          <Listyled>회원가입</Listyled>
          <Listyled>고객센터</Listyled>
        </ul>
      </Flexstyled>
      <CategoryBoxstyled className="flex">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100px"
          height="100px"
          viewBox="0 0 24 24"
          fill="none"
        >
          <line
            x1="8"
            y1="9"
            x2="15"
            y2="9"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <line
            x1="8"
            y1="12"
            x2="15"
            y2="12"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <line
            x1="8"
            y1="15"
            x2="15"
            y2="15"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <a>카테고리</a>
      </CategoryBoxstyled>
      <div>
        <img className="CoupangImage" alt="coupang" src="img/coupang.jpg" width={174} height={41} />
      </div>
      <div>
        전체
        <text>123</text>
      </div>
    </>
  );
};

export default Header;
