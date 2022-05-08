import React from "react";
import "../../../src/input.css"; //tailwndcss 사용 무조건 적용
import styled from "styled-components";
import { MenuItem, Select, TextField, IconButton, Icon } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import FormControl from "@mui/material/FormControl";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";

const CategoryAstyled = styled.a`
  //카테고리 글씨
  display: block;
  position: absolute;
  bottom: 15%;
  left: 28%;
  color: white;
  font-size: 13px;
`;

const Articlestyled = styled.article`
  list-style: none;
  font-size: 100%;
`;

const Headerstyled = styled.header`
  list-style: none;
  font-size: 100%;
`;

const SectionAstyled = styled.a`
  font-family: sans-serif;
  text-decoration: none;
  font-size: 11px;
`;

const Sestyled = styled.section`
  position: relative;
  margin: 28px 0 0 200px;
`;

const TopbarSestyled = styled.section`
  position: relative;
  display: flex;
  justify-content: space-around;
  flex-direction: row-reverse;
`;

const CategoryBoxstyled = styled.div`
  background: skyblue;
  width: 110px;
  position: absolute;
  top: 28px;
  left: 415px;
  margin-right: 30px;
  background-position: 0 0;
  text-align: center;
`;

const Menustyled = styled.div`
  position: absolute;
  background-color: white;
`;

const Pstyled = styled.p`
  fontsize: 12px;
`;

const Searchstyled = styled.div`
  // 검색창 div
  float: left;
  display: flex;
  width: 484px;
  height: 37px;
  margin-right: 13px;
  background-position: 0 -207px;
  margin-top: 22px;
`;

const Selectstyled = styled.div`
  width: 157px;
`;

const Articlelistyled = styled.li`
  padding-left: 10px;
  height: 26px;
  position: relative;
  padding-top: 2px;
  float: left;
`;

const Articleli1styled = styled.li`
  padding-left: 10px;
  height: 26px;
  position: relative;
  padding-top: 2px;
  float: left;
`;

const Imgstyled = styled.div`
  margin-top: 15px;
  position: relative;
  z-index: 3;
`;

const Hstyle = styled.h1`
  width: 174px;
  height: 41px;
  margin: 2px 20px 0 0;
  float: left;
`;

const Spanstyle = styled.span`
  font-size: 12px;
  padding-top: 5px;
  display: flex;
  font-family: sans-serif;
`;

const Selectdivstyled = styled.div`
  display: flex;
  justify-content: center;
  margin-right: 150px;
`;

const Headerchildstyled = styled.li`
  // 헤더 밑 ul > li
  background: 0;
  position: relative;
  float: left;
  text-align: center;
  height: 32px;
  display: list-item;
  font-size: 12px;
`;

const HeaderchildAstyled = styled.a`
  //해더 밑 ul > li >a
  padding: 7px 14px 0;
  font-weight: normal;
  display: block;
  height: 25px;
  margin-left: 1px;
  font-size: 12px;
  color: #333;
`;

const HeaderchildUlstyled = styled.ul`
  //헤더 밑 ul

  display: line-block;
  margin-left: 360px;
`;

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

const selectlist = ["오픈마켓", "여행·티켓", "로켓배송", "제휴마케팅"];

const names = [
  "전체",
  "여성패션",
  "남성패션",
  "남녀 공용 의류",
  "유아동패션",
  "뷰티",
  "출산/유아동",
  "식품",
  "주방용품",
  "생활용품",
  "홈인테리어",
  "가전디지털",
  "스포츠/레저",
  "자동차용품",
  "도서/음반/DVD",
  "완구/취미",
  "문구/오피스",
  "반려동물용품",
  "헬스/건강식품",
  "국내여행",
  "해외여행",
  "로켓설치",
  "공간별 집꾸미기",
  "헬스케어 전문관",
  "쿠팡 Only",
  "싱글라이프",
  "악기전문관",
  "결혼준비",
  "아트/공예",
  "홈카페",
  "실버스토어",
];

const mycopunglist = ["주문목록", "취소/반품", "찜 리스트"];

const categorylist = [
  "패션/의류잡화",
  "뷰티",
  "출산/유아동",
  "식품",
  "주방용품",
  "생활용품",
  "홈인테리어",
  "가전디지털",
  "스포츠/레저",
  "자동차용품",
  "도서/음반/DVD",
  "완구/취미",
  "문구/오피스",
  "반려동물용품",
  "여행/티켓",
  "테마관",
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const Header = () => {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const [visible, setVisible] = React.useState(false);
  const [visibleOne, setVisibleOne] = React.useState(false);
  const [visibleCategory, setVisibleCategory] = React.useState(false);

  const onMouseLeaveCategory = () => {
    setVisibleCategory(false);
  };

  const onMouseOverCategory = () => {
    setVisibleCategory(true);
  };

  const onMouseLeave = () => {
    setVisible(false);
  };

  const onMouseOver = () => {
    setVisible(true);
  };

  const onMouseLeaveOne = () => {
    setVisibleOne(false);
  };

  const onMouseOverOne = () => {
    setVisibleOne(true);
  };

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 150,
      },
    },
  };

  return (
    <>
      <Headerstyled>
        <Sestyled>
          <Selectdivstyled>
            <Imgstyled>
              <Hstyle>
                <a>
                  <img
                    className="CoupangImage"
                    alt="coupang"
                    src="img/coupang.jpg"
                    width="174px"
                    height="41px"
                  />
                </a>
              </Hstyle>
            </Imgstyled>
            <Searchstyled>
              <Selectstyled>
                <FormControl
                  sx={{
                    m: 1,
                    width: 150,
                    mt: 1,
                  }}
                >
                  <Select
                    multiple="multiple"
                    displayEmpty="displayEmpty"
                    value={personName}
                    onChange={handleChange}
                    style={{
                      fontSize: 12,
                      height: 40,
                      width: 150,
                    }}
                    renderValue={(selected) => {
                      if (selected.length === 0) {
                        return <em>전체</em>;
                      }

                      return selected.join(", ");
                    }}
                    MenuProps={MenuProps}
                    inputProps={{
                      "aria-label": "Without label",
                    }}
                  >
                    {names.map((name) => (
                      <MenuItem
                        key={name}
                        value={name}
                        style={getStyles(name, personName, theme)}
                      >
                        <Pstyled> {name}</Pstyled>
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Selectstyled>
              <div>
                <TextField
                  hiddenLabel="hiddenLabel"
                  id="filled-hidden-label-normal"
                  placeholder="찾고 싶은 상품을 검색해보세요!"
                  variant="outlined"
                  size="small"
                  style={{
                    width: 350,
                    top: 8,
                  }}
                />
              </div>
              <div>
                <IconButton
                  color="primary"
                  aria-label="upload picture"
                  component="span"
                  style={{
                    marginTop: 8,
                    marginLeft: -38,
                  }}
                >
                  <SearchOutlinedIcon />
                </IconButton>
              </div>
            </Searchstyled>
            <ul className="flex mt-5 ml-7" onMouseLeave={onMouseLeaveOne}>
              <li className="mr-7" onMouseOver={onMouseOverOne}>
                <a style={{ marginTop: 28 }}>
                  <PersonOutlineIcon
                    sx={{
                      fontSize: 45,
                    }}
                  />
                  <Spanstyle>마이쿠팡</Spanstyle>
                  {visibleOne && (
                    <Menustyled>
                      {mycopunglist.map((name) => (
                        <MenuItem key={name} value={name}>
                          {name}
                        </MenuItem>
                      ))}
                    </Menustyled>
                  )}
                </a>
              </li>
              <li>
                <a style={{ marginTop: 28 }}>
                  <ShoppingCartOutlinedIcon sx={{ fontSize: 45 }} />
                  <Spanstyle>장바구니</Spanstyle>
                </a>
              </li>
            </ul>
          </Selectdivstyled>
          <HeaderchildUlstyled>
            <Headerchildstyled>
              <HeaderchildAstyled>로켓배송</HeaderchildAstyled>
            </Headerchildstyled>
            <Headerchildstyled>
              <HeaderchildAstyled>로켓프레시</HeaderchildAstyled>
            </Headerchildstyled>
            <Headerchildstyled>
              <HeaderchildAstyled>가정의 달</HeaderchildAstyled>
            </Headerchildstyled>
            <Headerchildstyled>
              <HeaderchildAstyled>쿠팡비즈</HeaderchildAstyled>
            </Headerchildstyled>
            <Headerchildstyled>
              <HeaderchildAstyled>로켓지구</HeaderchildAstyled>
            </Headerchildstyled>
            <Headerchildstyled>
              <HeaderchildAstyled>골드박스</HeaderchildAstyled>
            </Headerchildstyled>
            <Headerchildstyled>
              <HeaderchildAstyled>와우회원할인</HeaderchildAstyled>
            </Headerchildstyled>
            <Headerchildstyled>
              <HeaderchildAstyled>이벤트/쿠폰</HeaderchildAstyled>
            </Headerchildstyled>
            <Headerchildstyled>
              <HeaderchildAstyled>기획전</HeaderchildAstyled>
            </Headerchildstyled>
            <Headerchildstyled>
              <HeaderchildAstyled>여행/티켓</HeaderchildAstyled>
            </Headerchildstyled>
          </HeaderchildUlstyled>
        </Sestyled>
        <CategoryBoxstyled onMouseLeave={onMouseLeaveCategory}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="110px"
            height="115px"
            viewBox="0 0 24 24"
            fill="none"
            onMouseOver={onMouseOverCategory}
          >
            <line
              x1="9"
              y1="7"
              x2="16"
              y2="7"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <line
              x1="9"
              y1="10"
              x2="16"
              y2="10"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <line
              x1="9"
              y1="13"
              x2="16"
              y2="13"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <CategoryAstyled>카테고리</CategoryAstyled>
          {visibleCategory && (
            <Menustyled>
              {categorylist.map((name) => (
                <MenuItem key={name} value={name}>
                  {name}
                </MenuItem>
              ))}
            </Menustyled>
          )}
        </CategoryBoxstyled>
      </Headerstyled>
      <Articlestyled className="absolute h-7 top-0 inset-x-0	z-3 bg-neutral-300">
        <TopbarSestyled>
          <menu className="float-right relative">
            <Articlelistyled>
              <SectionAstyled>로그인</SectionAstyled>
            </Articlelistyled>
            <Articlelistyled>
              <SectionAstyled>회원가입</SectionAstyled>
            </Articlelistyled>
            <Articlelistyled>
              <SectionAstyled>고객센터</SectionAstyled>
            </Articlelistyled>
          </menu>
          <menu className="float-left relative">
            <Articleli1styled>
              <SectionAstyled>즐겨찾기</SectionAstyled>
            </Articleli1styled>
            <Articleli1styled onMouseLeave={onMouseLeave}>
              <SectionAstyled onMouseOver={onMouseOver}>
                입점신청
              </SectionAstyled>
              {visible && (
                <Menustyled>
                  {selectlist.map((name) => (
                    <MenuItem key={name} value={name}>
                      {name}
                    </MenuItem>
                  ))}
                </Menustyled>
              )}
            </Articleli1styled>
          </menu>
        </TopbarSestyled>
      </Articlestyled>
    </>
  );
};

export default Header;
