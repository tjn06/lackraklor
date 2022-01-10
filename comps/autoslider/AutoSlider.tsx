import styled from 'styled-components'
import { useState, useEffect, useRef } from 'react'

const SlideShow = styled.div`
  margin: 0 auto;
  overflow: hidden;
  width: 100%;
  /* background-color: ${props => (props.theme.colors.main)}; */
  padding: 2.5rem 0 6rem 0;
  /* border-top: 1px solid ${props => props.theme.colors.secondaryMediumGrey};
  border-bottom: 1px solid ${props => props.theme.colors.secondaryMediumGrey}; */
  /* margin: 0 2% 0 2%; */
`
const SlideShowSlider = styled.div<{ sliderIndex: number}>`
  white-space: nowrap;
  transform: translate3d(${props => -props.sliderIndex * 100}%, 0, 0);
  transition: ease 2000ms;
`
const Slide = styled.div`
  display: inline-block;
  /* height: 200px; */
  width: 100%;
`
const InlineSlideContent = styled.div`
  z-index: 1;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: center;
  text-align: center;
  /* align-items: center; */
  /* font-size: 2rem;
  font-family: Qwigley;
  letter-spacing: 2px;
  white-space: break-spaces;
  text-align: center;

    @media ${props => props.theme.mediaQ.tablet} {
      font-size: 2.5rem;
    }
    @media ${props => props.theme.mediaQ.tablet} {
      font-size: 3rem;
    }
    @media ${props => props.theme.mediaQ.laptop} {
      font-size: 4rem;
    }
    @media ${props => props.theme.mediaQ.desktop} {
      font-size: 5rem;
    } */
`

const SlideShowDots = styled.div`
  text-align: center;
  margin-top: 2rem;
`
const SlideShowDot = styled.div<{mapIndex:number, index: number}>`
  display: inline-block;
  height: 12px;
  width: 12px;
  border-radius: 50%;
  cursor: pointer;
  margin: 0px 11px 0px;
  background-color: white;
  &.active {
    background-color: ${props => props.theme.colors.secondary};
  } 
`
const Wrapper = styled.div`
  position: relative;
`

const LeftGradient = styled.div`
  height: 100%;
  width: 50px;
  position: absolute;
  z-index: 2;
  background-image: rgba(255,0,0,0);
  @media ${props => (props.theme.mediaQ.tablet)} {
    background-image: linear-gradient(to right, ${props => props.theme.colors.primaryDarkGrey} , rgba(255,0,0,0));
  }
`
const RightGradient = styled.div`
  height: 100%;
  width: 50px;
  position: absolute;
  z-index: 2;
  right: 0;
  background-image: rgba(255,0,0,0);
  @media ${props => (props.theme.mediaQ.tablet)} {
    background-image: linear-gradient(to left, ${props => props.theme.colors.primaryDarkGrey} , rgba(255,0,0,0));
  }
`
const Quote = styled.p`
  margin: 0;
  font-size: 2rem;
  font-family: Qwigley;
  letter-spacing: 2px;
  white-space: break-spaces;
  
    @media ${props => props.theme.mediaQ.tablet} {
      /* font-size: 2.5rem;*/
    } 
    @media ${props => props.theme.mediaQ.tablet} {
      font-size: 2.5rem;
    }
    @media ${props => props.theme.mediaQ.laptop} {
      font-size: 3rem;
    }
    @media ${props => props.theme.mediaQ.desktop} {
      font-size: 3.3rem;
    }
`
const QuoteName = styled.p`
  margin: 0;
  font-weight: 300;
  
    @media ${props => props.theme.mediaQ.tablet} {
      font-size: 1rem;
    }
    @media ${props => props.theme.mediaQ.tablet} {
      font-size: 1rem;
    }
    @media ${props => props.theme.mediaQ.laptop} {
      font-size: 1.5rem;
    }
    @media ${props => props.theme.mediaQ.desktop} {
      font-size: 1.5rem;
    }
`

const quotes = [
  {
    "quote": "Otroligt proffsiggt bemötenade, bra priser, nice, nice!",
    "name": "Linda Rudström"
  }, 
  {
    "quote": "Otroligt proffsiggt bemötenade, bra priser, nice, nice!",
    "name": "Linda Rudström"
  }, 
  {
    "quote": "Otroligt proffsiggt bemötenade, bra priser, nice, nice!",
    "name": "Linda Rudström"
  }
];
const delay = 4000;


const AutoSlider = () => {
  const [index, setIndex] = useState(0)
  const timeoutRef:{current: NodeJS.Timeout | null}  = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === quotes.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <SlideShow>

      <Wrapper>
        <LeftGradient />
        <RightGradient/>
      <SlideShowSlider sliderIndex={index}>
        {quotes.map((quotes, index) => (
          <Slide key={index}>
            <InlineSlideContent>
              <Quote><q> {quotes.quote} </q></Quote>
              <QuoteName>- {quotes.name}</QuoteName>
            </InlineSlideContent>
            </Slide>
        ))}
      </SlideShowSlider>
      </Wrapper>

      <SlideShowDots>
        {quotes.map((_, i) => (
          <SlideShowDot 
          key={i} index={index} mapIndex={i} 
          className={`${index === i ? " active" : ""}`}
          onClick={() => {
            setIndex(i);
          }}
          />
        ))}
      </SlideShowDots>


    </SlideShow>
  )

}


export default AutoSlider;