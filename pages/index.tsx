import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import styled from 'styled-components'



import { Link } from "react-scroll";
import ScrollContainer from "react-indiana-drag-scroll";


import ScrollMenuHome from '../comps/ScrollMenuHome'
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
import Map from '../comps/Map'
import DownIcon from '../comps/DownIcon'

import dynamic from "next/dynamic";
import { useMemo } from 'react'



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
  
  const Map = useMemo(() => dynamic(
    () => import("../comps/Map"),
    { 
      loading: () => <p>A map is loading</p>,
      ssr: false
    }
  ), [])
  // const Map = dynamic(() => import("../comps/Map"), {
  //   ssr: false
  // });

  return (
    <div>
      <Head>
        <title>LÄCKRA KLOR</title>
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
        <ScrollMenuHome/>

        {/* <AltSection topBoarder={true} bottomBoarder={false}/> */}
        <TwoGrid arrayItemStart={0} arrayItemStop={2}/>

        <TwoGridImages/>

        <TwoGrid arrayItemStart={2} arrayItemStop={4}/>

        <DragableCarousel/>
        
        <BookingBanner topBoarder={true} bottomBoarder={false}/>
        
        <Map width={"100%"} height={"500px"} border={"0px"} padding={"0px"}/>

      </StyledMain>

    </div>
  )
}

export default Home
