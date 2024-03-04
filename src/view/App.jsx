import { useState } from "react";
import TopBar from "./TopBar";
import GoogleMap from "./GoogleMap";

// utility function
const log = (...args) => console.log.apply(null, ["App -->", ...args]);

export default function App() {
  const input = useRef(null);

  const [latlng, setLatlng] = useState({
    lat: -34.397,
    lng: 150.644
  });
  const [zoom, setZoom] = useState(8);

  /* //reposition = (event)=> {
  //event.target.dataset.city */
  function reposition(city) {
    switch (city) {
      case "tel aviv":
        setLatlng({ lat: 32.0042938, lng: 34.7615399 });
        break;
      case "london":
        setLatlng({ lat: 51.528308, lng: -0.3817828 });
        break;
      case "paris":
        setLatlng({ lat: 48.8587741, lng: 2.2069754 });
        break;
      default:
        alert("Location not supported");
    }
  }

    return (
      <div className="app">
        <TopBar>Google Maps Example in React</TopBar>
        <div className="hbox mb20">
        <button data-city="london" onClick={() => reposition("tel aviv")}>
          Tel Aviv
        </button>
        <button data-city="paris" onClick={() => reposition("paris")}>
          Paris
        </button>
        <button onClick={() => reposition("london")}>
          London
        </button>
        <input
          ref={input}
          type="number"
          min="8"
          max="16"
          placeholder="8"
          onChange={() => setZoom(Number(input.current.value))}
        />
      </div>
      <GoogleMap
          lat={latlng.lat}
          lng={latlng.lng}
          zoom={zoom}
        />
      {/* <GoogleMap {...{ ...latlng, zoom }} /> */}
      </div>
    );
  
}
