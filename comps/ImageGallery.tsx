import styled from 'styled-components'
import Image from 'next/image'

import Hand1 from '../public/pichures/top_image_portfolio.jpg'
import Hand2 from '../public/pichures/h_2.jpg'
import Hand3 from '../public/pichures/h_3.jpg'
import Hand4 from '../public/pichures/h_4.jpg'
import Hand5 from '../public/pichures/h_5.jpg'
import Hand6 from '../public/pichures/h_6.jpg'

const Container = styled.div`
  max-width: 1200px;
  margin: 0rem auto;  
  padding: 0 3% 0 3%;
`

const Gallery = styled.ul`
  overflow: hidden;
  padding-left: 0;
  list-style: none;
  margin-top: 0;
    @media ${props => (props.theme.mediaQ.laptop)} {
      display: grid;
      grid-gap: 1.25rem;
      grid-template-columns: repeat(12,1fr);
      /* grid-template-rows: repeat(12,auto); */
      align-items: start;
      overflow: hidden;
      padding-left: 0;
      list-style: none;
      margin-top: 0rem;
    }
`

const GalleryImg = styled.div`
 
`

const GalleryItem0 = styled.li`
  grid-column: 1/span 12;
  position: relative;

  @media ${props => (props.theme.mediaQ.laptop)} {
    grid-column: 2/span 10;
  }
  /* border: 1px solid green; */
`

const GalleryItem1 = styled.li`
  grid-column: 1/span 12;
  position: relative;

  @media ${props => (props.theme.mediaQ.laptop)} {
    grid-column: 2/span 6;
  }
  /* border: 1px solid green; */
`

const GalleryItem2 = styled.li`
  grid-column: 1/span 12;
  position: relative;
  top: 0;
  @media ${props => (props.theme.mediaQ.laptop)} {
    grid-column: 8/span 4;
    grid-row: 3/span 2;
    top: -25%;
  }
  /* border: 1px solid blue; */
`

const GalleryItem3 = styled.li`
  grid-column: 1/span 12;
  position: relative;
 
  @media ${props => (props.theme.mediaQ.laptop)} {
    grid-column: 5/span 3;
  }
  /* border: 1px solid silver; */
`

const GalleryItem4 = styled.li`
  grid-column: 1/span 12;
  position: relative;

  @media ${props => (props.theme.mediaQ.laptop)} {
    grid-column: 2/span 5;
  }
  /* border: 1px solid lime; */
`

const GalleryItem5 = styled.li`
  grid-column: 1/span 12;
  position: relative;
  @media ${props => (props.theme.mediaQ.laptop)} {
    grid-column: 7/span 4;
    grid-row: 4/span 1;
  }
  /* border: 1px solid grey; */
`

const GalleryItem6 = styled.li `
  grid-column: 1/span 12;
  position: relative;
  @media ${props => (props.theme.mediaQ.laptop)} {
    grid-column: 6/span 6;

  }
  /* border: 1px solid red; */
`
const GalleryItem7 = styled.li `
  grid-column: 1/span 12;
  position: relative;
  @media ${props => (props.theme.mediaQ.laptop)} {
    grid-column: 3/span 3;
    grid-row: 5/span 1;
  }
  /* border: 1px solid purple; */
  /* align-self: flex-end; */

`
const GalleryItem8 = styled.li `
  grid-column: 1/span 12;
  position: relative;
    @media ${props => (props.theme.mediaQ.laptop)} {
      grid-column: 6/span 6;
    }
  /* border: 1px solid aqua; */
`
const GalleryItem9 = styled.li `
  grid-column: 1/span 12;
  position: relative;
  top: 0;
  @media ${props => (props.theme.mediaQ.laptop)} {
    grid-column: 2/span 4;
    grid-row: 6/span 1;
    top: -25%;
  }
  /* border: 1px solid cyan; */
`
const ProjectName = styled.p`
  z-index:1;
  position: absolute;
  top: -2.2rem;
  left: 30px;
  font-size: 3rem;
  @media ${props => (props.theme.mediaQ.laptop)} {
  position: absolute;
  top: -2.2rem;
  left: 30px;
  font-size: 3rem;
  }
`


const ImageGallery = () => {

  return(
    <Container>
      <Gallery>
        <GalleryItem0 className="galleryItem0" >
          <Image src={Hand1} alt="hej" layout="intrinsic" objectFit='contain'/>
          <ProjectName>PROJEKT</ProjectName>
        </GalleryItem0>
        
        <GalleryItem1 className="galleryItem1" >
          <Image src={Hand1} alt="hej" layout="intrinsic" objectFit='contain'/>
          <ProjectName>PROJEKT</ProjectName>
        </GalleryItem1>

        <GalleryItem2 className="galleryItem2">
          <Image src={Hand2} alt="hej" />
          <ProjectName>NAMN</ProjectName>
        </GalleryItem2>

        <GalleryItem3 className="galleryItem3">
          <Image src={Hand3} alt="hej" />
          <ProjectName>NAGLAR</ProjectName>
        </GalleryItem3>

        <GalleryItem4 className="galleryItem4">
          <Image src={Hand4} alt="hej" />
          <ProjectName>BILDNAMN</ProjectName>
        </GalleryItem4>

        <GalleryItem5 className="galleryItem5">
          <Image src={Hand5} alt="hej" />
          <ProjectName>BEHANDLING</ProjectName>
        </GalleryItem5>

        <GalleryItem6 className="galleryItem6">
          <Image src={Hand6} alt="hej" />
          <ProjectName>FÄRGER</ProjectName>
        </GalleryItem6>

        <GalleryItem7 className="galleryItem7">
          <Image src={Hand2} alt="hej" />
          <ProjectName>NAGLACK</ProjectName>
        </GalleryItem7>

        <GalleryItem8 className="galleryItem8">
          <Image src={Hand3} alt="hej" />
          <ProjectName>MANIKYR</ProjectName>
        </GalleryItem8>

        <GalleryItem9 className="galleryItem9">
          <Image src={Hand4} alt="hej" />
          <ProjectName>LIME</ProjectName>
        </GalleryItem9>
      </Gallery>
    </Container>
  )
}

export default ImageGallery;