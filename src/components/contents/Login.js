import React from "react";
import { Container, ContainerLogin } from "../styles/Container";
import Header from "./Header";
import LoginBox from "./LoginBox";


export default function Login() {
    return(
        <Container>
            <Header />
            <ContainerLogin>
                <LoginBox />
            </ContainerLogin>
        </Container>
    )
}
// なぜContainerはAppにしか作れないのか