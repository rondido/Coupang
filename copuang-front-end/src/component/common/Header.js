import React from "react";
import "../../../src/input.css";
import styled from "styled-components";
import { MenuItem, Select, TextField, IconButton, Icon } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import FormControl from "@mui/material/FormControl";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";

const CategoryAstyled = styled.a`
  display: block;
  position: absolute;
  bottom: 0%;
  left: 14%;
  color: white;
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
  margin: 28px 0 0 140px;
`;

const TopbarSestyled = styled.section`
  position: relative;
  display: flex;
  justify-content: space-around;
  flex-direction: row-reverse;
`;

const CategoryBoxstyled = styled.div`
  background: skyblue;
  width: 100px;
  position: absolute;
  top: 28px;
  left: 0px;
  margin-right: 30px;
  background-position: 0 0;
  text-align: center;
`;

const Menustyled = styled.div`
  position: absolute;
`;

const Pstyled = styled.p`
  fontsize: 12px;
`;

const Searchstyled = styled.div`
  float: left;
  display: flex;
  width: 484px px;
  height: 37px;
  margin-right: 13px;
  background-position: 0 -207px;
  margin-top: 12px;
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
  padding-top: 7px;
  display: flex;
  font-family: sans-serif;
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

  const onMouseLeave = () => {
    setVisible(false);
  };

  const onMouseOver = () => {
    setVisible(true);
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
          <div className="flex">
            <Imgstyled>
              <Hstyle>
                <a>
                  <img
                    className="CoupangImage"
                    alt="coupang"
                    src="img/coupang.jpg"
                    width="174px"
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
            <ul className="flex mt-5">
              <li className="mr-7">
                <a style={{ marginTop: 28 }}>
                  <PersonOutlineIcon
                    sx={{
                      fontSize: 45,
                    }}
                  />
                  <Spanstyle>마이쿠팡</Spanstyle>
                </a>
              </li>
              <li>
                <a style={{ marginTop: 28 }}>
                  <ShoppingCartOutlinedIcon sx={{ fontSize: 45 }} />
                  <Spanstyle>장바구니</Spanstyle>
                </a>
              </li>
            </ul>
          </div>
        </Sestyled>
        <CategoryBoxstyled>
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
          <CategoryAstyled>카테고리</CategoryAstyled>
        </CategoryBoxstyled>

        {/* <ul>
            <li>로켓배송</li>
            <li>로켓프레시</li>
            <li>가정의 달</li>
            <li>쿠팡비즈</li>
            <li>로켓지구</li>
            <li>골드박스</li>
            <li>와우회원할인</li>
            <li>이벤트/쿠폰</li>
            <li>기획전</li>
            <li>여행/티켓</li>
          </ul> */}
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
