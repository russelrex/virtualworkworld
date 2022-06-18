import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-agm',
  template: `
    <agm-map
      [latitude]="lat"
      [longitude]="lng"
      [zoom]="4"
      (mapClick)="addMarker($event.coords.lat, $event.coords.lng)"
    >
      <agm-marker
        *ngFor="let marker of markers"
        [latitude]="marker.lat"
        [longitude]="marker.lng"
        [opacity]="marker.alpha"
        [markerDraggable]="true"
      >
      </agm-marker>
    </agm-map>
  `,
  styles: [
    'agm-map { height: 500px; }'
  ]
})
export class MyAgmComponent implements OnInit {
  lat = 50.000000;
  lng = -85.000000;

  selectedMarker = null;

  markers = [
    // These are all just random coordinates from https://www.random.org/geographic-coordinates/
    { lat: 53.000000, lng: -60.000000, alpha: 1 },
    { lat: 55.000000, lng: -106.000000, alpha: 1 },
    { lat: 46.250000, lng: -63.000000, alpha: 1 },
    { lat: 45.000000, lng: -63.000000, alpha: 1 },
    { lat: 55.000000, lng: -115.000000, alpha: 1 },
    { lat: 53.726669, lng: -127.647621, alpha: 1 }
  ];

  addMarker(lat: number, lng: number) {
    this.markers.push({ lat, lng, alpha: 0.4 });
  }

  max(coordType: 'lat' | 'lng'): number {
    return Math.max(...this.markers.map(marker => marker[coordType]));
  }

  min(coordType: 'lat' | 'lng'): number {
    return Math.min(...this.markers.map(marker => marker[coordType]));
  }

  constructor() { }

  ngOnInit(): void {
  }

}
