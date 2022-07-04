import React from "react";
import styled from "styled-components";
import { Mainheaderstyle,Logo,Headercontent, Headerlink, Headerposting } from "../styles/Mainheaderstyle";


export default function MainHeader() {
    return(
        <Mainheaderstyle>
            <Logo>
                <img src="/image/50A58321-4FEC-4B28-BBF2-C9D550F6717Eのコピー.png" alt=""  />
            </Logo>
            <Headercontent>
                <Headerlink>
                    <a >監督版</a>
                    <a >選手版</a>
                    <a >j1</a>
                    <a >新人女優</a>
                    <a >モリ</a>
                    <a >原人</a>
                </Headerlink>
                <Headerposting>投稿</Headerposting>
            </Headercontent>
        </Mainheaderstyle>
    
    )
}