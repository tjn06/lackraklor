import styled from 'styled-components'
import { Link } from "react-scroll";
import ScrollContainer from "react-indiana-drag-scroll";

const StyledNavContainer = styled.div`
  margin: 0 0 0 0;
    @media ${props => (props.theme.mediaQ.laptop)} {
      margin: 0rem 3% 0rem 3%;
    }
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

const StickyNav = styled.nav`
  width: 100%;
  border-top: 1px solid ${props => props.theme.colors.secondaryMediumGrey}; 
  border-bottom: 1px solid ${props => props.theme.colors.secondaryMediumGrey};
  /* align-self: flex-start; */
  cursor: -webkit-grab; cursor: grab;
    @media ${props => (props.theme.mediaQ.laptop)} {
      /* border-top: unset; 
      border-bottom: unset; */
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
    @media ${props => (props.theme.mediaQ.laptop)} {
      width: 100%;
      justify-content: space-between;
    }
`
const StyledLinkWrapper = styled.div`
  padding: 1rem 0 1rem 0;
`

const StyledLink = styled(Link)`
cursor: pointer;
font-size: 1rem;
font-weight: 300;
  @media ${props => (props.theme.mediaQ.laptopL)} {
    font-size: 1rem;
  }
`

const ScrollMenuHome = () => {

  return (
    <StyledNavContainer>
      <RightGradient/>
      <StickyNav>
        <ScrollContainer className="scroll-container">
          <StyledNavItems>
            <StyledLinkWrapper>
              <StyledLink
                activeClass="current"
                smooth={true}
                offset={0}
                duration={500}
                to="booking"
              >
                BOKA
              </StyledLink>
            </StyledLinkWrapper>
            <StyledLinkWrapper>
              <StyledLink
                activeClass="current"
                smooth={true}
                offset={0}
                duration={500}
                to="ourprices"
              >
                PRISER
              </StyledLink>
            </StyledLinkWrapper>
            <StyledLinkWrapper>
              <StyledLink
                activeClass="current"
                smooth={true}
                offset={0}
                duration={500}
                to="news"
              >
                NYHETER
              </StyledLink>
            </StyledLinkWrapper>
            <StyledLinkWrapper>
              <StyledLink
                activeClass="current"
                smooth={true}
                offset={0}
                duration={500}
                to="offer"
              >
                ERBJUDANDE
              </StyledLink>
            </StyledLinkWrapper>
            <StyledLinkWrapper>
              <StyledLink
                activeClass="current"
                smooth={true}
                offset={0}
                duration={500}
                to="instagram"
              >
                INSTAGRAM
              </StyledLink>
            </StyledLinkWrapper>
            <StyledLinkWrapper>
              <StyledLink
                activeClass="current"
                smooth={true}
                offset={0}
                duration={500}
                to="titoc"
              >
                TICTOC
              </StyledLink>
            </StyledLinkWrapper>
            <StyledLinkWrapper>
              <StyledLink
                activeClass="current"
                smooth={true}
                offset={0}
                duration={500}
                to="examples"
              >
                EXEMPEL
              </StyledLink>
            </StyledLinkWrapper>
            <StyledLinkWrapper>
              <StyledLink
                activeClass="current"
                smooth={true}
                offset={0}
                duration={500}
                to="map"
              >
                KARTA
              </StyledLink>
            </StyledLinkWrapper>
          </StyledNavItems>
        </ScrollContainer>
      </StickyNav>
    </StyledNavContainer>
  )
}

export default ScrollMenuHome;