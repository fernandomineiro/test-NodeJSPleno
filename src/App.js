import api from './services/api'
import React, { useState, useEffect, useRef } from "react";




const App = () => {
  const googleMapRef = useRef(null);
  let googleMap = null;

const [markerList, setMaps] = useState([]);
  useEffect(() => {
    getMaps();
  }, []);

  const getMaps = () => {
    api.get()
      .then(response => {
        setMaps(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  useEffect(() => {
    googleMap = initGoogleMap();
    let bounds = new window.google.maps.LatLngBounds();
    markerList.map(x => {
      const marker = createMarker(x);
      bounds.extend(marker.position);
    });
    googleMap.fitBounds(bounds);
  }, []);

  const initGoogleMap = () => {
    return new window.google.maps.Map(googleMapRef.current, {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 8
    });
  }

  const createMarker = (markerObj) => {
    const marker = new window.google.maps.Marker({
      position: { lat: markerObj.latitude, lng: markerObj.longitude },
      map: googleMap,
      title: markerObj.name
    });

    const infowindow = new window.google.maps.InfoWindow({ content: markerObj.place });
    marker.addListener("click", () => infowindow.open(googleMap, marker));

  }

  return (
    <div className="App"  ref={googleMapRef}
    style={{ width: 600, height: 500 }}>
     


    </div>
  );
  
}
export default App;


