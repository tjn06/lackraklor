import styled from 'styled-components'
import useWindowSize from '../comps/viewport/useWindowSize'

interface LayoutProps  { 
  children: React.ReactNode
}

const StyledFullViewport = styled.div<{viewportWidth : number , viewportHeight : number }>`
  /* background-color: green; */
  height: ${props => (props.viewportHeight > 700 && props.viewportHeight < 1200) && (props.viewportWidth > 1200 && props.viewportWidth <= 1920)
  ? "100vh" : "unset"
  };
  background-image: url("/backg/backg_hand.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  @media ${props => (props.theme.mediaQ.tablet)} {
    background-size: contain;
  }
`

const ViewPortTopContent = ({children}: LayoutProps) => {
  const {height, width } = useWindowSize();

  return (
    <StyledFullViewport viewportWidth={width} viewportHeight={height}>
      {children}
    </StyledFullViewport>
  )
}

export default ViewPortTopContent;