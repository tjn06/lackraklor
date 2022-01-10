import styled from 'styled-components'
import Head from 'next/head'
import PageHeaderMultipleWords from '../comps/PageHeaderMultipleWords'
import Pricing from '../comps/Pricing'
import ViewPortTopContent from '../comps/ViewPortTopContent'
import BookingBanner from '../comps/BookingBanner'

const HorizontalLine = styled.div`
  margin: 0 2% 0 2%;
  border-bottom: 1px solid ${props => props.theme.colors.secondaryMediumGrey} ;
`
const Prices = () => {

  return (
    <>
      <ViewPortTopContent>
        <PageHeaderMultipleWords firstWord="PRISER" secondWord="BEHANDLINGAR"/>
      </ViewPortTopContent>
      {/* <HorizontalLine/> */}
      <Pricing/>
      <BookingBanner topBoarder={true} bottomBoarder={true}/>
    </>
  )
}

export default Prices;