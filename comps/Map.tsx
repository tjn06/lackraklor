import styled from 'styled-components';
import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import L from 'leaflet';

const Container = styled.div<{padding: string}>`
  padding: ${props => props.padding ? props.padding : '0px'};
  /* padding: 0 3% 0 3%; */
`

const StyledMap = styled(MapContainer)<{width: string, height: string, border: string}>`
  z-index: 0;
  border: 1px solid #888888;
  width: ${props => props.width ?  props.width : '100%'};  
  height:${props => props.height ?  props.height : '500px'};
  border: ${props => props.border ?  props.border :  '0px solid rgb(0, 0, 0)'}; 

  .leaflet-control-zoom-in{
    color: white;
    background-color:#b9b9b9;
    :hover{
      color: #b9b9b9;
      background-color: white;
    }
  }

  .leaflet-control-zoom-out{
    color: white;
    background-color: #b9b9b9;
    :hover{
      color:#b9b9b9;
      background-color: white;
    }
  }
`
const PopUP = styled(Popup)`
  .leaflet-popup-content-wrapper, .leaflet-popup-tip{
    background-color: #e9e9e9;
    /* border: 1px solid #777777; */
  }
`
const Info = styled.div`
  color: black;
  font-family: futura-pt;
  font-weight: 600;
`


interface MapProps {
  width: string;
  height: string;
  border: string;
  padding: string;
}

export default function Map({width, height, border, padding}: MapProps) {
  //const teatIcon = new L.icon
  const teatIcon = L.icon({
    iconUrl: '/logo_marker.svg',
    iconRetinaUrl: '/logo_marker.svg',
    iconAnchor: [20, 40],
    popupAnchor: [0, -35],
    iconSize: [80, 80]
  })

  return (
    <Container padding={padding}>
      <StyledMap 
        center={[57.690301, 11.9084715]} 
        zoom={15} 
        scrollWheelZoom={false}
        width={width} 
        height={height} 
        border={border} 
      >
      <TileLayer
        url="	https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[57.690320, 11.90848]} icon={teatIcon} >
      <PopUP >
        <Info>
          <h1>Läckra Klor</h1>
          <span>Tele: <a href="tel:0707-123456">0707-123456</a></span><br />
          <span>Mail: <a href="cool@gmail.se">lackra-klor@hotmail.com</a></span><br />
          <span>Adress: Klogatan 5</span>
        </Info>
        </PopUP>
        </Marker>
      </StyledMap>
    </Container>
  )
}