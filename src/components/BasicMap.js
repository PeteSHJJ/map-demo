import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'


import { locations } from "./data";

import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon;


export default function BasicMap() {
  

console.log(locations)
  return (

    <section id="basicMap">
        <div className="container mx-auto flex px-10 py-1 md:flex-row flex-col items-center">
            
         <MapContainer center={[13.751, 100.492]} zoom={13}  >
  
         <TileLayer
             attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
         />
        

        {locations.map((location) => (
            <Marker position={[location.latitude,location.longitude]}>
                <Popup>
                    Province : {location.province} <br/>
                    District : {location.district} <br/>
                    Subdistrict : {location.subdistrict} <br/> 
                    Zipcode : {location.zipcode} <br/>
                    latitude : {location.latitude} <br/>
                    longitude : {location.longitude} <br/>
                </Popup>
            </Marker>
        ))}

        </MapContainer>

        </div> 

    </section>
   
  
  );
}