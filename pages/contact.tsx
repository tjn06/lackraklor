import styled from 'styled-components'
import PageHeaderMultipleWords from '../comps/PageHeaderMultipleWords';
import ViewPortTopContent from '../comps/ViewPortTopContent';
import Image from 'next/image'
import ContactPic from '../public/contact_pic.jpg'
import AltSection from '../comps/AltSection'
import ContactPresentation from '../comps/ContactPresentation'
import ContactContent from '../comps/ContactContent'
import BookingBanner from '../comps/BookingBanner'


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
      
      <BookingBanner topBoarder={true} bottomBoarder={true}/>
    </Container>
  )
}

export default Contact;