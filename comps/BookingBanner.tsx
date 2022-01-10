import styled from 'styled-components'
import React from 'react'


interface AltSectionProps {
  topBoarder: boolean;
  bottomBoarder: boolean;
}

const StyledContainer = styled.section<{ topBoarder: boolean, bottomBoarder: boolean }>`
  display: flex;
  /* padding-bottom:2rem; */
  margin: 0 2% 0 2%;
  /* border-bottom: unset; */
  align-content: center;
  justify-content: center;
  text-align: center;
  /* border-top: 1px solid ${props => props.theme.colors.secondaryMediumGrey}; */
  border-top:1px solid ${props => props.topBoarder ? props.theme.colors.secondaryMediumGrey : "unset"};
  /* border-bottom:1px solid ${props => props.bottomBoarder ? props.theme.colors.secondaryMediumGrey : "unset"}; */
  @media ${props => (props.theme.mediaQ.tablet)} {
    /* border-bottom: 1px solid ${props => props.theme.colors.secondaryMediumGrey}; */
    /* padding-top:4rem; */
    /* padding-bottom:2rem; */
  
    margin: 2rem 3% 0rem 3%;
  }
`

const StyledLink = styled.a`
  /* font-family: Qwigley; */
  font-size: 1rem;
  font-weight: 300;
  padding: 4rem 0 4rem 0;
  font-size: 15.5vw;
  line-height: 15.5vw;
  color: ${props => props.theme.colors.secondaryMediumGrey};
  &:hover {
    transition: 0.2s;
    color: ${props => props.theme.colors.secondary};
  }
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



const BookingBanner = ({topBoarder, bottomBoarder}: AltSectionProps) => {

  return(
    <StyledContainer topBoarder={topBoarder} bottomBoarder={bottomBoarder}>
      <StyledLink href="url">BOKA TID</StyledLink>
    </StyledContainer>
  )
}

export default BookingBanner;