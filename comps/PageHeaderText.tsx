import styled from 'styled-components'
import HeaderBtn from '../comps/buttons/HeaderBtn'

const StyledPageHeader = styled.section`
  padding-top: 100px;
  text-align: center;
  align-items: center;
  /* background-image: url("/backg/backg_hand.jpg");
  background-repeat: no-repeat;
  background-position: top center;
  background-size: contain; */
  display: flex;
  flex-direction: column;
  
  /* height: 100vh; */
  justify-content: space-evenly;
  width: 100%;
  height: 100%;
`


const StyledHeaderTextArticle = styled.article`

`

const StyledTextLeft = styled.span`
  font-family: 'Qhytsdakx';
  font-size: 30.5vw;
  line-height: 30.5vw;
  color: ${props => (props.theme.colors.main)};
  margin: 0;
    @media ${props => props.theme.mediaQ.tablet} {
      font-size: 25.5vw;
      line-height: 25.5vw;
    }
`
const StyledTextRight = styled.span`
  font-family: Qhytsdakx;
  font-size: 30.5vw;
  line-height: 30.5vw;
  color: ${props => (props.theme.colors.secondary)};
  margin: 0;
    @media ${props => props.theme.mediaQ.tablet} {
      font-size: 25.5vw;
      line-height: 25.5vw;
    }
`

const StyledHeaderMessage = styled.h2`
  margin: 0;
  font-size: 5.5vw;
  font-family: futura-pt, sans-serif;
  font-weight: 300;
  font-style: normal;
  margin: 0;
    @media ${props => props.theme.mediaQ.tablet} {
      font-size: 2.5vw;
    }
`

const SyledSpaceElement = styled.div`
  margin-top: 70px;
  margin-bottom: 40px;
  @media ${props => (props.theme.mediaQ.mobileL)} {
      margin-top: 50px;
      margin-bottom: 40px;
    };
`
const PageHeaderText = () => {

  return(
    <StyledPageHeader>
      <StyledHeaderTextArticle>
        <StyledTextLeft>LÄCKRA</StyledTextLeft>
        <StyledTextRight>KLOR</StyledTextRight>
        <StyledHeaderMessage>NAGELDESIGN FÖR DIG</StyledHeaderMessage>
      </StyledHeaderTextArticle>
      
      <HeaderBtn />

      <SyledSpaceElement />

    </StyledPageHeader>
  )
}

export default PageHeaderText;