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
                                        <dd>????????? ????????? ????????????, ??? ????????? ???????????? ?????????, ????????? ??? ??? ????????????.</dd>
                                    </dl>
                                </li>
                                <li>
                                    <dl>
                                        <dt>
                                            <img src="https://ifh.cc/g/3MKzlw.png" alt="css" />
                                            <span>CSS3</span>
                                        </dt>
                                        <dd>flex, grid??? ????????? ????????? ?????? ????????? ??? ??????, ?????????????????? ?????? ??????????????? ??? ??? ????????????.</dd>
                                    </dl>
                                </li>
                                <li>
                                    <dl>
                                        <dt>
                                            <img src="https://ifh.cc/g/dF7pjO.png" alt="js" />
                                            <span>JAVASCRIPT</span>
                                        </dt>
                                        <dd>ES6 ????????? ????????????, ????????? ???????????? ???????????? ???????????? ????????????.</dd>
                                    </dl>
                                </li>
                                <li>
                                    <dl>
                                        <dt>
                                            <img src="https://ifh.cc/g/hmt7jP.png" alt="jQuery" />
                                            <span>jQuery</span>
                                        </dt>
                                        <dd>DOM ???????????? ?????????, ?????????????????? ????????? ??? ???????????? ???????????? ??????????????? ??? ?????? ???????????????.</dd>
                                    </dl>
                                </li>
                                <li>
                                    <dl>
                                        <dt>
                                            <img src="https://ifh.cc/g/gV80wM.png" alt="react" />
                                            <span>REACT</span>
                                        </dt>
                                        <dd>????????? ?????????????????? ????????? ??? ??????, ??????????????? ????????? ??????????????? ????????? UI??? ??????????????? ????????? ??? ????????????.</dd>
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
                                        <dd>GTQ ???????????? ???????????? ?????????, ???????????? ???????????? ?????? ??? ????????????.</dd>
                                    </dl>
                                </li>
                                <li>
                                    <dl>
                                        <dt>
                                            <img src="https://ifh.cc/g/8B0L2o.png" alt="illustrator" />
                                            <span>Illustrator</span>
                                        </dt>
                                        <dd>???????????????, ???????????? ????????? ????????? ????????? ????????? ???????????????.</dd>
                                    </dl>
                                </li>
                                <li>
                                    <dl>
                                        <dt>
                                            <img src="https://ifh.cc/g/Bjyv0M.png" alt="figma" />
                                            <span>Figma</span>
                                        </dt>
                                        <dd>Figma??? ????????? ??????????????? ????????? ???????????? ??? ???????????? ?????????, ??????????????? ????????? ????????? ????????????.</dd>
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