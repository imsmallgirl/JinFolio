import React from "react";
import styled from "styled-components";

const Work = ({data}) => {
    return(
            <>
                <dl>
                    <dt style={{"backgroundImage" : `url(${data.smallImage})`}}></dt>
                    <dd>{data.title}</dd>
                </dl>
                <p>{data.explan}</p>
                <ul className="work-skill">
                    {data.skill.map((skill, index) => {
                        return <li key={index}>{skill}</li>
                    })}
                </ul>
                <ul className="work-link">
                    <li onClick={() => {
                        window.location.href = data.github
                    }}><span className="xi-github"/>Github</li>
                    <li onClick={() => {
                        window.location.href = data.siteUrl
                    }}><span className="xi-browser-text"/>Demo</li>
                </ul>
            </>
    )
}

export default Work;