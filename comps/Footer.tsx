import styled from 'styled-components';

import Image from 'next/image'
import Logo from '../public/logo/logo_white.svg'
import ArrowUp from '../public/icons/arrow_up.svg'
import UpArrow from '../comps/UpIcon'


const StyledFooter = styled.footer `
  padding: 3rem 3% 2rem 3%;
  grid-template-columns: 0.3fr 1fr 0.5fr 0.7fr 0.3fr;
  grid-template-rows: auto auto auto auto;
  background: tranparent;
  display: grid;
  background-image: linear-gradient(to right,rgba(0,0,0, 0.0), rgba(255,255,255, 0.1), rgba(255,255,255, 0.1));
  /* margin-top: 2rem; */
  font-size: 1rem;
  font-weight: 300;
  row-gap: 2rem;
  grid-template-areas: 
    "message message message message message"
    "navsocial navsocial navsocial navsocial navsocial"
    "phonetop phonetop phonetop phonetop phonetop"
    "logo logo logo logo logo";


    @media ${props => (props.theme.mediaQ.mobileL)} {
      grid-template-rows: auto auto;
      /* margin-top: 4rem; */
      grid-template-areas: 
        "message message navsocial navsocial navsocial"
        "logo logo phonetop phonetop phonetop";
    }

    @media ${props => (props.theme.mediaQ.tablet)} {
      padding: 6rem 0 4rem 0;
      margin-top: 0rem;
      background-image: linear-gradient(to right,rgba(0,0,0, 0.0), rgba(255,255,255, 0.05), rgba(255,255,255, 0.08));
      row-gap: 5rem;
      font-size: 1.2rem;
      /* grid-template-rows: [row1-start] auto [row1-end row2-start] 100px [row2-end row3-start] auto [row3-end]; */
      grid-template-areas: 
        ". message navsocial navsocial ."
        ". logo phonetop phonetop .";
    }
`

const ItemAMess = styled.div `
  grid-area: message;
  font-size: 2rem;
  font-weight: 400;
  color: ${props => props.theme.colors.secondaryMediumGrey};
  grid-template-rows: 2rem;
  @media (min-width: 480px) {
    font-size: 2rem;
  }
  @media ${props => (props.theme.mediaQ.tablet)} {
    font-size: 3rem;
  }
`
const ItemBNav  = styled.div`
  grid-area: navsocial;
  padding-top: 15px;
  display: grid;
  grid-template-columns: auto auto;
`
const ItemCLogo = styled.div `
  grid-area: logo;
`
const ItemDPhoneTop = styled.div `
  grid-area: phonetop;
  display: grid;
  grid-template-columns: auto auto;
`

const ItemBNavContent = styled.div`
    display: grid;
    grid-template-rows: 2rem 2rem 2rem 2rem ;
    justify-self: start;
    @media ${props => (props.theme.mediaQ.mobileL)} {
      justify-self: end;
    }
    
`
const ItemBSocialContent = styled.div`
    display: grid;
    grid-template-rows: 2rem 2rem 2rem 2rem ;
    justify-self: start;
    @media ${props => (props.theme.mediaQ.mobileL)} {
      justify-self: end;
    }
`
const ItemDPhoneContent = styled.div`
    display: grid;
    grid-template-rows: 2rem;
    justify-self: start;
    @media ${props => (props.theme.mediaQ.mobileL)} {
      justify-self: end;
    }
    
`
const ItemDTopContent = styled.div`
    display: grid;
    grid-template-rows: 2rem;
        justify-self: start;
    @media ${props => (props.theme.mediaQ.mobileL)} {
      justify-self: end;
    }
`

const WhiteText = styled.span`
  color: white;
`

const Footer = () => {

  return ( 
    <StyledFooter>
      
      <ItemAMess>Vi bits inte. <WhiteText>Kontakta</WhiteText> oss och få dina naglar gjorda så snabbt som möjligt</ItemAMess>

      <ItemBNav>
        <ItemBNavContent><a>Hem</a><a>Priser</a><a>Portfolio</a><a>Om mig</a><a>Kontakt</a></ItemBNavContent>
        <ItemBSocialContent><a>FACEBOOK</a><a>INSTAGRAM</a></ItemBSocialContent>
      </ItemBNav>

      <ItemCLogo><Image src={Logo} alt="logo" /></ItemCLogo>

      <ItemDPhoneTop>
        <ItemDPhoneContent><a>TEL: 0703938743</a></ItemDPhoneContent>
        <ItemDTopContent><UpArrow/></ItemDTopContent>
       
      </ItemDPhoneTop>

    </StyledFooter>
  );
}

export default Footer;



