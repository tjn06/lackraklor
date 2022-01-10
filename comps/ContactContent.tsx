import styled from 'styled-components'
import Image from 'next/image'
import Avatar from '../public/avatar_lk.png'
import LogoBlack from '../public/logo_black.svg'


const WelcomeWrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  position: relative;
`
const Welcome = styled.div`
  position: relative;
  display: grid;
  z-index: 2;
 border-top: 1px solid rgba(255,255,255, 0.2);
  padding: 5% 0% 2% 0%;
  @media ${props => (props.theme.mediaQ.mobileL)} {
    padding: 5% 0% 2% 10%;
  }
  @media ${props => props.theme.mediaQ.laptop} {
    padding: 5% 0% 2% 25%;
  }
`

const SubColumn1 = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto;
  padding-bottom: 3rem;
  > * {
      &:first-child  {
          /* padding: 0;
          margin:0; */
      }
    }
`

const SubColumn2 = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  padding-bottom: 4rem;
  > * {
        &:first-child  >  :nth-child(2) {
        padding-bottom: 3rem;
      }
  }
  > * {
        &:first-child  >  :nth-child(4) {
        padding-bottom: 3rem;
      }
  }
`

const StyledHeaderText = styled.h2`
  font-weight: 400;
  font-size: 1rem;
  color: ${props => props.theme.colors.secondaryMediumGrey};
  margin: 0;
  padding-bottom: 0.5rem;
  @media ${props => (props.theme.mediaQ.tablet)} {
    font-size: 1rem;
  }
  @media ${props => (props.theme.mediaQ.desktop)} {
    font-size: 1.2rem;
  }
`
const StyledText = styled.p`
  font-weight: 300;
  font-size: 1.2rem;
  margin: 0;
  @media ${props => (props.theme.mediaQ.tablet)} {
    font-size: 1.2rem;
  }
  @media ${props => (props.theme.mediaQ.desktop)} {
    font-size: 1.5rem;
  }
`

const ContactContent = () => {

  return(
    <WelcomeWrapper>
      <Welcome>

        <SubColumn1>
          <StyledHeaderText>ADRESS</StyledHeaderText>
          <StyledText></StyledText>
          <StyledText>Adressvägen 1</StyledText>
          <StyledText><a>GOOGLEKARTA{'>'}</a></StyledText>
        </SubColumn1>

        <SubColumn2>
          <div>
            <StyledHeaderText>TELEFON</StyledHeaderText>
            <StyledText>0705345432</StyledText>

            <StyledHeaderText>EMAIL</StyledHeaderText>
            <StyledText>läckraklor@email.com</StyledText>
          </div>
          <div>
            <StyledHeaderText>SOCIALA MEDIER</StyledHeaderText>
            <StyledText><a href="">FACEBOOK</a></StyledText>
            <StyledText><a href="">INSTAGRAM</a></StyledText>
            <StyledText><a href="">FACEBOOK</a></StyledText>
          </div>
        </SubColumn2>

      </Welcome>
      {/* <StyledImgPositionRightHand/> */}
    </WelcomeWrapper>
  )
}

export default ContactContent;