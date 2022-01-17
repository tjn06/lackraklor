import styled from 'styled-components'
import Head from 'next/head'
import { Link } from "react-scroll";
import ScrollContainer from "react-indiana-drag-scroll";

import PageHeaderMultipleWords from '../comps/PageHeaderMultipleWords'
import ViewPortTopContent from '../comps/ViewPortTopContent';
import ImageGallery from '../comps/ImageGallery'
import BookingBanner from '../comps/BookingBanner'


const StyledPortfolioSection = styled.div`
  /* margin: 100px 2% 0 2%;
  border-bottom: 1px solid ${props => props.theme.colors.secondaryMediumGrey} ; */
  padding-right: 3%;
  padding-left: 3%;
`

const StyledContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 0;
  padding-left: 0;
    @media ${props => (props.theme.mediaQ.laptopL)} {
      padding-right: 3%;
      padding-left: 3%;
    }
`
const StyledNavContainer = styled.div`
  position: relative;
`

const RightGradient = styled.div`
  height: 100%;
  width: 30px;
  position: absolute;
  z-index: 2;
  right: 0;
  /* background-image: rgba(255,0,0,0); */
  background-image: linear-gradient(to left, ${props => props.theme.colors.primaryDarkGrey} , rgba(255,0,0,0));
  @media (min-width: 1000px) {
    display: none;
  }
`

const StyledNavItems = styled.div`
  margin: 0 auto;
  width: 800px;
  font-size: 0.8rem;
  display: flex;
  flex-direction: row;
  /* width: 100%; */
  justify-content: space-evenly;
  list-style-type:none;
  padding: 1rem 0 1rem 0;
    @media ${props => (props.theme.mediaQ.laptopL)} {
      width: 950px;
    }
`
const StyledLinkWrapper = styled.div`
`

const StyledLink = styled(Link)`
cursor: pointer;
font-size: 1rem;
font-weight: 300;
  @media ${props => (props.theme.mediaQ.laptopL)} {
    font-size: 1rem;
  }
`

const StickyNav = styled.nav`
  position: -webkit-sticky;
  position: sticky;
  top: 25%;
  width: 100%;
  border-top: 1px solid ${props => props.theme.colors.secondaryMediumGrey}; 
  border-bottom: 1px solid ${props => props.theme.colors.secondaryMediumGrey};
  margin-bottom: 1rem;
  /* align-self: flex-start; */
  cursor: -webkit-grab; cursor: grab;
  @media ${props => (props.theme.mediaQ.laptop)} {
    border-top: unset; 
    border-bottom: unset;
  }  
`

const Container = styled.div`
  max-width: 1200px;
  margin: 0rem auto;  
  padding: 0 3% 0 3%;
  
`

const Gallery = styled.ul`
  overflow: hidden;
  padding-left: 0;
  list-style: none;
  margin-top: 0;
    @media ${props => (props.theme.mediaQ.laptop)} {
      display: grid;
      grid-gap: 1.25rem;
      grid-template-columns: repeat(12,1fr);
      /* grid-template-rows: repeat(12,auto); */
      align-items: start;
      overflow: hidden;
      padding-left: 0;
      list-style: none;
      margin-top: 0rem;
    }
`

const Portfolio = () => {

  return (
    <>
      <ViewPortTopContent>
        <PageHeaderMultipleWords firstWord="PORTFOLIO" secondWord="BILDER"/>
      </ViewPortTopContent>

      <StyledContentWrapper>
        <StyledNavContainer>
          <RightGradient/>
          <StickyNav>
            <ScrollContainer className="scroll-container">
              <StyledNavItems>
                <StyledLinkWrapper>
                  <StyledLink
                    activeClass="current"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                    to="galleryItem1"
                  >
                    Förlängning
                  </StyledLink>
                </StyledLinkWrapper>
                <StyledLinkWrapper>
                  <StyledLink
                    activeClass="current"

                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                    to="galleryItem2"
                  >
                    Färger
                  </StyledLink>
                </StyledLinkWrapper>
                <StyledLinkWrapper>
                  <StyledLink
                    activeClass="current"

                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                    to="galleryItem3"
                  >
                    Slipning
                  </StyledLink>
                </StyledLinkWrapper>
                <StyledLinkWrapper>
                  <StyledLink
                    activeClass="current"

                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                    to="galleryItem4"
                  >
                    Förbehandling
                  </StyledLink>
                </StyledLinkWrapper>
                <StyledLinkWrapper>
                  <StyledLink
                    activeClass="current"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                    to="galleryItem5"
                  >
                    Paketpris
                  </StyledLink>
                </StyledLinkWrapper>
                <StyledLinkWrapper>
                  <StyledLink
                    activeClass="current"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                    to="galleryItem6"
                  >
                    Manikyr
                  </StyledLink>
                </StyledLinkWrapper>
                <StyledLinkWrapper>
                  <StyledLink
                    activeClass="current"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                    to="galleryItem7"
                  >
                    Enfärgad
                  </StyledLink>
                </StyledLinkWrapper>
                <StyledLinkWrapper>
                  <StyledLink
                    activeClass="current"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                    to="galleryItem8"
                  >
                    Mönster
                  </StyledLink>
                </StyledLinkWrapper>
                <StyledLinkWrapper>
                  <StyledLink
                    activeClass="current"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                    to="galleryItem9"
                  >
                    Mönster
                  </StyledLink>
                </StyledLinkWrapper>
              </StyledNavItems>
            </ScrollContainer>
          </StickyNav>
        </StyledNavContainer>

        <ImageGallery/>

      </StyledContentWrapper>
      
      <BookingBanner topBoarder={true} bottomBoarder={false}/>
    </>
  )
}

export default Portfolio;