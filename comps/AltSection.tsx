import styled from 'styled-components'
import React from 'react'


interface AltSectionProps {
  topBoarder: boolean;
  bottomBoarder: boolean;
}

const StyledTwoGrid = styled.section<{ topBoarder: boolean, bottomBoarder: boolean }>`
  display: flex;
  /* padding-bottom:2rem; */
  justify-content: space-between;
  margin: 0 2% 0 2%;
  /* border-bottom: unset; */
  align-items: center;
  /* border-top: 1px solid ${props => props.theme.colors.secondaryMediumGrey}; */
  border-top:1px solid ${props => props.topBoarder ? props.theme.colors.secondaryMediumGrey : "unset"};
  border-bottom:1px solid ${props => props.bottomBoarder ? props.theme.colors.secondaryMediumGrey : "unset"};
  @media ${props => (props.theme.mediaQ.tablet)} {
    /* border-bottom: 1px solid ${props => props.theme.colors.secondaryMediumGrey}; */
    /* padding-top:4rem; */
    /* padding-bottom:2rem; */
    margin: 0rem 3% 0rem 3%;
  }
`

const StyledHeaderGridItemText = styled.h2`
  font-family: Qhytsdakx;
  font-weight: 300;
  font-size: 2.3rem;
  margin: 0;
  padding: 1rem 0 1rem 0;
  /* @media ${props => (props.theme.mediaQ.tablet)} {
    font-size: 5rem;
  }
  @media ${props => (props.theme.mediaQ.laptopL)} {
    font-size: 6rem;
  }
  @media ${props => (props.theme.mediaQ.desktop)} {
    font-size: 7rem;
  } */
`

const StyledHeader = styled.span`
  font-size: 2rem;
  font-weight: 400;
  padding: 2rem 0 2rem 0;
  `

const StyledLink = styled.a`
  font-size: 1rem;
  font-weight: 300;
  padding: 2rem 0 2rem 0;
  /* padding-bottom: 1%; */

    /* @media ${props => (props.theme.mediaQ.tablet)} {
      font-size: 1.3rem;
    }
    @media ${props => (props.theme.mediaQ.laptopL)} {
      padding-bottom: 4rem;
      font-size: 1.5rem;
    }

    @media ${props => (props.theme.mediaQ.desktop)} {
      font-size: 1.8rem;
    } */
`

const Separator = styled.span`
  width: 1px;
  height: 20px;
  background-color: ${props => (props.theme.colors.secondaryLightGrey)};
`


const AltSection = ({topBoarder, bottomBoarder}: AltSectionProps) => {

  return(
    <StyledTwoGrid topBoarder={topBoarder} bottomBoarder={bottomBoarder}>

        <StyledHeaderGridItemText>SE MER</StyledHeaderGridItemText>
        <Separator/>
        <StyledLink href="url">PORTFOLIO</StyledLink>
        <Separator/>
        <StyledLink href="url">INSTAGRAM</StyledLink>
        <Separator/>
        <StyledLink href="url">FACEBOOK</StyledLink>

    
  </StyledTwoGrid>
  )
}

export default AltSection;