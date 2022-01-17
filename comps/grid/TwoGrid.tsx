import styled from 'styled-components'
import Image from 'next/image'

import { gridItems } from '../../content/data'

const StyledTwoGrid = styled.section`
  display: grid;
  padding-bottom:2rem;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto;
  margin: 0 2% 0 2%;
  /* border-top: 1px solid ${props => props.theme.colors.secondaryMediumGrey}; */
  border-bottom: unset;
    /* grid-gap: 3rem; */
  @media ${props => (props.theme.mediaQ.tablet)} {
    padding-top:2rem;
    padding-bottom:2rem;
    margin: 0 3% 0rem 3%;
    grid-template-columns: 1fr;
    grid-template-columns: 1fr 1fr;
    border-bottom: 1px solid ${props => props.theme.colors.secondaryMediumGrey};
    /* grid-template-rows: auto auto; */
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
  text-align: center;
  padding-top:2rem;
  padding-bottom:2rem;
  border-bottom: 1px solid ${props => props.theme.colors.secondaryMediumGrey};
  /* justify-content: center; */
    @media ${props => (props.theme.mediaQ.mobileL)} {
      padding-right: 3%;
      padding-left: 3%;
    }
    @media ${props => (props.theme.mediaQ.tablet)} {
      border-bottom: unset;
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
    @media ${props => (props.theme.mediaQ.tablet)} {
      font-size: 1.3rem;
    }
    @media ${props => (props.theme.mediaQ.laptop)} { max-width: 55vw; }
    @media ${props => (props.theme.mediaQ.laptopL)} {
      font-size: 1.5rem;
      max-width: 50vw;
    }
    @media ${props => (props.theme.mediaQ.desktop)} {
      font-size: 1.5rem;
    }
`

const StyledLink = styled.a`
  font-size: 1rem;
  font-weight: 300;
  padding-bottom: 1rem;

    @media ${props => (props.theme.mediaQ.tablet)} {
      font-size: 1.3rem;
    }
    @media ${props => (props.theme.mediaQ.laptopL)} {
      padding-bottom: 2rem;
      font-size: 1.5rem;
    }

    @media ${props => (props.theme.mediaQ.desktop)} {
      font-size: 1.2rem;
    }
`

interface TwoGridProps {
  arrayItemStart: number;
  arrayItemStop: number;
}

const TwoGrid = ({arrayItemStart, arrayItemStop}: TwoGridProps) => {

  return(
    <StyledTwoGrid>

    {gridItems.slice(arrayItemStart, arrayItemStop).map((item, i) => 
      <StyledCenterGridItem key={i} className={item.scrollNavClass}>
        <Image src={item.imgSrcIcon} alt={item.altIcon} width={40} height={40}/>
        <StyledHeaderGridItemText>
          {item.header}
        </StyledHeaderGridItemText>
        <StyledSubGridWrapper>
          <StyledSubGridItemText>
            {item.subHeader}
          </StyledSubGridItemText>
        </StyledSubGridWrapper>
        <StyledTextGridWrapper>
          <StyledGridItemText>
          {item.text}
          </StyledGridItemText>
        </StyledTextGridWrapper>
        <StyledLink href={item.link}>
        {item.linkText}
        </StyledLink>
      </StyledCenterGridItem>
      )}

      {/* <StyledCenterGridItem className="booking">
        <Image src={Booking} alt="Boka"/>
        <StyledHeaderGridItemText>
          BOKA TID
        </StyledHeaderGridItemText>
        <StyledSubGridWrapper>
          <StyledSubGridItemText>
            BOKA VIA BOKADIREKT.COM
          </StyledSubGridItemText>
        </StyledSubGridWrapper>
        <StyledTextGridWrapper>
          <StyledGridItemText>
            Du har även möjligheten att boka direkt
            via mail eller telefon om du inte vill boka
            via bokadirekt.
          </StyledGridItemText>
        </StyledTextGridWrapper>
        <StyledLink href="url">
          GÅ TILL BOOKADREKT.COM
        </StyledLink>
      </StyledCenterGridItem>

      <StyledCenterGridItem className="ourprices">
      <Image src={PriceTag} alt="Pris"/>
        <StyledHeaderGridItemText>
          VÅRA PRISER
        </StyledHeaderGridItemText>
        <StyledSubGridWrapper>
          <StyledSubGridItemText>
            FLERA PRISALTRNATIV
          </StyledSubGridItemText>
        </StyledSubGridWrapper>
        <StyledTextGridWrapper>
          <StyledGridItemText>
            Vi erbjuer en uppsjö av olika nagelbehanddlingar,
            se vår prislista och hitta något som passar dig.
          </StyledGridItemText>
        </StyledTextGridWrapper>
        <StyledLink href="url">
          SE VÅRA PRISER
        </StyledLink>
      </StyledCenterGridItem> */}
    
  </StyledTwoGrid>
  )
}

export default TwoGrid;



// import styled from 'styled-components'
// import Image from 'next/image'

// import { data } from '../../content/data'
// import { data1 } from '../../content/data'

// import Booking from '../../public/icons/booking.png'
// import PriceTag from '../../public/icons/price_tag.png'
// import { useState } from 'react'

// const StyledTwoGrid = styled.section`
//   display: grid;
//   padding-bottom:2rem;
//   grid-template-columns: 1fr;
//   grid-template-rows: auto auto;
//   margin: 0 2% 0 2%;
//   /* border-top: 1px solid ${props => props.theme.colors.secondaryMediumGrey}; */
//   border-bottom: unset;
//     /* grid-gap: 3rem; */
//   @media ${props => (props.theme.mediaQ.tablet)} {
//     padding-top:2rem;
//     padding-bottom:2rem;
//     margin: 0 3% 0rem 3%;
//     grid-template-columns: 1fr;
//     grid-template-columns: 1fr 1fr;
//     border-bottom: 1px solid ${props => props.theme.colors.secondaryMediumGrey};
//     /* grid-template-rows: auto auto; */
//       > * {
//         &:first-child {
//           border-right: 1px solid ${props => props.theme.colors.secondaryMediumGrey};
//         }
//       }
//   }
// `
// const StyledCenterGridItem = styled.article`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   text-align: center;
//   padding-top:2rem;
//   padding-bottom:2rem;
//   border-bottom: 1px solid ${props => props.theme.colors.secondaryMediumGrey};
//   /* justify-content: center; */
//     @media ${props => (props.theme.mediaQ.mobileL)} {
//       padding-right: 3%;
//       padding-left: 3%;
//     }
//     @media ${props => (props.theme.mediaQ.tablet)} {
//       border-bottom: unset;
//     }
//     @media ${props => (props.theme.mediaQ.laptop)} {
//       margin: 0;
//       /* padding: 3rem; */
//     }
// `
// const StyledHeaderGridItemText = styled.h2`
//   font-family: Qhytsdakx;
//   font-weight: 300;
//   font-size: 4rem;
//   margin: 0;
//   @media ${props => (props.theme.mediaQ.tablet)} {
//     font-size: 5rem;
//   }
//   @media ${props => (props.theme.mediaQ.laptopL)} {
//     font-size: 6rem;
//   }
//   @media ${props => (props.theme.mediaQ.desktop)} {
//     font-size: 6rem;
//   }
// `

// const StyledSubGridWrapper = styled.div`
//   max-width: 500px;
//   height: unset;
//   @media ${props => (props.theme.mediaQ.tablet)} {
//     height: 50px;
//   }
//   /* padding-bottom: 5rem; */
// `

// const StyledSubGridItemText = styled.p`
//   font-weight: 300;
//   font-size: 1.5rem;
//   margin: 0;
//     /* @media ${props => (props.theme.mediaQ.tablet)} {
//       font-size: 1.5rem;
//     }
//     @media ${props => (props.theme.mediaQ.laptop)} {
//       max-width: 55vw;
//     }
//     @media ${props => (props.theme.mediaQ.laptopL)} {
//       font-size: 1.8rem;
//       max-width: 50vw;
//     }
//     @media ${props => (props.theme.mediaQ.desktop)} {
//       font-size: 2rem;
//     } */
// `

// const StyledTextGridWrapper = styled.div`
//   display:flex;
//   /* align-content: center; */
//   max-width: 350px;
//   height: unset;
//   @media ${props => (props.theme.mediaQ.tablet)} {
//     height: 140px
//   }
//   @media ${props => (props.theme.mediaQ.laptop)} {
//     height: 140px
//   }
//   @media ${props => (props.theme.mediaQ.laptopL)} {
//     height: 170px
//   }
//   @media ${props => (props.theme.mediaQ.desktop)} {
//     height: 200px
//   }
// `

// const StyledGridItemText = styled.p`
//   font-weight: 300;
//   font-size: 1rem;
//   color: ${props => props.theme.colors.secondaryLightGrey};
//     @media ${props => (props.theme.mediaQ.tablet)} {
//       font-size: 1.3rem;
//     }
//     @media ${props => (props.theme.mediaQ.laptop)} { max-width: 55vw; }
//     @media ${props => (props.theme.mediaQ.laptopL)} {
//       font-size: 1.5rem;
//       max-width: 50vw;
//     }
//     @media ${props => (props.theme.mediaQ.desktop)} {
//       font-size: 1.5rem;
//     }
// `

// const StyledLink = styled.a`
//   font-size: 1rem;
//   font-weight: 300;
//   padding-bottom: 1rem;

//     @media ${props => (props.theme.mediaQ.tablet)} {
//       font-size: 1.3rem;
//     }
//     @media ${props => (props.theme.mediaQ.laptopL)} {
//       padding-bottom: 2rem;
//       font-size: 1.5rem;
//     }

//     @media ${props => (props.theme.mediaQ.desktop)} {
//       font-size: 1.2rem;
//     }
// `



// const TwoGrid = () => {



//   return(
//     <StyledTwoGrid>


//       {data1.map((item, i) => 
//       <StyledCenterGridItem key={i} className={item.scrollNavClass}>
//         <Image src={item.imgSrc} alt="Boka" width={40} height={40}/>
//         <StyledHeaderGridItemText>
//           {item.header}
//         </StyledHeaderGridItemText>
//         <StyledSubGridWrapper>
//           <StyledSubGridItemText>
//             {item.subHeader}
//           </StyledSubGridItemText>
//         </StyledSubGridWrapper>
//         <StyledTextGridWrapper>
//           <StyledGridItemText>
//           {item.text}
//           </StyledGridItemText>
//         </StyledTextGridWrapper>
//         <StyledLink href={item.link}>
//         {item.linkText}
//         </StyledLink>
//       </StyledCenterGridItem>
//       )}

    
//   </StyledTwoGrid>
//   )
// }

// export default TwoGrid;