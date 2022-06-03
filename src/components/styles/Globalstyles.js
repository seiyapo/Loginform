import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

* {
    box-sizing: border-box;
    margin: 0;
  }

body {
  margin: 0;
  color: hsl(192, 100%, 9%);
  font-family: 'Poppins', sans-serif;
  font-size: 1.15em;

}

p {
  opacity: 0.6;
  line-height: 1.5;
}

img {
  max-width: 100%;
}
`


export default GlobalStyles

