import { createGlobalStyle } from "styled-components";
import { colors } from "./color";

const GlobalStyle = createGlobalStyle`
    *{
    box-sizing: border-box;
    }

    body {
        margin: 0;
        padding: 0;
        font-family:'Open Sans', sans-serif;
        /* background-image:url("/image/icons\ _\ graphics/Asset 1.png"), url("/image/icons\ _\ graphics/Asset 1.png") ,linear-gradient(${colors.dark} 85%,${colors.dark} 20% ) ; */
        background-image:linear-gradient(${colors.dark} 85%,${colors.dark} 20% ) ;
        background-repeat: repeat-y, repeat-y;
        background-position: left,right;
    }

    *::-webkit-scrollbar {
  width: 7px;
}

/* Track */
*::-webkit-scrollbar-track {
  background:  ${colors.dark}; 
}
 
/* Handle */
*::-webkit-scrollbar-thumb {
  background:  ${colors.green}; 
}

/* Handle on hover */
*::-webkit-scrollbar-thumb:hover {
  background:  ${colors.green}; 
}

/* Make clicks pass-through */
#nprogress {
    pointer-events: none;
  }
  
  #nprogress .bar {
    background: linear-gradient(180deg, ${colors.green} 0%, ${colors.green} 100%);
    position: fixed;
    z-index: 1300;
    top: 0;
    left: 0;
    width: 100%;
    height: 5px;
  }
  
  /* Fancy blur effect */
  #nprogress .peg {
    display: block;
    position: absolute;
    right: 0px;
    width: 100px;
    height: 100%;
    box-shadow: 0 0 10px ${colors.green}, 0 0 5px ${colors.green};
    opacity: 1;
  
    -webkit-transform: rotate(3deg) translate(0px, -4px);
    -ms-transform: rotate(3deg) translate(0px, -4px);
    transform: rotate(3deg) translate(0px, -4px);
  }
  
  .nprogress-custom-parent {
    overflow: hidden;
    position: relative;
  }
  
  .nprogress-custom-parent #nprogress .bar {
    position: absolute;
  }
`;
export default GlobalStyle