import React from "react";
import { Link } from "react-router-dom";
import { FiPlus } from "react-icons/fi";
import { Map, TileLayer } from "react-leaflet";

import "leaflet/dist/leaflet.css";

import mapMarkerImg from "../images/map-market.svg";

import "../styles/pages/orphanage-map.css";

function OrphangesMap() {
  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={mapMarkerImg} alt="Happy" />

          <h2>Escolha um orfanao no mapa</h2>
          <p>Muitas crianças estão esperando sua vizita :</p>

          <footer>
            <strong>São Paulo</strong>
            <span>Praia Grande</span>
          </footer>
        </header>
      </aside>

      <Map
        center={[-24.017215598700158, -46.48308588466547]}
        zoom={17}
        style={{ width: "100%", height: "100%" }}
      >
        {/* Aqui estão sendo requisitados as APIs de mapas */}
        {/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" /> */}
        {/* Aqui pegamos através do token a API Mapbox */}
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/mapbox/satellite-v9/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
        />
      </Map>
      <Link to="#" className="create-orphanage">
        <FiPlus size={32} color="#fff" />
      </Link>
    </div>
  );
}

export default OrphangesMap;
