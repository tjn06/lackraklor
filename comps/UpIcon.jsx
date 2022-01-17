import {useState} from 'react'
import styled from 'styled-components'

const StyledUpArrow = styled.span`
  cursor: pointer;

  #up-arrow {
    transition: 0.4s;

    &:hover {
      transform: translate(0px, -5px);
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

const UpIcon = () => {

  const handleScroll=()=>{
    window.scroll({top:0,behavior:'smooth'})
  }

  return (
    
    <StyledUpArrow onClick={handleScroll}>
      <svg id="up-arrow" data-name="Up layer" xmlns="http://www.w3.org/2000/svg" width="33.71" height="48.88" viewBox="0 0 33.71 48.88">
      <path id="path-style" d="M28.08,27.75H22.79A2.64,2.64,0,0,1,21.21,23l13.21-9.9a2.61,2.61,0,0,1,3.16,0L50.79,23a2.64,2.64,0,0,1-1.58,4.76H38.64A2.64,2.64,0,0,0,36,30.39V59.44" transform="translate(-19.15 -11.56)"/>
      </svg>
    </StyledUpArrow>
  );
}

export default UpIcon;

