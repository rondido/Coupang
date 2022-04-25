import React from "react";
import "../../../src/input.css";
import styled from "styled-components";
import { MenuItem, Select, TextField, IconButton, Icon } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import FormControl from "@mui/material/FormControl";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { fontSize, height } from "@mui/system";

const CategoryAstyled = styled.a`
  display: block;
  position: absolute;
  bottom: 0%;
  left: 14%;
  color: white;
`;

const Flexstyled = styled.header`
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
  display: inline-block;
  position: relative;
`;

const Menustyled = styled.div`
  position: absolute;
`;

const Pstyled = styled.p`
  fontsize: 12px;
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
      {" "}
      <div>
        <Flexstyled className="bg-gray-100 flex">
          {" "}
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
        {/* <div style={{backgroundColor:blue}}>
        <CategoryBoxstyled>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100px"
                height="100px"
                viewBox="0 0 24 24"
                fill="none">
                <line
                    x1="8"
                    y1="9"
                    x2="15"
                    y2="9"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"/>
                <line
                    x1="8"
                    y1="12"
                    x2="15"
                    y2="12"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"/>
                <line
                    x1="8"
                    y1="15"
                    x2="15"
                    y2="15"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"/>
            </svg>
            <CategoryAstyled>카테고리</CategoryAstyled>
        </CategoryBoxstyled> */}
        <div className="flex">
          <div>
            <h1>
              <a>
                <img
                  className="CoupangImage"
                  alt="coupang"
                  src="img/coupang.jpg"
                  width="174px"
                />
              </a>
            </h1>
          </div>
          <div className="flex">
            <div className="flex-1">
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
                    width: 100,
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
            </div>

            <div className="flex-initial w-64">
              <TextField
                hiddenLabel="hiddenLabel"
                id="filled-hidden-label-normal"
                placeholder="찾고 싶은 상품을 검색해보세요!"
                variant="outlined"
                size="small"
                style={{
                  width: 310,
                }}
              />
            </div>
            <div>
              <IconButton
                color="primary"
                aria-label="upload picture"
                component="span"
              >
                <SearchOutlinedIcon />
              </IconButton>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default Header;
