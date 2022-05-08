import React from "react";
import "../../../src/input.css"; //tailwndcss 사용 무조건 적용
import styled from "styled-components";

const Footerstyled = styled.footer`
  position: absolute;
  display: block;
  bottom: 0px;
`;

const Footer = () => {
  return (
    <>
      <Footerstyled>
        <div>
          <a>회사소개</a>
          <a>Investor Relations</a>
          <a>인재채용</a>
          <a>입점/제휴문의</a>
          <a>공지사항</a>
          <a>고객의 소리</a>
          <a>이용약관</a>
          <a>
            <b>개인정보 처리방침</b>
          </a>
          <a>쿠팡페이 이용약관</a>
          <a>
            <b>개인정보 개인정보처리방침</b>
          </a>
          <a>신뢰관리센터</a>
          <a>제휴마케팅</a>
          <a>광고안내</a>
        </div>
        <div>
          <h1>
            <a></a>
          </h1>
          <div>
            <address>
              "상호명 및 호스팅 서비스 제공: 쿠팡(주)"
              <br />
              "대표이사: 강한승,박대준"
              <br />
              "서울시 송파구 송파대로 570"
              <br />
              "사업자 등록번호 : 120-88-00767"
              <br />
              "통신판매업신고 : 2017-서울송파-0680"
              <br />
              <a>사업자 정보 확인</a>
            </address>
            <div>
              <a>
                <strong>365고객센터</strong>
                <span>hel@coupang.com</span>
              </a>
            </div>
            <p>
              <strong>우리은행 채무지급보증 안내</strong>
              <span></span>
              <a>서비스 가입사실 확인 </a>
            </p>
          </div>
        </div>
        <div>
          <div></div>
        </div>
        <div>
          <div>
            <p>사이버몰</p>
            <ul>{/* 이미지 인사그램 네이버*/}</ul>
          </div>
        </div>
      </Footerstyled>
    </>
  );
};

export default Footer;
