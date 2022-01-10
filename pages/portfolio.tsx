import styled from 'styled-components'
import Head from 'next/head'
import Image from 'next/image'
import { Link } from "react-scroll";
import ScrollContainer from "react-indiana-drag-scroll";

import PageHeaderMultipleWords from '../comps/PageHeaderMultipleWords'
import ViewPortTopContent from '../comps/ViewPortTopContent';
import BookingBanner from '../comps/BookingBanner'

import Hand1 from '../public/pichures/top_image_portfolio.jpg'
import Hand2 from '../public/pichures/h_2.jpg'
import Hand3 from '../public/pichures/h_3.jpg'
import Hand4 from '../public/pichures/h_4.jpg'
import Hand5 from '../public/pichures/h_5.jpg'
import Hand6 from '../public/pichures/h_6.jpg'
import HandGlace from '../public/backg/hand_glace.svg'


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

const GalleryImg = styled.div`
 
`

const GalleryItem0 = styled.li`
  grid-column: 1/span 12;
  position: relative;

  @media ${props => (props.theme.mediaQ.laptop)} {
    grid-column: 2/span 10;
  }
  /* border: 1px solid green; */
`

const GalleryItem1 = styled.li`
  grid-column: 1/span 12;
  position: relative;

  @media ${props => (props.theme.mediaQ.laptop)} {
    grid-column: 2/span 6;
  }
  /* border: 1px solid green; */
`

const GalleryItem2 = styled.li`
  grid-column: 1/span 12;
  position: relative;
  top: 0;
  @media ${props => (props.theme.mediaQ.laptop)} {
    grid-column: 8/span 4;
    grid-row: 3/span 2;
    top: -25%;
  }
  /* border: 1px solid blue; */
`

const GalleryItem3 = styled.li`
  grid-column: 1/span 12;
  position: relative;
 
  @media ${props => (props.theme.mediaQ.laptop)} {
    grid-column: 5/span 3;
  }
  /* border: 1px solid silver; */
`

const GalleryItem4 = styled.li`
  grid-column: 1/span 12;
  position: relative;

  @media ${props => (props.theme.mediaQ.laptop)} {
    grid-column: 2/span 5;
  }
  /* border: 1px solid lime; */
`

const GalleryItem5 = styled.li`
  grid-column: 1/span 12;
  position: relative;
  @media ${props => (props.theme.mediaQ.laptop)} {
    grid-column: 7/span 4;
    grid-row: 4/span 1;
  }
  /* border: 1px solid grey; */
`

const GalleryItem6 = styled.li `
  grid-column: 1/span 12;
  position: relative;
  @media ${props => (props.theme.mediaQ.laptop)} {
    grid-column: 6/span 6;

  }
  /* border: 1px solid red; */
`
const GalleryItem7 = styled.li `
  grid-column: 1/span 12;
  position: relative;
  @media ${props => (props.theme.mediaQ.laptop)} {
    grid-column: 3/span 3;
    grid-row: 5/span 1;
  }
  /* border: 1px solid purple; */
  /* align-self: flex-end; */

`
const GalleryItem8 = styled.li `
  grid-column: 1/span 12;
  position: relative;
    @media ${props => (props.theme.mediaQ.laptop)} {
      grid-column: 6/span 6;
    }
  /* border: 1px solid aqua; */
`
const GalleryItem9 = styled.li `
  grid-column: 1/span 12;
  position: relative;
  top: 0;
  @media ${props => (props.theme.mediaQ.laptop)} {
    grid-column: 2/span 4;
    grid-row: 6/span 1;
    top: -25%;
  }
  /* border: 1px solid cyan; */
`
const ProjectName = styled.p`
  z-index:1;
  position: absolute;
  top: -2.2rem;
  left: 30px;
  font-size: 3rem;
  @media ${props => (props.theme.mediaQ.laptop)} {
  position: absolute;
  top: -2.2rem;
  left: 30px;
  font-size: 3rem;
  }

  /* font-family: Qwigley; */
  /* font-family: Qhytsdakx; */
  /* display: block!important; */
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

        <Container>
          <Gallery>
            <GalleryItem0 className="galleryItem0" >
              <Image src={Hand1} alt="hej" layout="intrinsic" objectFit='contain'/>
              <ProjectName>PROJEKT</ProjectName>
            </GalleryItem0>
            
            <GalleryItem1 className="galleryItem1" >
              <Image src={Hand1} alt="hej" layout="intrinsic" objectFit='contain'/>
              <ProjectName>PROJEKT</ProjectName>
            </GalleryItem1>

            <GalleryItem2 className="galleryItem2">
              <Image src={Hand2} alt="hej" />
              <ProjectName>NAMN</ProjectName>
            </GalleryItem2>

            <GalleryItem3 className="galleryItem3">
              <Image src={Hand3} alt="hej" />
              <ProjectName>NAGLAR</ProjectName>
            </GalleryItem3>

            <GalleryItem4 className="galleryItem4">
              <Image src={Hand4} alt="hej" />
              <ProjectName>BILDNAMN</ProjectName>
            </GalleryItem4>

            <GalleryItem5 className="galleryItem5">
              <Image src={Hand5} alt="hej" />
              <ProjectName>BEHANDLING</ProjectName>
            </GalleryItem5>

            <GalleryItem6 className="galleryItem6">
              <Image src={Hand6} alt="hej" />
              <ProjectName>FÄRGER</ProjectName>
            </GalleryItem6>

            <GalleryItem7 className="galleryItem7">
              <Image src={Hand2} alt="hej" />
              <ProjectName>NAGLACK</ProjectName>
            </GalleryItem7>

            <GalleryItem8 className="galleryItem8">
              <Image src={Hand3} alt="hej" />
              <ProjectName>MANIKYR</ProjectName>
            </GalleryItem8>

            <GalleryItem9 className="galleryItem9">
              <Image src={Hand4} alt="hej" />
              <ProjectName>LIME</ProjectName>
            </GalleryItem9>
          </Gallery>
        </Container>
      </StyledContentWrapper>
      
      <BookingBanner topBoarder={true} bottomBoarder={true}/>
    </>
  )
}

export default Portfolio;