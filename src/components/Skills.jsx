import React from "react";
import styled from "styled-components";
import { Container } from "./Header";

const SkillsWrap = styled.section`
    display: flex;
    padding: 60px 0;
    .skills-container{
        width: 100%;
        max-width: 1620px;
        flex-direction: column;
        justify-content: center;
        gap: 50px;

        .skills{
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;

            h2 {
                flex: .3;
            }
            .skills {
                display: flex;
                justify-content: space-between;
                flex:2;
                div{
                    width: 30%;
                    max-width: 300px;
                }
                dl{
                    dt{
                        text-align: center;
                        margin-bottom: 20px;
                        img{
                            width: 100%;
                            max-width: 60px;
                        }
                    }
                    dd{
                        text-align: center;
                    }
                }
                ul{
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 10px;
                    list-style: none;
                    margin-top: 20px;
                    li{
                        width: 100%;
                        background-color: #f4f4f4;
                        border-radius: 10px;
                        padding: 20px 0;
                        dl{
                            display: flex;
                            flex-direction: column;
                            align-items: center;
                            dt{
                                display: flex;
                                flex-direction: column;
                                align-items: center;
                                margin-bottom: 10px;
                                img{
                                margin-bottom: 5px;
                                max-width: 20px; 
                                }
                                span{  
                                    font-weight: bold;
                                    font-size: 14px;
                                }
                            }
                            dd{
                                padding: 0 10px;
                                font-size: 14px;
                                color:#444;
                            }

                        }
                    }
                }
            }
        }
    }
    .media-skills {
        display: flex;
        flex-direction: column;
        gap: 50px;

        .skills{
            display: flex;
            flex-direction: column;
            justify-content: space-around;

            h2{
                text-align: center;
                margin-bottom: 50px;
            }
            .skills {
                display: flex;
                gap: 40px;
                justify-content: space-between;
                flex:2;
                div{
                    width: 100%;
                    dl{
                        dt{
                            text-align: center;
                            margin-bottom: 20px;
                            img{
                                width: 100%;
                                max-width: 40px;
                            }
                        }
                        dd{
                            text-align: center;
                        }
                    }
                    ul{
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        gap: 10px;
                        list-style: none;
                        margin-top: 20px;
                        li{
                            width: 100%;
                            background-color: #f4f4f4;
                            border-radius: 10px;
                            padding: 20px 0;
                            dl{
                                display: flex;
                                flex-direction: column;
                                align-items: center;
                                dt{
                                    display: flex;
                                    flex-direction: column;
                                    align-items: center;
                                    margin-bottom: 10px;
                                    img{
                                    margin-bottom: 5px;
                                    max-width: 20px; 
                                    }
                                    span{  
                                        font-weight: bold;
                                        font-size: 14px;
                                    }
                                }
                                dd{
                                    padding: 0 10px;
                                    font-size: 14px;
                                    color:#444;
                                }

                            }
                        }
                    }
                }
            }
        }
    }

    
`


const Skills = ({isTablet, isMobile}) => {

    return(
        <SkillsWrap id="skills">
            <Container className={isTablet || isMobile ? "media-skills" : "skills-container"}>
            <div className="skills">
                    <h2>Skills</h2>
                    <div className="skills">
                        <div>
                            <dl>
                                <dt><img src="https://ifh.cc/g/apsTad.png" alt="Language" /></dt>
                                <dd>Language</dd>
                            </dl>
                            <ul>
                                <li>
                                    <dl>
                                        <dt>
                                        <img src="https://ifh.cc/g/jSoSnd.png" alt="html" />
                                        <span>HTML5</span>
                                        </dt>
                                        <dd>시멘틱 요소를 활용하여, 웹 문서를 의미있게 구조화, 조직화 할 수 있습니다.</dd>
                                    </dl>
                                </li>
                                <li>
                                    <dl>
                                        <dt>
                                            <img src="https://ifh.cc/g/3MKzlw.png" alt="css" />
                                            <span>CSS3</span>
                                        </dt>
                                        <dd>flex, grid를 사용해 반응형 웹을 구현할 수 있고, 애니메이션을 통해 시각효과를 줄 수 있습니다.</dd>
                                    </dl>
                                </li>
                                <li>
                                    <dl>
                                        <dt>
                                            <img src="https://ifh.cc/g/dF7pjO.png" alt="js" />
                                            <span>JAVASCRIPT</span>
                                        </dt>
                                        <dd>ES6 문법에 능숙하며, 코드의 가독성을 높이려고 노력하고 있습니다.</dd>
                                    </dl>
                                </li>
                                <li>
                                    <dl>
                                        <dt>
                                            <img src="https://ifh.cc/g/hmt7jP.png" alt="jQuery" />
                                            <span>jQuery</span>
                                        </dt>
                                        <dd>DOM 탐색이나 이벤트, 애니메이션을 사용할 때 유용하고 간편해서 퍼블리싱할 때 주로 사용합니다.</dd>
                                    </dl>
                                </li>
                                <li>
                                    <dl>
                                        <dt>
                                            <img src="https://ifh.cc/g/gV80wM.png" alt="react" />
                                            <span>REACT</span>
                                        </dt>
                                        <dd>다양한 라이브러리를 사용할 수 있고, 컴포넌트를 사용해 상태관리와 복잡한 UI를 효과적으로 구성할 수 있습니다.</dd>
                                    </dl>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <dl>
                                <dt><img src="https://ifh.cc/g/TqOkk8.png" alt="Design" /></dt>
                                <dd>Design</dd>
                            </dl>
                            <ul>
                                <li>
                                    <dl>
                                        <dt>
                                            <img src="https://ifh.cc/g/MlhJdC.png" alt="photoshop" />
                                            <span>PhotoShop</span>
                                        </dt>
                                        <dd>GTQ 자격증을 보유하고 있으며, 배너같은 작업물을 만들 수 있습니다.</dd>
                                    </dl>
                                </li>
                                <li>
                                    <dl>
                                        <dt>
                                            <img src="https://ifh.cc/g/8B0L2o.png" alt="illustrator" />
                                            <span>Illustrator</span>
                                        </dt>
                                        <dd>아이콘이나, 캐릭터를 만들어 배너를 만드는 작업을 해봤습니다.</dd>
                                    </dl>
                                </li>
                                <li>
                                    <dl>
                                        <dt>
                                            <img src="https://ifh.cc/g/Bjyv0M.png" alt="figma" />
                                            <span>Figma</span>
                                        </dt>
                                        <dd>Figma를 이용해 프로젝트의 와이어 프레임과 웹 디자인을 해봤고, 컴포넌트를 활용한 경험이 있습니다.</dd>
                                    </dl>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <dl>
                                <dt><img src="https://ifh.cc/g/H8g5bR.png" alt="Management" /></dt>
                                <dd>Management</dd>
                            </dl>
                            <ul>
                                <li>
                                    <dl>
                                        <dt>
                                            <img src="https://ifh.cc/g/37HOB9.png" alt="github" />
                                            <span>Github</span>
                                        </dt>
                                        <dd></dd>
                                    </dl>
                                </li>
                                <li>
                                    <dl>
                                        <dt>
                                            <img src="https://ifh.cc/g/3D4TaA.png" alt="git" />
                                            <span>Git</span>
                                        </dt>
                                        <dd></dd>
                                    </dl>
                                </li>
                                <li>
                                    <dl>
                                        <dt>
                                            <img src="https://ifh.cc/g/Y7cQH5.png" alt="firebase" />
                                            <span>Firebase</span>
                                        </dt>
                                        <dd></dd>
                                    </dl>
                                </li>
                                <li>
                                    <dl>
                                        <dt>
                                            <img src="https://ifh.cc/g/fzqPhf.png" alt="notion" />
                                            <span>Notion</span>
                                        </dt>
                                        <dd></dd>
                                    </dl>
                                </li>
                                <li>
                                    <dl>
                                        <dt>
                                            <img src="https://ifh.cc/g/RNxcwL.png" alt="slack" />
                                            <span>Slack</span>
                                        </dt>
                                        <dd></dd>
                                    </dl>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Container>
        </SkillsWrap>
    )
}

export default Skills