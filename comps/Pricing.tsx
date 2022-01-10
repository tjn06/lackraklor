import React, { useState } from "react";
import { Link } from "react-scroll";
import styled from 'styled-components'
import {Collapse} from 'react-collapse';
import Collapsible from '../comps/Collapsible'
import ScrollContainer from "react-indiana-drag-scroll";

const StyledPriceSection = styled.section`
  /* padding-right: 3%;
  padding-left: 3%; */
`

const StyledContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  
    .current {
      text-decoration: underline;
    }
    @media ${props => (props.theme.mediaQ.tablet)} {
      flex-direction: row;
    }
`
const StyledNavContainer = styled.div`
  position: relative;
  padding: 0px;
  @media ${props => (props.theme.mediaQ.tablet)} {
    padding-left: 3%;
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

const StyledNavItems = styled.div`
  width: 800px;
  font-size: 0.8rem;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  list-style-type:none;
  padding: 1rem 0 1rem 0;
    @media ${props => (props.theme.mediaQ.tablet)} {
      flex-direction: column;
      width: 100%;
    }
`
const StyledLinkWrapper = styled.div`
`

const StyledLink = styled(Link)`
cursor: pointer;
font-size: 1rem;
font-weight: 300;
  @media ${props => (props.theme.mediaQ.tablet)} {
    font-size: 1.5rem;
  }
`

const StickyNav = styled.nav`
  position: -webkit-sticky;
  position: sticky;
  top: 25%;
  width: 100%;
  border-top: 1px solid ${props => props.theme.colors.secondaryMediumGrey};
  border-bottom: 1px solid ${props => props.theme.colors.secondaryMediumGrey};
  /* align-self: flex-start; */
  cursor: -webkit-grab; cursor: grab;
  @media ${props => (props.theme.mediaQ.tablet)} {
    border-top: unset;
    border-bottom: unset;
    width: 200px;
    cursor: unset;
  }
`


// Prices

const StyledPricesContainer = styled.div`
  width: 100%;
  padding-right: 3%;
  padding-left: 3%;
`
const StyledPriceWrapperItem = styled.div<{index : number}>`
  width: 100%;
  border-top: 1px solid ${props => props.index === 0 ? "transparent" : props.theme.colors.secondaryMediumGrey};
`

const StyledPriceInfo = styled.div`
  /* background-color: ${props => props.theme.colors.secondary}; */
  position: relative;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
  grid-gap: 0rem;
  .nomargin {
    margin: 0;
  }
`

const PriceHeader = styled.h2`
  font-family: Qhytsdakx;
  font-size: 5rem;
  margin: 0;
  font-weight: 300;
  padding-left: 0px;
    @media ${props => (props.theme.mediaQ.tablet)} {
      padding-left: 300px;
    }
`

const StyledHeaderPriceText = styled.h2`
  padding-top: 1rem;
  font-weight: 300;
  font-size: 2rem;
  
`

const StyledPriceText = styled.p`
  /* transform: rotate(-3deg);  
  -webkit-transform: rotate(-3deg);
  -moz-transform: rotate(-3deg);
  -ms-transform: rotate(-3deg);
  -o-transform: rotate(-3deg); */
  font-size: 5rem;
  color: ${props => props.theme.colors.main};
`
const StyledCollapsible = styled(Collapsible)`
`
const StyledBookingBtn = styled.div`
  letter-spacing: 5px;
  font-size: 2rem;
  font-weight: 300;
  font-family: Qwigley;
`

const priceData = [
  {
    class:"page-1",
    headerText:"NagelFörlängning nytt set - BAS",
    price:"1295",
    info:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    class:"page-2",
    headerText:"NagelFörlängning nytt set - BAS",
    price:"1295",
    info:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },  
  {
    class:"page-3",
    headerText:"NagelFörlängning nytt set - BAS",
    price:"1295",
    info:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    class:"page-4",
    headerText:"NagelFörlängning nytt set - BAS",
    price:"1295",
    info:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },  
  {
    class:"page-5",
    headerText:"NagelFörlängning nytt set - BAS",
    price:"1295",
    info:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    class:"page-6",
    headerText:"NagelFörlängning nytt set - BAS",
    price:"1295",
    info:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },  
  {
    class:"page-7",
    headerText:"NagelFörlängning nytt set - BAS",
    price:"1295",
    info:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },  
  {
    class:"page-8",
    headerText:"NagelFörlängning nytt set - BAS",
    price:"1295",
    info:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },  
  {
    class:"page-9",
    headerText:"NagelFörlängning nytt set - BAS",
    price:"1295",
    info:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  }
];

export default function Chapter() {
  return (
    <>
      <StyledPriceSection>
        {/* <div className="container"> */}
{/* 
        <PriceHeader>PRISER/BEHANDLINGAR</PriceHeader> */}
          <StyledContentWrapper>
            <StyledNavContainer>
              <RightGradient/>
              <StickyNav>
              <ScrollContainer className="scroll-container">
                <StyledNavItems>
                  <StyledLinkWrapper>
                    <StyledLink
                      activeClass="current"
                      spy={true}
                      smooth={true}
                      offset={-10}
                      duration={500}
                      to="page-1"
                    >
                      Förlängning
                    </StyledLink>
                  </StyledLinkWrapper>
                  <StyledLinkWrapper>
                    <StyledLink
                      activeClass="current"

                      spy={true}
                      smooth={true}
                      offset={-10}
                      duration={500}
                      to="page-2"
                    >
                      Färger
                    </StyledLink>
                  </StyledLinkWrapper>
                  <StyledLinkWrapper>
                    <StyledLink
                      activeClass="current"

                      spy={true}
                      smooth={true}
                      offset={-10}
                      duration={500}
                      to="page-3"
                    >
                      Slipning
                    </StyledLink>
                  </StyledLinkWrapper>
                  <StyledLinkWrapper>
                    <StyledLink
                      activeClass="current"

                      spy={true}
                      smooth={true}
                      offset={-10}
                      duration={500}
                      to="page-4"
                    >
                      Förbehandling
                    </StyledLink>
                  </StyledLinkWrapper>
                  <StyledLinkWrapper>
                    <StyledLink
                      activeClass="current"
                      spy={true}
                      smooth={true}
                      offset={-10}
                      duration={500}
                      to="page-5"
                    >
                      Paketpris
                    </StyledLink>
                  </StyledLinkWrapper>
                  <StyledLinkWrapper>
                    <StyledLink
                      activeClass="current"
                      spy={true}
                      smooth={true}
                      offset={-10}
                      duration={500}
                      to="page-6"
                    >
                      Manikyr
                    </StyledLink>
                  </StyledLinkWrapper>
                  <StyledLinkWrapper>
                    <StyledLink
                      activeClass="current"
                      spy={true}
                      smooth={true}
                      offset={-10}
                      duration={500}
                      to="page-7"
                    >
                      Enfärgad
                    </StyledLink>
                  </StyledLinkWrapper>
                  <StyledLinkWrapper>
                    <StyledLink
                      activeClass="current"
                      spy={true}
                      smooth={true}
                      offset={-10}
                      duration={500}
                      to="page-8"
                    >
                      Mönster
                    </StyledLink>
                  </StyledLinkWrapper>
                </StyledNavItems>
                </ScrollContainer>
              </StickyNav>
              
            </StyledNavContainer>


            <StyledPricesContainer>
              {priceData.map((priceItem, i) => (
                <StyledPriceWrapperItem key={i} id={priceItem.class} index={i}>
                  {/* <StyledPriceWrapperItem > */}
                    <StyledPriceInfo>
                      <StyledHeaderPriceText className="nomargin">{priceItem.headerText}</StyledHeaderPriceText>
                      <StyledPriceText className="nomargin">1295 SEK</StyledPriceText>
                      
                    </StyledPriceInfo>
                    <StyledBookingBtn className="nomargin">Boka tid{'>'}</StyledBookingBtn>
                    <StyledCollapsible open={false} header="Mer Info">
                    {priceItem.info}
                    </StyledCollapsible>
                  {/* </StyledPriceWrapperItem> */}
                </StyledPriceWrapperItem>
                ))}
            </StyledPricesContainer>
            {/* <StyledPrices>
              <PriceHeader>PRISER</PriceHeader>
              <div id="page-1">
                <StyledPriceWrapper>
                  <StyledPriceInfo>
                    <p className="nomargin">NagelFörlängning nytt set - BAS</p>
                    <StyledPriceText className="nomargin">1295/1095/895/795 SEK</StyledPriceText>
                  </StyledPriceInfo>
                  <div>&#11183;</div>
                </StyledPriceWrapper>
                  <p>
                    On her way she met a copy. The copy warned the Little Blind
                    Text, that where it came from it would have been rewritten a
                    thousand times and everything that was left from its origin
                    would be the word "and" and the Little Blind Text should turn
                    around and return to its own, safe country. But nothing the
                    copy said could convince her and so it didn’t take long until
                    a few insidious Copy Writers ambushed her, made her drunk with
                    Longe and Parole and dragged her into their agency, where they
                    abused her for their.
                  </p>
              </div>

              <div id="page-2" className="page bg-light two">
                <h2 className="heading">Copyright</h2>
                <p>
                  On her way she met a copy. The copy warned the Little Blind
                  Text, that where it came from it would have been rewritten a
                  thousand times and everything that was left from its origin
                  would be the word "and" and the Little Blind Text should turn
                  around and return to its own, safe country. But nothing the
                  copy said could convince her and so it didn’t take long until
                  a few insidious Copy Writers ambushed her, made her drunk with
                  Longe and Parole and dragged her into their agency, where they
                  abused her for their.
                </p>
              </div>
              <div id="page-3" className="page bg-light three">
                <h2 className="heading">Table of Contents</h2>
                <p>
                  On her way she met a copy. The copy warned the Little Blind
                  Text, that where it came from it would have been rewritten a
                  thousand times and everything that was left from its origin
                  would be the word "and" and the Little Blind Text should turn
                  around and return to its own, safe country. But nothing the
                  copy said could convince her and so it didn’t take long until
                  a few insidious Copy Writers ambushed her, made her drunk with
                  Longe and Parole and dragged her into their agency, where they
                  abused her for their.
                </p>
              </div>
              <div id="page-4" className="page bg-light four">
                <h2 className="heading">Dedication</h2>
                <p>
                  On her way she met a copy. The copy warned the Little Blind
                  Text, that where it came from it would have been rewritten a
                  thousand times and everything that was left from its origin
                  would be the word "and" and the Little Blind Text should turn
                  around and return to its own, safe country. But nothing the
                  copy said could convince her and so it didn’t take long until
                  a few insidious Copy Writers ambushed her, made her drunk with
                  Longe and Parole and dragged her into their agency, where they
                  abused her for their.
                </p>
              </div>
              <div id="page-5" className="page bg-light five">
                <h2 className="heading">Foreword</h2>
                <p>
                  On her way she met a copy. The copy warned the Little Blind
                  Text, that where it came from it would have been rewritten a
                  thousand times and everything that was left from its origin
                  would be the word "and" and the Little Blind Text should turn
                  around and return to its own, safe country. But nothing the
                  copy said could convince her and so it didn’t take long until
                  a few insidious Copy Writers ambushed her, made her drunk with
                  Longe and Parole and dragged her into their agency, where they
                  abused her for their.
                </p>
              </div>
              <div id="page-6" className="page bg-light six">
                <h2 className="heading">Prologue</h2>
                <p>
                  On her way she met a copy. The copy warned the Little Blind
                  Text, that where it came from it would have been rewritten a
                  thousand times and everything that was left from its origin
                  would be the word "and" and the Little Blind Text should turn
                  around and return to its own, safe country. But nothing the
                  copy said could convince her and so it didn’t take long until
                  a few insidious Copy Writers ambushed her, made her drunk with
                  Longe and Parole and dragged her into their agency, where they
                  abused her for their.
                </p>
              </div>
              <div id="page-7" className="page bg-light seven">
                <h2 className="heading">Epilogue</h2>
                <p>
                  On her way she met a copy. The copy warned the Little Blind
                  Text, that where it came from it would have been rewritten a
                  thousand times and everything that was left from its origin
                  would be the word "and" and the Little Blind Text should turn
                  around and return to its own, safe country. But nothing the
                  copy said could convince her and so it didn’t take long until
                  a few insidious Copy Writers ambushed her, made her drunk with
                  Longe and Parole and dragged her into their agency, where they
                  abused her for their.
                </p>
              </div>
              <div id="page-8" className="page bg-light eight">
                <h2 className="heading">Epigraph</h2>
                <p>
                  On her way she met a copy. The copy warned the Little Blind
                  Text, that where it came from it would have been rewritten a
                  thousand times and everything that was left from its origin
                  would be the word "and" and the Little Blind Text should turn
                  around and return to its own, safe country. But nothing the
                  copy said could convince her and so it didn’t take long until
                  a few insidious Copy Writers ambushed her, made her drunk with
                  Longe and Parole and dragged her into their agency, where they
                  abused her for their.
                </p>
              </div>
            </StyledPrices> */}

          </StyledContentWrapper>
        {/* </div> */}
      </StyledPriceSection>
      
    </>
  );
}























// import React, { useState } from "react";
// import { Link } from "react-scroll";
// import styled from 'styled-components'
// import Collapsible from '../comps/Collapsible'
// import ScrollContainer from 'react-indiana-drag-scroll'




// const StyledPriceSection = styled.section`
//   padding-right: 3%;
//   padding-left: 3%;
// `

// const Row = styled.div`
//   display: flex;
//   flex-direction: column;
//   .current {
//     text-decoration: underline;
//   }

// `

// const StyledStickyNavContainer = styled.div`

//     /* overflow-x: scroll;  */
//     white-space: nowrap;
//     /* -ms-overflow-style: none;
//     scrollbar-width: none;
//     &::-webkit-scrollbar {
//     display: none;
//     } */
// `

// const StyledUl = styled.ul`
//   width: 800px;
//   font-size: 0.8rem;
//   display: flex;
//   justify-content:space-around;
//   list-style-type:none;
    
// `

// const StickyNav = styled.nav`
//   position: -webkit-sticky;
//   position: sticky;
//   top: 25%; 
//   /* width: 200px;
// `


// const PriceHeader = styled.h2`
//   font-family: Qhytsdakx;
//   font-size: 5rem;
//   margin: 0;
//   font-weight: 300;
// `

// const StyledPricesContainer = styled.div`
//   width: 100%;
//   padding-left: 8%;
// `

// const StyledPriceWrapperItem = styled.div`
//   width: 100%;
//   border-top: 1px solid ${props => props.theme.colors.secondaryLightGrey};
//   padding: 3rem 0 3rem 0;
//   /* height:600px; */
// `
// const StyledPriceInfo = styled.div`
//   /* background-color: ${props => props.theme.colors.secondary}; */
//   position: relative;
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(420px, 1fr));
//   grid-gap: 0rem;
//   .nomargin {
//     margin: 0;
//   }
// `
// const StyledHeaderText = styled.h2`
//   font-weight: 300;
//   font-size: 2rem;
// `

// const StyledPriceText = styled.p`
//   font-size: 5rem;
//   color: ${props => props.theme.colors.main};
// `


// const data = [
//   {
//     class:"page-1",
//     headerText:"Två riktigt goa gubbar som är lätta att ha och göra med, men även grymma på kod",
//     price:"Två riktigt goa gubbar som är lätta att ha och göra med, men även grymma på kod",
//     info:"fmimfiffopfl,pff,pf,pf"
//   },
//   {
//     class:"page-2",
//     headerText:"Två riktigt goa gubbar som är lätta att ha och göra med, men även grymma på kod",
//     price:"Två riktigt goa gubbar som är lätta att ha och göra med, men även grymma på kod",
//     info:"fmimfiffopfl,pff,pf,pf"
//   },  
//   {
//     class:"page-3",
//     headerText:"Två riktigt goa gubbar som är lätta att ha och göra med, men även grymma på kod",
//     price:"Två riktigt goa gubbar som är lätta att ha och göra med, men även grymma på kod",
//     info:"fmimfiffopfl,pff,pf,pf"
//   },
//   {
//     class:"page-4",
//     headerText:"Två riktigt goa gubbar som är lätta att ha och göra med, men även grymma på kod",
//     price:"Två riktigt goa gubbar som är lätta att ha och göra med, men även grymma på kod",
//     info:"fmimfiffopfl,pff,pf,pf"
//   },  
//   {
//     class:"page-5",
//     headerText:"Två riktigt goa gubbar som är lätta att ha och göra med, men även grymma på kod",
//     price:"Två riktigt goa gubbar som är lätta att ha och göra med, men även grymma på kod",
//     info:"fmimfiffopfl,pff,pf,pf"
//   },
//   {
//     class:"page-6",
//     headerText:"Två riktigt goa gubbar som är lätta att ha och göra med, men även grymma på kod",
//     price:"Två riktigt goa gubbar som är lätta att ha och göra med, men även grymma på kod",
//     info:"fmimfiffopfl,pff,pf,pf"
//   },  
//   {
//     class:"page-7",
//     headerText:"Två riktigt goa gubbar som är lätta att ha och göra med, men även grymma på kod",
//     price:"Två riktigt goa gubbar som är lätta att ha och göra med, men även grymma på kod",
//     info:"fmimfiffopfl,pff,pf,pf"
//   }
// ];

// export default function Chapter() {
//   return (
//     <>
//       <StyledPriceSection>
//         {/* <div className="container"> */}


//           <Row>
//           {/* <ScrollContainer className="scroll-container"> */}
//             <StyledStickyNavContainer>
//               <StickyNav>
//                 <StyledUl>
//                   <li>
//                     <Link
//                       activeClass="current"
//                       spy={true}
//                       smooth={true}
//                       offset={50}
//                       duration={500}
//                       to="page-1"
//                     >
//                       Title page
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       activeClass="current"

//                       spy={true}
//                       smooth={true}
//                       offset={50}
//                       duration={500}
//                       to="page-2"
//                     >
//                       Copyright
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       activeClass="current"

//                       spy={true}
//                       smooth={true}
//                       offset={50}
//                       duration={500}
//                       to="page-3"
//                     >
//                       Table of contents
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       activeClass="current"

//                       spy={true}
//                       smooth={true}
//                       offset={50}
//                       duration={500}
//                       to="page-4"
//                     >
//                       Dedication
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       activeClass="current"
//                       spy={true}
//                       smooth={true}
//                       offset={0}
//                       duration={500}
//                       to="page-5"
//                     >
//                       Foreword
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       activeClass="current"
//                       spy={true}
//                       smooth={true}
//                       offset={0}
//                       duration={500}
//                       to="page-6"
//                     >
//                       Prologue
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       activeClass="current"
//                       spy={true}
//                       smooth={true}
//                       offset={50}
//                       duration={500}
//                       to="page-7"
//                     >
//                       Epilogue
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       activeClass="current"
//                       spy={true}
//                       smooth={true}
//                       offset={50}
//                       duration={500}
//                       to="page-8"
//                     >
//                       Epigraph
//                     </Link>
//                   </li>
//                 </StyledUl>
//               </StickyNav>
//             </StyledStickyNavContainer>
//             {/* </ScrollContainer> */}


//             <StyledPricesContainer>
              
//               <PriceHeader>PRISER</PriceHeader>

//               {data.map((data, i) => (
//                 <div key= {i} id={data.class}>
//                   <StyledPriceWrapperItem>
//                     <StyledPriceInfo>
//                       <StyledHeaderText className="nomargin">NagelFörlängning nytt set - BAS</StyledHeaderText>
//                       <StyledPriceText className="nomargin">1295 SEK</StyledPriceText>
//                     </StyledPriceInfo>
//                     <Collapsible open={false} header="Mer Info">
//                     Consectetur adipiscing elit pellentesque habitant morbi tristique.
//                     Pulvinar pellentesque habitant morbi tristique. Vel quam elementum
//                     pulvinar etiam. Pulvinar pellentesque habitant morbi tristique senectus
//                     </Collapsible>
//                   </StyledPriceWrapperItem>
//                 </div>
//                 ))};
//             </StyledPricesContainer>

//           </Row>
//         {/* </div> */}
//       </StyledPriceSection>
      
//     </>
//   );
// }