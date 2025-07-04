import React from "react";
import { MapContainer, TileLayer,Marker,Popup} from 'react-leaflet'

export const Location:React.FC<{location:[number,number]}>=(props)=>{

return(
    <div className="h-[350px] w-full">
            <MapContainer className="h-full" center={props.location} zoom={13} scrollWheelZoom={false}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={props.location}>
      <Popup>
        FOOD ORDER BRANCH
      </Popup>
    </Marker>
  </MapContainer>
    </div>
)
}