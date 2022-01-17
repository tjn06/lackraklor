import styled from 'styled-components'
import Image from 'next/image'
import Avatar from '../public/pichures/avatar_lk.png'
import LogoBlack from '../public/logo_black.svg'

const WelcomeWrapper = styled.section`
  /* background: radial-gradient(ellipse at top, #91d8df, #b1274e),radial-gradient(ellipse at bottom, #91d8df, #b1274e); */
`
const Welcome = styled.div`
  background-color: ${props => (props.theme.colors.main)};
  /* background: radial-gradient(ellipse at top, #b1274e, transparent),radial-gradient(ellipse at bottom, #91d8df, transparent); */
  padding: 4rem 0 6rem 0;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  z-index: 1;
  border-bottom: 1px solid rgba(255,255,255, 0.2);
  border-radius: 350px 350px 0 0;
    @media ${props => (props.theme.mediaQ.tablet)} {
      border-radius: 5px 5px 0 0;
    }
`
const WelcomeContentMaxWidth = styled.article`
  z-index: 2;
  text-align: center;
  max-width: 600px;
  padding: 0 1% 0 1%;

`

const StyledWelcomText= styled.p`
  font-size: 1.2rem;
  font-weight: 200;
`
const StyledWelcomeHeader = styled.h2`
  font-family: Qhytsdakx;
  font-size: 5rem;
  font-weight: 300;
  margin: 0;
  /* @media ${props => (props.theme.mediaQ.tablet)} {
    font-size: 5rem;
  } */
    @media ${props => (props.theme.mediaQ.laptopL)} {
      font-size: 6rem;
    }
    @media ${props => (props.theme.mediaQ.desktop)} {
      font-size: 7rem;
    }
`

const PersonPresentation = styled.section`
  border-radius:  0 0 5px 5px;
  background: radial-gradient(ellipse at top, #e7a6b9, #91d8df),
  radial-gradient(ellipse at bottom, #b1274e, #91d8df);
  position: relative;
  display: grid;
  grid-template-rows: auto auto;
    @media ${props => (props.theme.mediaQ.tablet)} {
      grid-template-columns: 60% 1fr;
      grid-template-rows: auto;
    }
`
const StyledImgPositionLeftHand = styled.div`
  position: absolute;
  top: 30px; left: -15%;
  background-image: url("hand_glace.svg");
  width: 600px;
  height: 600px;
  background-repeat: no-repeat;
  background-position: top center;
  background-size: contain;
  opacity: 0.1;
    @media ${props => (props.theme.mediaQ.tablet)} {
      opacity: 0.4;
    }
    @media ${props => (props.theme.mediaQ.laptop)} {
      opacity: 0.9;
      top: 75px; right: -20%;
    }
    @media ${props => (props.theme.mediaQ.laptopL)} {
      opacity: 0.9;
      top: 30px; left: -20%;
    }
`
const StyledImgPositionRightHand = styled.div`
  position: absolute;
  top: 75px; right: -15%;
  background-image: url("hand_glace_right.svg");
  width: 600px;
  height: 600px;
  background-repeat: no-repeat;
  background-position: top center;
  background-size: contain;
  opacity: 0.3;
    @media ${props => (props.theme.mediaQ.tablet)} {
      opacity: 0.4;
    }
    @media ${props => (props.theme.mediaQ.laptop)} {
      opacity: 0.9;
      top: 75px; right: -20%;
    }
    @media ${props => (props.theme.mediaQ.laptopL)} {
      opacity: 0.9;
      top: -35px; right: -20%;
    }
`

const StyledAvatarImagePosition = styled.div`
  z-index: 3;
  margin-top: 2rem;
  display: flex;
  justify-content: center;
`

const StyledNamePosition = styled.article`
  z-index: 2;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  padding-bottom: 1rem;
    @media ${props => (props.theme.mediaQ.tablet)} {
      align-items: flex-start;
      justify-content: center;
      flex-direction: column;
      margin-top: 160px;
    }
`
const StyledName = styled.h2`
  margin:0;
  letter-spacing: 2px;
  padding-left: 6px;
  font-size: 1.5rem;
  font-weight: 400;
  color: ${props => (props.theme.colors.primaryDarkGrey)};
    @media ${props => props.theme.mediaQ.tablet} {
      padding-left: 10px
    }
`
const StyledMessage = styled.div`
  margin: 0;
  letter-spacing: 2px;
  padding: 0.2rem 0 0.2rem 0;
  padding-left: 6px;
  font-size: 1.3rem;
  color: ${props => (props.theme.colors.main)};
  @media ${props => props.theme.mediaQ.tablet} {
      padding-left: 10px
    }
`

const VerticalContainers = () => {

  return(
    <WelcomeWrapper>
      <Welcome>
        <WelcomeContentMaxWidth>
          <StyledWelcomeHeader>
            VÄLKOMMEN
          </StyledWelcomeHeader>
            <StyledWelcomText>
              ”Koppla av och låt mig vårda dina naglar i en lugn och avslappnad miljö 
              där bara du står i centrum. 
              Jag är utbildad nagelterapeut och arbetar med kvalitetsmärket CND
              ch som är globalt ledande inom hand, fot- och nagelvård och
              har funnits i mer än 40 år. På 
              Nagelstudion försöker vi hitta det som passar dig bäst utifrån dina 
              vi älskar design och hjälper 
              dig gärna med allt från en classic look till att dekorera 
              upp dina naglar till festen eller bröllopet.”
              diplomerad nagelterapeut i både akryl och gel.
            </StyledWelcomText>
        </WelcomeContentMaxWidth>
        <StyledImgPositionLeftHand/>
      </Welcome>

      <PersonPresentation>
        <StyledAvatarImagePosition>
          <Image 
          src={Avatar}
          alt="avatar"
          // layout="fixed"
          />
        </StyledAvatarImagePosition>

        <StyledNamePosition>            
          <Image 
          src={LogoBlack}
          width={80} height={110} alt="Logo" 

          // layout="fixed"
          />
          <StyledName>Louise Karlsson</StyledName>
          <StyledMessage>DIN NAGELDESIGNER</StyledMessage>
        </StyledNamePosition>

        <StyledImgPositionRightHand />

      </PersonPresentation>

    </WelcomeWrapper>
  )
}

export default VerticalContainers;