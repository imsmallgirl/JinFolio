import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const Head =styled.header`
    display: flex;
    align-items: center;
    position: fixed;
    top:0;
    left:0;
    right:0;
    width: 100%;
    height: 120px;
    z-index: 10;
    transition: 0.4s ease;
    &.hide {
        transform: translateY(-120px);
    }
`

export const Container = styled.div`
    width:100%;
    max-width: 1620px;
    margin: 0 auto;
    display: flex;
    padding: 0 20px;
    justify-content: space-between;
    a {
        text-decoration: none;
        color:#000;
    }
    .header-left {
        display: flex;
        align-items: center;
        h1{
            margin-right: 60px;
        }
        ul {
            display: flex;
            gap: 30px;
            align-items: center;
            list-style: none;

            li{
                a{
                    font-size: 18px;
                }
            }
        }
    }

    .header-right{
        display: flex;
        align-items: center;
        position: relative;
        right: 0;
        button{
            width: 50px;
            height: 50px;
            border: none;
            border-radius: 50%;
            background-color: transparent;
            cursor: pointer;
            transition: all .5s;
            p {
                font-size: 30px;
                color:#000;
                transition: all .5s;
            }
        }
        .btn-left {
            margin-right: 150px;
        }
        button:hover{
            background-color: #000;
            p{
                color:#fff;
                transform: scale(.6);
            }
        }
        ul{
            position: absolute;
            right: 0px;
            top: 10px;
            display: flex;
            list-style: none;
            gap: 30px;
            font-size: 30px;
            transition: all .5s;
            width: 50%;
            transform: translateX(150px);
            opacity: 0;

            li{
                transition: all .5s;
                a{
                    transition: all .5s;
                }
            }
            li:hover{
                a{
                    transform: scale(.7);
                }
            }
        }
        .plus-on {
            opacity: 1;
            transform: translateX(-35px);
        }
    }
`


const Header = ({hide, isMobile, isTablet}) => {
    const [plusMenu, setPlusMenu] = useState(false)

    return (
        <>
            <Head className={hide && 'hide'}>
                <Container>
                    <div className="header-left">
                        <h1><a href="#home">JIN</a></h1>
                        {isMobile || isTablet ? null :      <ul>
                            <li><a href="#home">Home</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#skills">Skills</a></li>
                            <li><a href="#work">Work</a></li>
                        </ul>}

                    </div>
                    <div className="header-right">
                        <button onClick={() => setPlusMenu((prev) => !prev)} className={plusMenu ? 'btn-left' : ''}><p className={plusMenu ? 'xi-close' : 'xi-ellipsis-h'}/></button>
                        <ul className={plusMenu ? 'plus-on' : ''}>
                            <li><a href="mailto:qowbtm4517@gmail.com" className="xi-gmail" /></li>
                            <li><a href="https://github.com/imsmallgirl" className="xi-github"></a></li>
                            <li><a href="https://qowbtm45.tistory.com/" className="xi-blogger"></a></li>
                        </ul>
                    </div>
                </Container>
            </Head>
        </>
    )
}

export default Header ;