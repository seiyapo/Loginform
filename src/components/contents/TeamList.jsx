import React from "react";
import { Allteam, LeageName,Team, Teamlogo, Teamname, Line } from "../styles/Liststyle";

export default function List(){
    return(
        <Allteam>
            <LeageName>プレミアリーグ</LeageName>
            
            <Team>
                    <Teamlogo src="/image/アーセナル.png"  alt="" />
                <Teamname>アーセナル</Teamname>
            </Team>
            <Line />

            <Team>
                    <Teamlogo src="/image/アーセナル.png"  alt="" />
                <Teamname>アーセナル</Teamname>
            </Team>

            <Line />
        </Allteam>
    )
}