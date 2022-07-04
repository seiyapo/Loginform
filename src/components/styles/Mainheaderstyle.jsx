import styled from "styled-components";

export const Mainheaderstyle = styled.div`
    margin-top: 0;
    width: 100%;
    position: fixed;
    /* padding: 0 30px 0 10px; */
    /* background-color: rgb(249, 250, 252); */
    background-color: #424242 ;
    display: flex;
    height: 50px;
    align-items: center;
    z-index: 2;
`

export const Logo = styled.div`
    height: 30px;
    width: 100px;
    @media screen and (max-width: 700px) {
        margin: 0 auto;
    }
`

export const Headercontent = styled.div`
    margin: 0;
    color: azure;
    width: 80%;
    margin-left: auto;
    display: flex;
    justify-content: space-between;
    padding: 10px;
    @media screen and (max-width: 700px) {
        width: 95%;
        position: absolute;
        display: flex;
        justify-content: right
    }
 `

 export const Headerlink = styled.div`
    width: 80%;
    display: flex;
    justify-content: space-between;
    font-size: 15px;
    @media screen and (max-width: 700px) {
        display: none;
    }
 `

 export const Headerposting = styled.button`
    width: 15%;
    @media screen and (max-width: 700px) {
        font-size: 13px;
        width: 60px;
    }
 `
