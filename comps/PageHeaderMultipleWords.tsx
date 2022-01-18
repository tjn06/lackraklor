import styled from 'styled-components'
import HeaderBtn from './buttons/HeaderBtn'

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
  justify-content: space-evenly;
  width: 100%;
  height: 100%;
`

const StyledHeaderTextArticle = styled.article`
display: flex;
flex-direction: column;
/* height: 65vh; */
`

const StyledTextTop = styled.span`
  font-family: Qhytsdakx;
  font-size: 33.5vw;
  line-height: 33.5vw;
  color: ${props => (props.theme.colors.main)};
  margin: 0;
    @media ${props => props.theme.mediaQ.tablet} {
      font-size: 25.5vw;
      line-height: 25.5vw;
    }
`
const StyledTextBottom = styled.span`
  font-size: 25.5vw;
  line-height: 25.5vw;
  font-family: Qhytsdakx;
  color: ${props => (props.theme.colors.secondary)};
  margin: 0;
  height: 10vw;
  @media ${props => props.theme.mediaQ.mobileL} {
      font-size: 18.5vw;
      line-height: -0;
    }
    @media ${props => props.theme.mediaQ.tablet} {
      font-size: 18.5vw;
      line-height: -0;
    }
`

// const StyledTextCenter = styled.span`
//   font-size: 15.5vw;
//   font-family: Qhytsdakx;
//   color: white;
//   margin: 0;
//   line-height: 15.5vw;
//   height: 10vw;
// `


const StyledHeaderMessage = styled.h2`
  margin: 0;
  font-size: 2.5vw;
  font-family: futura-pt, sans-serif;
  font-weight: 300;
  font-style: normal;
`

const SyledSpaceElement = styled.div`
  margin-top: 50px;
  margin-bottom: 40px;
  border-left: 1px solid white;
  max-height: 20px;
`


interface Props {
  firstWord: string;
  secondWord: string;
}

const PageHeaderMultipleWords: React.FC<Props> = ({firstWord, secondWord}) => {

  return(
    <StyledPageHeader>
      <StyledHeaderTextArticle>
        <StyledTextTop>{firstWord}</StyledTextTop>
        {/* <StyledTextCenter>/</StyledTextCenter> */}
        <StyledTextBottom>{secondWord}</StyledTextBottom>
      </StyledHeaderTextArticle>
      {/* <StyledHeaderMessage>BOKNING VIA BOOKDIREKT.COM</StyledHeaderMessage> */}
      {/* <HeaderBtn /> */}


        <SyledSpaceElement />

    </StyledPageHeader>
  )
}

export default PageHeaderMultipleWords;