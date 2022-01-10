import {useState} from 'react'
import styled from 'styled-components'
import { Link } from "react-scroll";

const StyledDownArrow = styled.a`
  cursor: pointer;

  #down_arrow {
    transition: 0.4s;

    &:hover {
      transform: translate(0px, 5px);
        #path-style {
          fill: none;
          stroke: white;
        }
    }
  }

  #path-style {
    transition: 0.4s;
    fill: none;
    stroke: ${props => props.theme.colors.secondaryLightGrey};
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 2px;
  }
`;

const DownIcon = () => {

  // const handleScroll=()=>{
  //   window.scroll({top:0,behavior:'smooth'})
  // }

  return (
    <StyledDownArrow>
 
    <Link
    activeClass="current"
    spy={true}
    smooth={true}
    offset={0}
    duration={500}
    to="page-1"
    >
    
      <svg id="down_arrow" data-name="down layer" xmlns="http://www.w3.org/2000/svg" width="33.71" height="48.88" viewBox="0 0 33.71 48.88">
        <path id="path-style" d="M43.92,44.25h5.29A2.64,2.64,0,0,1,50.79,49l-13.21,9.9a2.61,2.61,0,0,1-3.16,0L21.21,49a2.64,2.64,0,0,1,1.58-4.76H33.36A2.64,2.64,0,0,0,36,41.61v-29" transform="translate(-19.15 -11.56)"/>
      </svg>
    
  </Link>
  </StyledDownArrow>
  );
}

export default DownIcon;




