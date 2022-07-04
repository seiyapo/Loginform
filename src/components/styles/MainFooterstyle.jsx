import styled from "styled-components";

export const FooterLayout = styled.div`
    margin: 0;
    width: 100%;
    position: fixed;
    bottom: 0;
    font-size: 11px;
    background-color: #424242 ;
    display: flex;
    height: 50px;
    align-items: center;
    z-index: 20;
    justify-content: center;
    @media screen and (min-width: 700px) {
        display: none;
    }
`

export const FooterContent = styled.div`
    margin: 0;
    color: azure;
    width: 80%;
    display: flex;
    justify-content: space-between;
    padding: 10px;
`