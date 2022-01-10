import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import { Link } from "react-scroll";

import Instagram from '../../public/icons/instagram.png'
import Facebook from '../../public/icons/facebook.png'
import DownIcon from '../DownIcon'


import IconMail from '../../public/icons/icon_email.svg'
import IconInstagram from '../../public/icons/icon_instagram.svg'
import IconFacebook from '../../public/icons/icon_facebook.svg'

const mediaQ = "686px"; // To all mediaquerys in styled components in this component

const StyledRow =  styled.div`
  display: grid;
  grid-template-columns: 1fr;
  width:100%;
  justify-items: center;
  margin-top: 1.5rem;
  gap: 30px;

  @media (min-width: ${mediaQ}) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`

const Btn = styled.button`
  background: none;
	color: white;
	border: 2px solid white;;
	padding: 0.2rem 6rem 0.1rem 6rem;
  border-radius: 8px;
	font: inherit;
	cursor: pointer;
	outline: inherit;
  font-family: Qwigley;
  font-size: 2.5rem;
  white-space: nowrap;

`
const StyledBtnTextInfo = styled.div`
position: relative;

`
const SubMessBtn = styled.span`
position: absolute;
font-size: 0.9rem;
letter-spacing: 1px;
font-weight: 400;
top: 65px; left: 0;
right:0 ;
`



const StyledIconsMobile = styled.div`
  display: none;
  @media (min-width: ${mediaQ}) {
    display: flex;
    margin-right: 0%;
    padding-top: 3px;
    font-size: 0.8em;
    font-weight: 300;
  }
`;

const StyledBorderSidesFirst = styled.div`
display: flex;
padding: 4px;
/* border-width: 0px 1px 0px 1px;
border-color: ${props => props.theme.colors.secondaryMediumGrey};
border-style: solid; */
a {
    display: flex;
    align-items: center;
  }
`;

const StyledBorderSidesAfter = styled.div`
display: flex;
padding: 4px;
/* border-width: 0px 1px 0px 0px;
border-color: ${props => props.theme.colors.secondaryMediumGrey};
border-style: solid; */
a {
    display: flex;
    align-items: center;
  }
`;

const StyledIconWrapper = styled.div`
  display: none;
  @media (min-width: ${mediaQ}) {
    display: flex;
  }
`
const HeaderBtn = ({}) => {
  return (
    <StyledRow>

      <StyledIconsMobile>
        <StyledBorderSidesFirst >
          <a href="tel:+496170961709">
            <Image width="26" height="21" src={IconMail} alt="Phone"/>
          </a>
        </StyledBorderSidesFirst>
        <StyledBorderSidesAfter>
          <a href="tel:+496170961709">
            <Image width="26" height="21" src={IconInstagram} alt="Instagram"/>
          </a>
        </StyledBorderSidesAfter>
        <StyledBorderSidesAfter>
          <a href="tel:+496170961709">
            <Image width="26" height="21" src={IconFacebook} alt="Facebook"/>
          </a>
        </StyledBorderSidesAfter>
      </StyledIconsMobile>

      <StyledBtnTextInfo>      
        <Btn>Boka tid</Btn>
        <SubMessBtn>*DU BOKAR VIA WWW.BOKADIREKT.SE</SubMessBtn>
      </StyledBtnTextInfo>

      <StyledIconWrapper>
        <DownIcon/>
      </StyledIconWrapper>
      

    </StyledRow>
  )
}

export default HeaderBtn;