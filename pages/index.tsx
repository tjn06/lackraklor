import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import styled from 'styled-components'
import { Link } from "react-scroll";

import PageHeaderText from '../comps/PageHeaderText'
import VerticalContainers from '../comps/VerticalContainers'
import TwoGrid from '../comps/grid/TwoGrid'
import TwoGridImages from '../comps/grid/TwoGridImages'
import AutoSlider from '../comps/autoslider/AutoSlider'
import ContactPresentation from '../comps/ContactPresentation'
import DragableCarousel from '../comps/DragableCarousel'
import AltSection from '../comps/AltSection'
import ViewPortTopContent from '../comps/ViewPortTopContent'
import BookingBanner from '../comps/BookingBanner'
import DownIcon from '../comps/DownIcon'

const StyledMain = styled.main`
  overflow: hidden;
`

const StyledMaxWidth = styled.section`
  width:96%;
  max-width:1024px;
  margin:0 auto;
  margin-bottom: 100px;
  @media ${props => (props.theme.mediaQ.desktop)} {
    max-width:1280px;
  }
`

const Home: NextPage = () => {

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="LÄCKRAKLOR" content="Läckra klor, naglar" />
        <link rel="" href="" />
      </Head>

      <StyledMain>
      
        <ViewPortTopContent>
          <PageHeaderText/>
        </ViewPortTopContent>

        <StyledMaxWidth id="page-1">
          <VerticalContainers/>
        </StyledMaxWidth>

        <AutoSlider />
        <AltSection topBoarder={true} bottomBoarder={false}/>
        <TwoGrid/>
        <TwoGridImages/>
        <AltSection topBoarder={true} bottomBoarder={true}/>
        <DragableCarousel/>
        <BookingBanner topBoarder={true} bottomBoarder={true}/>
        
      </StyledMain>

    </div>
  )
}

export default Home
