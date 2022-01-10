import styled from 'styled-components'
import Image from 'next/image'

import Hand1 from '../../public/pichures/h_4.jpg'
import Hand2 from '../../public/pichures/h_2.jpg'
import Hand3 from '../../public/pichures/h_5.jpg'
import Hand4 from '../../public/pichures/h_6.jpg'

const StyledTwoGrid = styled.section`
  display: grid;
  /* padding-bottom:2rem; */
  grid-template-columns: 1fr;
  grid-template-rows: auto auto;
  /* grid-gap: 3rem; */
  margin: 0 2% 0 2%;
  /* border-top: 1px solid ${props => props.theme.colors.secondaryMediumGrey}; */
    /* > * {
          &:first-child {
            padding-top:0px;
          }
        } */
  @media ${props => (props.theme.mediaQ.tablet)} {
    padding-top:2rem;
    padding-bottom:2rem;
    margin: 0rem 3% 0rem 3%;
    grid-template-columns: 1fr;
    grid-template-columns: 1fr 1fr;
    border-bottom: 1px solid ${props => props.theme.colors.secondaryMediumGrey};
    /* grid-template-rows: auto auto; */
    /* v margin: 0rem 3% 6rem 3%; */
      /* > * {
          &:first-child {
            padding-top:2rem;
          }
        } */
      > * {
        &:first-child {
          border-right: 1px solid ${props => props.theme.colors.secondaryMediumGrey};
        }
      }
  }
`
const StyledCenterGridItem = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  text-align: center;
  padding-top:2rem;
  padding-bottom:2rem;
  border-bottom: 1px solid ${props => props.theme.colors.secondaryMediumGrey};
    @media ${props => (props.theme.mediaQ.mobileL)} {
      padding-right: 3%;
      padding-left: 3%;
      
    }
    @media ${props => (props.theme.mediaQ.tablet)} {
      border-bottom: unset;
      padding-bottom:0rem;
    }
    @media ${props => (props.theme.mediaQ.laptop)} {
      margin: 0;
      /* padding: 3rem; */
    }
`
const StyledHeaderGridItemText = styled.h2`
  font-family: Qhytsdakx;
  font-weight: 300;
  font-size: 4rem;
  margin: 0;
  @media ${props => (props.theme.mediaQ.tablet)} {
    font-size: 5rem;
  }
  @media ${props => (props.theme.mediaQ.laptopL)} {
    font-size: 6rem;
  }
  @media ${props => (props.theme.mediaQ.desktop)} {
    font-size: 6rem;
  }
`
const StyledSubGridWrapper = styled.div`
  max-width: 500px;
  height: unset;
  @media ${props => (props.theme.mediaQ.tablet)} {
    height: 50px;
  }
  /* padding-bottom: 5rem; */
`

const StyledSubGridItemText = styled.p`
  /* grid-area: subcontact; */
  font-weight: 300;
  font-size: 1.5rem;
  margin: 0;
    /* @media ${props => (props.theme.mediaQ.tablet)} {
      font-size: 1.5rem;
    }
    @media ${props => (props.theme.mediaQ.laptop)} {
        max-width: 55vw;
      }
    @media ${props => (props.theme.mediaQ.laptopL)} {
      font-size: 1.8rem;
      max-width: 50vw;
    }
    @media ${props => (props.theme.mediaQ.desktop)} {
      font-size: 2rem;
    } */
`

const StyledTextGridWrapper = styled.div`
  display:flex;
  /* align-content: center; */
  max-width: 350px;
  height: unset;
  @media ${props => (props.theme.mediaQ.tablet)} {
    height: 140px
  }
  @media ${props => (props.theme.mediaQ.laptop)} {
    height: 140px
  }
  @media ${props => (props.theme.mediaQ.laptopL)} {
    height: 170px
  }
  @media ${props => (props.theme.mediaQ.desktop)} {
    height: 200px
  }
`

const StyledGridItemText = styled.p`
  font-weight: 300;
  font-size: 1rem;
  color: ${props => props.theme.colors.secondaryLightGrey};
  padding-bottom: 2rem;
    @media ${props => (props.theme.mediaQ.tablet)} {
      font-size: 1.3rem;
    }
    @media ${props => (props.theme.mediaQ.laptop)} { max-width: 55vw; }
    @media ${props => (props.theme.mediaQ.laptopL)} {
      padding-bottom: 4rem;
      font-size: 1.5rem;
      max-width: 50vw;
    }
    @media ${props => (props.theme.mediaQ.desktop)} {
      font-size: 1.5rem;
    }
`

const ImageContainer = styled.div`
  /* height: 100%; */
  width: 100%;
  /* border: 1px solid green; */
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  grid-template-rows: auto;
`
const StyledImgFigContainer = styled.div`
  text-align: left;
`

const FigCaption = styled.figcaption`
  font-family: Qhytsdakx;
  font-weight: 300;
  font-size: 1.8rem;

    @media ${props => (props.theme.mediaQ.laptop)} {
      font-size: 3rem;
    }
`

const TwoGridImages = () => {

  return(
    <StyledTwoGrid>

      <StyledCenterGridItem>
        
        <StyledHeaderGridItemText>
          NYHETER
        </StyledHeaderGridItemText>
        <StyledSubGridWrapper>
          <StyledSubGridItemText>
            VI HAR MASSOR ATT VÄLJA
          </StyledSubGridItemText>
        </StyledSubGridWrapper>
        <StyledTextGridWrapper>
            <StyledGridItemText>
              Du har även möjligheten att boka direkt
              via mail eller telefon om du inte vill boka
              via bokadirekt.
            </StyledGridItemText>
          </StyledTextGridWrapper>

          <ImageContainer>
            <StyledImgFigContainer>
            <Image
              src={Hand1}
              alt="Hand1"
              layout="responsive"
            />
            <FigCaption>
              EXEMPEL
            </FigCaption>
            </StyledImgFigContainer>
            
            <StyledImgFigContainer>
            <Image
              src={Hand2}
              alt="Hand2"
              layout="responsive"
            />
            <FigCaption>
              NAILS
            </FigCaption>
            </StyledImgFigContainer>
          </ImageContainer>

      </StyledCenterGridItem>


      <StyledCenterGridItem>
        <StyledHeaderGridItemText>
          FÖRLÄNGNING
        </StyledHeaderGridItemText>
        <StyledSubGridWrapper>
          <StyledSubGridItemText>
            EXEMPEL PÅ OLIKA NAGLAR
          </StyledSubGridItemText>
        </StyledSubGridWrapper>
        <StyledTextGridWrapper>
          <StyledGridItemText>
            Vi erbjuer en uppsjö av olika nagelbehanddlingar,
            se vår prislista och hitta något som passar dig.
          </StyledGridItemText>
          {/* <StyledLink href="url">GÅ TILL BOOKADREKT.COM</StyledLink> */}
        </StyledTextGridWrapper>
  
        <ImageContainer>
          <StyledImgFigContainer>
          <Image
            src={Hand3}
            alt="Hand3"
            layout="responsive"
          />
          <FigCaption>
            NAGELBEHANDLING
          </FigCaption>
          </StyledImgFigContainer>

          <StyledImgFigContainer>
          <Image
            src={Hand4}
            alt="Hand4"
            layout="responsive"
          />
          <FigCaption>
            FÄRGER
          </FigCaption>
          </StyledImgFigContainer>
        </ImageContainer>

      </StyledCenterGridItem>

  </StyledTwoGrid>
  )
}

export default TwoGridImages;