import styled from "styled-components"

export const LoginBoxStyle = styled.div`
    background-color: rgba(142, 204, 246, 0.828); 
    border: solid 1px rgba(111, 108, 108, 0.512); 
    /* border-radius: 10px;  */
    margin: 0 auto;
    width: 350px;
    height: 500px;
    text-align: center;
    padding: 0 ;
    box-shadow: 0 3px 4px rgba(0, 0, 0, 0.32); 
`

export const LoginName = styled.div`
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80px;
    /* border-radius: 10px 10px 0 0;  */
    /* background-color: rgb(40, 120, 239); */
    /* margin: 40 0 0 0; */
    font-size: 2rem;
`

export const Stdlogin = styled.div`
    margin: 40px 0 40px 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 175px;
`

export const Button = styled.button`
    font-family:monospace;
    color: rgb(51, 167, 244);
    background-color: rgba(252, 252, 252, 0.924);
    border: 1px solid black;
    font-size: 20px;
    margin: 0 auto;
    width: 75%;
    border-radius: 10px; 
`

export const OthButton = styled.a`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin-top: 20px;
    margin-bottom: 30px;
`

export const GlButton = styled.button`
    font-size: 1rem;
    color: aliceblue;
    border: 0.1px solid black;
    background-color: rgb(85, 158, 253);
    margin: 10px;
    width: 50%;
`

export const Other = styled.a`
    color: rgb(8, 8, 8);
    font-size: 13px;
`

export const Hr = styled.hr`
    width: 80% ;
    margin: 0 auto;
    

`