import styled from 'styled-components'

const ContactWrapper = styled.section`
  /* background-image: url("contact1.svg"); */
  background-repeat: no-repeat;
  background-position: center right;
  background-size: contain;
  display: grid;
  text-align: center;
  margin: 5rem 5% 4rem 5%;
  grid-template-columns: 5% 27px 10% 1fr;
  grid-template-rows: auto;
  grid-template-areas: 
    "headercontact headercontact headercontact headercontact"
    "subcontact subcontact subcontact subcontact"
    "contact contact contact contact";

    @media ${props => (props.theme.mediaQ.tablet)} {
      text-align: left;
      /* margin-top:7rem;
      margin-bottom:9rem; */
      margin: 9rem 0 9rem 0;
      grid-template-areas: 
        ". leftspace . headercontact"
        ". . . subcontact"
        ". . . contact";
    }
    @media ${props => (props.theme.mediaQ.laptopL)} {
      background-image: url("contact_white.svg");
    }
`
const CircleWrapper = styled.div`
  grid-area: leftspace;
  align-items: center;
  display: none;
    @media ${props => (props.theme.mediaQ.tablet)} { 
      display: flex;
    }
`
const CircleMarker = styled.span`
  height: 20px;
  width: 20px;
  background-color: white;
  border-radius: 50%;
  display: inline-block;
`
const StyledHeaderContactText = styled.h2`
  grid-area: headercontact;
  font-family: Qhytsdakx;
  font-weight: 300;
  font-size: 5rem;
  margin: 0;
  display:flex;
  text-align: center;
  justify-content: center;
  @media ${props => (props.theme.mediaQ.tablet)} {
    text-align: left;
    justify-content: flex-start;
  }
  @media ${props => (props.theme.mediaQ.laptopL)} {
    font-size: 6vw;
  }
`
const StyledSubContactText = styled.p`
  grid-area: subcontact;
  font-weight: 300;
  font-size: 1.8rem;
  color: white;
  margin: 0;
    @media ${props => (props.theme.mediaQ.laptop)} {
        max-width: 55vw;
      }
    @media ${props => (props.theme.mediaQ.laptopL)} {
      font-size: 2vw;
      max-width: 50vw;
    }
`
const StyledContactText = styled.p`
  grid-area: contact;
  font-weight: 300;
  font-size: 1.3rem;
  color: ${props => props.theme.colors.secondaryLightGrey};
  a { font-size: 0.9rem;}
  /* margin: 0; */
    @media ${props => (props.theme.mediaQ.laptop)} { max-width: 55vw; }
    @media ${props => (props.theme.mediaQ.laptopL)} {
      font-size: 1.5vw;
      max-width: 50vw;
      a { font-size: 1.1vw; }
    }
`

const ContactPresentation = () => {

  return (
    <ContactWrapper>
      <CircleWrapper>
        <CircleMarker />
      </CircleWrapper>
      <StyledHeaderContactText>KONTAKTA LÄCKRA KLOR</StyledHeaderContactText>
      <StyledSubContactText>Telefon, mail, intagram eller facebook.</StyledSubContactText>
      <StyledContactText>
        Om du har frågor angående behandling, bokning eller annat.
        Tveka inte att kontakta mig!
        Om du har frågor angående behandling, bokning eller annat.
        Tveka inte att kontakta mig!
        <br></br>
        <br></br>
        <a href="url">GÅ TILL KONTAKTSIDAN</a>
        <br></br>
        <a href="url">lackra.klor@mail.com</a>
        <br></br>
        <a href="url">Facebook</a>      
        <br></br>
        <a href="url">Instgram</a>
      </StyledContactText>
  </ContactWrapper>
  )
}

export default ContactPresentation;