import React from 'react';
import '../../../src/input.css'
import styled from 'styled-components';


const Flexstyled= styled.div`
display:flex;
justify-content: space-around; 
list-style:none;
font-size:100%;
`;

const Listyled= styled.li`
padding: 10px 0px 0px 12px;
font-family: sans-serif;
text-decoration: none;
font-size:11px;
`;


const Header = () => {
    return (
        <>
            <Flexstyled className='bg-gray-100 flex ' >
                    <ul className='flex'>
                    <Listyled>즐겨찾기</Listyled>
                    <Listyled>입점신청</Listyled> 
                    </ul>
                <ul className='flex'>
                    <Listyled>로그인</Listyled> 
                    <Listyled>회원가입</Listyled> 
                    <Listyled>고객센터</Listyled>
                </ul>     
            </Flexstyled>          
              
        </>
    );
};

export default Header;