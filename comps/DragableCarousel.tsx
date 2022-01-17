import { useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from 'next/image'
import styled from 'styled-components'

const CarouselDimensions = styled.div`
  width: 100%
  height: 100%;
  padding-right: 3%;
  padding-left: 3%;
`
const Line = styled.div`

  /* border-top: 1px solid ${props => props.theme.colors.secondaryMediumGrey}; */
`
const CardItem = styled.article<{itemIndex: number, imagesLength: number}>`
  /* padding-left: ${props => props.itemIndex > 0 ? "1rem" : "0rem"};
  padding-right: ${props => props.itemIndex === props.imagesLength-1 ? "0rem" : "1rem"}; */
  padding-top: 2rem;
  padding-bottom: 2rem;
  padding-right: 3%;
  padding-left: 3%;
`
const FigCaption = styled.figcaption`
  font-family: Qhytsdakx;
  font-size: 1.8rem;
    @media ${props => props.theme.mediaQ.tablet} {
        font-size: 4rem;
    }
`

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    paritialVisibilityGutter: 0
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    paritialVisibilityGutter: 0
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    paritialVisibilityGutter: 0
  }
};

const images = [
  "https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1550133730-695473e544be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1550167164-1b67c2be3973?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1550338861-b7cfeaf8ffd8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
];

// Because this is an inframe, so the SSR mode doesn't not do well here.
// It will work on real devices.
const DragableCarousel = () => {



  return (
    <CarouselDimensions className="examples">
      <Line/>
    <Carousel
      responsive={responsive}

    >
      {images.slice(0, 5).map((image, i) => {
        return (
          <CardItem key={i} itemIndex={i} imagesLength={images.length}>
          <Image
            draggable={false}
            width={222} 
            height={222} 
            alt={"Carousel-image " + i}
            src={image}
            layout="responsive"
          />
          <FigCaption>NAGELDESIGN</FigCaption>
          </CardItem>

        );
      })}
    </Carousel>
    </CarouselDimensions>
  );
};

export default DragableCarousel;
