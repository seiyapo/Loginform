import React from "react"
import { LoginBoxStyle, LoginName, Stdlogin, Button, OthButton, GlButton, Other,Hr } from "../styles/LoginBox.style"
import { Flex } from "../styles/Flex"

export default function LoginBox() {
    return(
        <Flex>
            <LoginBoxStyle>
                <LoginName>Sign In</LoginName>
                <Hr color="#ffffff" size="1"></Hr>
                <Stdlogin>
                    <dix>ログイン</dix>
                    <div>sonota
                    </div>
                    <Button>ログイン</Button>
                </Stdlogin>
                <Hr color="#ffffff" size="1"></Hr>

                <OthButton>
                    <GlButton>のののん</GlButton>
                    <Other>こちら</Other>
                    <Other>そぢふ</Other>

                </OthButton>
            </LoginBoxStyle>
        </Flex>
    )
}