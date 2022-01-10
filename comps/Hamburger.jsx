import {useState} from 'react'
import styled from 'styled-components'

const StyledHamburger = styled.button`
  appearance: none;
  background: none;
  border: 0;
  padding: 2px 0 0 0;
  cursor: pointer;
  z-index: 25;

  &:focus {
    outline: none;
    /* background: var(--color-brand-02); */
  }

  svg {
    width: 1.5rem;
    height: 1.5rem;
    display: block;
  }

  #bottom_line {
    transform: ${props => !props.isOpen ? "translate(144.991222px,1032.69397px)" : "translate(144.984393px,932.70297px)"};
    transition: 0.4s;
  }
  #bottom_line_tr {
    transform: ${props => !props.isOpen ? "rotate(0deg)" : "rotate(45deg)"};
    transition: 0.4s;
  }

  #eRujzfhkIrS5 {
    opacity: ${props => !props.isOpen ? "1" : "0"};
    transition: 0.2s;
  }

  #top_line {
    transform: ${props => !props.isOpen ? "translate(144.991222px,832.69397px)" : "translate(144.991222px,932.69397px)"};
    transition: 0.4s;
  } 
  #top_line_tr {
    transform: ${props => !props.isOpen ? "rotate(0deg)" : "rotate(-45deg)"};
    transition: 0.4s;
  }

  @media (min-width: 686px) {
    display: none;
  }
`

const Hamburger = ({toggleHamburgerClick, toggleHamburgerAndMenu}) => {
  return (
    <StyledHamburger onClick={() => toggleHamburgerClick()} ariaLabel="Menu" isOpen={toggleHamburgerAndMenu}>
      <svg id="icon" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 310 259.344" shapeRendering="geometricPrecision" textRendering="geometricPrecision" >
        <g transform="translate(10.0156-803.031)">
          <g>
            <g id="bottom_line">
              <g id="bottom_line_tr">
                <path d="M19.668179,1032.694h250.646101v0" transform="translate(-144.991222,-1032.69397)" fill="none" stroke="white" strokeWidth="49.3364" strokeLinecap="round"/>
              </g>
            </g>
            <path id="eRujzfhkIrS5" d="M19.668179,932.694h250.646101v0" fill="none" stroke="white" strokeWidth="49.3364" strokeLinecap="round"/>
            <g id="top_line">
              <g id="top_line_tr">
                <path d="M19.668179,832.694h250.646101v0" transform="translate(-144.991222,-832.69397)" fill="none" stroke="white" strokeWidth="49.3364" strokeLinecap="round"/>
              </g>
            </g>
          </g>
        </g>
      </svg>
    </StyledHamburger>
  );
}

export default Hamburger;

