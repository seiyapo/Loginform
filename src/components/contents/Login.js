import React from "react";
import { Container, ContainerLogin } from "../styles/Container";
import HomeHeader from "./HomeHeader";
import LoginBox from "./LoginBox";


export default function Login() {
    return(
        <Container>
            <HomeHeader />
            <ContainerLogin>
                <LoginBox />
            </ContainerLogin>
        </Container>
    )
}
// なぜContainerはAppにしか作れないのか