import { useState, useMemo, useCallback, useRef } from "react";
import {
  GoogleMap,
  Marker,
  Polygon,
  DrawingManager
} from "@react-google-maps/api";
import Places from "./places";

type LatLngLiteral = google.maps.LatLngLiteral;
type MapOptions = google.maps.MapOptions;

export default function PolylinesMap({data}) {
  const [office, setOffice] = useState<LatLngLiteral>();
  const [polygonPaths, setPolygonPaths] = useState<LatLngLiteral[]>([
    { lat: 52, lng: 4 },
    { lat: 53, lng: 4 },
    { lat: 52, lng: 3 },    
  ]);
  const [polyObj, setPolyObj] = useState()
  const mapRef = useRef<GoogleMap>();
  const center = useMemo<LatLngLiteral>(
    () => ({ lat: 52.377956, lng: 4.897070 }),
    []
  );

  const options = useMemo<MapOptions>(
    () => ({
      clickableIcons: false,
      zoomControl: true,
      
    }),
    []
  );

  Object.entries(data).map(x=>console.log(x))

  const onLoad = useCallback((map: GoogleMap | undefined) => (mapRef.current = map), []);

  const onLoad2 = (drawingManager: any) => {
    console.log('Drawing Manager', drawingManager)
  }
  
  const onPolygonComplete = (polygon: any) => {
    console.log(polygon)
  }

  return (
    <div className="container">
      <div className="controls">
        <h1>Sublocality of the campaign ?</h1>
        <h2>{data.campaign.name} </h2>
        <Places
          setOffice={(position) => {
            setOffice(position);
            mapRef.current?.panTo(position);
          }}
        />
        {!office && <p>Enter the area of the campaign.</p>}
        {data.campaign.area.map(({ pathid, lat, lng }) => (
                    <div key={pathid}>
                      <div>
                        <div>
                          <div>Path id:{pathid}</div>
                          <div>Latitude {lat}</div>
                          <div>Longitude {lng}</div>
                        </div>
                      </div>
                    </div>
                  ))}
      </div>
      <div className="map">
        <GoogleMap
          zoom={10}
          center={center}
          mapContainerClassName="map-container"
          options={options}
          onLoad={onLoad}
        >
        
        {data.campaign.area.map(campaign => (
          <Marker
            key={campaign.pathid}
            lat={campaign.lat}
            lng={campaign.lng}
          >
          </Marker>
        ))}
        
        <Polygon
          editable
          draggable
          path={polygonPaths}
          onDragEnd={(e) => console.log(path)}
          onLoad={(obj) => setPolyObj(obj)}
          />

          <DrawingManager
            onLoad={onLoad2}
            onPolygonComplete={onPolygonComplete}        
          />      
            {office && (
            <>
              <Marker
                position={office}
                icon="https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"
              />
              <Polygon paths={polygonPaths} options={firstPolygon} />
            </>
            )}
        </GoogleMap>
      </div>
    </div>
  );
}

const defaultOptions = {
  strokeOpacity: 0.5,
  strokeWeight: 2,
  clickable: false,
  draggable: false,
  editable: true,
  visible: true,
};

const firstPolygon = {
  ...defaultOptions,
  zIndex: 3,
  fillOpacity: 0.05,
  strokeColor: "#8BC34A",
  fillColor: "#8BC34A",
};
const secondPolygon = {
  ...defaultOptions,
  zIndex: 2,
  fillOpacity: 0.05,
  strokeColor: "#FBC02D",
  fillColor: "#FBC02D",
};
const thirdPolygon = {
  ...defaultOptions,
  zIndex: 1,
  fillOpacity: 0.05,
  strokeColor: "#FF5252",
  fillColor: "#FF5252",
};