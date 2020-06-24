import { Component, OnInit, AfterContentInit } from '@angular/core';
import * as L from 'leaflet';
import bingTileLayer from 'leaflet-bing-layer';
import { WebsocketService } from '../../../services/websocket.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterContentInit {
  private map;
  ventanaLocalizacion = true;
  latitud = -16.6478;
  longitud = -68.2922;
  constructor(public wsService: WebsocketService) {
  }
  ngOnInit() {
  }
  ngAfterContentInit(): void {
    this.initMap();
  }

  private initMap(): void {
    this.map = L.map('mapa', {
      center: [this.latitud, this.longitud],
      zoom: 18
    });
    const carto = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_only_labels/{z}/{x}/{y}{r}.png', {
      subdomains: 'abcd',
      maxZoom: 21,
    });
    const options = {
      bingMapsKey: 'AnSERau4L-wtJSyhhTX8E7WmVMOft_yhaeAvftc9Vjo-ijbhH59sJmDeHa_aMS8v',
      imagerySet: 'Aerial',
      maxZoom: 21
    };
    const bing = new bingTileLayer(options);
    L.marker([-16.6478, -68.2922]).addTo(this.map).bindPopup('Actual').openPopup();
    L.control.scale().addTo(this.map);
    bing.addTo(this.map);
    carto.addTo(this.map);
  }
  iniciar() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.latitud = position.coords.latitude;
        this.longitud = position.coords.longitude;
        this.map.panTo(new L.LatLng(this.latitud, this.longitud));
        L.marker([this.latitud, this.longitud]).addTo(this.map);
      });
      this.ventanaLocalizacion = false;
    }

  }
}
