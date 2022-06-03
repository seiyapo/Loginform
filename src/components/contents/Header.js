import React from "react";
import { Container } from "../styles/Container";
import { Flex } from "../styles/Flex";
import { Image,StyledHeader } from "../styles/Header.styled";

export default function Header() {
    return(
        <StyledHeader>
            <Image src='./image/Logo.png' alt=''/>
        </StyledHeader>
    )
    
    

}