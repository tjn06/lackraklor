import styled from 'styled-components'
import PageHeaderMultipleWords from '../comps/PageHeaderMultipleWords';
import ViewPortTopContent from '../comps/ViewPortTopContent';
import ContactPresentation from '../comps/ContactPresentation'
import ContactContent from '../comps/ContactContent'
import BookingBanner from '../comps/BookingBanner'
// import Map from '../comps/Map'
import { useMemo } from 'react';
import dynamic from 'next/dynamic';


const Container = styled.div`
overflow: hidden;
`

const StyledMaxWidth = styled.section`
  width:96%;
  max-width:100%;
  margin:0 auto;
  margin-bottom: 100px;
  @media ${props => (props.theme.mediaQ.mobileL)} {
    max-width:80%;
  }
  @media ${props => (props.theme.mediaQ.desktop)} {
    max-width:75%;
  }
`


const Contact = () => {

  const Map = useMemo(() => dynamic(
    () => import("../comps/Map"),
    { 
      loading: () => <p>A map is loading</p>,
      ssr: false
    }
  ), [])

  return (
    <Container>
      <ViewPortTopContent>
        <PageHeaderMultipleWords firstWord="KONTAKTA" secondWord="OSS"/>
      </ViewPortTopContent>
      {/* <ContactPresentation/> */}
      <StyledMaxWidth>
        <ContactContent/>
      </StyledMaxWidth>
      {/* <AltSection topBoarder={true} bottomBoarder={true}/> */}
      
      <BookingBanner topBoarder={true} bottomBoarder={false}/>
      <Map width={"100%"} height={"500px"} border={"0px"} padding={"0px"}/>
    </Container>
  )
}

export default Contact;