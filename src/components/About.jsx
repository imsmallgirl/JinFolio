import React from "react";
import styled from "styled-components";
import { Container } from "./Header";

const AboutWrap = styled.section`
    display: flex;
    padding: 60px 0;
    h2{
            flex:.3;
        }
    .about-container{
        width: 100%;
        max-width: 1620px;
        flex-direction: column;
        justify-content: center;
        gap: 50px;

        .about-top {
        display: flex;
        justify-content: space-between;
            .about-right {
                flex:2;
                display: flex;
                justify-content: space-between;
                dl{
                width: 50%;
                    dt{
                        font-size: 20px;
                        font-weight: bold;
                        margin-bottom: 20px;
                    }
                    dd {
                        color: #666;
                        p{
                            margin: 10px 0;
                        }
                    }
                    dd:first-of-type{
                        font-weight: 600;
                        margin-bottom: 20px;
                    }
                }
            }
            .about-photo{
                    width: 100%;
                    max-width: 400px;
                    background-image: url(https://ifh.cc/g/cjY4h2.jpg);
                    background-size: cover;
                    background-repeat: no-repeat;
                    background-position: center center;
            }
        }
    }


    
    .media-about {
        display: flex;
        flex-direction: column;
        gap: 50px;
        .about-top{
            display: flex;
            flex-direction: column;
            h2{
                text-align: center;
                margin-bottom: 50px;
            }
            .about-right {
                display: flex;
                align-items: center;
                flex-direction: column-reverse;
                gap: 30px;

                dl{
                    text-align: center;
                    width: 100%;
                    dt{
                        font-size: 20px;
                        font-weight: bold;
                        margin-bottom: 20px;
                    }
                    dd {
                        color: #666;
                        p{
                            margin: 10px 0;
                        }
                    }
                    dd:first-of-type{
                        font-weight: 600;
                        margin-bottom: 20px;
                    }
                }

                .about-photo{
                width: 100%;
                height: 500px;
                background-image: url(https://ifh.cc/g/cjY4h2.jpg);
                background-size: contain;
                background-repeat: no-repeat;
                background-position: center center;
                }
            }
        }
    }
`

const About = ({isTablet, isMobile}) => {

    return(
        <AboutWrap id="about">
            <Container className={isTablet || isMobile ? "media-about" : "about-container"}>
                <div className="about-top">
                    <h2>About Me</h2>
                    <div className="about-right">
                        <dl>
                            <dt>"끊임없이 도전하라"</dt>
                            <dd>프론트엔드 개발자 유진입니다 :)</dd>
                            <dd>
                                <p>‘새로운 도전을 해보자' 라는 생각으로 개발 공부를 시작하게 되었습니다.</p>
                                <p>메이크업을 하다, 중학교 때 꿈이였던 웹 디자이너가 문득 생각이 났고<br />
                                    5년 이상 공부하던 메이크업을 그만두고, 웹 쪽으로 공부를 시작하게 되었습니다.
                                </p>
                                <p>
                                개발 공부를 하며 생긴 습관은<br />
                                ‘ 혼잣말 ‘ 입니다.
                                </p>
                                <p>
                                    코드를 짤때나, 아이디어를 생각할 때나<br />
                                    개발은 제 자신과의 싸움이라는 생각이 들었습니다.<br />
                                    해결이 잘 안된다면 될때까지 자기 자신과 대화하며 해결방법을 찾아보려합니다.
                                </p>
                                <p>
                                    그래서인지,<br />
                                    스스로 코드를 짜고, 성공했을 때에 큰 즐거움을 얻습니다.
                                </p>
                                <p>
                                    프론트엔드 개발자라는 직종은 끝없는 배움의 길이라고 생각합니다.
                                </p>
                                <p>
                                    기술이 나날이 발전하고, 새로운 것이 나오곤합니다.<br />
                                    새로운 기술을 배우다보면 제가 성장하는 모습을 볼 수 있고, 지식의 폭이 넓어지는 것을 느낍니다.
                                </p>
                                <p>
                                    그래서 저는 프론트엔드 개발자가 되기 위해서 끊임없이 도전하는 사람이 될것입니다.
                                </p>
                            </dd>
                        </dl>
                        <div className="about-photo"></div>
                    </div>
                </div>
            </Container>
        </AboutWrap>
    )
}

export default About;