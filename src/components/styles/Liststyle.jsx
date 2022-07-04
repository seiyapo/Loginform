import styled from "styled-components"

export const Allteam = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
    padding-top:50px;
    margin:0;
    
    
`

export const LeageName=styled.header`
    height: 80px;
    width: 100%;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 25px;
    background-color: rgb(189, 161, 254);
    @media screen and (max-width: 700px) {
        height: 60px;
        font-size: 20px;
    }
`

export const Team = styled.div`
    width: 50%;
    height: 60px;
    display: flex;
    /* border: 1px solid black; */
    margin-top: 15px;
    padding-right: 25px;
    @media screen and (max-width: 700px) {
        width: 70%;
        height: 40px;   
        margin-top: 7px;
        
        padding-right: 0;
    }
`

export const Teamname = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    font-size: 20px;
    @media screen and (max-width: 700px) {
        font-size: 15px;
    }
`

export const Teamlogo = styled.img`
    width: 50px;
    height: 100%;
    @media screen and (max-width: 700px) {
        width: 40px;
    }
`

export const Line = styled.hr`
    width: 60%; 
    @media screen and (max-width: 700px) {
        width: 85%;
    }
`

