// import Link from 'next/link'
import NavLink from './NavLink'
import Image from 'next/image'
import styled from 'styled-components'
import React, { useState } from 'react';
import useDocumentScrollThrottled from '../comps/useDocumnetScrollThrottled';
import Hamburger from '../comps/Hamburger';

import IconPhone from '../public/icons/icon_phone.svg'
import IconMail from '../public/icons/icon_email.svg'
import IconInstagram from '../public/icons/icon_instagram.svg'
import IconFacebook from '../public/icons/icon_facebook.svg'

const translateYHeader = "-142"
const mediaQ = "686px"; // To all mediaquerys in styled components in this component

const NavStyle = styled.header`
  box-sizing: border-box;
  transition: all 0.1s ease;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0px 80px 0 80px;
  height: 70px;
  color: white;
  transform: translateY(0);
  transition: transform 0.3s ease;
  background-image: linear-gradient(to right,rgba(0,0,0, 0.0), rgba(255,255,255, 0.20), rgba(255,255,255, 0.20));
  /* background-color: rgba(0, 0, 0, 0.7); */
  font-size: 1rem;
  font-weight: 300;
  z-index: 10; 
  
  a {
    text-decoration: none;
    font-size: 1.5rem;
    &[aria-current] {
      color: white;
    }
  }
  &.shadow {
    /* box-shadow: 0 9px 9px -9px rgba(0, 0, 0, 0.13); */
  }
  &.hidden {
    transform: translateY(${translateYHeader}%);
  }
  &.transparent {
    opacity: 1;
  }
    @media (max-width: 1024px) {
      transition: all 0.1s ease;
      padding: 0px 10px;
      /* &.shadow {
      box-shadow: none;
      } */
    }
    @media (max-width: ${mediaQ}) {
      transition: all 0.1s ease;
      height: 50px;
      padding: 0px 10px;
      top: 0;
      /* &.shadow {
      box-shadow: none;
      } */
    }
`;

const StyledMaxWidthContent = styled.nav`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
    @media (max-width: ${mediaQ}) {
      justify-content: space-between;
    }
`;

const StyledLogoContainer = styled.div`
  /* z-index: 100; */
  margin-top: 35px;
  transform: translateY(0);
  transition: transform 0.5s ease;
  /* width: 70px;
  height: 70px; */
  &.hidden {
  transform: translateY(${translateYHeader}%);
  }
`

const StyledNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const StyledNavOptions = styled.ul`
  padding-left: 25px;
  display: grid;
  grid-template-columns: repeat(5, auto);
  grid-gap: 20px;
  list-style-type: none;
  
    @media (max-width: ${mediaQ}) {
      display: flex;
      width: 100%;
      height: calc(101vh);
      /* height: 350px; */
      position: absolute;
      overflow-y: auto;
      top: -17px;
      left: 100%;
      opacity: 0;
      transition: all 0.2s ease;
      flex-direction: column;
      list-style-type: none;
      grid-gap: 0px;
      padding-top: 4rem;
      &.active {
        background: ${props => props.theme.colors.primaryDarkGrey};
        left: 0;
        opacity: 1;
        transition: all 0.2s ease;
        z-index: 1;
        align-content: center;
        padding-left: 0px;
      }
    }
  `;

const StyledListNavItem = styled.li`
  &.show-hide-when-mobile {
    display: none;
  }

  @media (max-width: ${mediaQ}) {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px 0px;

    &.show-hide-when-mobile {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px 0px;
    }
  }
`;

const StyledIconsMobile = styled.div`
  display: none;
  /* padding-top: 2px; */
  margin-right: 0%;
  padding-top: 3px;
  font-size: 0.8em;
  font-weight: 300;
    @media (max-width: ${mediaQ}) {
      display: flex;
      /* cursor: pointer; */
    }
`;

const StyledBorderSidesFirst = styled.div`
display: flex;
padding: 4px;
border-width: 0px 1px 0px 1px;
border-color: white;
border-style: solid;
a {
    display: flex;
    align-items: center;
  }
`;

const StyledBorderSidesAfter = styled.div`
display: flex;
padding: 4px;
border-width: 0px 1px 0px 0px;
border-color: white;
border-style: solid;
a {
    display: flex;
    align-items: center;
  }
`;


const StyledLink = styled(NavLink)`
  color: #858585;
  text-decoration: none;
  &.active {
  transition: all 0.1s ease;
	/* font-weight: bold; */
  /* color: #070707; */
  text-decoration: none;
  }
  :hover {
    color: #070707;
    transition: all 0.1s ease;
  } 
`;

const SyledContactSide = styled.a`
    @media (max-width: ${mediaQ}) {
      display: none;
    }
`

const Navbar = () => {
  const [hideHeader, setHideHeader] = useState(false);
  const [showHeaderOpenMenu, setShowHeaderOpenMenu] = useState(false);
  const [showHeaderShadow, setshowHeaderShadow] = useState(false);
  const [tranparentHeader, setTranparentHeader] = useState(false);
  const [keepMenuOpen, setKeepMenuOpen] = useState(false);

  // Minimumscoll - Change header states if scrolling 80px up or down
  const MINIMUM_SCROLL = 80;
  // Timeoutdelay - Delay on changing header state
  const TIMEOUT_DELAY = 200;

  useDocumentScrollThrottled(callbackData => {
    const { previousScrollTop, currentScrollTop } = callbackData;
    const isScrolledDown = previousScrollTop < currentScrollTop;
    const isMinimumScrolled = currentScrollTop > MINIMUM_SCROLL;

    const isFromTop = currentScrollTop > 300;

    setshowHeaderShadow(currentScrollTop > 2);
    setTranparentHeader(currentScrollTop > 2);

    setTimeout(() => {
      if(showHeaderOpenMenu ) {
        setHideHeader(false) ;
      } else {
        setHideHeader(isScrolledDown && isMinimumScrolled && isFromTop && !keepMenuOpen) ;
      }
    }, TIMEOUT_DELAY);
  });

  const shadowStyle = showHeaderShadow ? 'shadow' : '';
  const hiddenStyle = hideHeader ? 'hidden' : '';
  const transparentStyle = tranparentHeader ? 'transparent' : '';

  const [toggleHamburgerAndMenu, setToggleHamburgerAndMenu] = useState(false);

  const toggleHamburgerClick = () => {
    setToggleHamburgerAndMenu(prev => !prev);
    setKeepMenuOpen(prev => !prev)
  }

  const closeMobileMenuRouteClick = () => {
    setToggleHamburgerAndMenu(false)
    setKeepMenuOpen(false)
  }

  
  return ( 
    <NavStyle className={`${shadowStyle} ${hiddenStyle} ${transparentStyle}`}>
      <StyledMaxWidthContent>

        <StyledLogoContainer className={`${shadowStyle} ${hiddenStyle} ${transparentStyle}`}>
          <Image src="/logo/logo_white.svg" width={90} height={90} alt="Logo" />
        </StyledLogoContainer>

        <StyledNav>
          <StyledNavOptions className={toggleHamburgerAndMenu ? "active" : ""}>
            <StyledListNavItem>
              <StyledLink href="/">
              <a onClick={closeMobileMenuRouteClick}>Hem</a>
              </StyledLink> 
            </StyledListNavItem>
            <StyledListNavItem >
              <StyledLink href="/prices">
              <a onClick={closeMobileMenuRouteClick}>Priser</a>
              </StyledLink>
            </StyledListNavItem>
            <StyledListNavItem >
              <StyledLink href="/portfolio">
              <a onClick={closeMobileMenuRouteClick}>Portfolio</a>
              </StyledLink>
            </StyledListNavItem>
            <StyledListNavItem>
              <StyledLink href="/contact">
              <a onClick={closeMobileMenuRouteClick}>Om mig</a>
              </StyledLink>
            </StyledListNavItem>

            <StyledListNavItem className="show-hide-when-mobile">
              <StyledLink href="/contact">
              <a onClick={closeMobileMenuRouteClick}>Kontakt</a>
              </StyledLink>
            </StyledListNavItem>
          </StyledNavOptions>
        </StyledNav>

        <StyledIconsMobile>
          <StyledBorderSidesFirst >
            <a href="tel:+496170961709">
              <Image width="26" height="21" src={IconMail} alt="Phone"/>
            </a>
          </StyledBorderSidesFirst>
            <StyledBorderSidesAfter>
              <a href="tel:+496170961709">
              <Image width="26" height="21" src={IconPhone} alt="Phone"/>
              </a>
            </StyledBorderSidesAfter>
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
        
          <Hamburger toggleHamburgerClick={toggleHamburgerClick} toggleHamburgerAndMenu={toggleHamburgerAndMenu}/> 
        
          <StyledLink href="/contact">
            <SyledContactSide onClick={closeMobileMenuRouteClick}>Kontakt</SyledContactSide>
          </StyledLink>

      </StyledMaxWidthContent>
      
    </NavStyle>     
  ); 
}

export default Navbar;

