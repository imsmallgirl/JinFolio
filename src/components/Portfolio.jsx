import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { Container } from "./Header";
import Work from "./Work";
import data from "../data";

const WorkWrap = styled.section`
    display: flex;
    padding: 60px 0;
    .work-container{
        display: flex;
        .work-menu{
            flex:.3;
            h2{
                margin-bottom: 30px;
            }
            ul{
                display: flex;
                flex-direction: column;
                gap: 30px;
                list-style: none;

                li{
                    padding: 10px 0;
                    max-width: 100px;
                    cursor: pointer;
                }
                li.work-on{
                    transition: all .3s;
                    color:blue;
                }
            }
        }
        .work-contents {
            display: flex;
            align-items: baseline;
            flex-wrap: wrap;
            gap: 70px;
            flex:2;
            .work-ani{
                display: flex;
            }
            .work-content{
                width: 30%;
                min-width: 400px;

                background-color: #fff;
                box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
                border-radius: 10px;
                overflow: hidden;
                dl{
                    dt{
                        width: 100%;
                        height: 300px;
                        background-repeat: no-repeat;
                        background-position: center;
                        background-size: cover;
                    }
                    dd{
                        text-align: center;
                        padding: 30px 0 10px 0;
                        font-size: 18px;
                        font-weight: bold;
                    }
                }
                p{
                    padding: 0 20px;
                    text-align: center;
                    margin-bottom: 20px;
                    color:#333;
                }
                .work-skill {
                    padding: 0 20px;
                    display: flex;
                    justify-content: center;
                    list-style: none;
                    flex-wrap: wrap;
                    gap: 10px;
                    margin-bottom: 30px;
                    li{
                        padding: 5px 10px;
                        background-color: #dbe4ff;
                        border-radius: 30px;
                        font-size: 14px;
                        color:#555;
                    }
                }
                .work-link {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    list-style: none;
                    padding-bottom: 30px;
                    
                    li{ 
                        transition: all .3s;
                        padding: 10px 20px;
                        display: flex;
                        align-items: center;
                        cursor: pointer;
                        span{
                            margin-right: 10px;
                            font-size: 30px;
                        }
                    }
                    li:hover{
                        transform: scale(0.7);
                    }
                }
            }
        }
    }

    /* media-query */

    .media-work{
        display: flex;
        flex-direction: column;
        align-items: center;
        .work-menu{
            margin-bottom: 30px;
            h2{
                text-align: center;
                margin-bottom: 30px;
            }
            ul{
                display: flex;
                gap: 30px;
                list-style: none;

                li{
                    padding: 10px 0;
                    max-width: 100px;
                    cursor: pointer;
                }
                li.work-on{
                    transition: all .3s;
                    color:blue;
                }
            }
        }
        .work-contents {
            display: flex;
            flex-direction: column;
            flex-wrap: wrap;
            gap: 70px;
            flex:2;
            .work-content{
                
                width: 100%;
                background-color: #fff;
                box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
                border-radius: 10px;
                overflow: hidden;
                dl{
                    dt{
                        width: 100%;
                        height: 300px;
                        background-repeat: no-repeat;
                        background-position: center;
                        background-size: cover;
                    }
                    dd{
                        text-align: center;
                        padding: 30px 0 10px 0;
                        font-size: 18px;
                        font-weight: bold;
                    }
                }
                p{
                    padding: 0 20px;
                    text-align: center;
                    margin-bottom: 20px;
                    color:#333;
                }
                .work-skill {
                    padding: 0 20px;
                    display: flex;
                    justify-content: center;
                    list-style: none;
                    flex-wrap: wrap;
                    gap: 10px;
                    margin-bottom: 30px;
                    li{
                        padding: 5px 10px;
                        background-color: #dbe4ff;
                        border-radius: 30px;
                        font-size: 14px;
                        color:#555;
                    }
                }
                .work-link {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    list-style: none;
                    padding-bottom: 30px;
                    
                    li{ 
                        transition: all .3s;
                        padding: 10px 20px;
                        display: flex;
                        align-items: center;
                        cursor: pointer;
                        span{
                            margin-right: 10px;
                            font-size: 30px;
                        }
                    }
                    li:hover{
                        transform: scale(0.7);
                    }
                }
            }
        }
    }
`

const Portfolio = ({isTablet, isMobile, workData}) => {
    const [active, setActive] = useState("All");
    const [currentWork, setCurrentWork] = useState(data.portfolio);

    const workCategoryEvent= (event) => {
        if(event.target.innerText === active) return;
        setActive(event.target.innerText)
        setCurrentWork([])
        event.target.classList.add('work-on')

        if(event.target.innerText === "All"){
            setCurrentWork(data.portfolio);
            return;
        }

        const filteredData = data.portfolio.filter((data) => data.category === event.target.innerText);
        
        setTimeout(() => {
            setCurrentWork(filteredData);
        }, 400)
    }
    return(
        <WorkWrap id="work">
            <Container className={isTablet || isMobile ? "media-work" : "work-container"}>
                <div className="work-menu">
                    <h2>Work</h2>
                    <ul>
                        <li onClick={workCategoryEvent} className={active === "All" ? "work-on" : null}>All</li>
                        <li onClick={workCategoryEvent} className={active === "Frontend" ?"work-on" : null}>Frontend</li>
                        <li onClick={workCategoryEvent} className={active === "Publishing" ? "work-on" : null}>Publishing</li>
                    </ul>
                </div>

                <div className="work-contents">
                    <AnimatePresence>
                        {currentWork.map((data,i) => (
                            <motion.div
                            className="work-content"
                            style={{ overflow: "hidden" }}
                            key={i}
                            layout
                            initial={{ transform: "scale(0)" }}
                            animate={{ transform: "scale(1)" }}
                            exit={{ transform: "scale(0)" }}
                            >
                                <Work data={data}/>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </Container>
        </WorkWrap>
    )
}

export default Portfolio;