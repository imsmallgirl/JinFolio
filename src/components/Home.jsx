import React from "react";
import ReactTypingEffect from "react-typing-effect";
import styled from "styled-components";

const HomeWrap = styled.section `
    background-color: #eee;
    width: 100vw;
    height: 100vh;
    h2{
        position: absolute;
        top:50%;
        left:50%;
        transform: translate(-50%,-50%);
        color: #333;
        font-size: 60px;
        span{
            color: blue;
        }
    }
    .media-home {
        width: 100%;
        text-align: center;
        font-size: 40px;
    }
`

const Home = ({isMobile, isTablet}) => {
    return(
        <HomeWrap id="home">
            <h2 className={isMobile || isTablet ? "media-home" : null}>안녕하세요.<br /> <span><ReactTypingEffect text={["도전하는", "배움을 즐기는", "프론트엔드 개발자"]} eraseDelay={500} typingDelay={500}/>
                </span><br/> 유진입니다.</h2>
        </HomeWrap>
    )
}

export default Home;